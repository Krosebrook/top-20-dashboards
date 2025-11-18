import { useEffect } from 'react'

export interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  meta?: boolean
}
export function useKe
 

        document.activeElement?.tagName === 'INPUT' ||
        document.ac
      for (const shortcu

        const altMatch = shortcut.alt ? event.altKey 
        if (keyMatch && ctrlM
            event.preventDefault()
            break
        }

    window.addEventListener('keydown', ha
  }, [shortcuts, enabled])

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPod|iPad/.t


  if (shortcut.shift) {
  }
    parts.push(isMac ? '⌥' : 'Alt'
  
            break
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts, enabled])
}

export function formatShortcut(shortcut: KeyboardShortcut): string {
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPod|iPad/.test(navigator.userAgent)
  const parts: string[] = []

  if (shortcut.ctrl || shortcut.meta) {
    parts.push(isMac ? '⌘' : 'Ctrl')
  }
  if (shortcut.shift) {
    parts.push(isMac ? '⇧' : 'Shift')
  }
  if (shortcut.alt) {
    parts.push(isMac ? '⌥' : 'Alt')
  }
  
  parts.push(shortcut.key.toUpperCase())

  return parts.join(isMac ? '' : '+')
}
  parts.push(shortcut.key.toUpperCase())

  return parts.join(isMac ? '' : '+')
}
