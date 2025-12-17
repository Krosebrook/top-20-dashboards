# Keyboard Shortcuts

> **Navigation:** [README](./README.md) | [PRD](./PRD.md) | [Features](./FEATURES-SUMMARY.md) | [Contributing](./CONTRIBUTING.md)

This document describes the keyboard shortcuts feature implemented in the Dashboard Manager application.

## Overview

The keyboard shortcuts system provides quick access to common actions throughout the app, allowing power users to work more efficiently without relying on mouse interactions.

## Available Shortcuts

### Creating & Adding
- **Ctrl+N** (Cmd+N on Mac): Add new dashboard
  - Opens the dashboard creation dialog
  - Shows error toast if limit reached

### Filtering & Search
- **Ctrl+K** (Cmd+K on Mac): Focus search
  - Immediately focuses the search input field
  - Works from anywhere in the app

- **Escape**: Clear all filters
  - Only works when filters are active
  - Shows success toast on clear

### Import & Export
- **Ctrl+E** (Cmd+E on Mac): Export dashboards
  - Opens the export dialog
  - Shows error toast if no dashboards exist

- **Ctrl+I** (Cmd+I on Mac): Import dashboards
  - Opens the import dialog
  - Always available

### Organization
- **Ctrl+B** (Cmd+B on Mac): Open bulk tag dialog
  - Opens dialog for managing tags across multiple dashboards
  - Shows error toast if no dashboards exist

- **Ctrl+T** (Cmd+T on Mac): Open templates
  - Opens the templates dialog
  - Shows pre-built dashboard templates

- **Ctrl+S** (Cmd+S on Mac): Open suggestions
  - Opens the AI suggestions dialog
  - Gets intelligent dashboard suggestions

### Tools & Help
- **Ctrl+A** (Cmd+A on Mac): View analytics
  - Opens the analytics dashboard
  - Shows usage statistics and insights

- **/** (forward slash): Show keyboard shortcuts
  - Opens this help dialog
  - Shows all available shortcuts with descriptions

## Implementation Details

### Architecture
The keyboard shortcuts system consists of three main parts:

1. **`useKeyboardShortcuts` hook** (`src/hooks/use-keyboard-shortcuts.ts`)
   - Manages keyboard event listeners
   - Detects modifier keys (Ctrl/Cmd, Shift, Alt)
   - Prevents conflicts with text inputs
   - Provides utility functions for formatting shortcuts

2. **`KeyboardShortcutsDialog` component** (`src/components/KeyboardShortcutsDialog.tsx`)
   - Displays all available shortcuts
   - Automatically groups shortcuts by category
   - Shows platform-specific key names (⌘ on Mac, Ctrl on Windows)

3. **`KeyboardShortcutHint` component** (`src/components/KeyboardShortcutHint.tsx`)
   - Floating hint in bottom-right corner
   - Reminds users about keyboard shortcuts
   - Clicking opens the shortcuts dialog

### Smart Input Detection
The system intelligently handles keyboard shortcuts:
- **In text fields**: Only Ctrl/Cmd combinations work (preserves normal typing)
- **Outside text fields**: All shortcuts work including single keys
- **Modal dialogs**: Shortcuts still work when appropriate
- **Browser conflicts**: Uses Ctrl/Cmd combinations to avoid browser shortcut conflicts

### Platform Detection
The system automatically detects the user's platform:
- Mac: Shows ⌘ (Command), ⇧ (Shift), ⌥ (Option)
- Windows/Linux: Shows Ctrl, Shift, Alt

### Accessibility
- All shortcuts use semantic modifier keys
- Shortcuts dialog is fully keyboard navigable
- Visual indicators make shortcuts discoverable
- Keyboard icon in toolbar provides quick access

## User Discovery

Users can discover keyboard shortcuts through:
1. **Keyboard icon button** in the toolbar (icon-only button)
2. **Floating hint** in bottom-right corner (shows "/" shortcut)
3. **Toast notifications** for certain actions
4. **Natural exploration** (common shortcuts like Ctrl+K for search)

## Future Enhancements

Potential improvements for future iterations:
- User-customizable shortcuts
- Chord-based shortcuts (e.g., "g" then "h" for home)
- Command palette (similar to VS Code)
- Shortcut recording/learning mode
- Per-dashboard keyboard navigation
- Quick dashboard switching shortcuts (Ctrl+1-9)
