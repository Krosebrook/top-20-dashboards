import type { Priority, Status, Category } from './types'

export const MAX_DASHBOARDS = 20

export const PRIORITY_CONFIG = {
  critical: { 
    label: 'Critical', 
    className: 'bg-red-100 text-red-700 border-red-200',
    order: 0
  },
  high: { 
    label: 'High', 
    className: 'bg-orange-100 text-orange-700 border-orange-200',
    order: 1
  },
  medium: { 
    label: 'Medium', 
    className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    order: 2
  },
  low: { 
    label: 'Low', 
    className: 'bg-green-100 text-green-700 border-green-200',
    order: 3
  },
} as const

export const STATUS_CONFIG = {
  'not-started': { 
    label: 'Not Started', 
    className: 'bg-gray-100 text-gray-700 border-gray-200' 
  },
  'in-progress': { 
    label: 'In Progress', 
    className: 'bg-blue-100 text-blue-700 border-blue-200' 
  },
  'completed': { 
    label: 'Completed', 
    className: 'bg-green-100 text-green-700 border-green-200' 
  },
  'on-hold': { 
    label: 'On Hold', 
    className: 'bg-amber-100 text-amber-700 border-amber-200' 
  },
} as const

export const CATEGORY_CONFIG = {
  analytics: 'Analytics',
  sales: 'Sales',
  marketing: 'Marketing',
  operations: 'Operations',
  finance: 'Finance',
  hr: 'HR',
  product: 'Product',
  customer: 'Customer',
  other: 'Other',
} as const

export const VALID_CATEGORIES: Category[] = [
  'analytics',
  'sales', 
  'marketing',
  'operations',
  'finance',
  'hr',
  'product',
  'customer',
  'other'
]

export const VALID_PRIORITIES: Priority[] = [
  'critical',
  'high',
  'medium',
  'low'
]

export const VALID_STATUSES: Status[] = [
  'not-started',
  'in-progress',
  'completed',
  'on-hold'
]
