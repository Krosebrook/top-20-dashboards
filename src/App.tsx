import { useState, useEffect, useMemo } from 'react'
import { DashboardCard } from '@/components/DashboardCard'
import { DashboardDialog } from '@/components/DashboardDialog'
import { DashboardViewer } from '@/components/DashboardViewer'
import { DashboardFilters } from '@/components/DashboardFilters'
import { DashboardToolbar } from '@/components/DashboardToolbar'
import { SuggestionsDialog } from '@/components/SuggestionsDialog'
import { ExportDialog } from '@/components/ExportDialog'
import { ImportDialog } from '@/components/ImportDialog'
import { TemplatesDialog } from '@/components/TemplatesDialog'
import { AnalyticsDialog } from '@/components/AnalyticsDialog'
import { BulkTagDialog } from '@/components/BulkTagDialog'
import { KeyboardShortcutsDialog } from '@/components/KeyboardShortcutsDialog'
import { KeyboardShortcutHint } from '@/components/KeyboardShortcutHint'
import { EmptyState } from '@/components/EmptyState'
import { Toaster, toast } from 'sonner'
import { useDashboardManager } from '@/hooks/use-dashboard-manager'
import { useDashboardFilters } from '@/hooks/use-dashboard-filters'
import { useAnalytics } from '@/hooks/use-analytics'
import { useKeyboardShortcuts, type KeyboardShortcut } from '@/hooks/use-keyboard-shortcuts'
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
    applyBulkTags,
  } = useDashboardManager()

  const {
    events,
    usageStats,
    overallAnalytics,
    trackEvent,
    getDashboardStats,
    clearAnalytics,
  } = useAnalytics(dashboards)

  const {
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
  } = useDashboardFilters(dashboards)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [templatesOpen, setTemplatesOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(false)
  const [bulkTagOpen, setBulkTagOpen] = useState(false)
  const [shortcutsOpen, setShortcutsOpen] = useState(false)
  const [editingDashboard, setEditingDashboard] = useState<Dashboard | null>(null)
  const [viewingDashboard, setViewingDashboard] = useState<Dashboard | null>(null)

  useEffect(() => {
    if (hasActiveFilters) {
      trackEvent('filter_applied', undefined, {
        searchQuery,
        filterPriority,
        filterStatus,
        filterCategory,
        filterTags,
      })
    }
  }, [searchQuery, filterPriority, filterStatus, filterCategory, filterTags])

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

  const shortcuts = useMemo<KeyboardShortcut[]>(() => [
    {
      key: 'n',
      ctrl: true,
      action: handleAddClick,
      description: 'Add new dashboard',
    },
    {
      key: 'k',
      ctrl: true,
      action: () => document.querySelector<HTMLInputElement>('input[type="search"]')?.focus(),
      description: 'Focus search',
    },
    {
      key: 'b',
      ctrl: true,
      action: () => {
        if (dashboards.length > 0) {
          setBulkTagOpen(true)
        } else {
          toast.error('No dashboards to tag')
        }
      },
      description: 'Open bulk tag dialog',
    },
    {
      key: 't',
      ctrl: true,
      action: () => setTemplatesOpen(true),
      description: 'Open templates',
    },
    {
      key: 's',
      ctrl: true,
      action: () => setSuggestionsOpen(true),
      description: 'Open suggestions',
    },
    {
      key: 'e',
      ctrl: true,
      action: () => {
        if (dashboards.length > 0) {
          setExportOpen(true)
        } else {
          toast.error('No dashboards to export')
        }
      },
      description: 'Export dashboards',
    },
    {
      key: 'i',
      ctrl: true,
      action: () => setImportOpen(true),
      description: 'Import dashboards',
    },
    {
      key: 'a',
      ctrl: true,
      action: () => setAnalyticsOpen(true),
      description: 'View analytics',
    },
    {
      key: 'Escape',
      action: () => {
        if (hasActiveFilters) {
          clearFilters()
          toast.success('Filters cleared')
        }
      },
      description: 'Clear all filters',
    },
    {
      key: '/',
      action: () => {
        setShortcutsOpen(true)
      },
      description: 'Show keyboard shortcuts',
    },
  ], [dashboards.length, hasActiveFilters, clearFilters])

  useKeyboardShortcuts(shortcuts)

  const handleViewClick = (dashboard: Dashboard) => {
    trackEvent('dashboard_viewed', dashboard.id)
    setViewingDashboard(dashboard)
    setViewerOpen(true)
  }

  const handleEditClick = (dashboard: Dashboard) => {
    setEditingDashboard(dashboard)
    setDialogOpen(true)
  }

  const handleSave = (dashboardData: Omit<Dashboard, 'id' | 'createdAt'>) => {
    if (editingDashboard) {
      const oldStatus = editingDashboard.status
      const oldPriority = editingDashboard.priority
      
      updateDashboard(editingDashboard.id, dashboardData)
      trackEvent('dashboard_updated', editingDashboard.id, dashboardData)
      
      if (oldStatus !== dashboardData.status) {
        trackEvent('status_changed', editingDashboard.id, {
          oldStatus,
          newStatus: dashboardData.status,
        })
      }
      
      if (oldPriority !== dashboardData.priority) {
        trackEvent('priority_changed', editingDashboard.id, {
          oldPriority,
          newPriority: dashboardData.priority,
        })
      }
    } else {
      const newDashboard = addDashboard(dashboardData)
      if (newDashboard) {
        trackEvent('dashboard_created', undefined, dashboardData)
      }
    }
    setDialogOpen(false)
  }

  const handleDelete = (id: string) => {
    deleteDashboard(id)
    trackEvent('dashboard_deleted', id)
  }

  const handleAddFromSuggestion = (suggestion: Omit<Dashboard, 'id' | 'createdAt' | 'status'> & { status?: Status }) => {
    if (addFromSuggestion(suggestion)) {
      trackEvent('suggestion_accepted', undefined, suggestion)
      setSuggestionsOpen(false)
    }
  }

  const handleAddTemplate = (template: any) => {
    if (addFromTemplate(template)) {
      trackEvent('template_used', undefined, { templateTitle: template.title })
      setTemplatesOpen(false)
    }
  }

  const handleImport = (importedDashboards: Dashboard[]) => {
    importDashboards(importedDashboards)
    trackEvent('import_completed', undefined, { count: importedDashboards.length })
  }

  const handleExport = () => {
    trackEvent('export_completed', undefined, { count: dashboards.length })
  }

  const handleClearAnalytics = () => {
    if (confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
      clearAnalytics()
      toast.success('Analytics data cleared')
      setAnalyticsOpen(false)
    }
  }

  const handleBulkTags = (dashboardIds: string[], tagsToAdd: string[], tagsToRemove: string[]) => {
    applyBulkTags(dashboardIds, tagsToAdd, tagsToRemove)
    trackEvent('bulk_tags_applied', undefined, {
      dashboardCount: dashboardIds.length,
      tagsAdded: tagsToAdd.length,
      tagsRemoved: tagsToRemove.length
    })
  }

  const remainingSlots = MAX_DASHBOARDS - dashboards.length

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Toaster position="top-center" />
      <KeyboardShortcutHint onOpenShortcuts={() => setShortcutsOpen(true)} />
      
      <div className="flex-shrink-0 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
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
              onBulkTags={() => setBulkTagOpen(true)}
              onImport={() => setImportOpen(true)}
              onExport={() => setExportOpen(true)}
              onAnalytics={() => setAnalyticsOpen(true)}
              onKeyboardShortcuts={() => setShortcutsOpen(true)}
              canAdd={canAddDashboard}
              canExport={dashboards.length > 0}
              hasDashboards={dashboards.length > 0}
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
            filterTags={filterTags}
            onTagsChange={setFilterTags}
            availableTags={availableTags}
            sortField={sortField}
            sortDirection={sortDirection}
            onSortChange={handleSortChange}
            showOnlyWithTags={showOnlyWithTags}
            onShowOnlyWithTagsChange={setShowOnlyWithTags}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
            remainingSlots={remainingSlots}
            totalCount={dashboards.length}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {filteredDashboards.length === 0 ? (
            <EmptyState 
              onAddClick={handleAddClick} 
              onTemplatesClick={() => setTemplatesOpen(true)}
              isFiltered={hasActiveFilters} 
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
              {filteredDashboards.map((dashboard) => (
                <DashboardCard
                  key={dashboard.id}
                  dashboard={dashboard}
                  onView={handleViewClick}
                  onEdit={handleEditClick}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <DashboardDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSave}
        editingDashboard={editingDashboard}
      />

      <DashboardViewer
        open={viewerOpen}
        onOpenChange={setViewerOpen}
        dashboard={viewingDashboard}
        onEdit={handleEditClick}
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
        onExport={handleExport}
      />

      <ImportDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={handleImport}
        currentCount={dashboards.length}
        maxCount={MAX_DASHBOARDS}
      />

      <TemplatesDialog
        open={templatesOpen}
        onOpenChange={setTemplatesOpen}
        onAddTemplate={handleAddTemplate}
        existingDashboards={dashboards}
      />

      <AnalyticsDialog
        open={analyticsOpen}
        onOpenChange={setAnalyticsOpen}
        analytics={overallAnalytics}
        usageStats={usageStats}
        dashboards={dashboards}
        events={events}
        onClearAnalytics={handleClearAnalytics}
      />

      <BulkTagDialog
        open={bulkTagOpen}
        onOpenChange={setBulkTagOpen}
        dashboards={dashboards}
        onApplyBulkTags={handleBulkTags}
      />

      <KeyboardShortcutsDialog
        open={shortcutsOpen}
        onOpenChange={setShortcutsOpen}
        shortcuts={shortcuts}
      />
    </div>
  )
}

export default App