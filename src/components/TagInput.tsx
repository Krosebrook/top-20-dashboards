import { useState, KeyboardEvent } from 'react'
import { X } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
}

export function TagInput({ tags, onChange, placeholder = "Add tags...", maxTags = 10 }: TagInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag()
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  const addTag = () => {
    const trimmedValue = inputValue.trim()
    if (trimmedValue === '') return
    
    if (tags.includes(trimmedValue)) {
      setInputValue('')
      return
    }

    if (maxTags && tags.length >= maxTags) {
      setInputValue('')
      return
    }

    onChange([...tags, trimmedValue])
    setInputValue('')
  }

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 min-h-[38px] p-2 rounded-md border border-input bg-background">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="px-2 py-1 flex items-center gap-1 h-6"
          >
            <span className="text-xs">{tag}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-3 w-3 p-0 hover:bg-transparent"
              onClick={() => removeTag(tag)}
            >
              <X className="h-3 w-3" weight="bold" />
            </Button>
          </Badge>
        ))}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={tags.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] border-0 shadow-none focus-visible:ring-0 p-0 h-6"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Press Enter or comma to add tags. {maxTags && `Max ${maxTags} tags.`}
      </p>
    </div>
  )
}
