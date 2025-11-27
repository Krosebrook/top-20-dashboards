import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsT
import { ScrollArea } from '@/components/ui/scroll-area'
  X, 
  Tag, 
import { 
  X, 
  PencilSimple, 
  Tag, 
  CalendarBlank, 
  ChartBar,
  ListChecks,
  Notepad,
import { motion } from 
interface DashboardViewerProps
  open: boolean
  onEdit: (dashboard: Dashboard) => void

  const [activeTab, setActiveTab] = us

  const handleEdit = () => {
    onEdit(dashboard)

    <Dialog open={open} onOpenChange={o
        <DialogHeader className="p-6 pb-
 

              <div className="flex flex-wrap items-center gap-2">
                  {PRIORITY_CONFIG[dashboard.priority].l

                </Badge>

              </div>
            <div classN
                varia
   

          
              <Button
                size="icon"
              >
              </Button>
          </div>


          <div className="px
              <TabsTrigger value="overview" className="gap-2 py-2
                Overview
              <TabsTrigger value="details" className="gap-2 p
                Details
              <TabsTrigger value="activity" className="gap-2 py-2.5">
                Activity
              <TabsTrigg
                Notes
            </TabsList>

            <div cla
                <m
                  animate={{ opacity: 1,
                  cla
                  <Card className
                      <No
                    </h3>
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <div className="px-6 pt-4">
            <TabsList className="w-full grid grid-cols-4 h-auto">
              <TabsTrigger value="overview" className="gap-2 py-2.5">
                <ChartBar className="h-4 w-4" />
                Overview
              </TabsTrigger>
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

          <ScrollArea className="h-[calc(90vh-220px)]">
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
