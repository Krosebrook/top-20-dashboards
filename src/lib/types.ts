export type Priority = 'critical' | 'high' | 'medium' | 'low'
export type Status = 'not-started' | 'in-progress' | 'completed' | 'on-hold'
export type Category = 'analytics' | 'sales' | 'marketing' | 'operations' | 'finance' | 'hr' | 'product' | 'customer' | 'other'

export interface Dashboard {
  id: string
  title: string
  description: string
  category: Category
  priority: Priority
  status: Status
  createdAt: number
}
