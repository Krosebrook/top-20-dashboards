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
        
       
        category: 'performance'
      {
        description: 'Percen
        formula: '(Tickets Resolved on First Contact / Total Tick
      },
        
       
        category: 'satisfaction'
    ],
      {
        description: 'Number of new tickets opened in the period',
      },
        
       
      {
        description: 'Number of open/pending tickets',
        category: 'operati
      {
        description: 'Percentage
       
      
        name: 
       
        category: 'quality'
      {
        description: 'Percentag
        
      }
  },
    title: 'Incident Management Dashboard',
    category: 'operations',
    temp
      {
        description: 'Average
        formula: 'Sum(Detection Time) / Total Incident
      },
        name: 'Mean Time to Res
        
       
      {
        description: 'Time to respond to P1/critical incidents',
        formula: 'Average
      },
        name: 'Incident Recurr
        
       
    ],
      {
        description: 'C
      },
        name: 'Incidents by
        
      {
        description: 'Average time t
        formula: 'Sum(Acknowledgment Time) / Total Incidents',
      },
        name: 'Escalation Rate',
        target: '< 15%',
       
     
    
   
      {
        description: 'Number of incidents resolved within SLA',
        category: 'quality'
    ]
  {
    descrip
    pri
    kpis: [
        name: 'Change Success Rate',
        target: '> 95%',
        category: 'quality'
      {
        
       
      },
        name: 'Change-Related Incident Rate',
        target: '< 5%',
        category: 'quality'
      {
        
       
      }
    metrics: [
        name: 'Total Changes Re
        category: 'operational'
      {
        
      }
        name: 'Changes Awaiting Approval'
        category: 'operational'
      {
        description: 'Number of unsuccessful change implementatio
        category: 'quality'
      {
      
        catego
      {
        description: 'Changes made with
        category: 'quality'
    ]
  {
    des
    priority: 'high',
    kpis: [
        name: 'Asset Utilizatio
        
       
      {
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
    ]
  {
    description: 'Monitor service level agreement adhere
    priority: 'critical',
    kpi
      
        target
       
      {
        description: 'Critical incident SLA adherence',
        formula: '(P1 Meeting S
      },
       
        target: '> 97%',
        category: 'performance'
      {
        
       
      }
    metrics: [
        name: 'SLA Breaches - Curren
        target: '< 5%',
      },
       
        category: 'operational'
      {
        description: 'Co
      },
        name: 'SLA Performance
        
      {
        description: 'How far past 
        category: 'performance'
      {
        description: 'SLA perfo
      }
  },
    title: 'Service Request Ful
    category: 'operations',
    templateCategory: '
      {
       
     
    
   
        target: '> 40%',
        category: 'efficiency'
      {
        description: 
        formula: '(Catalog Requests / Total 
      },
       
        target: '> 4.7/5',
        category: 'satisfaction'
    ],
      {
        description: 'Number of
      },
       
        category: 'operational'
      {
        description: 'Re
      },
        name: 'Request Fulfillm
        
      {
        description: 'Percentage of users u
        formula: '(Self-Service Requests / Total Requests) × 100',
      },
        name: 'Request Abandonment Rate',
        target: '< 5%',
        
    ]
  {
    description: 'Individual and team agent metrics including tick
    priority: 'high',
    kpis: [
        name: 'Average Tick
       
      
      {
       
        formula: 'Average(Agen
      },
        name: 'Agent Resolution
        
       
      {
        description: 'Customer satisfaction per agent',
        formula: 'Average(Agent
      }
    met
        name: 'Tickets Assigned per A
        category: 'operational'
      {
        
       
      {
        description: 'Performance by assigned skill/category',
      },
        
       
      {
        description: 'Time spent on training and development',
        category: 'opera
      {
        description: 'Perce
        
      }
  },
    title: 'IT Cost & Budget Management Dashboard',
    category: 'finance',
    templateCategory: 'financ
      {
     
    
   
        name: 'IT Budget Variance',
        target: '±5%',
        category: 'financia
      {
        description: 'Savings achieved throu
        for
      }
        name: 'ROI on IT Investments',
        target: '> 200%',
        category: 'finan
    ],
      {
        
      }
        name: 'Cost by Category',
        category: 'financial'
      {
        description: 'Total software licensing expens
      },
        
       
        category: 'financial'
      {
        description: 'Cl
      },
        name: 'Vendor Spend Ana
        
    ]
  {
    description: 'Track knowledge article usage, effectiveness
    priority: 'medium',
    kpis: [
        name: 'Self-Service Res
       
      
      {
       
        formula: '(Positive Ratings / Total Ra
      },
        name: 'Search S
        target: '> 70%',
        
      {
        description: 'Tickets preven
        formula: '(KB Resolutions / (KB + Ticket Resolutions)) × 100',
      }
    metr
       
        category: 'operational'
      {
        description: 'Total
      },
       
        category: 'operational'
      {
        description: 'Artic
        
      {
        description: 'Common searches with 
      },
        name: 'Article Crea
        target: '> 10',
      }
  }



























































































































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
