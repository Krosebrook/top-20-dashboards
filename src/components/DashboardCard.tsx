import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PencilSimple, Trash, Tag } from '@phosphor-icons/react'
import type { Dashboard } from '@/lib/types'
import { PRIORITY_CONFIG, STATUS_CONFIG, CATEGORY_CONFIG } from '@/lib/constants'
import { motion } from 'framer-motion'

interface DashboardCardProps {
  dashboard: Dashboard
  onEdit: (dashboard: Dashboard) => void
  onDelete: (id: string) => void
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
          <Badge variant="outline" className={PRIORITY_CONFIG[dashboard.priority].className}>
            {PRIORITY_CONFIG[dashboard.priority].label}
          </Badge>
          <Badge variant="outline" className={STATUS_CONFIG[dashboard.status].className}>
            {STATUS_CONFIG[dashboard.status].label}
          </Badge>
        </div>

        {dashboard.tags && dashboard.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {dashboard.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-0.5 flex items-center gap-1"
              >
                <Tag className="h-3 w-3" weight="bold" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          {CATEGORY_CONFIG[dashboard.category]}
        </div>
      </Card>
    </motion.div>
  )
}
