import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { STATUS_CONFIG } from '@/lib/constants'
import type { Status } from '@/lib/types'

interface StatusSelectProps {
  value: Status
  onChange: (value: Status) => void
  id?: string
}

export function StatusSelect({ value, onChange, id }: StatusSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(STATUS_CONFIG).map(([key, config]) => (
          <SelectItem key={key} value={key}>
            {config.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
