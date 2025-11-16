import { useState, useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MagnifyingGlass, Plus, Sparkle } from '@phosphor-icons/react'
import {
  TEMPLATE_CATEGORIES,
  DASHBOARD_TEMPLATES,
  getTemplatesByCategory,
  searchTemplates,
  type DashboardTemplate,
  type TemplateCategory,
} from '@/lib/dashboard-templates'
import type { Dashboard } from '@/lib/types'

interface TemplatesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddTemplate: (template: DashboardTemplate) => void
  existingDashboards: Dashboard[]
}

export function TemplatesDialog({
  open,
  onOpenChange,
  onAddTemplate,
  existingDashboards,
}: TemplatesDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('business-essentials')

  const availableSlots = 20 - existingDashboards.length

  const filteredTemplates = useMemo(() => {
    if (searchQuery) {
      return searchTemplates(searchQuery)
    }
    return getTemplatesByCategory(selectedCategory)
  }, [searchQuery, selectedCategory])

  const handleAddTemplate = (template: DashboardTemplate) => {
    if (availableSlots <= 0) return
    onAddTemplate(template)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'analytics':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'sales':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'marketing':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'operations':
        return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'finance':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'hr':
        return 'bg-pink-100 text-pink-700 border-pink-200'
      case 'product':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200'
      case 'customer':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 gap-0 flex flex-col">
        <div className="px-6 pt-6 pb-4 shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkle className="h-5 w-5" weight="fill" />
              Dashboard Templates
            </DialogTitle>
            <DialogDescription>
              Choose from {DASHBOARD_TEMPLATES.length} pre-built dashboard templates across {TEMPLATE_CATEGORIES.length} categories
              {availableSlots > 0 && (
                <span className="ml-2 text-primary font-medium">
                  ({availableSlots} {availableSlots === 1 ? 'slot' : 'slots'} available)
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="relative mt-4">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-6">
          {searchQuery ? (
            <div className="pb-4">
              <div className="space-y-3 pr-2">
                {filteredTemplates.length > 0 ? (
                  filteredTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1">
                            {template.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {template.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className={getPriorityColor(template.priority)}>
                              {template.priority}
                            </Badge>
                            <Badge variant="outline" className={getCategoryColor(template.category)}>
                              {template.category}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleAddTemplate(template)}
                          disabled={availableSlots <= 0}
                          className="shrink-0"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    No templates found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as TemplateCategory)} className="flex flex-col h-full">
              <TabsList className="w-full grid grid-cols-4 h-auto shrink-0">
                {TEMPLATE_CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex flex-col items-center gap-1 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <span className="text-lg">{cat.icon}</span>
                    <span className="hidden sm:inline">{cat.name}</span>
                    <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {TEMPLATE_CATEGORIES.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-4 pb-4">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                  <div className="space-y-3 pr-2">
                    {getTemplatesByCategory(cat.id).map((template, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">
                              {template.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {template.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className={getPriorityColor(template.priority)}>
                                {template.priority}
                              </Badge>
                              <Badge variant="outline" className={getCategoryColor(template.category)}>
                                {template.category}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleAddTemplate(template)}
                            disabled={availableSlots <= 0}
                            className="shrink-0"
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>

        {availableSlots <= 0 && (
          <div className="px-6 pb-6 shrink-0">
            <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm text-center">
              You've reached the maximum of 20 dashboards. Remove some dashboards to add more.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
