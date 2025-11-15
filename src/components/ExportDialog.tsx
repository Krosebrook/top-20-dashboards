import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { File, DownloadSimple } from '@phosphor-icons/react'
import { exportToJSON, exportToCSV } from '@/lib/export-import'
import type { Dashboard } from '@/lib/types'

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dashboards: Dashboard[]
}

export function ExportDialog({ open, onOpenChange, dashboards }: ExportDialogProps) {
  const handleExportJSON = () => {
    exportToJSON(dashboards)
    onOpenChange(false)
  }

  const handleExportCSV = () => {
    exportToCSV(dashboards)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Export Dashboards</DialogTitle>
          <DialogDescription>
            Export {dashboards.length} dashboard{dashboards.length === 1 ? '' : 's'} in your preferred format
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <button
            onClick={handleExportJSON}
            className="w-full flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left group"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <File className="h-6 w-6 text-primary" weight="fill" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold mb-1 flex items-center gap-2">
                Export as JSON
                <DownloadSimple className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground">
                Full structured data, perfect for backup and re-importing
              </p>
            </div>
          </button>

          <button
            onClick={handleExportCSV}
            className="w-full flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left group"
          >
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <File className="h-6 w-6 text-accent" weight="fill" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold mb-1 flex items-center gap-2">
                Export as CSV
                <DownloadSimple className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground">
                Spreadsheet-compatible format for Excel, Google Sheets, and more
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
