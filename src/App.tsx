import { useState, useMemo } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, MagnifyingGlass, FunnelSimple, X, Sparkle, Export, Upload } from '@phosphor-icons/react'
import { DashboardCard } from '@/components/DashboardCard'
import { DashboardDialog } from '@/components/DashboardDialog'
import { SuggestionsDialog } from '@/components/SuggestionsDialog'
import { ExportDialog } from '@/components/ExportDialog'
import { ImportDialog } from '@/components/ImportDialog'
import { EmptyState } from '@/components/EmptyState'
import { Toaster, toast } from 'sonner'
import type { Dashboard, Priority, Status, Category } from '@/lib/types'

function App() {
  const [dashboards, setDashboards] = useKV<Dashboard[]>('dashboards', [])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [editingDashboard, setEditingDashboard] = useState<Dashboard | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all')
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all')
  const [filterCategory, setFilterCategory] = useState<Category | 'all'>('all')

  const filteredDashboards = useMemo(() => {
    if (!dashboards) return []
    
    let filtered = [...dashboards]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (d) =>
          d.title.toLowerCase().includes(query) ||
          d.description.toLowerCase().includes(query)
      )
    }

    if (filterPriority !== 'all') {
      filtered = filtered.filter((d) => d.priority === filterPriority)
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter((d) => d.status === filterStatus)
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter((d) => d.category === filterCategory)
    }

    return filtered.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
  }, [dashboards, searchQuery, filterPriority, filterStatus, filterCategory])

  const hasActiveFilters = filterPriority !== 'all' || filterStatus !== 'all' || filterCategory !== 'all' || searchQuery !== ''

  const handleAddClick = () => {
    const currentDashboards = dashboards || []
    if (currentDashboards.length >= 20) {
      toast.error('Maximum limit reached', {
        description: 'You can only have up to 20 dashboards.',
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
      setDashboards((current) =>
        (current || []).map((d) =>
          d.id === editingDashboard.id
            ? { ...d, ...dashboardData }
            : d
        )
      )
      toast.success('Dashboard updated successfully')
    } else {
      const newDashboard: Dashboard = {
        ...dashboardData,
        id: Date.now().toString(),
        createdAt: Date.now(),
      }
      setDashboards((current) => [...(current || []), newDashboard])
      toast.success('Dashboard added successfully')
    }
  }

  const handleDelete = (id: string) => {
    setDashboards((current) => (current || []).filter((d) => d.id !== id))
    toast.success('Dashboard deleted')
  }

  const clearFilters = () => {
    setSearchQuery('')
    setFilterPriority('all')
    setFilterStatus('all')
    setFilterCategory('all')
  }

  const handleAddFromSuggestion = (suggestion: Omit<Dashboard, 'id' | 'createdAt' | 'status'> & { status?: Status }) => {
    const currentDashboards = dashboards || []
    if (currentDashboards.length >= 20) {
      toast.error('Maximum limit reached', {
        description: 'You can only have up to 20 dashboards.',
      })
      return
    }

    const newDashboard: Dashboard = {
      ...suggestion,
      status: suggestion.status || 'not-started',
      id: Date.now().toString(),
      createdAt: Date.now(),
    }
    setDashboards((current) => [...(current || []), newDashboard])
    toast.success('Dashboard added from suggestions')
  }

  const handleImport = (importedDashboards: Dashboard[]) => {
    const currentDashboards = dashboards || []
    const availableSlots = 20 - currentDashboards.length
    const toImport = importedDashboards.slice(0, availableSlots)
    
    setDashboards((current) => [...(current || []), ...toImport])
    toast.success(`Imported ${toImport.length} dashboard${toImport.length === 1 ? '' : 's'}`)
  }

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
                Track and organize your top {(dashboards || []).length}/20 needed dashboards
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setSuggestionsOpen(true)} 
                variant="outline"
                className="gap-2"
              >
                <Sparkle className="h-4 w-4" weight="fill" />
                Get Ideas
              </Button>
              <Button 
                onClick={() => setImportOpen(true)} 
                variant="outline"
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                Import
              </Button>
              <Button 
                onClick={() => setExportOpen(true)} 
                variant="outline"
                className="gap-2"
                disabled={(dashboards || []).length === 0}
              >
                <Export className="h-4 w-4" />
                Export
              </Button>
              <Button onClick={handleAddClick} disabled={(dashboards || []).length >= 20}>
                <Plus className="mr-2 h-4 w-4" />
                Add Dashboard
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search dashboards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as Category | 'all')}>
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

              <Select value={filterPriority} onValueChange={(value) => setFilterPriority(value as Priority | 'all')}>
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

              <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value as Status | 'all')}>
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
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>

            {(dashboards || []).length < 20 && (dashboards || []).length > 0 && (
              <Badge variant="outline" className="self-start">
                {20 - (dashboards || []).length} {20 - (dashboards || []).length === 1 ? 'slot' : 'slots'} remaining
              </Badge>
            )}
          </div>
        </div>

        {filteredDashboards.length === 0 ? (
          <EmptyState onAddClick={handleAddClick} isFiltered={hasActiveFilters} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDashboards.map((dashboard) => (
              <DashboardCard
                key={dashboard.id}
                dashboard={dashboard}
                onEdit={handleEditClick}
                onDelete={handleDelete}
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
        existingDashboards={dashboards || []}
      />

      <ExportDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        dashboards={dashboards || []}
      />

      <ImportDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={handleImport}
        currentCount={(dashboards || []).length}
        maxCount={20}
      />
    </div>
  )
}

export default App