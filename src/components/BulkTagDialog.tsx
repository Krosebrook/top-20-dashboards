import { useState, useMemo } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TagInput } from '@/components/TagInput'
import { Plus, Minus, Tag, CheckCircle } from '@phosphor-icons/react'
import type { Dashboard } from '@/lib/types'

interface BulkTagDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dashboards: Dashboard[]
  onApplyBulkTags: (dashboardIds: string[], tagsToAdd: string[], tagsToRemove: string[]) => void
}

export function BulkTagDialog({ open, onOpenChange, dashboards, onApplyBulkTags }: BulkTagDialogProps) {
  const [selectedDashboards, setSelectedDashboards] = useState<Set<string>>(new Set())
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([])
  const [tagsToRemove, setTagsToRemove] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    dashboards.forEach(d => d.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet).sort()
  }, [dashboards])

  const filteredDashboards = useMemo(() => {
    if (!searchQuery) return dashboards
    const query = searchQuery.toLowerCase()
    return dashboards.filter(d => 
      d.title.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query) ||
      d.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [dashboards, searchQuery])

  const selectedDashboardsData = useMemo(() => {
    return dashboards.filter(d => selectedDashboards.has(d.id))
  }, [dashboards, selectedDashboards])

  const commonTags = useMemo(() => {
    if (selectedDashboards.size === 0) return []
    const selected = dashboards.filter(d => selectedDashboards.has(d.id))
    if (selected.length === 0) return []
    
    const tagCounts = new Map<string, number>()
    selected.forEach(d => {
      d.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
      })
    })
    
    return Array.from(tagCounts.entries())
      .filter(([, count]) => count === selected.length)
      .map(([tag]) => tag)
  }, [dashboards, selectedDashboards])

  const handleToggleDashboard = (dashboardId: string) => {
    setSelectedDashboards(prev => {
      const next = new Set(prev)
      if (next.has(dashboardId)) {
        next.delete(dashboardId)
      } else {
        next.add(dashboardId)
      }
      return next
    })
  }

  const handleSelectAll = () => {
    if (selectedDashboards.size === filteredDashboards.length) {
      setSelectedDashboards(new Set())
    } else {
      setSelectedDashboards(new Set(filteredDashboards.map(d => d.id)))
    }
  }

  const handleAddTagForRemoval = (tag: string) => {
    if (!tagsToRemove.includes(tag)) {
      setTagsToRemove([...tagsToRemove, tag])
    }
  }

  const handleRemoveTagFromRemoval = (tag: string) => {
    setTagsToRemove(tagsToRemove.filter(t => t !== tag))
  }

  const handleApply = () => {
    if (selectedDashboards.size === 0) {
      return
    }

    onApplyBulkTags(
      Array.from(selectedDashboards),
      tagsToAdd,
      tagsToRemove
    )

    setSelectedDashboards(new Set())
    setTagsToAdd([])
    setTagsToRemove([])
    setSearchQuery('')
    onOpenChange(false)
  }

  const handleCancel = () => {
    setSelectedDashboards(new Set())
    setTagsToAdd([])
    setTagsToRemove([])
    setSearchQuery('')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Bulk Tag Operations
          </DialogTitle>
          <DialogDescription>
            Select dashboards and add or remove tags from multiple dashboards at once
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col gap-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="search-dashboards">Search Dashboards</Label>
              <Input
                id="search-dashboards"
                placeholder="Search by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-1.5"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {selectedDashboards.size} of {dashboards.length} dashboards selected
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSelectAll}
              >
                {selectedDashboards.size === filteredDashboards.length ? 'Deselect All' : 'Select All'}
              </Button>
            </div>

            <ScrollArea className="h-[200px] border rounded-lg">
              <div className="p-4 space-y-2">
                {filteredDashboards.map((dashboard) => (
                  <div
                    key={dashboard.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Checkbox
                      checked={selectedDashboards.has(dashboard.id)}
                      onCheckedChange={() => handleToggleDashboard(dashboard.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{dashboard.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {dashboard.description}
                      </div>
                      {dashboard.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {dashboard.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <Separator />

          {selectedDashboards.size > 0 && (
            <div className="space-y-4">
              {commonTags.length > 0 && (
                <div>
                  <Label className="text-sm text-muted-foreground">
                    Common tags across selected dashboards
                  </Label>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {commonTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="gap-1.5 cursor-pointer hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
                        onClick={() => handleAddTagForRemoval(tag)}
                      >
                        <CheckCircle className="w-3 h-3" weight="fill" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="tags-to-add">Add Tags</Label>
                <div className="mt-1.5">
                  <TagInput
                    tags={tagsToAdd}
                    onChange={setTagsToAdd}
                    placeholder="Type tag and press Enter..."
                    maxTags={20}
                  />
                </div>
                {allTags.length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs text-muted-foreground mb-1.5">Quick add from existing tags:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {allTags.filter(tag => !tagsToAdd.includes(tag)).slice(0, 10).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10 hover:border-primary"
                          onClick={() => setTagsToAdd([...tagsToAdd, tag])}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label>Remove Tags</Label>
                <div className="text-xs text-muted-foreground mt-1.5 mb-2">
                  Click on common tags above or type to remove tags
                </div>
                <TagInput
                  tags={tagsToRemove}
                  onChange={setTagsToRemove}
                  placeholder="Type tag to remove and press Enter..."
                  maxTags={20}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {selectedDashboards.size > 0 && (
              <>
                {tagsToAdd.length > 0 && `Adding ${tagsToAdd.length} tag${tagsToAdd.length === 1 ? '' : 's'}`}
                {tagsToAdd.length > 0 && tagsToRemove.length > 0 && ', '}
                {tagsToRemove.length > 0 && `Removing ${tagsToRemove.length} tag${tagsToRemove.length === 1 ? '' : 's'}`}
              </>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              onClick={handleApply}
              disabled={selectedDashboards.size === 0 || (tagsToAdd.length === 0 && tagsToRemove.length === 0)}
            >
              Apply to {selectedDashboards.size} Dashboard{selectedDashboards.size === 1 ? '' : 's'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
