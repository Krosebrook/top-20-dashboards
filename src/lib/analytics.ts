import type { 
  AnalyticsEvent, 
  AnalyticsEventType, 
  DashboardUsageStats,
  OverallAnalytics,
  Dashboard,
  Category,
  Priority,
  Status
} from './types'

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function createAnalyticsEvent(
  type: AnalyticsEventType,
  dashboardId?: string,
  metadata?: Record<string, any>
): AnalyticsEvent {
  return {
    id: generateId(),
    type,
    timestamp: Date.now(),
    dashboardId,
    metadata,
  }
}

export function calculateDashboardStats(
  dashboardId: string,
  events: AnalyticsEvent[]
): DashboardUsageStats {
  const dashboardEvents = events.filter(e => e.dashboardId === dashboardId)
  
  const viewEvents = dashboardEvents.filter(e => e.type === 'dashboard_viewed')
  const editEvents = dashboardEvents.filter(e => e.type === 'dashboard_updated')
  const statusChanges = dashboardEvents.filter(e => e.type === 'status_changed')
  const priorityChanges = dashboardEvents.filter(e => e.type === 'priority_changed')

  const lastViewed = viewEvents.length > 0 
    ? Math.max(...viewEvents.map(e => e.timestamp))
    : undefined

  const lastEdited = editEvents.length > 0
    ? Math.max(...editEvents.map(e => e.timestamp))
    : undefined

  const timeSpentMs = dashboardEvents.reduce((total, event) => {
    return total + (event.metadata?.durationMs || 0)
  }, 0)

  return {
    dashboardId,
    viewCount: viewEvents.length,
    editCount: editEvents.length,
    lastViewed,
    lastEdited,
    timeSpentMs,
    statusChanges: statusChanges.length,
    priorityChanges: priorityChanges.length,
  }
}

export function calculateOverallAnalytics(
  dashboards: Dashboard[],
  events: AnalyticsEvent[]
): OverallAnalytics {
  const now = Date.now()
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000

  const eventsLast7Days = events.filter(e => e.timestamp >= sevenDaysAgo).length
  const eventsLast30Days = events.filter(e => e.timestamp >= thirtyDaysAgo).length

  const dashboardsByCategory = dashboards.reduce((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + 1
    return acc
  }, {} as Record<Category, number>)

  const dashboardsByPriority = dashboards.reduce((acc, d) => {
    acc[d.priority] = (acc[d.priority] || 0) + 1
    return acc
  }, {} as Record<Priority, number>)

  const dashboardsByStatus = dashboards.reduce((acc, d) => {
    acc[d.status] = (acc[d.status] || 0) + 1
    return acc
  }, {} as Record<Status, number>)

  const mostUsedCategory = Object.entries(dashboardsByCategory).sort(
    ([, a], [, b]) => b - a
  )[0]?.[0] as Category | undefined || null

  const mostUsedPriority = Object.entries(dashboardsByPriority).sort(
    ([, a], [, b]) => b - a
  )[0]?.[0] as Priority | undefined || null

  const completedDashboards = dashboards.filter(d => d.status === 'completed')
  const completionTimes = completedDashboards
    .map(d => {
      const createdEvent = events.find(e => 
        e.type === 'dashboard_created' && e.dashboardId === d.id
      )
      const completedEvent = events.find(e => 
        e.type === 'status_changed' && 
        e.dashboardId === d.id && 
        e.metadata?.newStatus === 'completed'
      )
      
      if (createdEvent && completedEvent) {
        return completedEvent.timestamp - createdEvent.timestamp
      }
      return null
    })
    .filter((time): time is number => time !== null)

  const averageCompletionTime = completionTimes.length > 0
    ? completionTimes.reduce((sum, time) => sum + time, 0) / completionTimes.length
    : undefined

  return {
    totalDashboards: dashboards.length,
    completedDashboards: dashboardsByStatus['completed'] || 0,
    inProgressDashboards: dashboardsByStatus['in-progress'] || 0,
    notStartedDashboards: dashboardsByStatus['not-started'] || 0,
    onHoldDashboards: dashboardsByStatus['on-hold'] || 0,
    totalEvents: events.length,
    averageCompletionTime,
    mostUsedCategory,
    mostUsedPriority,
    eventsLast7Days,
    eventsLast30Days,
    dashboardsByCategory,
    dashboardsByPriority,
    dashboardsByStatus,
  }
}

export function formatDuration(ms: number): string {
  if (ms < 60000) {
    return `${Math.round(ms / 1000)}s`
  } else if (ms < 3600000) {
    return `${Math.round(ms / 60000)}m`
  } else if (ms < 86400000) {
    return `${Math.round(ms / 3600000)}h`
  } else {
    return `${Math.round(ms / 86400000)}d`
  }
}

export function getActivityTrend(events: AnalyticsEvent[], days: number = 7): number[] {
  const now = Date.now()
  const dayMs = 24 * 60 * 60 * 1000
  const trend: number[] = []

  for (let i = days - 1; i >= 0; i--) {
    const dayStart = now - (i + 1) * dayMs
    const dayEnd = now - i * dayMs
    const count = events.filter(e => e.timestamp >= dayStart && e.timestamp < dayEnd).length
    trend.push(count)
  }

  return trend
}

export function getMostActiveTime(events: AnalyticsEvent[]): string {
  const hourCounts = events.reduce((acc, event) => {
    const hour = new Date(event.timestamp).getHours()
    acc[hour] = (acc[hour] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const mostActiveHour = Object.entries(hourCounts).sort(
    ([, a], [, b]) => b - a
  )[0]?.[0]

  if (!mostActiveHour) return 'N/A'

  const hour = parseInt(mostActiveHour)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:00 ${ampm}`
}
