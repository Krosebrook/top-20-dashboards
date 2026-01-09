import type { DashboardTemplate } from './dashboard-templates'

    title: 'IT Service Desk Performance Dashboard',
   
    templateCategory: 'business-essentials',
      {
        description: 'Avera
        formula: 'Sum(Tim
      },
        nam
       
        category: 'quality'
      {
        description: 'Mean time
        formula: 'Sum(Resolution Time) / Total Tickets',
      },
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
        name: 'Reopened Tickets',
        description: 'Number of unresolved tickets',
      }
  },
      {
    category: 'operations',
    templateCategory: 'business-essentials',
      {
        
       
      },
        name: 'Mean Time to Resolve (MTTR)',
        target: '< 4 hou
        category: 'performance'
      {
      {
        formula: 'Average(P1 Resp
      },
        name: 'Incident
        target: '< 10%',
      }
    ]
  },
   
    title: 'Incident Management Dashboard',
        name: 'Incidents by Category',
    category: 'operations',
      {
        description: 'Count of P1/critical i
        cat
      {
        description: 'Average time to ackno
      }
  },
    title: 'Asset Management Dashboard',
    category: 'operations',
      },
    kpi
        description: 'Percentage of complian
        formula: '(Compliant Licenses / Total Licenses) ×
      },
        name: 'Asset Refresh Rate',
        target: '> 90%',
      },
      {
        target: 'Within budget',
        category: 'financial'
    ],
      {
        description: 'Hardware,
      },
      {
        target: 'Plan for replacement',
      },
        name: 'Software 
        target: '> 80%',
        category: 'quality'
      }
      
    metrics: [
       
      }
  },
        category: 'operational'
    desc
      {
      {
        description: 'Percentage of tickets meeting SLA',
        category: 'operational'
      },
       
        name: 'Major Incidents',
        description: 'Count of P1/critical incidents',
        target: '0',
    ],
      },
       
        name: 'Mean Time to Acknowledge',
        description: 'Average time to acknowledge incidents',
      }
    des
     
  },
   
    title: 'Asset Management Dashboard',
    description: 'Monitor IT asset inventory, lifecycle management, software license compliance, and asset costs across the organization.',
    category: 'operations',
    priority: 'high',
    templateCategory: 'business-essentials',
    kpis: [
    ],
        name: 'License Compliance Rate',
        description: 'Percentage of compliant software licenses',
        target: '100%',
        formula: '(Compliant Licenses / Total Licenses) × 100',
        category: 'compliance'
        
       
        name: 'Asset Refresh Rate',
        description: 'Percentage of assets refreshed on schedule',
        target: '> 90%',
        formula: 'Average(Agent
        
      {
        name: 'Average Asset Cost',
        name: 'Agent Response Time',
        category: 'performance'
      {
        description: 'Average
      }
      
        catego
      {
        description: 'Online/availabl
      }
  }























    ]

  {



    priority: 'critical',


      {








        description: 'Critical ticket SLA adherence',



      },



        target: '> 97%',

        category: 'performance'

      {





      }

    metrics: [



        target: '< 5%',

      },



        category: 'operational'

      {



      },
      {



        category: 'performance'

      {



      }

  },



    category: 'operations',



      {









        target: '> 70%',

        category: 'efficiency'

      {





      },



        target: '> 4.5/5',

        category: 'satisfaction'

    ],

      {



      },



        category: 'operational'

      {



      },
      {









      },

        name: 'Request Abandonment Rate',




    ]

  {



    priority: 'high',

    kpis: [
      {





      },
      {






      {





      },
      {





      }
    ],

      {



      },
      {



      },
      {



      },
      {


        category: 'operational'
      },
      {

        description: 'Online/available time percentage',
        category: 'operational'
      }
    ]
  }
]
