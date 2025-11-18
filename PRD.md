# Planning Guide

A comprehensive dashboard management system that helps users organize, prioritize, and track the top 20 dashboards they need for their work or personal projects.

**Recent Updates:**
- **Keyboard Shortcuts (Current)**: Added comprehensive keyboard shortcuts for all common actions including add dashboard (Ctrl+N), search focus (Ctrl+K), bulk tags (Ctrl+B), templates (Ctrl+T), suggestions (Ctrl+S), export (Ctrl+E), import (Ctrl+I), analytics (Ctrl+A), clear filters (Esc), and help dialog (/). Added keyboard shortcuts dialog with categorized shortcuts and visual key indicators. Added keyboard icon button in toolbar for quick access to shortcuts reference.
- **Bulk Tag Operations**: Added bulk tag management dialog for applying tag changes to multiple dashboards simultaneously, including selection interface with search, add/remove tag operations, common tag detection, and quick tag suggestions
- **Custom Tags & Advanced Filtering**: Added custom tagging system with tag input component, tag-based filtering with visual tag selector, advanced filtering options including multi-field sorting (title, date, priority, status, category), display filters (show only dashboards with tags), and comprehensive filter management
- **Analytics & Usage Tracking**: Added comprehensive analytics system to track dashboard interactions, usage patterns, and provide insights into user behavior
- **Refactoring**: Extracted business logic into custom hooks (`useDashboardManager`, `useDashboardFilters`, `useAnalytics`), created reusable UI components, separated utility functions into dedicated modules, improved type safety throughout

**Experience Qualities**: 
1. **Organized** - Information is clearly structured with intuitive categorization and visual hierarchy
2. **Actionable** - Users can quickly identify priority dashboards and take next steps
3. **Elegant** - Clean, modern interface that feels professional yet approachable

**Complexity Level**: Light Application (multiple features with basic state)
  - Multiple dashboard entries with CRUD operations, prioritization, filtering, analytics tracking, and persistence across sessions

## Essential Features

### Dashboard List View
- **Functionality**: Display all 20 dashboards in a organized grid/list with key information (title, description, priority, category, status)
- **Purpose**: Provides at-a-glance overview of all needed dashboards
- **Trigger**: Initial page load
- **Progression**: User lands on page → Sees dashboard cards → Can scan titles and details → Identifies items of interest
- **Success criteria**: All dashboards visible, readable, and organized logically

### Add/Edit Dashboard
- **Functionality**: Create new dashboard entries or modify existing ones with fields for name, description, category, priority level, and implementation status
- **Purpose**: Allows users to maintain an up-to-date list of needed dashboards
- **Trigger**: Click "Add Dashboard" button or edit icon on existing card
- **Progression**: User clicks action → Dialog opens with form → User fills/edits fields → Saves → Card updates/appears in list
- **Success criteria**: Changes persist after page reload, form validates required fields

### Priority Management
- **Functionality**: Assign priority levels (Critical, High, Medium, Low) with visual indicators
- **Purpose**: Helps users focus on most important dashboards first
- **Trigger**: Set during creation or via quick-edit controls
- **Progression**: User assigns priority → Card displays priority badge → List can be sorted by priority
- **Success criteria**: Priority is visually clear and affects sort order

### Status Tracking
- **Functionality**: Track dashboard implementation status (Not Started, In Progress, Completed, On Hold)
- **Purpose**: Monitor progress on dashboard creation/implementation
- **Trigger**: User updates status via dropdown or dialog
- **Progression**: User changes status → Visual indicator updates → Filtering reflects change
- **Success criteria**: Status changes are immediate and persistent

### Filtering & Search
- **Functionality**: Filter dashboards by category, priority, status, and custom tags; search by title/description; advanced sorting by multiple fields (title, date, priority, status, category); display filters for showing only tagged dashboards
- **Purpose**: Quickly find specific dashboards in large list, organize by multiple criteria, discover related dashboards through tags
- **Trigger**: User types in search box, selects filter dropdowns, clicks tag filter button, or opens advanced filters popover
- **Progression**: User applies filter → List updates instantly → Relevant dashboards shown → Can combine multiple filters → Click tag button to select multiple tags → Use advanced filters for sorting and display options → Clear filters to reset
- **Success criteria**: Filter combinations work together seamlessly, search is instant, tag filtering shows dashboards with any selected tag, sorting is stable and predictable, advanced filters persist during session

### Custom Tags
- **Functionality**: Add custom text tags to dashboards (up to 10 per dashboard); filter dashboards by one or multiple tags; view all available tags across dashboards; tags display on dashboard cards with visual badges; bulk tag operations for managing tags across multiple dashboards at once
- **Purpose**: Enable flexible, user-defined categorization beyond predefined categories; support cross-cutting concerns (e.g., "Q1-2024", "urgent", "needs-review"); improve discoverability through tag-based filtering; efficiently manage tags across many dashboards
- **Trigger**: Add/edit tags in dashboard dialog using tag input component; filter by tags using tag filter button in toolbar; click "Bulk Tags" button to manage tags across multiple dashboards
- **Progression**: Creating tags: User opens dashboard dialog → Types tag name in tag input → Presses Enter or comma → Tag appears as badge → Can add up to 10 tags → Can remove tags by clicking X. Filtering: User clicks Tags button → Sees all available tags → Selects one or more tags → Dashboard list filters to show matching dashboards → Selected tag count shows on button. Bulk operations: User clicks "Bulk Tags" button → Dialog opens with searchable dashboard list → Selects multiple dashboards via checkboxes → Views common tags across selections → Adds new tags to all selected dashboards → Removes tags from all selected dashboards → Applies changes to all at once
- **Success criteria**: Tags persist with dashboard data, tag input prevents duplicates, tags are case-sensitive, tag filter shows only tags that exist on dashboards, filtering by multiple tags uses OR logic (shows dashboards with any selected tag), export/import includes tags, bulk operations correctly add/remove tags from multiple dashboards, common tag detection works accurately, bulk changes tracked in analytics

### Export & Import
- **Functionality**: Export all dashboards to JSON or CSV format; import dashboards from previously exported files
- **Purpose**: Enable data portability, backups, sharing between systems, and bulk data entry
- **Trigger**: Click "Export" button to download data; click "Import" button to upload file
- **Progression**: Export: User clicks export → Selects format (JSON/CSV) → File downloads. Import: User clicks import → Drags/selects file → Preview shown → Confirms import → Dashboards added
- **Success criteria**: Exported files contain complete dashboard data, imported data validates correctly, respects 20-item limit

### Analytics & Usage Tracking
- **Functionality**: Comprehensive tracking of all dashboard interactions including views, edits, status changes, priority changes; visual analytics dashboard with charts and statistics; activity log showing recent events
- **Purpose**: Provide insights into dashboard usage patterns, identify most/least active dashboards, track completion metrics, understand user behavior over time
- **Trigger**: Click "Analytics" button in toolbar; tracking happens automatically on all interactions
- **Progression**: User clicks analytics → Dialog opens with three tabs (Overview, Usage Details, Activity Log) → User views statistics, trends, top dashboards → Can clear analytics if needed
- **Success criteria**: All interactions are tracked persistently, analytics provide actionable insights, visualizations are clear and meaningful, no performance impact on main app

### Keyboard Shortcuts
- **Functionality**: Comprehensive keyboard shortcuts for all common actions; shortcuts help dialog with categorized list and visual key indicators; shortcuts work globally across the app; smart input detection prevents conflicts with text fields
- **Purpose**: Speed up power user workflows, reduce mouse dependency, improve accessibility, provide faster access to frequently used features
- **Trigger**: Press keyboard combinations (Ctrl+N, Ctrl+K, Ctrl+B, etc.); press "/" key to view shortcuts dialog; click keyboard icon in toolbar
- **Progression**: User presses shortcut → Action executes immediately (dialog opens, filter clears, etc.) → Optional toast feedback for some actions. Help: User presses "/" or clicks keyboard icon → Shortcuts dialog opens → User views categorized shortcuts (Creating & Adding, Filtering & Search, Import & Export, Organization, Tools & Help) → Dialog shows visual key indicators
- **Success criteria**: All shortcuts work reliably, no conflicts with browser shortcuts, shortcuts disabled in text inputs (except Ctrl combinations), shortcuts dialog is comprehensive and easy to scan, keyboard icon is visible and discoverable

## Edge Case Handling
- **Empty state**: Show welcoming empty state with "Add your first dashboard" CTA when no dashboards exist
- **Maximum limit**: Warn user when approaching 20 dashboard limit, prevent adding beyond 20, import dialog shows available slots
- **Duplicate names**: Allow duplicates but show warning to user
- **Long content**: Truncate long descriptions with "read more" expansion
- **No search results**: Display friendly "no results found" message with suggestion to clear filters
- **Invalid import data**: Validate imported data, show preview with warnings, auto-correct invalid values to defaults
- **Import over limit**: Prevent imports that would exceed 20 dashboards, show clear error message with current count
- **No analytics data**: Show empty state in analytics dialog when no events have been tracked yet
- **Analytics data size**: Track indefinitely but provide clear analytics option to prevent storage bloat
- **Bulk operations with no selection**: Disable apply button when no dashboards selected or no tag changes specified
- **Bulk operations with filtered results**: Allow selecting from filtered results only; search helps narrow selection
- **Removing non-existent tags**: Bulk remove operation silently skips tags that don't exist on specific dashboards
- **Keyboard shortcuts in inputs**: Shortcuts disabled when typing in text fields (except Ctrl/Cmd combinations which work globally)
- **Browser shortcut conflicts**: Use Ctrl/Cmd combinations to avoid conflicts with browser shortcuts; Escape only clears filters if active
- **Mac vs Windows shortcuts**: Display appropriate modifier keys (⌘ on Mac, Ctrl on Windows) in shortcuts dialog

## Design Direction
The design should feel professional and organized like a productivity tool, with a clean, modern aesthetic inspired by project management interfaces. A minimal interface with purposeful use of color to indicate status and priority serves the organizational purpose best.

## Color Selection
Triadic color scheme with purpose-coded colors for different information types, creating visual clarity without overwhelming the interface.

- **Primary Color**: Deep blue (oklch(0.45 0.15 250)) communicates trust, stability, and professionalism - used for main actions and branding
- **Secondary Colors**: Soft slate (oklch(0.55 0.02 250)) for secondary UI elements; light backgrounds (oklch(0.98 0.01 250)) for cards and surfaces
- **Accent Color**: Vibrant teal (oklch(0.65 0.15 190)) for highlighting active states and drawing attention to interactive elements
- **Foreground/Background Pairings**:
  - Background (oklch(0.97 0.005 250)): Dark slate text (oklch(0.25 0.02 250)) - Ratio 12.8:1 ✓
  - Card (oklch(1 0 0)): Dark slate text (oklch(0.25 0.02 250)) - Ratio 14.2:1 ✓
  - Primary (oklch(0.45 0.15 250)): White text (oklch(1 0 0)) - Ratio 8.1:1 ✓
  - Accent (oklch(0.65 0.15 190)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Muted (oklch(0.95 0.01 250)): Medium slate (oklch(0.45 0.02 250)) - Ratio 7.2:1 ✓

## Font Selection
Typography should convey clarity and professionalism with excellent readability for scanning dashboard titles and details - using Inter for its clean, modern appearance and optimized screen legibility.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold / 32px / -0.02em letter spacing
  - H2 (Dashboard Title): Inter Semibold / 18px / -0.01em letter spacing
  - Body (Description): Inter Regular / 14px / normal letter spacing / 1.6 line height
  - Caption (Metadata): Inter Medium / 12px / normal letter spacing
  - Label (Form Fields): Inter Medium / 13px / normal letter spacing

## Animations
Animations should be subtle and purposeful, reinforcing interactions without slowing down workflow - quick, snappy transitions that feel responsive.

- **Purposeful Meaning**: Card hover states lift gently to indicate interactivity; status changes fade smoothly to show state progression; dialog entrances scale from center to focus attention
- **Hierarchy of Movement**: Primary actions (add dashboard, save) get satisfying button press feedback; secondary interactions (hover, filter) use minimal motion; card reordering animates position changes

## Component Selection
- **Components**: 
  - Card for dashboard entries with custom styling for status indicators
  - Dialog for add/edit forms with proper focus management
  - Select dropdowns for category, priority, and status with custom option styling
  - Input and Textarea for text fields with floating labels
  - Badge for priority/status indicators with color coding
  - Button with primary/secondary/ghost variants
  - Tabs for view switching if multiple layouts needed
  - Scroll-area for dashboard list if content exceeds viewport
  
- **Customizations**: 
  - Custom priority badge component with color-coded backgrounds (red/critical, orange/high, yellow/medium, green/low)
  - Status indicators using combination of Badge and color dots
  - Dashboard card with hover elevation effect and quick-action buttons
  
- **States**: 
  - Buttons: Solid primary for main actions, ghost for secondary, disabled state with reduced opacity
  - Inputs: Border highlight on focus with smooth transition, error state with red accent
  - Cards: Default flat, hover with subtle shadow and lift, selected with accent border
  
- **Icon Selection**: 
  - Plus (add new dashboard)
  - PencilSimple (edit)
  - Trash (delete)
  - FunnelSimple (filter)
  - MagnifyingGlass (search)
  - Circle/CheckCircle (status indicators)
  - Star/StarFilled (priority/favorites)
  - ChartBar (dashboard icon, analytics)
  - Export (download/export data)
  - Upload (import data)
  - File (file format indicators)
  - DownloadSimple (download actions)
  - Warning (validation alerts)
  - TrendUp (analytics trends)
  - Activity (activity indicators)
  - Eye (view tracking)
  - Clock (time-based stats)
  - Calendar (date information)
  - Keyboard (keyboard shortcuts)
  - Tag (tags and bulk operations)
  
- **Spacing**: 
  - Container padding: p-6 on desktop, p-4 on mobile
  - Card spacing: gap-4 in grid layout
  - Form fields: space-y-4 for vertical rhythm
  - Card internal: p-6 for generous breathing room
  
- **Mobile**: 
  - Desktop: 3-column responsive grid for dashboard cards
  - Tablet: 2-column grid with maintained card proportions  
  - Mobile: Single column stack with full-width cards, sticky header with search/filter, bottom sheet for add/edit forms instead of centered dialogs
