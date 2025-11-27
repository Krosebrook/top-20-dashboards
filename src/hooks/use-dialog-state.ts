import { useState, useCallback } from 'react'

export interface DialogState {
  dashboard: boolean
  viewer: boolean
  suggestions: boolean
  export: boolean
  import: boolean
  templates: boolean
  analytics: boolean
  bulkTag: boolean
  shortcuts: boolean
}

export function useDialogState() {
  const [dialogs, setDialogs] = useState<DialogState>({
    dashboard: false,
    viewer: false,
    suggestions: false,
    export: false,
    import: false,
    templates: false,
    analytics: false,
    bulkTag: false,
    shortcuts: false,
  })

  const openDialog = useCallback((dialogName: keyof DialogState) => {
    setDialogs(prev => ({ ...prev, [dialogName]: true }))
  }, [])

  const closeDialog = useCallback((dialogName: keyof DialogState) => {
    setDialogs(prev => ({ ...prev, [dialogName]: false }))
  }, [])

  const toggleDialog = useCallback((dialogName: keyof DialogState) => {
    setDialogs(prev => ({ ...prev, [dialogName]: !prev[dialogName] }))
  }, [])

  const setDialogState = useCallback((dialogName: keyof DialogState, isOpen: boolean) => {
    setDialogs(prev => ({ ...prev, [dialogName]: isOpen }))
  }, [])

  return {
    dialogs,
    openDialog,
    closeDialog,
    toggleDialog,
    setDialogState,
  }
}
