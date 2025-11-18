import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { type KeyboardShortcut, formatShortcut } from '@/hooks/use-keyboard-shortcuts'

interface KeyboardShortcutsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  shortcuts: KeyboardShortcut[]
}

export function KeyboardShortcutsDialog({
  open,
  onOpenChange,
  shortcuts,
}: KeyboardShortcutsDialogProps) {
  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    const category = getCategory(shortcut.description)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(shortcut)
    return acc
  }, {} as Record<string, KeyboardShortcut[]>)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription>
            Speed up your workflow with these keyboard shortcuts
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {category}
              </h3>
              <div className="space-y-2">
                {categoryShortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm text-muted-foreground">
                      {shortcut.description}
                    </span>
                    <kbd className="px-3 py-1.5 text-xs font-semibold text-foreground bg-muted border border-border rounded-md shadow-sm">
                      {formatShortcut(shortcut)}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function getCategory(description: string): string {
  const lowerDesc = description.toLowerCase()
  
  if (lowerDesc.includes('add') || lowerDesc.includes('create')) {
    return 'Creating & Adding'
  }
  if (lowerDesc.includes('filter') || lowerDesc.includes('search') || lowerDesc.includes('clear')) {
    return 'Filtering & Search'
  }
  if (lowerDesc.includes('export') || lowerDesc.includes('import')) {
    return 'Import & Export'
  }
  if (lowerDesc.includes('tag') || lowerDesc.includes('template') || lowerDesc.includes('suggestion')) {
    return 'Organization'
  }
  if (lowerDesc.includes('analytics') || lowerDesc.includes('help') || lowerDesc.includes('shortcut')) {
    return 'Tools & Help'
  }
  
  return 'General'
}
