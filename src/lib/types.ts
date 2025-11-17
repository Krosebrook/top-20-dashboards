export type Priority = 'critical' | 'high' | 'medium' | 'low'
export type Status = 'not-started' | 'in-progress' | 'completed' | 'on-hold'
export type Category = 'analytics' | 'sales' | 'marketing' | 'operations' | 'finance' | 'hr' | 'product' | 'customer' | 'other'

export interface Dashboard {
  id: string
  title: string
  description: string
  category: Category
  priority: Priority
  status: Status
  tags: string[]
  createdAt: number
}

export type AnalyticsEventType = 
  | 'dashboard_created'
  | 'dashboard_updated'
  | 'dashboard_deleted'
  | 'dashboard_viewed'
  | 'status_changed'
  | 'priority_changed'
  | 'filter_applied'
  | 'search_performed'
  | 'export_completed'
  | 'import_completed'
  | 'template_used'
  | 'suggestion_accepted'
  | 'bulk_tags_applied'

export interface AnalyticsEvent {
  id: string
  type: AnalyticsEventType
  timestamp: number
  dashboardId?: string
  metadata?: Record<string, any>
}

export interface DashboardUsageStats {
  dashboardId: string
  viewCount: number
  editCount: number
  lastViewed?: number
  lastEdited?: number
  timeSpentMs: number
  statusChanges: number
  priorityChanges: number
}

export interface OverallAnalytics {
  totalDashboards: number
  completedDashboards: number
  inProgressDashboards: number
  notStartedDashboards: number
  onHoldDashboards: number
  totalEvents: number
  averageCompletionTime?: number
  mostUsedCategory: Category | null
  mostUsedPriority: Priority | null
  eventsLast7Days: number
  eventsLast30Days: number
  dashboardsByCategory: Record<Category, number>
  dashboardsByPriority: Record<Priority, number>
  dashboardsByStatus: Record<Status, number>
}
