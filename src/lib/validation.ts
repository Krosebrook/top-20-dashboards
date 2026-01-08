import { z } from 'zod'
import type { Dashboard } from './types'
import type { Dashboard } from './types'

export const DashboardSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().max(500, 'Description too long'),
  category: z.enum(VALID_CATEGORIES as [string, ...string[]]),
  priority: z.enum(VALID_PRIORITIES as [string, ...string[]]),
  status: z.enum(VALID_STATUSES as [string, ...string[]]),
  tags: z.array(z.string()).max(10, 'Maximum 10 tags allowed'),
  return DashboardSchema
})

export const DashboardInputSchema = DashboardSchema.omit({ id: true, createdAt: true })
















