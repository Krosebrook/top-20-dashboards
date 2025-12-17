# Contributing to Dashboard Manager

Thank you for your interest in contributing to Dashboard Manager! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. Please:

- Be respectful and considerate in your communication
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git
- A GitHub account
- Familiarity with React, TypeScript, and Tailwind CSS

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/top-20-dashboards.git
   cd top-20-dashboards
   ```

3. **Add the upstream remote:**
   ```bash
   git remote add upstream https://github.com/Krosebrook/top-20-dashboards.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### Creating a New Feature

1. **Sync with upstream:**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit regularly

4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub

### Fixing a Bug

1. Create a branch named `fix/bug-description`
2. Follow the same workflow as features
3. Include steps to reproduce the bug in your PR description
4. Add tests if applicable

## 💻 Coding Standards

### TypeScript

- **Always use TypeScript** for new code
- Define proper types for all functions and components
- Avoid using `any` type unless absolutely necessary
- Use interfaces for object shapes
- Export types that might be reused

### React Components

- **Use functional components** with hooks
- **Prefer named exports** over default exports
- **Keep components focused** - one responsibility per component
- **Extract reusable logic** into custom hooks
- **Use composition** over inheritance

Example:
```typescript
// Good
export function DashboardCard({ dashboard }: DashboardCardProps) {
  // Component logic
}

// Avoid
export default function DashboardCard(props: any) {
  // Component logic
}
```

### Custom Hooks

- Prefix hook names with `use`
- Use `useCallback` for functions passed to child components
- Use `useMemo` for expensive calculations
- Document complex hooks with JSDoc comments

Example:
```typescript
/**
 * Hook for managing dashboard operations
 * @returns Dashboard CRUD operations and state
 */
export function useDashboardManager() {
  // Hook implementation
}
```

### Styling

- **Use Tailwind CSS** utility classes
- Follow the existing color scheme defined in theme
- Keep mobile-first responsive design
- Use consistent spacing scale (p-4, p-6, etc.)

### File Organization

- One component per file
- Place related components in the same directory
- Group utilities by purpose in `/src/lib`
- Use the `@/` alias for imports

```typescript
// Good
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/formatting'

// Avoid
import { Button } from '../../components/ui/button'
```

### Code Style

- **Use ESLint** - run `npm run lint` before committing
- **Format with Prettier** (if configured)
- **Use meaningful variable names** - be descriptive
- **Add comments** for complex logic only
- **Remove console.logs** before committing

## 🧪 Testing Guidelines

While the project doesn't currently have automated tests, please:

1. **Manually test your changes** thoroughly
2. **Test on multiple screen sizes** (mobile, tablet, desktop)
3. **Test in different browsers** (Chrome, Firefox, Safari)
4. **Verify existing features** still work after your changes
5. **Test edge cases** (empty states, max limits, etc.)

### Manual Testing Checklist

- [ ] Create a new dashboard
- [ ] Edit an existing dashboard
- [ ] Delete a dashboard
- [ ] Apply filters and search
- [ ] Use keyboard shortcuts
- [ ] Import/Export data
- [ ] View analytics
- [ ] Test on mobile device
- [ ] Test with 20 dashboards (max limit)

## 📝 Commit Guidelines

### Commit Message Format

Use clear, descriptive commit messages:

```
type: Brief description (50 chars or less)

More detailed explanation if needed (wrap at 72 chars)

- Bullet points for multiple changes
- Reference issue numbers if applicable
```

### Commit Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples

```bash
feat: Add dark mode toggle

Implements dark mode support using next-themes.
Users can toggle between light and dark modes via settings.

- Added theme provider
- Updated color variables
- Added toggle button in header

Closes #42
```

```bash
fix: Correct tag filtering OR logic

Tags were using AND logic instead of OR. Now shows
dashboards with ANY selected tag as intended.
```

## 🔍 Pull Request Process

### Before Submitting

1. **Sync with upstream** main branch
2. **Run the linter:** `npm run lint`
3. **Test thoroughly** on multiple browsers/devices
4. **Update documentation** if needed
5. **Add yourself** to contributors if first contribution

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Tested on multiple screen sizes
- [ ] Documentation updated
- [ ] No console errors or warnings
```

### Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## 📚 Documentation

### When to Update Documentation

Update documentation when you:
- Add a new feature
- Change existing behavior
- Add new configuration options
- Modify the API or hooks
- Change project structure

### Documentation Files

- **README.md** - Project overview and getting started
- **ARCHITECTURE.md** - Code architecture and patterns
- **FEATURES-SUMMARY.md** - Feature descriptions
- **KEYBOARD-SHORTCUTS.md** - Keyboard shortcuts
- **ANALYTICS-FEATURE.md** - Analytics documentation
- **CONTRIBUTING.md** - This file

### Documentation Style

- Use clear, concise language
- Include code examples where helpful
- Add screenshots for UI features
- Keep examples up-to-date
- Use proper markdown formatting

## 🎯 Areas for Contribution

Looking for where to start? Here are some areas that need help:

### High Priority
- [ ] Add automated tests (unit and integration)
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Performance optimization (virtualization for large lists)
- [ ] Dark mode support
- [ ] Internationalization (i18n)

### Medium Priority
- [ ] Additional dashboard templates
- [ ] More export formats (PDF, Excel)
- [ ] Advanced analytics visualizations
- [ ] Bulk operations improvements
- [ ] Drag-and-drop dashboard reordering

### Low Priority
- [ ] Custom themes
- [ ] Plugins/extensions system
- [ ] Browser extension version
- [ ] Desktop app (Electron)

## 💬 Questions?

If you have questions:

1. Check the [documentation](./README.md)
2. Look through [existing issues](https://github.com/Krosebrook/top-20-dashboards/issues)
3. Open a new issue with the question label

## 🙏 Thank You!

Every contribution, no matter how small, helps make Dashboard Manager better for everyone. We appreciate your time and effort!

---

Happy coding! 🚀
