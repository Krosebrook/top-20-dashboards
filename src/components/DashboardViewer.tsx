import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  X, 
  PencilSimple, 
  Tag, 
  CalendarBlank, 
  ChartBar,
  ListChecks,
  Notepad,
  ClockCounterClockwise,
  Target,
  ChartLineUp
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import type { Dashboard } from '@/lib/types'
import { PRIORITY_CONFIG, STATUS_CONFIG, CATEGORY_CONFIG } from '@/lib/constants'

interface DashboardViewerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dashboard: Dashboard | null
  onEdit: (dashboard: Dashboard) => void
}

export function DashboardViewer({ open, onOpenChange, dashboard, onEdit }: DashboardViewerProps) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!dashboard) return null

  const handleEdit = () => {
    onEdit(dashboard)
    onOpenChange(false)
  }

  const hasKPIs = dashboard.kpis && dashboard.kpis.length > 0
  const hasMetrics = dashboard.metrics && dashboard.metrics.length > 0
  const tabCount = hasKPIs || hasMetrics ? 6 : 4

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-6 pb-4 flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <DialogTitle className="text-2xl font-bold leading-tight pr-8">
                {dashboard.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={PRIORITY_CONFIG[dashboard.priority].className}
                >
                  {PRIORITY_CONFIG[dashboard.priority].label}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={STATUS_CONFIG[dashboard.status].className}
                >
                  {STATUS_CONFIG[dashboard.status].label}
                </Badge>
                <Badge variant="secondary">
                  {CATEGORY_CONFIG[dashboard.category]}
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="gap-2"
              >
                <PencilSimple className="h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Separator />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
          <div className="px-6 pt-4 flex-shrink-0">
            <TabsList className={`w-full grid grid-cols-${tabCount} h-auto`}>
              <TabsTrigger value="overview" className="gap-2 py-2.5">
                <ChartBar className="h-4 w-4" />
                Overview
              </TabsTrigger>
              {hasKPIs && (
                <TabsTrigger value="kpis" className="gap-2 py-2.5">
                  <Target className="h-4 w-4" />
                  KPIs
                </TabsTrigger>
              )}
              {hasMetrics && (
                <TabsTrigger value="metrics" className="gap-2 py-2.5">
                  <ChartLineUp className="h-4 w-4" />
                  Metrics
                </TabsTrigger>
              )}
              <TabsTrigger value="details" className="gap-2 py-2.5">
                <Notepad className="h-4 w-4" />
                Details
              </TabsTrigger>
              <TabsTrigger value="activity" className="gap-2 py-2.5">
                <ClockCounterClockwise className="h-4 w-4" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="notes" className="gap-2 py-2.5">
                <ListChecks className="h-4 w-4" />
                Notes
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1">
            <div className="px-6 py-6">
              <TabsContent value="overview" className="mt-0 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <Card className="p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Notepad className="h-5 w-5 text-primary" />
                      Description
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {dashboard.description}
                    </p>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <ChartBar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <p className="font-semibold">{STATUS_CONFIG[dashboard.status].label}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <CalendarBlank className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Created</p>
                          <p className="font-semibold">
                            {format(dashboard.createdAt, 'MMM d, yyyy')}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {dashboard.tags && dashboard.tags.length > 0 && (
                    <Card className="p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Tag className="h-5 w-5 text-primary" weight="bold" />
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {dashboard.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-sm px-3 py-1.5 flex items-center gap-2"
                          >
                            <Tag className="h-3.5 w-3.5" weight="bold" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  )}
                </motion.div>
              </TabsContent>

              {hasKPIs && (
                <TabsContent value="kpis" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" weight="bold" />
                        Key Performance Indicators
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Critical metrics that measure success and performance against targets
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {dashboard.kpis!.map((kpi, index) => (
                        <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-base mb-1">{kpi.name}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {kpi.description}
                                </p>
                              </div>
                              {kpi.category && (
                                <Badge variant="secondary" className="shrink-0">
                                  {kpi.category}
                                </Badge>
                              )}
                            </div>
                            {(kpi.target || kpi.formula) && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t">
                                {kpi.target && (
                                  <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                      Target
                                    </p>
                                    <p className="text-sm font-semibold text-primary">
                                      {kpi.target}
                                    </p>
                                  </div>
                                )}
                                {kpi.formula && (
                                  <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                      Formula
                                    </p>
                                    <p className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                      {kpi.formula}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              )}

              {hasMetrics && (
                <TabsContent value="metrics" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <ChartLineUp className="h-5 w-5 text-primary" weight="bold" />
                        Supporting Metrics
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Additional measurements that provide insight into performance and operations
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dashboard.metrics!.map((metric, index) => (
                        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold text-sm">{metric.name}</h4>
                              {metric.category && (
                                <Badge variant="outline" className="text-xs shrink-0">
                                  {metric.category}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {metric.description}
                            </p>
                            {(metric.target || metric.formula) && (
                              <div className="space-y-2 pt-2 border-t">
                                {metric.target && (
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">Target:</span>
                                    <span className="text-xs font-semibold text-primary">
                                      {metric.target}
                                    </span>
                                  </div>
                                )}
                                {metric.formula && (
                                  <div className="space-y-1">
                                    <p className="text-xs text-muted-foreground">Formula:</p>
                                    <p className="text-xs font-mono bg-muted px-2 py-1 rounded break-all">
                                      {metric.formula}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              )}

              <TabsContent value="details" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Title:</span>
                        <span className="text-sm">{dashboard.title}</span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Category:</span>
                        <span className="text-sm">{CATEGORY_CONFIG[dashboard.category]}</span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Priority:</span>
                        <Badge variant="outline" className={PRIORITY_CONFIG[dashboard.priority].className}>
                          {PRIORITY_CONFIG[dashboard.priority].label}
                        </Badge>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Status:</span>
                        <Badge variant="outline" className={STATUS_CONFIG[dashboard.status].className}>
                          {STATUS_CONFIG[dashboard.status].label}
                        </Badge>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Created:</span>
                        <span className="text-sm">
                          {format(dashboard.createdAt, 'MMMM d, yyyy \'at\' h:mm a')}
                        </span>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
                        <span className="text-sm font-medium text-muted-foreground">Dashboard ID:</span>
                        <span className="text-sm font-mono text-xs">{dashboard.id}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="activity" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <div className="text-center py-12">
                      <ClockCounterClockwise className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                      <p className="text-muted-foreground">Activity tracking coming soon</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        View dashboard history and changes here
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="notes" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <div className="text-center py-12">
                      <ListChecks className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                      <p className="text-muted-foreground">Notes feature coming soon</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        Add notes and tasks related to this dashboard
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
