import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  ChartBar, 
  TrendUp, 
  Clock, 
  CheckCircle,
  CircleDashed,
  Warning,
  Pause,
  Activity,
  Calendar,
  Eye,
  PencilSimple,
} from '@phosphor-icons/react'
import type { OverallAnalytics, DashboardUsageStats, Dashboard } from '@/lib/types'
import { PRIORITY_CONFIG, STATUS_CONFIG, CATEGORY_CONFIG } from '@/lib/constants'
import { getActivityTrend, getMostActiveTime } from '@/lib/analytics'
import { formatDuration } from '@/lib/formatting'
import { useMemo } from 'react'

interface AnalyticsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  analytics: OverallAnalytics
  usageStats: Record<string, DashboardUsageStats>
  dashboards: Dashboard[]
  events: any[]
  onClearAnalytics: () => void
}

export function AnalyticsDialog({
  open,
  onOpenChange,
  analytics,
  usageStats,
  dashboards,
  events,
  onClearAnalytics,
}: AnalyticsDialogProps) {
  
  const activityTrend = useMemo(() => getActivityTrend(events, 7), [events])
  const mostActiveTime = useMemo(() => getMostActiveTime(events), [events])
  
  const topDashboards = useMemo(() => {
    return dashboards
      .map(d => ({
        dashboard: d,
        stats: usageStats[d.id] || {
          dashboardId: d.id,
          viewCount: 0,
          editCount: 0,
          timeSpentMs: 0,
          statusChanges: 0,
          priorityChanges: 0,
        }
      }))
      .sort((a, b) => b.stats.viewCount - a.stats.viewCount)
      .slice(0, 5)
  }, [dashboards, usageStats])

  const recentActivity = useMemo(() => {
    return events
      .slice()
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10)
  }, [events])

  const completionRate = analytics.totalDashboards > 0
    ? (analytics.completedDashboards / analytics.totalDashboards * 100).toFixed(1)
    : '0'

  const maxTrendValue = Math.max(...activityTrend, 1)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ChartBar className="h-5 w-5" />
            Analytics & Usage Tracking
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="usage">Usage Details</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <ScrollArea className="h-[60vh] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Dashboards</p>
                      <p className="text-3xl font-bold">{analytics.totalDashboards}</p>
                    </div>
                    <ChartBar className="h-8 w-8 text-primary" />
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
                      <p className="text-3xl font-bold">{completionRate}%</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Events</p>
                      <p className="text-3xl font-bold">{analytics.totalEvents}</p>
                    </div>
                    <Activity className="h-8 w-8 text-secondary" />
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Events (7d)</p>
                      <p className="text-3xl font-bold">{analytics.eventsLast7Days}</p>
                    </div>
                    <TrendUp className="h-8 w-8 text-accent" />
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Status Distribution
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">Completed</span>
                      </div>
                      <Badge variant="outline" className={STATUS_CONFIG['completed'].className}>
                        {analytics.completedDashboards}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4 text-primary" />
                        <span className="text-sm">In Progress</span>
                      </div>
                      <Badge variant="outline" className={STATUS_CONFIG['in-progress'].className}>
                        {analytics.inProgressDashboards}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Warning className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Not Started</span>
                      </div>
                      <Badge variant="outline" className={STATUS_CONFIG['not-started'].className}>
                        {analytics.notStartedDashboards}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Pause className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">On Hold</span>
                      </div>
                      <Badge variant="outline" className={STATUS_CONFIG['on-hold'].className}>
                        {analytics.onHoldDashboards}
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendUp className="h-4 w-4" />
                    7-Day Activity Trend
                  </h3>
                  <div className="flex items-end gap-2 h-32">
                    {activityTrend.map((count, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-1">
                        <div 
                          className="w-full bg-primary rounded-t transition-all"
                          style={{ 
                            height: `${(count / maxTrendValue) * 100}%`,
                            minHeight: count > 0 ? '4px' : '0'
                          }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(Date.now() - (6 - index) * 24 * 60 * 60 * 1000).getDay()]}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Most Active Time</span>
                      <span className="font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {mostActiveTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Most Used Category</span>
                      <span className="font-medium">
                        {analytics.mostUsedCategory ? CATEGORY_CONFIG[analytics.mostUsedCategory] : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Most Used Priority</span>
                      <Badge variant="outline" className={analytics.mostUsedPriority ? PRIORITY_CONFIG[analytics.mostUsedPriority].className : ''}>
                        {analytics.mostUsedPriority ? PRIORITY_CONFIG[analytics.mostUsedPriority].label : 'N/A'}
                      </Badge>
                    </div>
                    {analytics.averageCompletionTime && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg. Completion Time</span>
                        <span className="font-medium">
                          {formatDuration(analytics.averageCompletionTime)}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Category Breakdown</h3>
                  <div className="space-y-2">
                    {Object.entries(analytics.dashboardsByCategory)
                      .sort(([, a], [, b]) => b - a)
                      .slice(0, 5)
                      .map(([category, count]) => (
                        <div key={category} className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">{CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]}</span>
                              <span className="text-sm font-medium">{count}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${(count / analytics.totalDashboards) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="usage" className="space-y-4">
            <ScrollArea className="h-[60vh] pr-4">
              <h3 className="font-semibold mb-4">Top 5 Most Viewed Dashboards</h3>
              <div className="space-y-3">
                {topDashboards.map(({ dashboard, stats }, index) => (
                  <Card key={dashboard.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{dashboard.title}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                          <div>
                            <p className="text-muted-foreground flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              Views
                            </p>
                            <p className="font-medium">{stats.viewCount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground flex items-center gap-1">
                              <PencilSimple className="h-3 w-3" />
                              Edits
                            </p>
                            <p className="font-medium">{stats.editCount}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground flex items-center gap-1">
                              <Activity className="h-3 w-3" />
                              Status Changes
                            </p>
                            <p className="font-medium">{stats.statusChanges}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Last Viewed
                            </p>
                            <p className="font-medium">
                              {stats.lastViewed 
                                ? new Date(stats.lastViewed).toLocaleDateString()
                                : 'Never'
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">All Dashboard Statistics</h3>
                <div className="space-y-2">
                  {dashboards.map((dashboard) => {
                    const stats = usageStats[dashboard.id] || {
                      dashboardId: dashboard.id,
                      viewCount: 0,
                      editCount: 0,
                      timeSpentMs: 0,
                      statusChanges: 0,
                      priorityChanges: 0,
                    }
                    return (
                      <Card key={dashboard.id} className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{dashboard.title}</p>
                            <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                              <span>{stats.viewCount} views</span>
                              <span>{stats.editCount} edits</span>
                              <span>{stats.statusChanges} status changes</span>
                            </div>
                          </div>
                          <Badge variant="outline" className={STATUS_CONFIG[dashboard.status].className}>
                            {STATUS_CONFIG[dashboard.status].label}
                          </Badge>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-2">
                {recentActivity.length === 0 ? (
                  <Card className="p-8 text-center">
                    <Activity className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">No activity recorded yet</p>
                  </Card>
                ) : (
                  recentActivity.map((event) => {
                    const dashboard = event.dashboardId 
                      ? dashboards.find(d => d.id === event.dashboardId)
                      : null

                    const eventLabels: Record<string, { label: string; icon: React.ReactNode }> = {
                      'dashboard_created': { 
                        label: 'Created dashboard', 
                        icon: <CheckCircle className="h-4 w-4 text-accent" /> 
                      },
                      'dashboard_updated': { 
                        label: 'Updated dashboard', 
                        icon: <PencilSimple className="h-4 w-4 text-primary" /> 
                      },
                      'dashboard_deleted': { 
                        label: 'Deleted dashboard', 
                        icon: <Warning className="h-4 w-4 text-destructive" /> 
                      },
                      'dashboard_viewed': { 
                        label: 'Viewed dashboard', 
                        icon: <Eye className="h-4 w-4 text-muted-foreground" /> 
                      },
                      'status_changed': { 
                        label: 'Changed status', 
                        icon: <Activity className="h-4 w-4 text-secondary" /> 
                      },
                      'filter_applied': { 
                        label: 'Applied filter', 
                        icon: <Activity className="h-4 w-4 text-muted-foreground" /> 
                      },
                      'export_completed': { 
                        label: 'Exported data', 
                        icon: <TrendUp className="h-4 w-4 text-accent" /> 
                      },
                      'import_completed': { 
                        label: 'Imported data', 
                        icon: <TrendUp className="h-4 w-4 text-primary" /> 
                      },
                      'template_used': { 
                        label: 'Used template', 
                        icon: <ChartBar className="h-4 w-4 text-secondary" /> 
                      },
                    }

                    const eventInfo = eventLabels[event.type] || { 
                      label: event.type, 
                      icon: <Activity className="h-4 w-4" /> 
                    }

                    return (
                      <Card key={event.id} className="p-3">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">{eventInfo.icon}</div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">
                              {eventInfo.label}
                              {dashboard && (
                                <span className="text-muted-foreground"> • {dashboard.title}</span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(event.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </Card>
                    )
                  })
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={onClearAnalytics}
            className="text-destructive hover:text-destructive"
          >
            Clear All Analytics
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
