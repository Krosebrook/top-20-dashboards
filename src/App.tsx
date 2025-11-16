import { useState } from 'react'
import { DashboardCard } from '@/components/DashboardCard'
import { DashboardDialog } from '@/components/DashboardDialog'
import { DashboardFilters } from '@/components/DashboardFilters'
import { DashboardToolbar } from '@/components/DashboardToolbar'
import { SuggestionsDialog } from '@/components/SuggestionsDialog'
import { ExportDialog } from '@/components/ExportDialog'
import { ImportDialog } from '@/components/ImportDialog'
import { TemplatesDialog } from '@/components/TemplatesDialog'
import { EmptyState } from '@/components/EmptyState'
import { Toaster, toast } from 'sonner'
import { useDashboardManager } from '@/hooks/use-dashboard-manager'
import { useDashboardFilters } from '@/hooks/use-dashboard-filters'
import { MAX_DASHBOARDS } from '@/lib/constants'
import type { Dashboard, Priority, Status, Category } from '@/lib/types'

function App() {
  const {
    dashboards,
    canAddDashboard,
    addDashboard,
    updateDashboard,
    deleteDashboard,
    addFromSuggestion,
    addFromTemplate,
    importDashboards,
  } = useDashboardManager()

  const {
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
  } = useDashboardFilters(dashboards)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [templatesOpen, setTemplatesOpen] = useState(false)
  const [editingDashboard, setEditingDashboard] = useState<Dashboard | null>(null)

  const handleAddClick = () => {
    if (!canAddDashboard) {
      toast.error('Maximum limit reached', {
        description: `You can only have up to ${MAX_DASHBOARDS} dashboards.`,
      })
      return
    }
    setEditingDashboard(null)
    setDialogOpen(true)
  }

  const handleEditClick = (dashboard: Dashboard) => {
    setEditingDashboard(dashboard)
    setDialogOpen(true)
  }

  const handleSave = (dashboardData: Omit<Dashboard, 'id' | 'createdAt'>) => {
    if (editingDashboard) {
      updateDashboard(editingDashboard.id, dashboardData)
    } else {
      addDashboard(dashboardData)
    }
    setDialogOpen(false)
  }

  const handleAddFromSuggestion = (suggestion: Omit<Dashboard, 'id' | 'createdAt' | 'status'> & { status?: Status }) => {
    if (addFromSuggestion(suggestion)) {
      setSuggestionsOpen(false)
    }
  }

  const handleAddTemplate = (template: any) => {
    if (addFromTemplate(template)) {
      setTemplatesOpen(false)
    }
  }

  const remainingSlots = MAX_DASHBOARDS - dashboards.length

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-1">
                Dashboard Manager
              </h1>
              <p className="text-muted-foreground">
                Track and organize your top {dashboards.length}/{MAX_DASHBOARDS} needed dashboards
              </p>
            </div>
            <DashboardToolbar
              onAdd={handleAddClick}
              onTemplates={() => setTemplatesOpen(true)}
              onSuggestions={() => setSuggestionsOpen(true)}
              onImport={() => setImportOpen(true)}
              onExport={() => setExportOpen(true)}
              canAdd={canAddDashboard}
              canExport={dashboards.length > 0}
            />
          </div>

          <DashboardFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filterCategory={filterCategory}
            onCategoryChange={(value) => setFilterCategory(value as Category | 'all')}
            filterPriority={filterPriority}
            onPriorityChange={(value) => setFilterPriority(value as Priority | 'all')}
            filterStatus={filterStatus}
            onStatusChange={(value) => setFilterStatus(value as Status | 'all')}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
            remainingSlots={remainingSlots}
            totalCount={dashboards.length}
          />
        </div>

        {filteredDashboards.length === 0 ? (
          <EmptyState 
            onAddClick={handleAddClick} 
            onTemplatesClick={() => setTemplatesOpen(true)}
            isFiltered={hasActiveFilters} 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.id}
                dashboard={dashboard}
                onEdit={handleEditClick}
                onDelete={deleteDashboard}
              />
            ))}
          </div>
        )}
      </div>

      <DashboardDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSave}
        editingDashboard={editingDashboard}
      />

      <SuggestionsDialog
        open={suggestionsOpen}
        onOpenChange={setSuggestionsOpen}
        onAddSuggestion={handleAddFromSuggestion}
        existingDashboards={dashboards}
      />

      <ExportDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        dashboards={dashboards}
      />

      <ImportDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={importDashboards}
        currentCount={dashboards.length}
        maxCount={MAX_DASHBOARDS}
      />

      <TemplatesDialog
        open={templatesOpen}
        onOpenChange={setTemplatesOpen}
        onAddTemplate={handleAddTemplate}
        existingDashboards={dashboards}
      />
    </div>
  )
}

export default App