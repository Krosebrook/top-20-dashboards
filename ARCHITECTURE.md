# Dashboard Manager - Code Architecture

## Overview
This document describes the architecture and code organization of the Dashboard Manager application.

## Directory Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn UI components (40+ components)
│   ├── AdvancedFilters.tsx
│   ├── AnalyticsDialog.tsx
│   ├── BulkTagDialog.tsx
│   ├── CategorySelect.tsx
│   ├── DashboardCard.tsx
│   ├── DashboardDialog.tsx
│   ├── DashboardFilters.tsx
│   ├── DashboardToolbar.tsx
│   ├── DashboardViewer.tsx
│   ├── EmptyState.tsx
│   ├── ExportDialog.tsx
│   ├── ImportDialog.tsx
│   ├── KeyboardShortcutHint.tsx
│   ├── KeyboardShortcutsDialog.tsx
│   ├── PrioritySelect.tsx
│   ├── StatusSelect.tsx
│   ├── SuggestionsDialog.tsx
│   ├── TagFilter.tsx
│   ├── TagInput.tsx
│   └── TemplatesDialog.tsx
├── hooks/               # Custom React hooks
│   ├── use-analytics.ts
│   ├── use-dashboard-filters.ts
│   ├── use-dashboard-manager.ts
│   ├── use-dialog-state.ts
│   ├── use-keyboard-shortcuts.ts
│   └── use-mobile.ts
├── lib/                 # Utility functions and business logic
│   ├── analytics.ts
│   ├── array-utils.ts
│   ├── constants.ts
│   ├── dashboard-templates.ts
│   ├── dashboard-utils.ts
│   ├── export-import.ts
│   ├── formatting.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validation.ts
├── styles/              # Additional styles
│   └── theme.css
├── App.tsx             # Main application component
├── index.css           # Global styles and theme
├── main.tsx            # Application entry point
└── main.css            # Structural CSS (do not edit)
```

## Architecture Layers

### 1. Presentation Layer (Components)
**Location**: `/src/components/`

Components are organized by feature and responsibility:

#### Core Components
- `DashboardCard` - Individual dashboard card display
- `DashboardDialog` - Create/edit dashboard form
- `DashboardViewer` - View dashboard details
- `DashboardFilters` - Search and filter controls
- `DashboardToolbar` - Action buttons
- `EmptyState` - Empty state display

#### Feature Dialogs
- `AnalyticsDialog` - Usage analytics and insights
- `BulkTagDialog` - Bulk tag management
- `ExportDialog` - Export dashboards
- `ImportDialog` - Import dashboards
- `TemplatesDialog` - Dashboard templates
- `SuggestionsDialog` - AI-generated suggestions
- `KeyboardShortcutsDialog` - Keyboard shortcut reference

#### Utility Components
- `AdvancedFilters` - Advanced filtering options
- `TagInput` - Tag input with autocomplete
- `TagFilter` - Tag selection interface
- `KeyboardShortcutHint` - Keyboard hint overlay
- `CategorySelect`, `PrioritySelect`, `StatusSelect` - Dropdown selectors

### 2. Business Logic Layer (Hooks)
**Location**: `/src/hooks/`

Custom hooks encapsulate business logic and state management:

#### `useDashboardManager`
- Manages dashboard CRUD operations
- Handles bulk operations
- Integrates with persistence layer (useKV)
- Provides validation

#### `useDashboardFilters`
- Manages filter state (search, priority, status, category, tags)
- Computes filtered and sorted dashboards
- Provides filter clearing functionality

#### `useAnalytics`
- Tracks user interactions
- Calculates usage statistics
- Provides analytics insights
- Manages analytics persistence

#### `useDialogState`
- Centralized dialog state management
- Provides open/close/toggle functions
- Type-safe dialog references

#### `useKeyboardShortcuts`
- Registers keyboard shortcuts
- Handles key combinations
- Prevents conflicts with input fields

### 3. Utility Layer (Lib)
**Location**: `/src/lib/`

Pure functions and shared utilities:

#### Data Management
- `dashboard-utils.ts` - Dashboard operations (create, update, filter, sort)
- `validation.ts` - Zod schemas and validation logic
- `types.ts` - TypeScript type definitions

#### Analytics
- `analytics.ts` - Analytics calculations and event creation
- `export-import.ts` - Export/import logic

#### Helpers
- `formatting.ts` - Date, time, and text formatting
- `array-utils.ts` - Array manipulation utilities
- `constants.ts` - Application constants and configurations

#### Templates
- `dashboard-templates.ts` - Predefined dashboard templates

### 4. State Management

#### Persistent State (useKV)
Data that persists across sessions:
- `dashboards` - Dashboard array
- `analytics-events` - Analytics event log
- `usage-stats` - Dashboard usage statistics

#### Session State (useState)
Temporary UI state:
- Dialog open/closed states
- Current editing dashboard
- Current viewing dashboard
- Filter selections

## Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Hook Function (Business Logic)
    ↓
Utility Function (Pure Logic)
    ↓
State Update (useKV or useState)
    ↓
Component Re-render
```

### Example: Adding a Dashboard

```
1. User clicks "Add Dashboard" button
   ↓
2. App.tsx: handleAddClick() is called
   ↓
3. Opens DashboardDialog via useDialogState
   ↓
4. User fills form and clicks Save
   ↓
5. DashboardDialog: onSave() is called
   ↓
6. App.tsx: handleSave() is called
   ↓
7. useDashboardManager: addDashboard() is called
   ↓
8. dashboard-utils.ts: createDashboard() creates dashboard object
   ↓
9. validation.ts: canAddDashboard() validates
   ↓
10. useKV updates persistent state
   ↓
11. useAnalytics: trackEvent() logs creation
   ↓
12. Component re-renders with new dashboard
```

## Key Design Patterns

### 1. Custom Hooks Pattern
Encapsulates related state and logic:
```typescript
function useDashboardManager() {
  const [dashboards, setDashboards] = useKV('dashboards', [])
  
  const addDashboard = useCallback((data) => {
    // Logic here
  }, [dependencies])
  
  return { dashboards, addDashboard, ... }
}
```

### 2. Render Props Pattern
Used in some components for flexibility:
```typescript
<EmptyState 
  onAddClick={handleAddClick}
  onTemplatesClick={handleTemplatesClick}
/>
```

### 3. Controlled Components
All form inputs are controlled:
```typescript
<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### 4. Compound Components
Dialog components follow compound pattern:
```typescript
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

## Performance Optimizations

### 1. Memoization
- `useMemo` for expensive calculations (filtering, sorting)
- `useCallback` for event handlers passed to children
- Prevents unnecessary re-renders

### 2. Lazy Evaluation
- Filters applied incrementally
- Analytics calculated on-demand

### 3. Virtualization Ready
- Grid layout supports future virtualization
- Large lists can be optimized with react-window

### 4. Code Splitting
- Components loaded as needed
- Dialogs only mount when opened

## Type Safety

### TypeScript Usage
- Strict mode enabled
- All components fully typed
- No `any` types except where necessary
- Discriminated unions for state variants

### Runtime Validation
- Zod schemas for data validation
- Import/export validation
- User input sanitization

## Testing Strategy (Future)

### Unit Tests
- Utility functions in `/src/lib/`
- Custom hooks with @testing-library/react-hooks

### Integration Tests
- Hook interactions
- Component + hook integration

### E2E Tests
- Critical user flows
- Dashboard CRUD operations
- Import/Export functionality

## Extension Points

### Adding New Features

#### 1. New Dialog
```typescript
// 1. Add to useDialogState
export interface DialogState {
  // ... existing
  myNewDialog: boolean
}

// 2. Add component
<MyNewDialog 
  open={dialogs.myNewDialog}
  onOpenChange={(open) => setDialogState('myNewDialog', open)}
/>

// 3. Add keyboard shortcut if needed
```

#### 2. New Dashboard Field
```typescript
// 1. Update types.ts
export interface Dashboard {
  // ... existing
  myNewField: string
}

// 2. Update validation.ts
export const DashboardSchema = z.object({
  // ... existing
  myNewField: z.string(),
})

// 3. Update DashboardDialog form
// 4. Update DashboardCard display
```

#### 3. New Analytics Event
```typescript
// 1. Update types.ts
export type AnalyticsEventType = 
  | 'existing_types'
  | 'my_new_event'

// 2. Track event
trackEvent('my_new_event', dashboardId, metadata)

// 3. Update AnalyticsDialog if needed
```

## Best Practices

### 1. Component Design
- Keep components focused and small
- Extract reusable logic to hooks
- Use composition over inheritance
- Props should be explicit and typed

### 2. State Management
- Use persistent state (useKV) for data
- Use session state (useState) for UI
- Lift state only when necessary
- Colocate state with usage

### 3. Styling
- Use Tailwind utility classes
- Follow theme variables
- Keep consistent spacing scale
- Mobile-first responsive design

### 4. Code Organization
- One component per file
- Related components in same directory
- Utilities grouped by purpose
- Clear import paths with @/ alias

## Dependencies

### Core
- React 19.0.0 - UI library
- TypeScript 5.7.3 - Type safety
- Vite 6.3.5 - Build tool

### UI
- @radix-ui/* - Primitive components
- tailwindcss 4.1.11 - Styling
- framer-motion 12.6.3 - Animations
- @phosphor-icons/react 2.1.7 - Icons

### Utilities
- zod 3.25.76 - Schema validation
- sonner 2.0.1 - Toast notifications
- date-fns 3.6.0 - Date utilities
- clsx 2.1.1 - Conditional classes

### Forms
- react-hook-form 7.54.2 - Form management
- @hookform/resolvers 4.1.3 - Form validation

See `package.json` for complete dependency list.

## Deployment

The application is deployed as a Spark application with:
- Persistent storage via @github/spark/hooks
- No backend required
- All data stored client-side
- Fast cold starts

## Security Considerations

1. **Data Persistence**: All data stored locally via useKV
2. **No External APIs**: Self-contained application
3. **Input Validation**: All inputs validated with Zod
4. **XSS Prevention**: React escapes by default
5. **Type Safety**: TypeScript prevents many runtime errors

## Future Improvements

1. **Backend Integration**: Add optional cloud sync
2. **Real-time Collaboration**: Multi-user support
3. **Advanced Analytics**: More insights and visualizations
4. **Export Formats**: PDF, Excel support
5. **Themes**: Light/dark mode support
6. **Accessibility**: WCAG 2.1 AA compliance
7. **Internationalization**: Multi-language support
8. **Mobile App**: React Native version
