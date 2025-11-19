import { useEffect } from 'react'

export type KeyboardShortcut = {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT'
      ) {
        const isSearchShortcut = event.key === 'k' && event.ctrlKey
        if (!isSearchShortcut) {
          return
        }
      }

      for (const shortcut of shortcuts) {
        const keyMatch = event.key === shortcut.key
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey
        const altMatch = shortcut.alt ? event.altKey : !event.altKey

        if (keyMatch && ctrlMatch && shiftMatch && altMatch) {
          event.preventDefault()
          shortcut.action()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts, enabled])
}
