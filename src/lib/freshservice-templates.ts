import type { DashboardTemplate } from './dashboard-templates'

export const freshserviceTemplates: DashboardTemplate[] = [
  {
    title: 'IT Service Desk Performance Dashboard',
    description: 'Comprehensive overview of service desk operations including ticket volumes, response times, resolution rates, and agent performance metrics.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'First Response Time (FRT)',
        description: 'Average time taken to respond to a ticket',
        target: '< 15 minutes',
        formula: 'Sum(Time to First Response) / Total Tickets',
        category: 'performance'
      },
      {
        name: 'First Contact Resolution (FCR)',
        description: 'Percentage of tickets resolved on first contact',
        target: '> 70%',
        formula: '(Tickets Resolved on First Contact / Total Tickets) × 100',
        category: 'quality'
      },
      {
        name: 'Average Resolution Time',
        description: 'Mean time to resolve tickets',
        target: '< 24 hours',
        formula: 'Sum(Resolution Time) / Total Tickets',
        category: 'performance'
      },
      {
        name: 'Customer Satisfaction Score (CSAT)',
        description: 'Average customer satisfaction rating',
        target: '> 4.5/5',
        formula: 'Average(Customer Ratings)',
        category: 'satisfaction'
      }
    ],
    metrics: [
      {
        name: 'Total Tickets Created',
        description: 'Count of all tickets submitted',
        category: 'operational'
      },
      {
        name: 'Open Ticket Backlog',
        description: 'Number of unresolved tickets',
        category: 'operational'
      },
      {
        name: 'Tickets by Priority',
        description: 'Distribution of ticket priorities',
        category: 'operational'
      },
      {
        name: 'SLA Compliance',
        description: 'Percentage of tickets meeting SLA',
        target: '> 95%',
        category: 'performance'
      },
      {
        name: 'Reopened Tickets',
        description: 'Percentage of tickets reopened after closure',
        target: '< 5%',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Incident Management Dashboard',
    description: 'Track incident detection, response, resolution times, and major incident management. Monitor MTTR, MTTD, and incident trends.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Mean Time to Detect (MTTD)',
        description: 'Average time to detect an incident',
        target: '< 5 minutes',
        formula: 'Sum(Detection Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'Mean Time to Resolve (MTTR)',
        description: 'Average time to resolve incidents',
        target: '< 4 hours',
        formula: 'Sum(Resolution Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'P1 Incident Response Time',
        description: 'Time to respond to P1/critical incidents',
        target: '< 15 minutes',
        formula: 'Average(P1 Response Time)',
        category: 'performance'
      },
      {
        name: 'Incident Recurrence Rate',
        description: 'Percentage of recurring incidents',
        target: '< 10%',
        formula: '(Recurring Incidents / Total Incidents) × 100',
        category: 'quality'
      }
    ],
    metrics: [
      {
        name: 'Total Incidents',
        description: 'Count of all incidents by priority',
        category: 'operational'
      },
      {
        name: 'Incidents by Category',
        description: 'Breakdown by incident type/category',
        category: 'operational'
      },
      {
        name: 'Major Incidents',
        description: 'Count of P1/critical incidents',
        target: '0',
        category: 'operational'
      },
      {
        name: 'Mean Time to Acknowledge',
        description: 'Average time to acknowledge incidents',
        category: 'performance'
      }
    ]
  },
  {
    title: 'Asset Management Dashboard',
    description: 'Monitor IT asset inventory, lifecycle management, software license compliance, and asset costs across the organization.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'License Compliance Rate',
        description: 'Percentage of compliant software licenses',
        target: '100%',
        formula: '(Compliant Licenses / Total Licenses) × 100',
        category: 'operational'
      },
      {
        name: 'Asset Refresh Rate',
        description: 'Percentage of assets refreshed on schedule',
        target: '> 90%',
        category: 'operational'
      },
      {
        name: 'Average Asset Cost',
        description: 'Average cost per managed asset',
        target: 'Within budget',
        formula: 'Total Asset Costs / Total Assets',
        category: 'financial'
      }
    ],
    metrics: [
      {
        name: 'Total Assets by Type',
        description: 'Hardware, software, network equipment counts',
        category: 'operational'
      },
      {
        name: 'Assets Nearing EOL',
        description: 'Assets approaching end of life',
        target: 'Plan for replacement',
        category: 'operational'
      },
      {
        name: 'Software License Utilization',
        description: 'Percentage of purchased licenses in use',
        target: '> 80%',
        category: 'efficiency'
      },
      {
        name: 'Warranty Expiration Tracking',
        description: 'Assets with expiring warranties',
        category: 'operational'
      },
      {
        name: 'Asset Location Distribution',
        description: 'Assets by location/department',
        category: 'operational'
      }
    ]
  },
  {
    title: 'SLA Management Dashboard',
    description: 'Monitor service level agreement adherence, breach analysis, and response/resolution time compliance across all ticket categories.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Overall SLA Compliance',
        description: 'Percentage of tickets meeting SLA',
        target: '> 95%',
        formula: '(Tickets Meeting SLA / Total Tickets) × 100',
        category: 'performance'
      },
      {
        name: 'P1 SLA Compliance',
        description: 'Critical ticket SLA adherence',
        target: '> 99%',
        formula: '(P1 Meeting SLA / Total P1) × 100',
        category: 'performance'
      },
      {
        name: 'Response Time SLA',
        description: 'First response within SLA',
        target: '> 97%',
        formula: '(On-time Responses / Total Tickets) × 100',
        category: 'performance'
      },
      {
        name: 'Resolution Time SLA',
        description: 'Resolutions within SLA target',
        target: '> 95%',
        formula: '(On-time Resolutions / Total Resolved) × 100',
        category: 'performance'
      }
    ],
    metrics: [
      {
        name: 'SLA Breaches - Current Period',
        description: 'Count of SLA violations',
        target: '< 5%',
        category: 'quality'
      },
      {
        name: 'Tickets at Risk',
        description: 'Tickets approaching SLA breach',
        category: 'operational'
      },
      {
        name: 'SLA Performance by Category',
        description: 'Compliance rates by ticket type',
        category: 'quality'
      },
      {
        name: 'Average SLA Buffer Time',
        description: 'How far ahead of SLA tickets are resolved',
        target: 'Positive buffer',
        category: 'performance'
      },
      {
        name: 'SLA Trends',
        description: 'SLA performance over time',
        category: 'performance'
      }
    ]
  },
  {
    title: 'Service Request Fulfillment Dashboard',
    description: 'Track service catalog requests, fulfillment times, request approval workflows, and self-service adoption rates.',
    category: 'operations',
    priority: 'medium',
    templateCategory: 'customer-success',
    kpis: [
      {
        name: 'Average Fulfillment Time',
        description: 'Mean time to complete service requests',
        target: '< 48 hours',
        formula: 'Sum(Fulfillment Time) / Total Requests',
        category: 'performance'
      },
      {
        name: 'Self-Service Adoption Rate',
        description: 'Percentage of requests via service catalog',
        target: '> 70%',
        formula: '(Catalog Requests / Total Requests) × 100',
        category: 'efficiency'
      },
      {
        name: 'Request Fulfillment SLA',
        description: 'Requests completed within SLA',
        target: '> 90%',
        formula: '(On-time Fulfillments / Total Requests) × 100',
        category: 'quality'
      },
      {
        name: 'Request Satisfaction Score',
        description: 'User satisfaction with service requests',
        target: '> 4.5/5',
        formula: 'Average(Request Ratings)',
        category: 'satisfaction'
      }
    ],
    metrics: [
      {
        name: 'Total Service Requests',
        description: 'Number of requests submitted',
        category: 'operational'
      },
      {
        name: 'Requests by Category',
        description: 'Request breakdown by service type',
        category: 'operational'
      },
      {
        name: 'Pending Approvals',
        description: 'Requests awaiting approval',
        category: 'operational'
      },
      {
        name: 'Request Fulfillment by Department',
        description: 'Fulfillment team performance',
        category: 'operational'
      },
      {
        name: 'Catalog Usage Analytics',
        description: 'Percentage of users using service catalog',
        target: '> 60%',
        category: 'efficiency'
      },
      {
        name: 'Request Abandonment Rate',
        description: 'Requests cancelled or abandoned',
        formula: '(Abandoned Requests / Total Requests) × 100',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Agent Performance Dashboard',
    description: 'Individual and team agent metrics including ticket resolution, productivity, customer satisfaction, and workload distribution.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Average Tickets per Agent',
        description: 'Mean tickets handled per agent',
        target: '20-30 per day',
        formula: 'Total Tickets / Total Active Agents',
        category: 'efficiency'
      },
      {
        name: 'Agent Utilization Rate',
        description: 'Percentage of time agents spend on tickets',
        target: '> 75%',
        formula: '(Active Time / Total Time) × 100',
        category: 'efficiency'
      },
      {
        name: 'Agent Resolution Rate',
        description: 'Percentage of tickets resolved by agent',
        target: '> 85%',
        formula: '(Resolved Tickets / Assigned Tickets) × 100',
        category: 'quality'
      },
      {
        name: 'Agent CSAT Score',
        description: 'Customer satisfaction per agent',
        target: '> 4.5/5',
        formula: 'Average(Agent Ratings)',
        category: 'satisfaction'
      }
    ],
    metrics: [
      {
        name: 'Tickets Assigned per Agent',
        description: 'Current workload distribution',
        category: 'operational'
      },
      {
        name: 'Agent Response Time',
        description: 'Average time to first response by agent',
        category: 'performance'
      },
      {
        name: 'Agent Resolution Time',
        description: 'Average resolution time per agent',
        category: 'performance'
      },
      {
        name: 'Backlog per Agent',
        description: 'Open tickets assigned to each agent',
        category: 'operational'
      },
      {
        name: 'Agent Availability',
        description: 'Online/available time percentage',
        category: 'operational'
      }
    ]
  }
]
