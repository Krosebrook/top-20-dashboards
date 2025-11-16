import type { Dashboard, Priority, Status, Category } from './types'
import { PRIORITY_CONFIG } from './constants'

export function sortDashboardsByPriority(dashboards: Dashboard[]): Dashboard[] {
  return [...dashboards].sort((a, b) => {
    return PRIORITY_CONFIG[a.priority].order - PRIORITY_CONFIG[b.priority].order
  })
}

export function filterDashboards(
  dashboards: Dashboard[],
  filters: {
    searchQuery?: string
    priority?: Priority | 'all'
    status?: Status | 'all'
    category?: Category | 'all'
  }
): Dashboard[] {
  let filtered = [...dashboards]

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase()
    filtered = filtered.filter(
      (d) =>
        d.title.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    )
  }

  if (filters.priority && filters.priority !== 'all') {
    filtered = filtered.filter((d) => d.priority === filters.priority)
  }

  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter((d) => d.status === filters.status)
  }

  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((d) => d.category === filters.category)
  }

  return sortDashboardsByPriority(filtered)
}

export function generateDashboardId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

export function createDashboard(
  data: Omit<Dashboard, 'id' | 'createdAt'>
): Dashboard {
  return {
    ...data,
    id: generateDashboardId(),
    createdAt: Date.now(),
  }
}

export function updateDashboard(
  dashboard: Dashboard,
  updates: Partial<Omit<Dashboard, 'id' | 'createdAt'>>
): Dashboard {
  return {
    ...dashboard,
    ...updates,
  }
}
