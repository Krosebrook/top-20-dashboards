import { useState, useMemo } from 'react'
import type { Dashboard, Priority, Status, Category } from '@/lib/types'
import { filterDashboards } from '@/lib/dashboard-utils'
import { PRIORITY_CONFIG } from '@/lib/constants'
import type { SortField, SortDirection } from '@/components/AdvancedFilters'

export function useDashboardFilters(dashboards: Dashboard[]) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all')
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all')
  const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all')
  const [filterTags, setFilterTags] = useState<string[]>([])
  const [sortField, setSortField] = useState<SortField>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [showOnlyWithTags, setShowOnlyWithTags] = useState(false)

  const availableTags = useMemo(() => {
    const tagSet = new Set<string>()
    if (dashboards && Array.isArray(dashboards)) {
      dashboards.forEach(dashboard => {
        if (dashboard?.tags && Array.isArray(dashboard.tags)) {
          dashboard.tags.forEach(tag => tagSet.add(tag))
        }
      })
    }
    return Array.from(tagSet).sort()
  }, [dashboards])

  const filteredDashboards = useMemo(() => {
    let filtered = filterDashboards(dashboards, {
      searchQuery,
      priority: filterPriority,
      status: filterStatus,
      category: filterCategory,
    })

    if (filterTags.length > 0) {
      filtered = filtered.filter(dashboard =>
        dashboard?.tags && Array.isArray(dashboard.tags) && dashboard.tags.some(tag => filterTags.includes(tag))
      )
    }

    if (showOnlyWithTags) {
      filtered = filtered.filter(dashboard => 
        dashboard?.tags && Array.isArray(dashboard.tags) && dashboard.tags.length > 0
      )
    }

    filtered.sort((a, b) => {
      let comparison = 0

      switch (sortField) {
        case 'title':
          comparison = a.title.localeCompare(b.title)
          break
        case 'createdAt':
          comparison = a.createdAt - b.createdAt
          break
        case 'priority':
          comparison = PRIORITY_CONFIG[a.priority].order - PRIORITY_CONFIG[b.priority].order
          break
        case 'status':
          comparison = a.status.localeCompare(b.status)
          break
        case 'category':
          comparison = a.category.localeCompare(b.category)
          break
      }

      return sortDirection === 'asc' ? comparison : -comparison
    })

    return filtered
  }, [dashboards, searchQuery, filterPriority, filterStatus, filterCategory, filterTags, showOnlyWithTags, sortField, sortDirection])

  const hasActiveFilters =
    filterPriority !== 'all' ||
    filterStatus !== 'all' ||
    filterCategory !== 'all' ||
    filterTags.length > 0 ||
    searchQuery !== '' ||
    showOnlyWithTags

  const clearFilters = () => {
    setSearchQuery('')
    setFilterPriority('all')
    setFilterStatus('all')
    setFilterCategory('all')
    setFilterTags([])
    setShowOnlyWithTags(false)
  }

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field)
    setSortDirection(direction)
  }

  return {
    searchQuery,
    setSearchQuery,
    filterPriority,
    setFilterPriority,
    filterStatus,
    setFilterStatus,
    filterCategory,
    setFilterCategory,
    filterTags,
    setFilterTags,
    availableTags,
    sortField,
    sortDirection,
    handleSortChange,
    showOnlyWithTags,
    setShowOnlyWithTags,
    filteredDashboards,
    hasActiveFilters,
    clearFilters,
  }
}
