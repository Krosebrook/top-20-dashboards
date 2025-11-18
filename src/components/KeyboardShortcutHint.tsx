import { Keyboard } from '@phosphor-icons/react'

interface KeyboardShortcutHintProps {
  onOpenShortcuts: () => void
}

export function KeyboardShortcutHint({ onOpenShortcuts }: KeyboardShortcutHintProps) {
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPod|iPad/.test(navigator.userAgent)
  
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <button
        onClick={onOpenShortcuts}
        className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground bg-card border border-border rounded-lg shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Keyboard className="h-3.5 w-3.5" />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 text-xs font-semibold bg-muted border border-border rounded">
          /
        </kbd>
        <span>for shortcuts</span>
      </button>
    </div>
  )
}
