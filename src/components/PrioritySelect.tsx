import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PRIORITY_CONFIG } from '@/lib/constants'
import type { Priority } from '@/lib/types'

interface PrioritySelectProps {
  value: Priority
  onChange: (value: Priority) => void
  id?: string
}

export function PrioritySelect({ value, onChange, id }: PrioritySelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
          <SelectItem key={key} value={key}>
            {config.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
