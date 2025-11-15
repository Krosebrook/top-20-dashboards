import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PencilSimple, Trash } from '@phosphor-icons/react'
import type { Dashboard } from '@/lib/types'
import { motion } from 'framer-motion'

interface DashboardCardProps {
  dashboard: Dashboard
  onEdit: (dashboard: Dashboard) => void
  onDelete: (id: string) => void
}

const priorityConfig = {
  critical: { label: 'Critical', className: 'bg-red-100 text-red-700 border-red-200' },
  high: { label: 'High', className: 'bg-orange-100 text-orange-700 border-orange-200' },
  medium: { label: 'Medium', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  low: { label: 'Low', className: 'bg-green-100 text-green-700 border-green-200' },
}

const statusConfig = {
  'not-started': { label: 'Not Started', className: 'bg-gray-100 text-gray-700 border-gray-200' },
  'in-progress': { label: 'In Progress', className: 'bg-blue-100 text-blue-700 border-blue-200' },
  'completed': { label: 'Completed', className: 'bg-green-100 text-green-700 border-green-200' },
  'on-hold': { label: 'On Hold', className: 'bg-amber-100 text-amber-700 border-amber-200' },
}

const categoryConfig = {
  analytics: 'Analytics',
  sales: 'Sales',
  marketing: 'Marketing',
  operations: 'Operations',
  finance: 'Finance',
  hr: 'HR',
  product: 'Product',
  customer: 'Customer',
  other: 'Other',
}

export function DashboardCard({ dashboard, onEdit, onDelete }: DashboardCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-lg text-foreground leading-tight flex-1">
            {dashboard.title}
          </h3>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => onEdit(dashboard)}
            >
              <PencilSimple className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => onDelete(dashboard.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {dashboard.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className={priorityConfig[dashboard.priority].className}>
            {priorityConfig[dashboard.priority].label}
          </Badge>
          <Badge variant="outline" className={statusConfig[dashboard.status].className}>
            {statusConfig[dashboard.status].label}
          </Badge>
        </div>

        <div className="text-xs text-muted-foreground">
          {categoryConfig[dashboard.category]}
        </div>
      </Card>
    </motion.div>
  )
}
