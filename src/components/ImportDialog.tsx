import { useState, useRef } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Upload, File, CheckCircle, Warning, X } from '@phosphor-icons/react'
import { parseCSV, validateImportedDashboards } from '@/lib/export-import'
import type { Dashboard } from '@/lib/types'

interface ImportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onImport: (dashboards: Dashboard[]) => void
  currentCount: number
  maxCount: number
}

export function ImportDialog({ open, onOpenChange, onImport, currentCount, maxCount }: ImportDialogProps) {
  const [previewDashboards, setPreviewDashboards] = useState<Dashboard[]>([])
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const availableSlots = maxCount - currentCount
  const willExceedLimit = previewDashboards.length > availableSlots

  const handleFile = async (file: File) => {
    setError(null)
    setPreviewDashboards([])

    try {
      const text = await file.text()

      if (file.name.endsWith('.json')) {
        const data = JSON.parse(text)
        const dashboards = Array.isArray(data) ? data : [data]
        const validated = validateImportedDashboards(dashboards)
        setPreviewDashboards(validated)
      } else if (file.name.endsWith('.csv')) {
        const parsed = parseCSV(text)
        const validated = validateImportedDashboards(parsed)
        setPreviewDashboards(validated)
      } else {
        setError('Please upload a JSON or CSV file')
      }
    } catch (err) {
      setError('Failed to parse file. Please check the format and try again.')
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleImport = () => {
    if (willExceedLimit) {
      setError(`You can only import ${availableSlots} dashboard${availableSlots === 1 ? '' : 's'}. Please adjust your file or remove some existing dashboards.`)
      return
    }

    onImport(previewDashboards)
    handleClose()
  }

  const handleClose = () => {
    setPreviewDashboards([])
    setError(null)
    setDragActive(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Import Dashboards</DialogTitle>
          <DialogDescription>
            Upload a JSON or CSV file to import dashboards. {availableSlots > 0 ? `You have ${availableSlots} slot${availableSlots === 1 ? '' : 's'} available.` : 'You have reached the maximum limit.'}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col gap-4">
          {availableSlots === 0 ? (
            <Alert>
              <Warning className="h-4 w-4" />
              <AlertDescription>
                You've reached the maximum of {maxCount} dashboards. Delete some dashboards to import new ones.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm font-medium mb-2">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Supports JSON and CSV files
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,.csv"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Select File
                </Button>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <File className="h-5 w-5 text-primary" weight="fill" />
                  <div className="text-xs">
                    <div className="font-medium">JSON Format</div>
                    <div className="text-muted-foreground">Full dashboard data</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <File className="h-5 w-5 text-accent" weight="fill" />
                  <div className="text-xs">
                    <div className="font-medium">CSV Format</div>
                    <div className="text-muted-foreground">Spreadsheet compatible</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {error && (
            <Alert variant="destructive">
              <Warning className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {previewDashboards.length > 0 && (
            <div className="border rounded-lg overflow-hidden flex flex-col flex-1">
              <div className="bg-muted px-4 py-3 flex items-center justify-between border-b">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" weight="fill" />
                  <span className="font-medium text-sm">
                    Found {previewDashboards.length} dashboard{previewDashboards.length === 1 ? '' : 's'}
                  </span>
                </div>
                {willExceedLimit && (
                  <Badge variant="destructive">Exceeds limit by {previewDashboards.length - availableSlots}</Badge>
                )}
              </div>
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-2">
                  {previewDashboards.map((dashboard, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-card border rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-1 truncate">{dashboard.title}</div>
                        <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                          {dashboard.description || 'No description'}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant="outline" className="text-xs">
                            {dashboard.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {dashboard.priority}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {dashboard.status}
                          </Badge>
                        </div>
                      </div>
                      {index >= availableSlots && (
                        <X className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleImport}
            disabled={previewDashboards.length === 0 || willExceedLimit}
          >
            Import {previewDashboards.length > 0 && `(${previewDashboards.length})`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
