import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CATEGORY_CONFIG } from '@/lib/constants'
import type { Category } from '@/lib/types'

interface CategorySelectProps {
  value: Category
  onChange: (value: Category) => void
  id?: string
}

export function CategorySelect({ value, onChange, id }: CategorySelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger id={id}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(CATEGORY_CONFIG).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
