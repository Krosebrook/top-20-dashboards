import { useEffect } from 'react'

export type KeyboardShortcut = {
  key: string
  alt?: boolean
  description: st

  action: () => void
  description: string
}

export function formatShortcut(shortcut: KeyboardShortcut): string {
  const parts: string[] = []
  
  if (shortcut.ctrl) {
    parts.push('Ctrl')
  }
  if (shortcut.shift) {
    parts.push('Shift')
  }
  if (shortcut.alt) {
    parts.push('Alt')
  }
  
  const keyDisplay = shortcut.key === 'Escape' ? 'Esc' : shortcut.key.toUpperCase()
  parts.push(keyDisplay)
  
  return parts.join(' + ')
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[], enabled = true) {
  useEffect(() => {
    if (!enabled) return

        return

        document.activeElement?.tagName === 'INPUT' ||
        const shiftMatch = shortcut.shift ? event.shiftKe

         
          brea
      }

    return () => window.removeEventListen
}








        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts, enabled])
}
