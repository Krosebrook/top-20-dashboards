import type { Dashboard } from './types'

export function exportToJSON(dashboards: Dashboard[]): void {
  const dataStr = JSON.stringify(dashboards, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `dashboards-${new Date().toISOString().split('T')[0]}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function exportToCSV(dashboards: Dashboard[]): void {
  const headers = ['Title', 'Description', 'Category', 'Priority', 'Status', 'Created At']
  const rows = dashboards.map(d => [
    d.title,
    d.description,
    d.category,
    d.priority,
    d.status,
    new Date(d.createdAt).toISOString()
  ])

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
  ].join('\n')

  const dataBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `dashboards-${new Date().toISOString().split('T')[0]}.csv`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function parseCSV(content: string): Partial<Dashboard>[] {
  const lines = content.split('\n').filter(line => line.trim())
  if (lines.length < 2) return []

  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim().toLowerCase())
  const dashboards: Partial<Dashboard>[] = []

  for (let i = 1; i < lines.length; i++) {
    const values: string[] = []
    let current = ''
    let inQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]
      if (char === '"') {
        if (inQuotes && lines[i][j + 1] === '"') {
          current += '"'
          j++
        } else {
          inQuotes = !inQuotes
        }
      } else if (char === ',' && !inQuotes) {
        values.push(current)
        current = ''
      } else {
        current += char
      }
    }
    values.push(current)

    const dashboard: Partial<Dashboard> = {}
    headers.forEach((header, index) => {
      const value = values[index]?.trim() || ''
      if (header === 'title') dashboard.title = value
      else if (header === 'description') dashboard.description = value
      else if (header === 'category') dashboard.category = value as Dashboard['category']
      else if (header === 'priority') dashboard.priority = value as Dashboard['priority']
      else if (header === 'status') dashboard.status = value as Dashboard['status']
      else if (header === 'created at') {
        const date = new Date(value)
        dashboard.createdAt = isNaN(date.getTime()) ? Date.now() : date.getTime()
      }
    })

    if (dashboard.title) {
      dashboards.push(dashboard)
    }
  }

  return dashboards
}

export function validateImportedDashboards(dashboards: Partial<Dashboard>[]): Dashboard[] {
  const validCategories = ['analytics', 'sales', 'marketing', 'operations', 'finance', 'hr', 'product', 'customer', 'other']
  const validPriorities = ['critical', 'high', 'medium', 'low']
  const validStatuses = ['not-started', 'in-progress', 'completed', 'on-hold']

  return dashboards
    .filter(d => d.title && d.title.trim().length > 0)
    .map(d => ({
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      title: d.title || 'Untitled Dashboard',
      description: d.description || '',
      category: validCategories.includes(d.category || '') ? d.category as Dashboard['category'] : 'other',
      priority: validPriorities.includes(d.priority || '') ? d.priority as Dashboard['priority'] : 'medium',
      status: validStatuses.includes(d.status || '') ? d.status as Dashboard['status'] : 'not-started',
      createdAt: d.createdAt || Date.now()
    }))
}
