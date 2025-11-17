import { useKV } from '@github/spark/hooks'
import { useEffect, useCallback, useMemo } from 'react'
import type { 
  AnalyticsEvent, 
  AnalyticsEventType,
  Dashboard,
  DashboardUsageStats,
  OverallAnalytics
} from '@/lib/types'
import { 
  createAnalyticsEvent, 
  calculateDashboardStats,
  calculateOverallAnalytics
} from '@/lib/analytics'

export function useAnalytics(dashboards: Dashboard[]) {
  const [events, setEvents] = useKV<AnalyticsEvent[]>('analytics-events', [])
  const [usageStats, setUsageStats] = useKV<Record<string, DashboardUsageStats>>('usage-stats', {})

  const trackEvent = useCallback((
    type: AnalyticsEventType,
    dashboardId?: string,
    metadata?: Record<string, any>
  ) => {
    const event = createAnalyticsEvent(type, dashboardId, metadata)
    setEvents((current) => [...(current || []), event])

    if (dashboardId) {
      const allEvents = [...(events || []), event]
      const stats = calculateDashboardStats(dashboardId, allEvents)
      setUsageStats((current) => ({
        ...(current || {}),
        [dashboardId]: stats,
      }))
    }
  }, [events, setEvents, setUsageStats])

  const overallAnalytics = useMemo(() => {
    return calculateOverallAnalytics(dashboards, events || [])
  }, [dashboards, events])

  const getDashboardStats = useCallback((dashboardId: string): DashboardUsageStats => {
    return usageStats?.[dashboardId] || {
      dashboardId,
      viewCount: 0,
      editCount: 0,
      timeSpentMs: 0,
      statusChanges: 0,
      priorityChanges: 0,
    }
  }, [usageStats])

  const clearAnalytics = useCallback(() => {
    setEvents([])
    setUsageStats({})
  }, [setEvents, setUsageStats])

  return {
    events: events || [],
    usageStats: usageStats || {},
    overallAnalytics,
    trackEvent,
    getDashboardStats,
    clearAnalytics,
  }
}
