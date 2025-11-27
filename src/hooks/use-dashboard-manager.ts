import { useKV } from '@github/spark/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import type { Dashboard, Status } from '@/lib/types'
import { createDashboard, updateDashboard } from '@/lib/dashboard-utils'
import { MAX_DASHBOARDS } from '@/lib/constants'
import type { DashboardTemplate } from '@/lib/dashboard-templates'

export function useDashboardManager() {
  const [dashboards, setDashboards] = useKV<Dashboard[]>('dashboards', [])

  useEffect(() => {
    if (dashboards && dashboards.length > 0) {
      const needsMigration = dashboards.some(d => !d.tags)
      if (needsMigration) {
        setDashboards((current) =>
          (current || []).map(d => ({
            ...d,
            tags: d.tags || []
          }))
        )
      }
    }
  }, [])

  const canAddDashboard = (dashboards || []).length < MAX_DASHBOARDS

  const addDashboard = (data: Omit<Dashboard, 'id' | 'createdAt'>) => {
    if (!canAddDashboard) {
      toast.error('Maximum limit reached', {
        description: `You can only have up to ${MAX_DASHBOARDS} dashboards.`,
      })
      return null
    }

    const newDashboard = createDashboard(data)
    setDashboards((current) => [...(current || []), newDashboard])
    toast.success('Dashboard added successfully')
    return newDashboard
  }

  const updateExistingDashboard = (
    id: string,
    updates: Partial<Omit<Dashboard, 'id' | 'createdAt'>>
  ) => {
    setDashboards((current) =>
      (current || []).map((d) =>
        d.id === id ? updateDashboard(d, updates) : d
      )
    )
    toast.success('Dashboard updated successfully')
  }

  const deleteDashboard = (id: string) => {
    setDashboards((current) => (current || []).filter((d) => d.id !== id))
    toast.success('Dashboard deleted')
  }

  const addFromSuggestion = (
    suggestion: Omit<Dashboard, 'id' | 'createdAt' | 'status'> & {
      status?: Status
    }
  ) => {
    const result = addDashboard({
      ...suggestion,
      status: suggestion.status || 'not-started',
    })
    return result !== null
  }

  const addFromTemplate = (template: DashboardTemplate) => {
    const result = addDashboard({
      title: template.title,
      description: template.description,
      category: template.category,
      priority: template.priority,
      status: 'not-started',
      tags: [],
    })
    return result !== null
  }

  const importDashboards = (importedDashboards: Dashboard[]) => {
    const currentDashboards = dashboards || []
    const availableSlots = MAX_DASHBOARDS - currentDashboards.length
    const toImport = importedDashboards.slice(0, availableSlots)

    setDashboards((current) => [...(current || []), ...toImport])
    toast.success(
      `Imported ${toImport.length} dashboard${toImport.length === 1 ? '' : 's'}`
    )
  }

  const applyBulkTags = (dashboardIds: string[], tagsToAdd: string[], tagsToRemove: string[]) => {
    setDashboards((current) =>
      (current || []).map((d) => {
        if (!dashboardIds.includes(d.id)) return d

        let updatedTags = Array.isArray(d.tags) ? [...d.tags] : []
        
        if (tagsToRemove && Array.isArray(tagsToRemove)) {
          tagsToRemove.forEach(tag => {
            updatedTags = updatedTags.filter(t => t !== tag)
          })
        }
        
        if (tagsToAdd && Array.isArray(tagsToAdd)) {
          tagsToAdd.forEach(tag => {
            if (!updatedTags.includes(tag)) {
              updatedTags.push(tag)
            }
          })
        }

        return { ...d, tags: updatedTags }
      })
    )

    const addMsg = tagsToAdd.length > 0 ? `Added ${tagsToAdd.length} tag${tagsToAdd.length === 1 ? '' : 's'}` : ''
    const removeMsg = tagsToRemove.length > 0 ? `Removed ${tagsToRemove.length} tag${tagsToRemove.length === 1 ? '' : 's'}` : ''
    const separator = addMsg && removeMsg ? ', ' : ''
    
    toast.success(`Bulk tag operation completed`, {
      description: `${addMsg}${separator}${removeMsg} for ${dashboardIds.length} dashboard${dashboardIds.length === 1 ? '' : 's'}`
    })
  }

  return {
    dashboards: dashboards || [],
    canAddDashboard,
    addDashboard,
    updateDashboard: updateExistingDashboard,
    deleteDashboard,
    addFromSuggestion,
    addFromTemplate,
    importDashboards,
    applyBulkTags,
  }
}
