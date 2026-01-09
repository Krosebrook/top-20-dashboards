import type { Dashboard, Category, Priority, MetricDefinition } from './types'
import { freshserviceTemplates } from './freshservice-templates'

export interface DashboardTemplate {
  title: string
  description: string
  category: Category
  priority: Priority
  templateCategory: TemplateCategory
  metrics?: MetricDefinition[]
  kpis?: MetricDefinition[]
}

export type TemplateCategory = 
  | 'freshservice-it'
  | 'business-essentials'
  | 'sales-marketing'
  | 'product-engineering'
  | 'finance-operations'
  | 'people-culture'
  | 'customer-success'
  | 'executive'
  | 'startup'

export interface TemplateCategoryInfo {
  id: TemplateCategory
  name: string
  description: string
  icon: string
}

export const TEMPLATE_CATEGORIES: TemplateCategoryInfo[] = [
  {
    id: 'freshservice-it',
    name: 'Freshservice IT Dashboards',
    description: 'Professional-grade IT service management dashboards',
    icon: '🛠️'
  },
  {
    id: 'business-essentials',
    name: 'Business Essentials',
    description: 'Core dashboards every business needs',
    icon: '📊'
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'High-level views for leadership',
    icon: '👔'
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    description: 'Revenue and growth tracking',
    icon: '📈'
  },
  {
    id: 'product-engineering',
    name: 'Product & Engineering',
    description: 'Development and product metrics',
    icon: '⚙️'
  },
  {
    id: 'finance-operations',
    name: 'Finance & Operations',
    description: 'Financial health and operations',
    icon: '💰'
  },
  {
    id: 'people-culture',
    name: 'People & Culture',
    description: 'Team and HR metrics',
    icon: '👥'
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    description: 'Customer health and satisfaction',
    icon: '🎯'
  },
  {
    id: 'startup',
    name: 'Startup Kit',
    description: 'Essential metrics for early-stage companies',
    icon: '🚀'
  }
]

export const DASHBOARD_TEMPLATES: DashboardTemplate[] = [
  ...freshserviceTemplates,
  {
    title: 'Revenue Performance Dashboard',
    description: 'Track MRR, ARR, revenue growth, and revenue by segment. Monitor financial performance and trends over time.',
    category: 'sales',
    priority: 'critical',
    templateCategory: 'business-essentials'
  },
  {
    title: 'Key Metrics Overview',
    description: 'High-level view of critical business metrics including revenue, users, conversion rates, and growth trends.',
    category: 'analytics',
    priority: 'critical',
    templateCategory: 'business-essentials'
  },
  {
    title: 'Customer Acquisition Dashboard',
    description: 'Monitor CAC, conversion funnel, lead sources, and acquisition channel performance.',
    category: 'marketing',
    priority: 'high',
    templateCategory: 'business-essentials'
  },
  {
    title: 'Product Analytics Dashboard',
    description: 'Track user engagement, feature adoption, session duration, and product usage patterns.',
    category: 'product',
    priority: 'high',
    templateCategory: 'business-essentials'
  },
  {
    title: 'Customer Health Score',
    description: 'Monitor customer satisfaction, NPS scores, churn risk indicators, and renewal probability.',
    category: 'customer',
    priority: 'high',
    templateCategory: 'business-essentials'
  },
  {
    title: 'Executive Summary Dashboard',
    description: 'C-suite view of company performance: revenue, growth, market position, and strategic KPIs.',
    category: 'analytics',
    priority: 'critical',
    templateCategory: 'executive'
  },
  {
    title: 'Board Meeting Dashboard',
    description: 'Quarterly metrics for board presentations: financials, milestones, risks, and strategic initiatives.',
    category: 'analytics',
    priority: 'high',
    templateCategory: 'executive'
  },
  {
    title: 'Strategic Initiatives Tracker',
    description: 'Monitor progress on company OKRs, strategic goals, and cross-functional initiatives.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'executive'
  },
  {
    title: 'Investor Relations Dashboard',
    description: 'Key metrics for investor updates: burn rate, runway, growth metrics, and unit economics.',
    category: 'finance',
    priority: 'medium',
    templateCategory: 'executive'
  },
  {
    title: 'Sales Pipeline Dashboard',
    description: 'Track deals in progress, pipeline velocity, win rates, and sales forecast accuracy.',
    category: 'sales',
    priority: 'critical',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Sales Performance Dashboard',
    description: 'Individual and team sales metrics, quota attainment, deal sizes, and sales cycle length.',
    category: 'sales',
    priority: 'high',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Marketing Campaign Performance',
    description: 'Track campaign ROI, engagement rates, conversion metrics, and channel effectiveness.',
    category: 'marketing',
    priority: 'high',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Lead Generation Dashboard',
    description: 'Monitor lead volume, quality scores, source attribution, and lead-to-customer conversion.',
    category: 'marketing',
    priority: 'high',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Content Marketing Analytics',
    description: 'Track content performance, SEO rankings, organic traffic, and content engagement metrics.',
    category: 'marketing',
    priority: 'medium',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Monitor social engagement, follower growth, reach, and social-driven conversions.',
    category: 'marketing',
    priority: 'medium',
    templateCategory: 'sales-marketing'
  },
  {
    title: 'Product Development Velocity',
    description: 'Track sprint velocity, story points completed, cycle time, and development throughput.',
    category: 'product',
    priority: 'high',
    templateCategory: 'product-engineering'
  },
  {
    title: 'Engineering Metrics Dashboard',
    description: 'Monitor deployment frequency, lead time for changes, MTTR, and change failure rate (DORA metrics).',
    category: 'operations',
    priority: 'high',
    templateCategory: 'product-engineering'
  },
  {
    title: 'Product Roadmap Dashboard',
    description: 'Track feature releases, roadmap progress, development status, and planned vs. actual delivery.',
    category: 'product',
    priority: 'high',
    templateCategory: 'product-engineering'
  },
  {
    title: 'Bug & Issue Tracking',
    description: 'Monitor bug counts by severity, resolution time, technical debt, and quality metrics.',
    category: 'product',
    priority: 'medium',
    templateCategory: 'product-engineering'
  },
  {
    title: 'API Performance Dashboard',
    description: 'Track API latency, error rates, throughput, and endpoint-specific performance metrics.',
    category: 'operations',
    priority: 'medium',
    templateCategory: 'product-engineering'
  },
  {
    title: 'System Health & Uptime',
    description: 'Monitor application uptime, system performance, server health, and infrastructure costs.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'product-engineering'
  },
  {
    title: 'Financial Performance Dashboard',
    description: 'Track P&L statements, burn rate, runway, cash flow, and financial health indicators.',
    category: 'finance',
    priority: 'critical',
    templateCategory: 'finance-operations'
  },
  {
    title: 'Budget vs. Actuals',
    description: 'Monitor spending against budget across departments, categories, and time periods.',
    category: 'finance',
    priority: 'high',
    templateCategory: 'finance-operations'
  },
  {
    title: 'Operational Efficiency Dashboard',
    description: 'Track operational KPIs, process cycle times, resource utilization, and efficiency metrics.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'finance-operations'
  },
  {
    title: 'Vendor & Contract Management',
    description: 'Monitor vendor spend, contract renewals, SLA compliance, and procurement metrics.',
    category: 'operations',
    priority: 'medium',
    templateCategory: 'finance-operations'
  },
  {
    title: 'Cash Flow Forecast',
    description: 'Project cash flow, track accounts receivable/payable, and monitor working capital.',
    category: 'finance',
    priority: 'high',
    templateCategory: 'finance-operations'
  },
  {
    title: 'Team Performance Dashboard',
    description: 'Track team productivity, goal completion, project status, and cross-functional collaboration.',
    category: 'hr',
    priority: 'high',
    templateCategory: 'people-culture'
  },
  {
    title: 'Hiring & Recruitment Dashboard',
    description: 'Monitor open positions, candidate pipeline, time-to-hire, offer acceptance rates, and hiring costs.',
    category: 'hr',
    priority: 'high',
    templateCategory: 'people-culture'
  },
  {
    title: 'Employee Engagement Dashboard',
    description: 'Track engagement scores, survey results, participation rates, and sentiment analysis.',
    category: 'hr',
    priority: 'medium',
    templateCategory: 'people-culture'
  },
  {
    title: 'Retention & Attrition Dashboard',
    description: 'Monitor turnover rates, retention trends, exit interview insights, and flight risk indicators.',
    category: 'hr',
    priority: 'high',
    templateCategory: 'people-culture'
  },
  {
    title: 'Learning & Development',
    description: 'Track training completion, skill development, certification progress, and learning engagement.',
    category: 'hr',
    priority: 'low',
    templateCategory: 'people-culture'
  },
  {
    title: 'Customer Support Dashboard',
    description: 'Monitor ticket volume, response time, resolution time, CSAT scores, and support team performance.',
    category: 'customer',
    priority: 'high',
    templateCategory: 'customer-success'
  },
  {
    title: 'Customer Retention Dashboard',
    description: 'Track retention rates, churn metrics, cohort analysis, and customer lifetime value.',
    category: 'customer',
    priority: 'critical',
    templateCategory: 'customer-success'
  },
  {
    title: 'Customer Feedback Dashboard',
    description: 'Aggregate customer feedback, feature requests, NPS trends, and sentiment analysis.',
    category: 'customer',
    priority: 'medium',
    templateCategory: 'customer-success'
  },
  {
    title: 'Onboarding Success Dashboard',
    description: 'Track new customer onboarding progress, time-to-value, activation rates, and early engagement.',
    category: 'customer',
    priority: 'high',
    templateCategory: 'customer-success'
  },
  {
    title: 'Account Expansion Dashboard',
    description: 'Monitor upsell opportunities, expansion revenue, product adoption, and account growth.',
    category: 'sales',
    priority: 'medium',
    templateCategory: 'customer-success'
  },
  {
    title: 'North Star Metric Dashboard',
    description: 'Focus on your primary growth metric with supporting indicators and correlation analysis.',
    category: 'analytics',
    priority: 'critical',
    templateCategory: 'startup'
  },
  {
    title: 'Startup Growth Dashboard',
    description: 'Track user growth, engagement, retention, and viral coefficient for early-stage traction.',
    category: 'analytics',
    priority: 'critical',
    templateCategory: 'startup'
  },
  {
    title: 'Unit Economics Dashboard',
    description: 'Monitor CAC, LTV, payback period, contribution margin, and path to profitability.',
    category: 'finance',
    priority: 'critical',
    templateCategory: 'startup'
  },
  {
    title: 'Fundraising Readiness Dashboard',
    description: 'Key metrics investors want to see: growth rate, retention, market size, and traction indicators.',
    category: 'analytics',
    priority: 'high',
    templateCategory: 'startup'
  },
  {
    title: 'Product-Market Fit Indicators',
    description: 'Track PMF signals: retention cohorts, NPS, organic growth, and customer satisfaction metrics.',
    category: 'product',
    priority: 'critical',
    templateCategory: 'startup'
  },
  {
    title: 'Burn Rate & Runway Dashboard',
    description: 'Monitor cash burn, runway calculation, spending trends, and path to break-even.',
    category: 'finance',
    priority: 'critical',
    templateCategory: 'startup'
  }
]

export function getTemplatesByCategory(categoryId: TemplateCategory): DashboardTemplate[] {
  return DASHBOARD_TEMPLATES.filter(t => t.templateCategory === categoryId)
}

export function searchTemplates(query: string): DashboardTemplate[] {
  const lowerQuery = query.toLowerCase()
  return DASHBOARD_TEMPLATES.filter(
    t => t.title.toLowerCase().includes(lowerQuery) || 
         t.description.toLowerCase().includes(lowerQuery)
  )
}
