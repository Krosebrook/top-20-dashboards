import type { DashboardTemplate } from './dashboard-templates'

    title: 'IT Service Desk Performance Dashboard',
   
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
        formula: '(Tickets Reso
      },
      {
        name: 'First Contact Resolution (FCR)',
        description: 'Percentage of tickets resolved on first contact',
        target: '> 70%',
        formula: '(Tickets Resolved on First Contact / Total Tickets) × 100',
        category: 'quality'
        
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
      },
      }
      
    metrics: [
      {
        name: 'Total Tickets Created',
        target: '> 95%',
        category: 'operational'
      {
       
        name: 'Open Ticket Backlog',
  },
        category: 'operational'
      },
    pri
        name: 'Tickets by Priority',
        description: 'Distribution of ticket priorities',
        category: 'operational'
      },
      {
        name: 'SLA Compliance',
        description: 'Percentage of tickets meeting SLA',
        target: '> 95%',
        category: 'performa
      },
       
        name: 'Reopened Tickets',
        description: 'Percentage of tickets reopened after closure',
        target: '< 5%',
        category: 'quality'
       
    ]
    
  {
    metrics: [
    description: 'Track incident detection, response, resolution times, and major incident management. Monitor MTTR, MTTD, and incident trends.',
        description: 'Count
    priority: 'critical',
    templateCategory: 'business-essentials',
    kpis: [
       
        name: 'Mean Time to Detect (MTTD)',
        description: 'Average time to detect an incident',
        target: '< 5 minutes',
        formula: 'Sum(Detection Time) / Total Incidents',
        category: 'performance'
      {
       
        name: 'Mean Time to Resolve (MTTR)',
        description: 'Average time to resolve incidents',
        target: '< 4 hours',
        formula: 'Sum(Resolution Time) / Total Incidents',
        category: 'performance'
        
  },
        name: 'P1 Incident Response Time',
        description: 'Time to respond to P1/critical incidents',
        target: '< 15 minutes',
        formula: 'Average(P1 Response Time)',
        category: 'performance'
      {
       
        name: 'Incident Recurrence Rate',
        description: 'Percentage of recurring incidents',
        target: '< 10%',
        formula: '(Recurring Incidents / Total Incidents) × 100',
      {
       
    ],
      },
      {
        name: 'Total Incidents',
        description: 'Count of all incidents by priority',
      },
      },
       
        name: 'Incidents by Category',
        description: 'Breakdown by incident type/category',
        target: '0',
      },
    ]
        name: 'Mean Time to Acknowledge',
        formula: '(Compliant Licenses / Total Licenses) × 100',
      },
        name: 'Asset Refresh Rate',
        target: '> 90%',
        
      {
        description: 'Average co
        formula: 'Total Asset Costs / Total Assets',
      }
    metrics: [
        name: 'Total Assets by 
        
      {
        description: 'Assets approach
        category: 'operational'
      {
        description: 'Percentag
        
      {
        description: 'Assets with expiring 
      },
        name: 'Asset Loc
        category: 'operatio
    ]
  {
    
   
    kpis: [
        name: 'Overall SLA Compliance',
        target: '> 95%',
        category: 'pe
      {
        des
       
      },
        name: 'Response Time SLA',
        target: '> 97%',
        category: 'performance'
      {
        
       
      }
    metrics: [
        name: 'SLA Breac
        target: '< 5%',
      },
        
       
      {
        description: 'Compliance rates by ticket ty
      },
        name: 'Average SLA Buffer Time',
        target: 'Positive b
      },
       
        category: 'performance'
    ]
  {
    description: 'Track service catalog re
    priority: 'medium',
    kpi
      
        target
       
      {
        description: 'Percentage of requests via service ca
        formula: '(Catalog Requ
      },
       
        target: '> 90%',
        category: 'quality'
      {
        
       
      }
    metrics: [
        name: 'Total Service Re
        
      {
        description: 'Request breakdown by 
      },
        name: 'Pending 
        category: 'operatio
      {
       
      },
        name: 'Catalog Usage Analytics',
        target: '> 60%',
        category: 'efficiency'
      {
       
        formula: '(Abandoned Requests / Total 
      }
  },
    title: 'Agent Performan
    cat
    t
    
   
        formula: 'Total Tickets / Total 
      },
        name: 'Agent Utiliz
        target: '> 75
        category: 'efficiency'
      {
       
        formula: '(Resolved Tickets / A
      },
        name: 'Agent CSA
        target: '> 4.5/5',
        category: 'satisfactio
    ],
      {
        description: 'Current workload d
      },
        name: 'Agent Re
        category: 'performance'
      {
        
      }
        name: 'Backlog per Agent',
        category: 'operational'
      {
        description: 'Online/available time percentage',
        category: 'operational'
      {
       
      },
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
     
  },
   
    title: 'SLA Management Dashboard',
    description: 'Monitor service level agreement adherence, breach analysis, and response/resolution time compliance across all ticket categories.',
    category: 'operations',
        target: 'Increase
    templateCategory: 'business-essentials',
    kpis: [
       
        name: 'Overall SLA Compliance',
        description: 'Percentage of tickets meeting SLA',
        target: '> 95%',
        formula: '(Tickets Meeting SLA / Total Tickets) × 100',
        category: 'performance'
      },
      {
        name: 'P1 SLA Compliance',
      {
        target: '> 99%',
        formula: '(P1 Meeting SLA / Total P1) × 100',
        category: 'performance'
        
      {
        name: 'Response Time SLA',
        description: 'First response within SLA',
        description: 'IT
        formula: '(On-time Responses / Total Tickets) × 100',
        category: 'financial'
      },
       
        name: 'Resolution Time SLA',
        description: 'Resolutions within SLA target',
        target: '> 95%',
        formula: '(On-time Resolutions / Total Resolved) × 100',
        category: 'performance'
    ]
    ],
    title: 'Kn
      {
        name: 'SLA Breaches - Current Period',
        description: 'Count of SLA violations',
      {
        category: 'quality'
        
      {
        name: 'Tickets at Risk',
        description: 'Tickets approaching SLA breach',
        description: 'Percentag
      },
       
        name: 'SLA Performance by Category',
        description: 'Compliance rates by ticket type',
        category: 'quality'
        
       
        name: 'Average SLA Buffer Time',
        description: 'How far ahead of SLA tickets are resolved',
        target: 'Positive buffer',
    ],
      },
       
        name: 'SLA Trends',
        description: 'SLA performance over time',
        category: 'performance'
       
    ]
    
  {
    title: 'Service Request Fulfillment Dashboard',
    description: 'Track service catalog requests, fulfillment times, request approval workflows, and self-service adoption rates.',
        name: 'Outdated Art
    priority: 'medium',
    templateCategory: 'customer-success',
    kpis: [
       
        name: 'Average Fulfillment Time',
        description: 'Mean time to complete service requests',
        target: '< 48 hours',
        formula: 'Sum(Fulfillment Time) / Total Requests',
        category: 'performance'
      },
      {
        name: 'Self-Service Adoption Rate',
        description: 'Percentage of requests via service catalog',

        formula: '(Catalog Requests / Total Requests) × 100',

      },

        name: 'Request Fulfillment SLA',
        description: 'Requests completed within SLA',
        target: '> 90%',
        formula: '(On-time Fulfillments / Total Requests) × 100',
        category: 'quality'

      {
        name: 'Request Satisfaction Score',
        description: 'User satisfaction with service requests',

        formula: 'Average(Request Ratings)',

      }

    metrics: [

        name: 'Total Service Requests',
        description: 'Number of requests submitted',
        category: 'operational'

      {
        name: 'Requests by Category',
        description: 'Request breakdown by service type',

      },

        name: 'Pending Approvals',
        description: 'Requests awaiting approval',
        category: 'operational'


        name: 'Request Fulfillment by Department',
        description: 'Fulfillment team performance',
        category: 'operational'
      },
      {
        name: 'Catalog Usage Analytics',
        description: 'Percentage of users using service catalog',
        target: '> 60%',

        category: 'efficiency'

      {

        description: 'Requests cancelled or abandoned',

        formula: '(Abandoned Requests / Total Requests) × 100',
        category: 'quality'
      }

  },

    title: 'Agent Performance Dashboard',
    description: 'Individual and team agent metrics including ticket resolution, productivity, customer satisfaction, and workload distribution.',
    category: 'operations',

    templateCategory: 'business-essentials',


        name: 'Average Tickets per Agent',
        description: 'Mean tickets handled per agent',
        target: '20-30 per day',
        formula: 'Total Tickets / Total Active Agents',
        category: 'productivity'


        name: 'Agent Utilization Rate',
        description: 'Percentage of time agents spend on tickets',
        target: '> 75%',
        formula: '(Active Time / Total Time) × 100',
        category: 'efficiency'
      },

        name: 'Agent Resolution Rate',
        description: 'Percentage of tickets resolved by agent',
        target: '> 85%',
        formula: '(Resolved Tickets / Assigned Tickets) × 100',
        category: 'quality'


        name: 'Agent CSAT Score',
        description: 'Customer satisfaction per agent',
        target: '> 4.5/5',
        formula: 'Average(Agent Ratings)',
        category: 'satisfaction'


    metrics: [

        name: 'Tickets Assigned per Agent',
        description: 'Current workload distribution',
        category: 'operational'


        name: 'Agent Response Time',
        description: 'Average time to first response by agent',
        category: 'performance'


        name: 'Agent Resolution Time',
        description: 'Average resolution time per agent',
        category: 'performance'


        name: 'Backlog per Agent',
        description: 'Open tickets assigned to each agent',



        name: 'Agent Availability',












































































































































































