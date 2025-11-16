import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'
import type { Dashboard, Status } from '@/lib/types'
import { createDashboard, updateDashboard } from '@/lib/dashboard-utils'
import { MAX_DASHBOARDS } from '@/lib/constants'
import type { DashboardTemplate } from '@/lib/dashboard-templates'

export function useDashboardManager() {
  const [dashboards, setDashboards] = useKV<Dashboard[]>('dashboards', [])

  const canAddDashboard = (dashboards || []).length < MAX_DASHBOARDS

  const addDashboard = (data: Omit<Dashboard, 'id' | 'createdAt'>) => {
    if (!canAddDashboard) {
      toast.error('Maximum limit reached', {
        description: `You can only have up to ${MAX_DASHBOARDS} dashboards.`,
      })
      return false
    }

    const newDashboard = createDashboard(data)
    setDashboards((current) => [...(current || []), newDashboard])
    toast.success('Dashboard added successfully')
    return true
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
    return addDashboard({
      ...suggestion,
      status: suggestion.status || 'not-started',
    })
  }

  const addFromTemplate = (template: DashboardTemplate) => {
    return addDashboard({
      title: template.title,
      description: template.description,
      category: template.category,
      priority: template.priority,
      status: 'not-started',
    })
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

  return {
    dashboards: dashboards || [],
    canAddDashboard,
    addDashboard,
    updateDashboard: updateExistingDashboard,
    deleteDashboard,
    addFromSuggestion,
    addFromTemplate,
    importDashboards,
  }
}
