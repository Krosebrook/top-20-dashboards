import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CategorySelect } from '@/components/CategorySelect'
import { PrioritySelect } from '@/components/PrioritySelect'
import { StatusSelect } from '@/components/StatusSelect'
import { TagInput } from '@/components/TagInput'
import { useState, useEffect } from 'react'
import type { Dashboard, Priority, Status, Category } from '@/lib/types'

interface DashboardDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (dashboard: Omit<Dashboard, 'id' | 'createdAt'>) => void
  editingDashboard?: Dashboard | null
}

export function DashboardDialog({ open, onOpenChange, onSave, editingDashboard }: DashboardDialogProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<Category>('analytics')
  const [priority, setPriority] = useState<Priority>('medium')
  const [status, setStatus] = useState<Status>('not-started')
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    if (editingDashboard) {
      setTitle(editingDashboard.title)
      setDescription(editingDashboard.description)
      setCategory(editingDashboard.category)
      setPriority(editingDashboard.priority)
      setStatus(editingDashboard.status)
      setTags(editingDashboard.tags || [])
    } else {
      setTitle('')
      setDescription('')
      setCategory('analytics')
      setPriority('medium')
      setStatus('not-started')
      setTags([])
    }
  }, [editingDashboard, open])

  const handleSave = () => {
    if (!title.trim()) return
    
    onSave({
      title: title.trim(),
      description: description.trim(),
      category,
      priority,
      status,
      tags,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{editingDashboard ? 'Edit Dashboard' : 'Add New Dashboard'}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Dashboard Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Sales Performance Dashboard"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what insights this dashboard should provide..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <CategorySelect 
              id="category"
              value={category} 
              onChange={setCategory}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <PrioritySelect
                id="priority"
                value={priority}
                onChange={setPriority}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <StatusSelect
                id="status"
                value={status}
                onChange={setStatus}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <TagInput
              tags={tags}
              onChange={setTags}
              placeholder="Add tags to organize dashboards..."
              maxTags={10}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!title.trim()}>
            {editingDashboard ? 'Save Changes' : 'Add Dashboard'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
