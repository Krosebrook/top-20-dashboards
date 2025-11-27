import { z } from 'zod'
import { VALID_CATEGORIES, VALID_PRIORITIES, VALID_STATUSES, MAX_DASHBOARDS } from './constants'
import type { Dashboard } from './types'

export const DashboardSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().max(500, 'Description too long'),
  category: z.enum(VALID_CATEGORIES as [string, ...string[]]),
  priority: z.enum(VALID_PRIORITIES as [string, ...string[]]),
  status: z.enum(VALID_STATUSES as [string, ...string[]]),
  tags: z.array(z.string()).max(10, 'Maximum 10 tags allowed'),
  createdAt: z.number(),
})

export const DashboardInputSchema = DashboardSchema.omit({ id: true, createdAt: true })

export function validateDashboard(dashboard: unknown): dashboard is Dashboard {
  return DashboardSchema.safeParse(dashboard).success
}

export function validateDashboards(dashboards: unknown[]): Dashboard[] {
  return dashboards.filter(validateDashboard)
}

export function canAddDashboard(currentCount: number): boolean {
  return currentCount < MAX_DASHBOARDS
}

export function getAvailableSlots(currentCount: number): number {
  return Math.max(0, MAX_DASHBOARDS - currentCount)
}
