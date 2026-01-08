import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sparkle, Plus } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import type { Category, Priority } from '@/lib/types'

interface SuggestionItem {
  title: string
  description: string
  category: Category
  priority: Priority
  innovative: boolean
}

interface SuggestionsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddSuggestion: (suggestion: Omit<SuggestionItem, 'innovative'>) => void
  existingDashboards: Array<{ title: string; description: string; category: Category }>
}

export function SuggestionsDialog({ open, onOpenChange, onAddSuggestion, existingDashboards }: SuggestionsDialogProps) {
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open && suggestions.length === 0) {
      generateSuggestions()
    }
  }, [open])

  const generateSuggestions = async () => {
    setLoading(true)
    setError(null)

    try {
      const existingContext = existingDashboards.length > 0 
        ? `\n\nExisting dashboards the user already has:\n${existingDashboards.map(d => `- ${d.title} (${d.category}): ${d.description}`).join('\n')}`
        : ''

      const promptText = `You are a creative dashboard design expert. Generate exactly 10 innovative and practical dashboard ideas that go beyond the obvious.

${existingContext}

Requirements:
1. Generate 10 DIVERSE dashboard concepts
2. Include a mix of:
   - 3-4 unexpected/innovative use cases (things users haven't thought of)
   - 3-4 modern dashboard styles and functionality enhancements
   - 2-3 practical but underrated dashboards
   - AT LEAST ONE comprehensive Product Roadmap Dashboard with maximum depth and detail

3. Focus on creativity: personal productivity, wellness tracking, learning metrics, habit formation, decision-making tools, time optimization, relationship management, creative project tracking, mental models, skill development, knowledge management, etc.

4. IMPORTANT: When suggesting a Product Roadmap Dashboard, include maximum depth covering: feature releases, roadmap progress, development status, planned vs. actual delivery, milestones, dependencies, stakeholder communication, and strategic alignment.

5. Each suggestion needs:
   - title: Clear, descriptive name (under 60 chars)
   - description: Compelling value proposition (80-120 chars)
   - category: One of [analytics, sales, marketing, operations, finance, hr, product, customer, other]
   - priority: One of [critical, high, medium, low] - prioritize based on general utility
   - innovative: true if it's an unexpected/creative idea, false if it's more conventional

Return the result as a valid JSON object with a single property called "suggestions" that contains the dashboard list. Format:
{
  "suggestions": [
    {
      "title": "Dashboard Name",
      "description": "Brief compelling description of value",
      "category": "category",
      "priority": "priority",
      "innovative": true
    }
  ]
}`

      const response = await window.spark.llm(promptText, 'gpt-4o', true)
      const parsed = JSON.parse(response)
      
      if (parsed.suggestions && Array.isArray(parsed.suggestions)) {
        setSuggestions(parsed.suggestions)
      } else {
        throw new Error('Invalid response format')
      }
    } catch (err) {
      console.error('Failed to generate suggestions:', err)
      setError('Failed to generate suggestions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddSuggestion = (suggestion: SuggestionItem) => {
    onAddSuggestion({
      title: suggestion.title,
      description: suggestion.description,
      category: suggestion.category,
      priority: suggestion.priority,
    })
  }

  const innovativeCount = suggestions.filter(s => s.innovative).length
  const conventionalCount = suggestions.filter(s => !s.innovative).length

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkle className="h-5 w-5 text-accent" weight="fill" />
            10 Dashboard Ideas You Haven't Considered
          </DialogTitle>
        </DialogHeader>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            <p className="text-sm text-muted-foreground">Generating creative suggestions...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <p className="text-sm text-destructive">{error}</p>
            <Button onClick={generateSuggestions} variant="outline" size="sm">
              Try Again
            </Button>
          </div>
        )}

        {!loading && !error && suggestions.length > 0 && (
          <>
            <div className="flex gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                <Sparkle className="h-3 w-3 mr-1" weight="fill" />
                {innovativeCount} Innovative
              </Badge>
              <Badge variant="outline" className="text-xs">
                {conventionalCount} Practical
              </Badge>
            </div>

            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm text-foreground">
                            {suggestion.title}
                          </h4>
                          {suggestion.innovative && (
                            <Sparkle className="h-3.5 w-3.5 text-accent flex-shrink-0" weight="fill" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {suggestion.description}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="flex-shrink-0"
                        onClick={() => handleAddSuggestion(suggestion)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline" className="text-xs capitalize">
                        {suggestion.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {suggestion.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex justify-center pt-2">
              <Button onClick={generateSuggestions} variant="outline" size="sm">
                <Sparkle className="h-4 w-4 mr-2" />
                Generate New Ideas
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
