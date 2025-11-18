import { useEffect } from 'react'

export interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  meta?: boolean
  action: () => void
  description: string
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[], enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const isInputFocused = 
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.getAttribute('contenteditable') === 'true'

      for (const shortcut of shortcuts) {
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase()
        const ctrlMatch = shortcut.ctrl ? (event.ctrlKey || event.metaKey) : !event.ctrlKey && !event.metaKey
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey
        const altMatch = shortcut.alt ? event.altKey : !event.altKey

        if (keyMatch && ctrlMatch && shiftMatch && altMatch) {
          if (!isInputFocused || shortcut.ctrl || shortcut.meta || shortcut.alt) {
            event.preventDefault()
            shortcut.action()
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
