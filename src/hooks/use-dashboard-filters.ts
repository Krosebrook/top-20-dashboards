import { useState, useMemo } from 'react'
import type { Dashboard, Priority, Status, Category } from '@/lib/types'
import { filterDashboards } from '@/lib/dashboard-utils'

export function useDashboardFilters(dashboards: Dashboard[]) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all')
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all')
  const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all')

  const filteredDashboards = useMemo(() => {
    return filterDashboards(dashboards, {
      searchQuery,
      priority: filterPriority,
      status: filterStatus,
      category: filterCategory,
    })
  }, [dashboards, searchQuery, filterPriority, filterStatus, filterCategory])

  const hasActiveFilters =
    filterPriority !== 'all' ||
    filterStatus !== 'all' ||
    filterCategory !== 'all' ||
    searchQuery !== ''

  const clearFilters = () => {
    setSearchQuery('')
    setFilterPriority('all')
    setFilterStatus('all')
    setFilterCategory('all')
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
    filteredDashboards,
    hasActiveFilters,
    clearFilters,
  }
}
