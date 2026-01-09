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
        name: 'Average Resolution Time',
        description: 'Mean time to resolve tickets',
        target: '< 4 hours',
        formula: 'Sum(Resolution Time) / Total Resolved Tickets',
        category: 'performance'
      },
      {
        name: 'First Contact Resolution (FCR) Rate',
        description: 'Percentage of tickets resolved on first contact',
        target: '> 70%',
        formula: '(Tickets Resolved on First Contact / Total Tickets) × 100',
        category: 'quality'
      },
      {
        name: 'Customer Satisfaction Score (CSAT)',
        description: 'Average satisfaction rating from ticket surveys',
        target: '> 4.5/5',
        formula: 'Average(Survey Ratings)',
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
        name: 'Tickets Resolved',
        description: 'Number of tickets closed/resolved',
        category: 'operational'
      },
      {
        name: 'Backlog Size',
        description: 'Number of open/pending tickets',
        target: '< 100',
        category: 'operational'
      },
      {
        name: 'Agent Utilization Rate',
        description: 'Percentage of agent time spent on productive work',
        target: '75-85%',
        formula: '(Active Time / Total Available Time) × 100',
        category: 'efficiency'
      },
      {
        name: 'Ticket Reopening Rate',
        description: 'Percentage of tickets reopened after resolution',
        target: '< 5%',
        formula: '(Reopened Tickets / Total Resolved) × 100',
        category: 'quality'
      },
      {
        name: 'SLA Compliance Rate',
        description: 'Percentage of tickets meeting SLA targets',
        target: '> 95%',
        formula: '(Tickets Meeting SLA / Total Tickets) × 100',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Incident Management Dashboard',
    description: 'Real-time monitoring of IT incidents, their severity, impact, and resolution progress. Track MTTR, incident trends, and major incident handling.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Mean Time to Detect (MTTD)',
        description: 'Average time to identify an incident',
        target: '< 5 minutes',
        formula: 'Sum(Detection Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'Mean Time to Resolve (MTTR)',
        description: 'Average time to resolve incidents',
        target: '< 2 hours',
        formula: 'Sum(Resolution Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'Critical Incident Response Time',
        description: 'Time to respond to P1/critical incidents',
        target: '< 15 minutes',
        formula: 'Average(Response Time for P1 Incidents)',
        category: 'performance'
      },
      {
        name: 'Incident Recurrence Rate',
        description: 'Percentage of incidents that recur',
        target: '< 10%',
        formula: '(Recurring Incidents / Total Incidents) × 100',
        category: 'quality'
      }
    ],
    metrics: [
      {
        name: 'Total Active Incidents',
        description: 'Current number of open incidents',
        category: 'operational'
      },
      {
        name: 'Incidents by Priority',
        description: 'Breakdown of P1, P2, P3, P4 incidents',
        category: 'operational'
      },
      {
        name: 'Mean Time to Acknowledge (MTTA)',
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
        description: 'Total cost of ownership per asset',
        target: 'Trend downward',
        formula: 'Total Asset Costs / Number of Assets',
        category: 'financial'
      }
    ],
    metrics: [
      {
        name: 'Total Assets Under Management',
        description: 'Total number of IT assets tracked',
        category: 'operational'
      },
      {
        name: 'Assets by Category',
        description: 'Hardware, Software, Network, Mobile devices breakdown',
        category: 'operational'
      },
      {
        name: 'Warranty Expiring Soon',
        description: 'Assets with warranties expiring in next 90 days',
        target: 'Monitor and renew',
        category: 'operational'
      },
      {
        name: 'Software License Utilization',
        description: 'Percentage of purchased licenses in use',
        target: '> 80%',
        formula: '(Used Licenses / Total Licenses) × 100',
        category: 'efficiency'
      },
      {
        name: 'End-of-Life Assets',
        description: 'Assets past manufacturer support date',
        target: '< 5%',
        category: 'operational'
      },
      {
        name: 'Missing Assets',
        description: 'Assets not found during audit',
        target: '< 1%',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Problem Management Dashboard',
    description: 'Root cause analysis tracking, known error database management, and proactive problem identification to reduce recurring incidents.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'product-engineering',
    kpis: [
      {
        name: 'Mean Time to Problem Resolution',
        description: 'Average time to resolve identified problems',
        target: '< 10 days',
        formula: 'Sum(Problem Resolution Time) / Total Problems',
        category: 'performance'
      },
      {
        name: 'Incident to Problem Conversion Rate',
        description: 'Percentage of incidents converted to problems',
        target: '5-10%',
        formula: '(Problems Created / Total Incidents) × 100',
        category: 'operational'
      },
      {
        name: 'Known Error Detection Rate',
        description: 'Percentage of problems with identified root cause',
        target: '> 80%',
        formula: '(Known Errors / Total Problems) × 100',
        category: 'quality'
      },
      {
        name: 'Proactive Problem Identification',
        description: 'Problems identified before incidents occur',
        target: '> 30%',
        formula: '(Proactive Problems / Total Problems) × 100',
        category: 'quality'
      }
    ],
    metrics: [
      {
        name: 'Open Problems',
        description: 'Current number of active problems',
        category: 'operational'
      },
      {
        name: 'Known Errors Database Size',
        description: 'Number of documented known errors with workarounds',
        category: 'operational'
      },
      {
        name: 'Problems by Category',
        description: 'Hardware, Software, Network, Process problems',
        category: 'operational'
      },
      {
        name: 'Incidents Prevented',
        description: 'Estimated incidents prevented by problem resolution',
        category: 'quality'
      },
      {
        name: 'Root Cause Analysis Completion Rate',
        description: 'Percentage of problems with completed RCA',
        target: '> 95%',
        formula: '(RCAs Completed / Total Closed Problems) × 100',
        category: 'quality'
      },
      {
        name: 'Average Cost per Problem',
        description: 'Total cost to resolve problems',
        target: 'Trend downward',
        category: 'financial'
      }
    ]
  },
  {
    title: 'SLA Compliance & Performance Dashboard',
    description: 'Monitor service level agreement adherence across all ticket types, track SLA breaches, and analyze performance against targets.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
      {
        name: 'Overall SLA Compliance',
        description: 'Percentage of all tickets meeting SLA',
        target: '> 95%',
        formula: '(Tickets Meeting SLA / Total Tickets) × 100',
        category: 'quality'
      },
      {
        name: 'P1 Incident SLA Compliance',
        description: 'Critical incident SLA adherence',
        target: '> 98%',
        formula: '(P1 Meeting SLA / Total P1) × 100',
        category: 'quality'
      },
      {
        name: 'Response SLA Met',
        description: 'Percentage meeting first response SLA',
        target: '> 97%',
        formula: '(Responses Within SLA / Total Tickets) × 100',
        category: 'performance'
      },
      {
        name: 'Resolution SLA Met',
        description: 'Percentage meeting resolution time SLA',
        target: '> 93%',
        formula: '(Resolutions Within SLA / Total Resolved) × 100',
        category: 'performance'
      }
    ],
    metrics: [
      {
        name: 'SLA Breaches - Current Period',
        description: 'Total number of SLA violations',
        target: '< 5%',
        category: 'quality'
      },
      {
        name: 'Near-Breach Tickets',
        description: 'Tickets approaching SLA deadline (< 20% time remaining)',
        category: 'operational'
      },
      {
        name: 'SLA Performance by Priority',
        description: 'Compliance rate for P1, P2, P3, P4 tickets',
        category: 'quality'
      },
      {
        name: 'SLA Performance by Category',
        description: 'Compliance by incident, request, problem, change',
        category: 'quality'
      },
      {
        name: 'Average Time to SLA Breach',
        description: 'How far past SLA tickets are when breached',
        target: 'Minimize',
        category: 'performance'
      },
      {
        name: 'Business Hours vs. After Hours SLA',
        description: 'SLA performance comparison by time period',
        category: 'operational'
      }
    ]
  },
  {
    title: 'Service Request Fulfillment Dashboard',
    description: 'Track service request catalog usage, fulfillment times, automation rates, and service request satisfaction metrics.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'customer-success',
    kpis: [
      {
        name: 'Average Fulfillment Time',
        description: 'Mean time to complete service requests',
        target: '< 2 days',
        formula: 'Sum(Fulfillment Time) / Total Requests',
        category: 'performance'
      },
      {
        name: 'Service Request Automation Rate',
        description: 'Percentage of requests fulfilled automatically',
        target: '> 40%',
        formula: '(Automated Fulfillments / Total Requests) × 100',
        category: 'efficiency'
      },
      {
        name: 'Service Catalog Adoption Rate',
        description: 'Requests submitted via catalog vs. ad-hoc',
        target: '> 80%',
        formula: '(Catalog Requests / Total Requests) × 100',
        category: 'efficiency'
      },
      {
        name: 'Service Request CSAT',
        description: 'Satisfaction score for service requests',
        target: '> 4.7/5',
        formula: 'Average(Service Request Ratings)',
        category: 'satisfaction'
      }
    ],
    metrics: [
      {
        name: 'Total Service Requests',
        description: 'Number of service requests submitted',
        category: 'operational'
      },
      {
        name: 'Top Requested Services',
        description: 'Most frequently requested catalog items',
        category: 'operational'
      },
      {
        name: 'Pending Approvals',
        description: 'Requests waiting for manager/budget approval',
        category: 'operational'
      },
      {
        name: 'Request Fulfillment by Type',
        description: 'Hardware, software, access, onboarding requests',
        category: 'operational'
      },
      {
        name: 'Self-Service Portal Usage',
        description: 'Percentage of users using self-service',
        target: '> 70%',
        formula: '(Self-Service Requests / Total Requests) × 100',
        category: 'efficiency'
      },
      {
        name: 'Request Abandonment Rate',
        description: 'Requests cancelled before fulfillment',
        target: '< 5%',
        formula: '(Cancelled Requests / Total Requests) × 100',
        category: 'quality'
      }
    ]
  },
  {
    title: 'Agent Performance & Productivity Dashboard',
    description: 'Individual and team agent metrics including ticket handling, response times, resolution quality, and workload distribution.',
    category: 'hr',
    priority: 'high',
    templateCategory: 'people-culture',
    kpis: [
      {
        name: 'Average Tickets per Agent per Day',
        description: 'Daily ticket handling capacity',
        target: '15-25 tickets',
        formula: 'Total Tickets / (Agents × Working Days)',
        category: 'performance'
      },
      {
        name: 'Agent Response Time',
        description: 'Average first response time by agent',
        target: '< 20 minutes',
        formula: 'Average(Agent First Response Times)',
        category: 'performance'
      },
      {
        name: 'Agent Resolution Rate',
        description: 'Percentage of tickets resolved by agent',
        target: '> 85%',
        formula: '(Tickets Resolved / Tickets Assigned) × 100',
        category: 'quality'
      },
      {
        name: 'Agent CSAT Score',
        description: 'Customer satisfaction per agent',
        target: '> 4.5/5',
        formula: 'Average(Agent-Specific Ratings)',
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
