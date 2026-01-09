import type { DashboardTemplate } from './dashboard-templates'

    title: 'Service Desk Overview Dashboard',
   
    templateCategory: 'freshservice-it',
      {
        description: 'Perce
        formula: '(Resolv
      },
        nam
       
        category: 'performance'
      {
        description: 'Av
        formula: 'Average(Customer Ratings)',
      },
        
       
        category: 'quality'
    ],
      {
        description: 'Count of all tickets submitted',
      },
        
       
      {
        description: 'Percentage of agent time spent on tick
      },
        name: 'SLA Compliance Rate',
        category: 'operational'
    ]
  {
    description: 'Track incident volumes, prio
    priority: 'critical',
    kpis: [
        name: 'Mean Time to Resolve (MTTR)',
        target: '< 4 hours'
       
      
        descri
       
      },
        name: 'Incident Recurrence Rate',
        target: '< 10%',
        
      {
        name: 'Reopened Tickets',
        description: 'Number of tickets reopened after resolution',
        category: 'quality'
      },
      {
        name: 'Agent Utilization Rate',
        description: 'Percentage of agent time spent on tickets',
        category: 'efficiency'
      },
      {
        name: 'SLA Compliance Rate',
        description: 'Percentage of tickets meeting SLA',
        category: 'operational'
      }
    ]
  },
  {
    title: 'Incident Management Dashboard',
    description: 'Track incident volumes, priority distribution, mean time to resolve, escalation rates, and incident trends for proactive problem management.',
    category: 'operations',
    priority: 'critical',
    templateCategory: 'freshservice-it',
    kpis: [
      {
        name: 'Mean Time to Resolve (MTTR)',
        description: 'Average time to resolve incidents',
        target: '< 4 hours',
        formula: 'Sum(Resolution Time) / Total Incidents',
        category: 'performance'
      },
      {
        name: 'Mean Time to Acknowledge',
        description: 'Average time to acknowledge incidents',
        target: '< 15 minutes',
        formula: 'Average(Acknowledgement Time)',
        category: 'performance'
      },
      {
        name: 'Incident Recurrence Rate',
        description: 'Percentage of recurring incidents',
        target: '< 10%',
        formula: '(Recurring Incidents / Total Incidents) × 100',
        category: 'quality'
      },
      {
        name: 'P1 Incident Response Time',
        description: 'Average response time for critical incidents',
        target: '< 5 minutes',
      },
        category: 'performance'
       
    ],
    metrics: [
      {
        name: 'Incidents by Category',
        description: 'Breakdown of incidents by type',
        formula: '(Active Asset
      },
    ],
        name: 'Incidents by Priority',
        description: 'Distribution across priority levels',
        category: 'operational'
      },
      {
        name: 'Major Incidents',
        description: 'Count of P1/critical incidents',
      {
      },
       
        name: 'Escalated Incidents',
        description: 'Number of incidents requiring escalation',
        category: 'quality'
      }
    ]
  {
  {
    title: 'Asset Management Dashboard',
    description: 'Monitor IT asset inventory, lifecycle management, software license compliance, and asset costs across the organization.',
    category: 'operations',
    priority: 'high',
        description: 'Percentage of succ
    kpis: [
       
        name: 'License Compliance Rate',
        description: 'Percentage of compliant software licenses',
        target: '100%',
        formula: '(Compliant Licenses / Total Licenses) × 100',
        category: 'compliance'
      {
       
        name: 'Asset Refresh Rate',
        description: 'Percentage of assets refreshed on schedule',
        target: '> 90%',
        formula: '(Refreshed Assets / Total Assets) × 100',
        description: 'Incidents
      },
      {
        name: 'Average Cost per Asset',
        description: 'Mean cost per asset',
        target: 'Within budget',
        description: 'All change requests',
        category: 'financial'
      {
      {
        name: 'Asset Utilization Rate',
        description: 'Percentage of assets in active use',
        target: '> 85%',
        formula: '(Active Assets / Total Assets) × 100',
      },
      }
      
    metrics: [
    ]
        name: 'Total Assets',
        description: 'Hardware, software, and other IT assets',
        category: 'operational'
    prio
       
        name: 'Assets Nearing EOL',
        description: 'Assets approaching end of life',
        category: 'operational'
      },
      {
        name: 'Software License Usage',
        description: 'Percentage of problems with co
        category: 'compliance'
        
      {
        name: 'Problem Prevention R
        description: 'Total depreciation value',
        category: 'financial'
      }
     
  },
   
    title: 'Change Management Dashboard',
    description: 'Track change requests, approval workflows, implementation success rates, emergency changes, and change-related incidents.',
    category: 'operations',
      {
    templateCategory: 'freshservice-it',
        cat
      {
        name: 'Problems by Priority'
        description: 'Percentage of successful changes',
      },
        formula: '(Successful Changes / Total Changes) × 100',
        category: 'quality'
        
      {
        name: 'Emergency Change Rate',
        description: 'Percentage of emergency changes',
        target: '< 5%',
        formula: '(Emergency Changes / Total Changes) × 100',
        category: 'quality'
      },
      {
    templateCategory: 'freshservice-it',
        description: 'Mean time to approve changes',
        name: 'Overall SLA Co
        formula: 'Sum(Approval Time) / Total Changes',
        category: 'performance'
      },
      {
        name: 'Change-Related Incidents',
        description: 'Incidents caused by changes',
        target: '< 2%',
        formula: '(Change Incidents / Total Changes) × 100',
        category: 'quality'
       
    ],
    metrics: [
      {
        name: 'Total Changes',
        description: 'All change requests',
        formula: '(Critical SLA
      },
    ],
        name: 'Changes by Type',
        description: 'Standard, normal, and emergency changes',
        category: 'operational'
      },
      {
        name: 'Pending Approvals',
        description: 'Changes awaiting approval',
      {
      },
       
        name: 'Failed Changes',
        description: 'Changes that failed implementation',
        category: 'quality'
      }
    ]
  {
  {
    title: 'Problem Management Dashboard',
    description: 'Monitor known problems, root cause analysis completion, problem resolution times, and recurring incidents to drive continuous improvement.',
    category: 'operations',
    priority: 'high',
        description: 'Mean time to fulfi
    kpis: [
      {
        name: 'Mean Time to Resolve Problems',
        description: 'Average time to resolve problems',
        target: '< 30 days',
        formula: 'Sum(Resolution Time) / Total Problems',
        category: 'performance'
      },
      {
        name: 'RCA Completion Rate',
        description: 'Percentage of problems with completed root cause analysis',
        target: '100%',
        formula: '(Completed RCA / Total Problems) × 100',
        description: 'Servi
      },
       
        name: 'Problem Prevention Rate',
        description: 'Reduction in related incidents after problem resolution',
        target: '> 80%',
        formula: '(Prevented Incidents / Total Related Incidents) × 100',
        category: 'quality'
      {
      {
        name: 'Known Error Database Usage',
        description: 'Percentage of problems documented in KEDB',
        target: '100%',
        formula: '(KEDB Entries / Total Problems) × 100',
        category: 'compliance'
      }
    ],
    metrics: [
      {
        name: 'Open Problems',
    title: 'IT Agent Performance Dashboard',
        category: 'operational'
    prio
      {
        name: 'Problems by Priority',
        description: 'Distribution across priority levels',
        category: 'operational'
      {
      {
        name: 'Related Incidents',
        description: 'Incidents linked to known problems',
        category: 'operational'
      },
      {
        name: 'Agent Resolution Rate',
        description: 'Temporary solutions in place',
        category: 'operational'
      }
     
  },
   
    title: 'SLA Compliance Dashboard',
    description: 'Monitor service level agreement compliance, breach trends, at-risk tickets, and SLA performance across different service categories.',
    category: 'operations',
      {
    templateCategory: 'freshservice-it',
        cat
      {
        name: 'Agent Workload',
        description: 'Percentage of tickets meeting SLA',
        target: '> 95%',
        formula: '(SLA Met / Total Tickets) × 100',
        category: 'operational'
        
      {
        name: 'Response Time SLA',
        description: 'Percentage meeting response SLA',
        target: '> 98%',
        formula: '(Response SLA Met / Total Tickets) × 100',
        category: 'performance'
      },
      {

        description: 'Percentage meeting resolution SLA',

        formula: '(Resolution SLA Met / Total Tickets) × 100',
        category: 'performance'
      },

        name: 'Critical Ticket SLA',
        description: 'Critical ticket SLA adherence',
        target: '> 99%',
        formula: '(Critical SLA Met / Critical Tickets) × 100',
        category: 'performance'

    ],
    metrics: [

        name: 'SLA Breaches',
        description: 'Total SLA violations',



        name: 'At-Risk Tickets',
        description: 'Tickets approaching SLA deadline',



        name: 'Breach Reasons',
        description: 'Categorization of SLA breaches',
        category: 'quality'


        name: 'Average Time to Breach',
        description: 'Mean time by which SLAs are missed',


    ]

  {
    title: 'Service Catalog Performance Dashboard',
    description: 'Track service request volumes, fulfillment times, approval workflows, popular services, and request abandonment rates.',

    priority: 'medium',
    templateCategory: 'freshservice-it',
    kpis: [

        name: 'Average Fulfillment Time',
        description: 'Mean time to fulfill service requests',
        target: '< 48 hours',
        formula: 'Sum(Fulfillment Time) / Total Requests',
        category: 'performance'
      },
      {
        name: 'First-Time Approval Rate',
        description: 'Percentage approved on first submission',
        target: '> 85%',
        formula: '(First-Time Approvals / Total Requests) × 100',

      },

        name: 'Request Completion Rate',
        description: 'Percentage of completed requests',
        target: '> 98%',
        formula: '(Completed Requests / Total Requests) × 100',
        category: 'quality'

      {
        name: 'Catalog Adoption Rate',
        description: 'Service catalog usage vs direct tickets',
        target: '> 70%',
        formula: '(Catalog Requests / Total Requests) × 100',
        category: 'efficiency'
      }

    metrics: [

        name: 'Total Service Requests',
        description: 'All catalog requests',

      },

        name: 'Popular Services',
        description: 'Most requested services',
        category: 'operational'


        name: 'Pending Approvals',
        description: 'Requests awaiting approval',
        category: 'operational'

      {

        description: 'Percentage of abandoned requests',
        category: 'quality'
      }

  },

    title: 'IT Agent Performance Dashboard',
    description: 'Monitor agent productivity, workload distribution, resolution quality, customer satisfaction scores, and training needs.',
    category: 'operations',

    templateCategory: 'freshservice-it',


        name: 'Average Tickets per Agent',
        description: 'Mean ticket volume per agent',
        target: 'Balanced distribution',
        formula: 'Total Tickets / Total Agents',
        category: 'operational'


        name: 'Agent Response Time',
        description: 'Average time to first response',
        target: '< 2 hours',
        formula: 'Average(First Response Time)',
        category: 'performance'
      },

        name: 'Agent Resolution Rate',
        description: 'Percentage of tickets resolved by agents',
        target: '> 90%',
        formula: '(Resolved Tickets / Assigned Tickets) × 100',
        category: 'quality'


        name: 'Agent CSAT Score',
        description: 'Average customer satisfaction per agent',
        target: '> 4.5/5',
        formula: 'Average(Agent Ratings)',
        category: 'satisfaction'


    metrics: [

        name: 'Active Agents',
        description: 'Currently active support agents',
        category: 'operational'


        name: 'Agent Workload',
        description: 'Open tickets per agent',
        category: 'operational'


        name: 'Agent Escalations',
        description: 'Tickets escalated by agents',
        category: 'quality'


        name: 'Agent Availability',






