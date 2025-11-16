import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MagnifyingGlass, FunnelSimple, X } from '@phosphor-icons/react'
import type { Priority, Status, Category } from '@/lib/types'
import { MAX_DASHBOARDS } from '@/lib/constants'

interface DashboardFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  filterCategory: Category | 'all'
  onCategoryChange: (value: Category | 'all') => void
  filterPriority: Priority | 'all'
  onPriorityChange: (value: Priority | 'all') => void
  filterStatus: Status | 'all'
  onStatusChange: (value: Status | 'all') => void
  hasActiveFilters: boolean
  onClearFilters: () => void
  remainingSlots: number
  totalCount: number
}

export function DashboardFilters({
  searchQuery,
  onSearchChange,
  filterCategory,
  onCategoryChange,
  filterPriority,
  onPriorityChange,
  filterStatus,
  onStatusChange,
  hasActiveFilters,
  onClearFilters,
  remainingSlots,
  totalCount,
}: DashboardFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search dashboards..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Select value={filterCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[160px]">
            <FunnelSimple className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="analytics">Analytics</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="hr">HR</SelectItem>
            <SelectItem value="product">Product</SelectItem>
            <SelectItem value="customer">Customer</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterPriority} onValueChange={onPriorityChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterStatus} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="not-started">Not Started</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={onClearFilters}>
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>

      {remainingSlots > 0 && totalCount > 0 && (
        <Badge variant="outline" className="self-start">
          {remainingSlots} {remainingSlots === 1 ? 'slot' : 'slots'} remaining
        </Badge>
      )}
    </div>
  )
}
