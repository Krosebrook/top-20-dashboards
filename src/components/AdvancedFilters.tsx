import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { SlidersHorizontal, ArrowUp, ArrowDown, CalendarBlank } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export type SortField = 'title' | 'createdAt' | 'priority' | 'status' | 'category'
export type SortDirection = 'asc' | 'desc'

interface AdvancedFiltersProps {
  sortField: SortField
  sortDirection: SortDirection
  onSortChange: (field: SortField, direction: SortDirection) => void
  showOnlyWithTags: boolean
  onShowOnlyWithTagsChange: (value: boolean) => void
  dateRange?: { start: Date | null; end: Date | null }
  onDateRangeChange?: (range: { start: Date | null; end: Date | null }) => void
}

export function AdvancedFilters({
  sortField,
  sortDirection,
  onSortChange,
  showOnlyWithTags,
  onShowOnlyWithTagsChange,
}: AdvancedFiltersProps) {
  const sortOptions: { field: SortField; label: string }[] = [
    { field: 'title', label: 'Title' },
    { field: 'createdAt', label: 'Date Created' },
    { field: 'priority', label: 'Priority' },
    { field: 'status', label: 'Status' },
    { field: 'category', label: 'Category' },
  ]

  const isActive = showOnlyWithTags || sortField !== 'createdAt' || sortDirection !== 'desc'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "h-9 gap-2",
            isActive && "border-primary"
          )}
        >
          <SlidersHorizontal weight="bold" className="h-4 w-4" />
          Advanced
          {isActive && (
            <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs h-5">
              On
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-3">Sort By</h4>
            <div className="space-y-2">
              {sortOptions.map((option) => {
                const isSelected = sortField === option.field
                return (
                  <Button
                    key={option.field}
                    variant={isSelected ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => {
                      if (isSelected) {
                        onSortChange(option.field, sortDirection === 'asc' ? 'desc' : 'asc')
                      } else {
                        onSortChange(option.field, 'asc')
                      }
                    }}
                    className="w-full justify-between h-9"
                  >
                    <span className="text-sm">{option.label}</span>
                    {isSelected && (
                      sortDirection === 'asc' ? (
                        <ArrowUp weight="bold" className="h-4 w-4" />
                      ) : (
                        <ArrowDown weight="bold" className="h-4 w-4" />
                      )
                    )}
                  </Button>
                )
              })}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Display Options</h4>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-tags" className="text-sm font-normal cursor-pointer">
                Only show dashboards with tags
              </Label>
              <Switch
                id="show-tags"
                checked={showOnlyWithTags}
                onCheckedChange={onShowOnlyWithTagsChange}
              />
            </div>
          </div>

          <Separator />

          <div className="text-xs text-muted-foreground">
            <p>Sorting: <span className="font-medium text-foreground">{sortOptions.find(o => o.field === sortField)?.label} ({sortDirection === 'asc' ? 'A-Z' : 'Z-A'})</span></p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
