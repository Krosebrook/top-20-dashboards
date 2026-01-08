# Analytics & Usage Tracking Feature

> **Navigation:** [README](./README.md) | [PRD](./PRD.md) | [Features](./FEATURES-SUMMARY.md) | [Contributing](./CONTRIBUTING.md)

## Overview
Comprehensive analytics and usage tracking system that monitors all dashboard interactions and provides actionable insights into user behavior.

## Key Features

### 1. Automatic Event Tracking
The system automatically tracks the following events:
- **Dashboard Created**: When a new dashboard is added
- **Dashboard Updated**: When an existing dashboard is edited
- **Dashboard Deleted**: When a dashboard is removed
- **Dashboard Viewed**: When a user opens a dashboard for editing
- **Status Changed**: When a dashboard's status is modified
- **Priority Changed**: When a dashboard's priority is adjusted
- **Filter Applied**: When filters or search are used
- **Export Completed**: When data is exported
- **Import Completed**: When data is imported
- **Template Used**: When a dashboard is created from a template
- **Suggestion Accepted**: When an AI-generated suggestion is used

### 2. Analytics Dashboard
A comprehensive analytics dialog accessible via the toolbar with three main tabs:

#### Overview Tab
- **Key Metrics Cards**:
  - Total Dashboards
  - Completion Rate (%)
  - Total Events
  - Events in Last 7 Days
  
- **Status Distribution**: Visual breakdown of dashboards by status (Completed, In Progress, Not Started, On Hold)

- **7-Day Activity Trend**: Bar chart showing daily activity over the past week

- **Quick Stats**:
  - Most active time of day
  - Most used category
  - Most used priority level
  - Average completion time

- **Category Breakdown**: Progress bars showing dashboard distribution across categories

#### Usage Details Tab
- **Top 5 Most Viewed Dashboards**: Ranked list with detailed statistics including:
  - View count
  - Edit count
  - Status changes
  - Last viewed date

- **All Dashboard Statistics**: Complete list of all dashboards with their individual usage metrics

#### Activity Log Tab
- **Recent Activity**: Chronological list of the 10 most recent events with:
  - Event type and icon
  - Associated dashboard (if applicable)
  - Timestamp
  - Visual indicators for different event types

### 3. Usage Statistics Per Dashboard
Each dashboard tracks:
- **View Count**: Number of times the dashboard was opened
- **Edit Count**: Number of times the dashboard was modified
- **Time Spent**: Cumulative time spent interacting with the dashboard
- **Status Changes**: Number of times the status was updated
- **Priority Changes**: Number of times the priority was adjusted
- **Last Viewed**: Timestamp of most recent view
- **Last Edited**: Timestamp of most recent edit

### 4. Overall Analytics
System-wide metrics including:
- Total dashboard counts by status, priority, and category
- Activity trends over 7 and 30 days
- Average completion time for dashboards
- Most popular categories and priorities
- Most active time of day for interactions

## Technical Implementation

### New Files Created
- `src/lib/analytics.ts` - Core analytics utility functions
- `src/hooks/use-analytics.ts` - React hook for analytics tracking
- `src/components/AnalyticsDialog.tsx` - Analytics dashboard UI component

### Modified Files
- `src/lib/types.ts` - Added analytics-related TypeScript types
- `src/App.tsx` - Integrated analytics tracking throughout the app
- `src/components/DashboardToolbar.tsx` - Added Analytics button
- `src/components/ExportDialog.tsx` - Added export tracking callback
- `src/hooks/use-dashboard-manager.ts` - Modified return types for tracking
- `PRD.md` - Updated with analytics feature documentation

### Data Persistence
- All analytics data is stored using the `useKV` hook
- Two main data stores:
  - `analytics-events`: Array of all tracked events
  - `usage-stats`: Per-dashboard usage statistics
- Data persists across sessions
- Can be cleared manually via the Analytics dialog

## User Benefits

1. **Usage Insights**: Understand which dashboards are most important and frequently accessed
2. **Progress Tracking**: Monitor completion rates and identify bottlenecks
3. **Activity Patterns**: Discover when you're most productive
4. **Data-Driven Decisions**: Make informed choices about which dashboards to prioritize
5. **Behavior Analysis**: Understand your workflow patterns over time

## Privacy & Data Management
- All analytics data is stored locally in the browser
- No data is sent to external servers
- Users can clear all analytics data at any time via the "Clear All Analytics" button
- Deletion requires confirmation to prevent accidental data loss

## Future Enhancements
Potential improvements for future iterations:
- Export analytics reports
- Custom date range filtering
- More advanced visualizations (line charts, pie charts)
- Comparison views (week over week, month over month)
- Goal setting and progress tracking
- Predictive analytics and recommendations
