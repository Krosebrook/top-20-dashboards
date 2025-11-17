import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tag, Check } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface TagFilterProps {
  availableTags: string[]
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
}

export function TagFilter({ availableTags, selectedTags, onTagsChange }: TagFilterProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  const clearTags = () => {
    onTagsChange([])
  }

  if (availableTags.length === 0) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn(
            "h-9 gap-2",
            selectedTags.length > 0 && "border-primary"
          )}
        >
          <Tag weight="bold" className="h-4 w-4" />
          Tags
          {selectedTags.length > 0 && (
            <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs h-5">
              {selectedTags.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="start">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Filter by Tags</h4>
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearTags}
                className="h-auto p-1 text-xs"
              >
                Clear
              </Button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto">
            {availableTags.map((tag) => {
              const isSelected = selectedTags.includes(tag)
              return (
                <Button
                  key={tag}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className="h-7 px-2 gap-1.5"
                >
                  {isSelected && <Check weight="bold" className="h-3 w-3" />}
                  <span className="text-xs">{tag}</span>
                </Button>
              )
            })}
          </div>
          
          {selectedTags.length > 0 && (
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                Showing dashboards with {selectedTags.length === 1 ? 'tag' : 'any of these tags'}
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
