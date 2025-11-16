import type { Dashboard } from './types'
import { VALID_CATEGORIES, VALID_PRIORITIES, VALID_STATUSES } from './constants'
import { generateDashboardId } from './dashboard-utils'

function downloadFile(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function getDateString(): string {
  return new Date().toISOString().split('T')[0]
}

export function exportToJSON(dashboards: Dashboard[]): void {
  const dataStr = JSON.stringify(dashboards, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  downloadFile(dataBlob, `dashboards-${getDateString()}.json`)
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
  downloadFile(dataBlob, `dashboards-${getDateString()}.csv`)
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
  return dashboards
    .filter(d => d.title && d.title.trim().length > 0)
    .map(d => ({
      id: generateDashboardId(),
      title: d.title || 'Untitled Dashboard',
      description: d.description || '',
      category: VALID_CATEGORIES.includes(d.category as any) ? d.category as Dashboard['category'] : 'other',
      priority: VALID_PRIORITIES.includes(d.priority as any) ? d.priority as Dashboard['priority'] : 'medium',
      status: VALID_STATUSES.includes(d.status as any) ? d.status as Dashboard['status'] : 'not-started',
      createdAt: d.createdAt || Date.now()
    }))
}
