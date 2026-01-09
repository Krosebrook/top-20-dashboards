import type { DashboardTemplate } from './dashboard-templates'

export const FRESHSERVICE_TEMPLATES: DashboardTemplate[] = [
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
        description: 'Number of new tickets opened in the period',
        category: 'operational'
      },
      {
        name: 'Open Ticket Backlog',
        description: 'Number of open/pending tickets',
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
        category: 'quality'
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
        name: 'Mean Time to Acknowledge',
        description: 'Average time to acknowledge an incident',
        target: '< 10 minutes',
        formula: 'Sum(Acknowledgment Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'Escalation Rate',
        description: 'Percentage of incidents escalated to higher tiers',
        target: '< 15%',
        formula: '(Escalated Incidents / Total Incidents) × 100',
        category: 'operational'
      },
      {
        name: 'Major Incident Count',
        description: 'Number of business-critical incidents',
        target: '< 5 per month',
        category: 'operational'
      },
      {
        name: 'Incident Resolution by SLA',
        description: 'Number of incidents resolved within SLA',
        target: '> 98%',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Change Management Dashboard',
    description: 'Track change requests, approvals, implementation success rates, and change-related incidents. Monitor CAB effectiveness and change velocity.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Change Success Rate',
        description: 'Percentage of changes implemented successfully',
        target: '> 95%',
        formula: '(Successful Changes / Total Changes) × 100',
        category: 'quality'
      },
      {
        name: 'Emergency Change Rate',
        description: 'Percentage of emergency vs. planned changes',
        target: '< 10%',
        formula: '(Emergency Changes / Total Changes) × 100',
        category: 'operational'
      },
      {
        name: 'Change-Related Incident Rate',
        description: 'Incidents caused by changes',
        target: '< 5%',
        formula: '(Change-Related Incidents / Total Changes) × 100',
        category: 'quality'
      },
      {
        name: 'Change Approval Cycle Time',
        description: 'Average time from submission to approval',
        target: '< 3 days',
        formula: 'Average(Approval Time)',
        category: 'efficiency'
      }
    ],
    metrics: [
      {
        name: 'Total Changes Requested',
        description: 'Number of change requests submitted',
        category: 'operational'
      },
      {
        name: 'Changes by Type',
        description: 'Standard, Normal, Emergency changes breakdown',
        category: 'operational'
      },
      {
        name: 'Changes Awaiting Approval',
        description: 'Pending change requests in approval queue',
        category: 'operational'
      },
      {
        name: 'Failed/Rolled Back Changes',
        description: 'Number of unsuccessful change implementations',
        target: '< 5%',
        category: 'quality'
      },
      {
        name: 'CAB Meeting Effectiveness',
        description: 'Percentage of changes decided in CAB meetings',
        target: '> 90%',
        category: 'efficiency'
      },
      {
        name: 'Unauthorized Changes Detected',
        description: 'Changes made without proper approval',
        target: '0',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Asset Management Dashboard',
    description: 'Comprehensive IT asset tracking including hardware, software, licenses, warranties, and lifecycle management. Monitor asset utilization and compliance.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'finance-operations',
    kpis: [
      {
        name: 'Asset Utilization Rate',
        description: 'Percentage of assets actively in use',
        target: '> 85%',
        formula: '(Active Assets / Total Assets) × 100',
        category: 'efficiency'
      },
      {
        name: 'License Compliance Rate',
        description: 'Software license compliance percentage',
        target: '100%',
        formula: '(Compliant Licenses / Total Licenses) × 100',
        category: 'quality'
      },
      {
        name: 'Asset Refresh Rate',
        description: 'Percentage of assets replaced on schedule',
        target: '> 90%',
        formula: '(Assets Refreshed On Time / Total Due for Refresh) × 100',
        category: 'operational'
      },
      {
        name: 'Cost per Asset',
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
        description: 'Critical incident SLA adherence',
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
        target: '> 40%',
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
        target: '> 4.7/5',
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
        formula: '(Self-Service Requests / Total Requests) × 100',
        category: 'efficiency'
      },
      {
        name: 'Request Abandonment Rate',
        description: 'Requests cancelled or abandoned',
        target: '< 5%',
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
        category: 'operational'
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
        target: '> 90%',
        category: 'operational'
      },
      {
        name: 'Agent Specialization Performance',
        description: 'Performance by assigned skill/category',
        category: 'quality'
      },
      {
        name: 'Collaboration Metrics',
        description: 'Tickets with agent collaboration/handoffs',
        category: 'operational'
      },
      {
        name: 'Agent Training Hours',
        description: 'Time spent on training and development',
        target: '> 4 hours/month',
        category: 'operational'
      },
      {
        name: 'Ticket Reassignment Rate',
        description: 'Percentage of tickets reassigned by agent',
        target: '< 10%',
        formula: '(Reassigned Tickets / Total Assigned) × 100',
        category: 'efficiency'
      }
    ]
  },
  {
    title: 'IT Cost & Budget Management Dashboard',
    description: 'Financial tracking of IT spending, cost per ticket, budget allocation, and ROI analysis for IT operations and investments.',
    category: 'finance',
    priority: 'high',
    templateCategory: 'finance-operations',
    kpis: [
      {
        name: 'Cost per Ticket',
        description: 'Average cost to resolve a ticket',
        target: '< $25',
        formula: 'Total IT Costs / Total Tickets Resolved',
        category: 'financial'
      },
      {
        name: 'IT Budget Variance',
        description: 'Difference between planned and actual spend',
        target: '±5%',
        formula: '((Actual - Budget) / Budget) × 100',
        category: 'financial'
      },
      {
        name: 'Cost Savings from Automation',
        description: 'Savings achieved through automation initiatives',
        target: 'Increase quarterly',
        formula: 'Manual Process Cost - Automated Process Cost',
        category: 'financial'
      },
      {
        name: 'ROI on IT Investments',
        description: 'Return on investment for IT projects',
        target: '> 200%',
        formula: '((Benefit - Cost) / Cost) × 100',
        category: 'financial'
      }
    ],
    metrics: [
      {
        name: 'Total IT Operating Costs',
        description: 'Monthly/quarterly IT operational expenses',
        category: 'financial'
      },
      {
        name: 'Cost by Category',
        description: 'Hardware, software, personnel, infrastructure costs',
        category: 'financial'
      },
      {
        name: 'License & Subscription Costs',
        description: 'Total software licensing expenses',
        category: 'financial'
      },
      {
        name: 'Cost per Employee',
        description: 'IT spend per company employee',
        target: 'Industry benchmark',
        formula: 'Total IT Costs / Total Employees',
        category: 'financial'
      },
      {
        name: 'Infrastructure Cost Trend',
        description: 'Cloud vs. on-premise cost comparison',
        category: 'financial'
      },
      {
        name: 'Vendor Spend Analysis',
        description: 'Top vendors by spending amount',
        category: 'financial'
      }
    ]
  },
  {
    title: 'Knowledge Base & Self-Service Dashboard',
    description: 'Track knowledge article usage, effectiveness, self-service resolution rates, and content gaps in the knowledge management system.',
    category: 'customer',
    priority: 'medium',
    templateCategory: 'customer-success',
    kpis: [
      {
        name: 'Self-Service Resolution Rate',
        description: 'Issues resolved without agent intervention',
        target: '> 40%',
        formula: '(Self-Resolved / Total Interactions) × 100',
        category: 'efficiency'
      },
      {
        name: 'Knowledge Article Effectiveness',
        description: 'Percentage of helpful article ratings',
        target: '> 85%',
        formula: '(Positive Ratings / Total Ratings) × 100',
        category: 'quality'
      },
      {
        name: 'Search Success Rate',
        description: 'Searches resulting in article views',
        target: '> 70%',
        formula: '(Searches with Views / Total Searches) × 100',
        category: 'quality'
      },
      {
        name: 'Deflection Rate',
        description: 'Tickets prevented by knowledge base',
        target: '> 30%',
        formula: '(KB Resolutions / (KB + Ticket Resolutions)) × 100',
        category: 'efficiency'
      }
    ],
    metrics: [
      {
        name: 'Total Knowledge Articles',
        description: 'Number of articles in knowledge base',
        category: 'operational'
      },
      {
        name: 'Article Views',
        description: 'Total knowledge article page views',
        category: 'operational'
      },
      {
        name: 'Top Viewed Articles',
        description: 'Most accessed knowledge base content',
        category: 'operational'
      },
      {
        name: 'Outdated Articles',
        description: 'Articles not reviewed in 6+ months',
        target: '< 10%',
        category: 'quality'
      },
      {
        name: 'Content Gap Analysis',
        description: 'Common searches with no matching articles',
        category: 'quality'
      },
      {
        name: 'Article Creation Rate',
        description: 'New articles published per month',
        target: '> 10',
        category: 'operational'
      }
    ]
  }
]
