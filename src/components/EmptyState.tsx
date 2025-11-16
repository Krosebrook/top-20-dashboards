import { Button } from '@/components/ui/button'
import { ChartBar, Plus, Sparkle } from '@phosphor-icons/react'

interface EmptyStateProps {
  onAddClick: () => void
  onTemplatesClick?: () => void
  isFiltered?: boolean
}

export function EmptyState({ onAddClick, onTemplatesClick, isFiltered }: EmptyStateProps) {
  if (isFiltered) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="rounded-full bg-muted p-6 mb-4">
          <ChartBar className="h-12 w-12 text-muted-foreground" weight="duotone" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No dashboards found</h3>
        <p className="text-muted-foreground text-center max-w-sm mb-6">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="rounded-full bg-muted p-6 mb-4">
        <ChartBar className="h-12 w-12 text-muted-foreground" weight="duotone" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No dashboards yet</h3>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Get started by adding your first dashboard to track and organize the analytics you need.
      </p>
      <div className="flex gap-2">
        {onTemplatesClick && (
          <Button onClick={onTemplatesClick} variant="outline">
            <Sparkle className="mr-2 h-4 w-4" weight="fill" />
            Browse Templates
          </Button>
        )}
        <Button onClick={onAddClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add Your First Dashboard
        </Button>
      </div>
    </div>
  )
}
