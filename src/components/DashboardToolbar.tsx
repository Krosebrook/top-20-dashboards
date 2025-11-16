import { Button } from '@/components/ui/button'
import { Plus, Sparkle, Export, Upload } from '@phosphor-icons/react'

interface DashboardToolbarProps {
  onAdd: () => void
  onTemplates: () => void
  onSuggestions: () => void
  onImport: () => void
  onExport: () => void
  canAdd: boolean
  canExport: boolean
}

export function DashboardToolbar({
  onAdd,
  onTemplates,
  onSuggestions,
  onImport,
  onExport,
  canAdd,
  canExport,
}: DashboardToolbarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        onClick={onTemplates} 
        variant="outline"
        className="gap-2"
      >
        <Sparkle className="h-4 w-4" weight="fill" />
        <span className="hidden sm:inline">Templates</span>
      </Button>
      <Button 
        onClick={onSuggestions} 
        variant="outline"
        className="gap-2"
      >
        <Sparkle className="h-4 w-4" />
        <span className="hidden sm:inline">AI Ideas</span>
      </Button>
      <Button 
        onClick={onImport} 
        variant="outline"
        className="gap-2"
      >
        <Upload className="h-4 w-4" />
        <span className="hidden sm:inline">Import</span>
      </Button>
      <Button 
        onClick={onExport} 
        variant="outline"
        className="gap-2"
        disabled={!canExport}
      >
        <Export className="h-4 w-4" />
        <span className="hidden sm:inline">Export</span>
      </Button>
      <Button onClick={onAdd} disabled={!canAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Add
      </Button>
    </div>
  )
}
