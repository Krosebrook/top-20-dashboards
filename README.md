# Dashboard Manager

A comprehensive dashboard management application that helps you organize, prioritize, and track the top 20 dashboards you need for your work or personal projects.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)
![React](https://img.shields.io/badge/React-19.0.0-blue)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Dashboard Manager is a modern, feature-rich application designed to help users manage their dashboard planning and implementation. Whether you're an executive tracking KPIs, a data analyst managing analytics projects, or a product manager coordinating team dashboards, this tool provides the organization and insights you need.

**Key Benefits:**
- **Organized** - Clear structure with intuitive categorization and visual hierarchy
- **Actionable** - Quickly identify priority dashboards and take next steps
- **Elegant** - Clean, modern interface that feels professional yet approachable
- **Intelligent** - AI-powered suggestions and comprehensive analytics

## ✨ Features

### Core Features
- ✅ **Dashboard Management** - Create, edit, delete, and view up to 20 dashboards
- 🎯 **Priority Management** - Assign priority levels (Critical, High, Medium, Low)
- 📊 **Status Tracking** - Monitor implementation status (Not Started, In Progress, Completed, On Hold)
- 🏷️ **Custom Tags** - Add up to 10 custom tags per dashboard for flexible organization
- 🔍 **Advanced Filtering** - Search, filter by priority/status/category/tags, and sort by multiple fields
- 👁️ **Dashboard Viewer** - Detailed view of dashboard information with tabbed interface

### Advanced Features
- 📈 **Analytics & Usage Tracking** - Track all interactions and view comprehensive usage statistics
- 🤖 **AI-Powered Suggestions** - Get intelligent dashboard recommendations
- 📝 **Templates** - Pre-built dashboard templates for common use cases
- 🏷️ **Bulk Tag Operations** - Manage tags across multiple dashboards efficiently
- 📥 **Import/Export** - Export to JSON/CSV and import from previous exports
- ⌨️ **Keyboard Shortcuts** - Fast access to all features with comprehensive shortcuts
- 📱 **Mobile Responsive** - Fully responsive design for all screen sizes

For a complete feature list, see [FEATURES-SUMMARY.md](./FEATURES-SUMMARY.md).

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krosebrook/top-20-dashboards.git
   cd top-20-dashboards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` (or the port shown in the terminal)

### Build for Production

```bash
npm run build
npm run preview
```

### Other Commands

- `npm run lint` - Run ESLint to check code quality
- `npm run optimize` - Optimize Vite dependencies

## 📚 Documentation

Comprehensive documentation is available in the following files:

- **[PRD.md](./PRD.md)** - Product Requirements Document with complete feature specifications
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Code architecture and design patterns
- **[FEATURES-SUMMARY.md](./FEATURES-SUMMARY.md)** - Detailed feature descriptions
- **[KEYBOARD-SHORTCUTS.md](./KEYBOARD-SHORTCUTS.md)** - Complete keyboard shortcuts guide
- **[ANALYTICS-FEATURE.md](./ANALYTICS-FEATURE.md)** - Analytics and usage tracking documentation
- **[REFACTORING.md](./REFACTORING.md)** - Codebase refactoring details
- **[REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md)** - Quick reference for refactoring changes
- **[PRODUCTION-ROADMAP.md](./PRODUCTION-ROADMAP.md)** - Future roadmap and enhancement plans
- **[SECURITY.md](./SECURITY.md)** - Security policy and reporting guidelines

## 🛠️ Technology Stack

### Core
- **React 19.0.0** - UI library with latest features
- **TypeScript 5.7.3** - Type-safe development
- **Vite 6.3.5** - Fast build tool and dev server

### UI & Styling
- **Tailwind CSS 4.1.11** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Framer Motion 12.6.2** - Smooth animations
- **Phosphor Icons** - Beautiful icon set

### State & Data
- **@github/spark** - Persistence with useKV hook
- **Zod 3.25.76** - Runtime schema validation
- **React Hook Form 7.54.2** - Efficient form management

### Utilities
- **date-fns 3.6.0** - Date manipulation
- **sonner 2.0.1** - Toast notifications

See [package.json](./package.json) for the complete dependency list.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn UI components (40+ components)
│   ├── DashboardCard.tsx
│   ├── DashboardDialog.tsx
│   ├── DashboardViewer.tsx
│   ├── AnalyticsDialog.tsx
│   └── ...
├── hooks/               # Custom React hooks
│   ├── use-dashboard-manager.ts
│   ├── use-dashboard-filters.ts
│   ├── use-analytics.ts
│   ├── use-keyboard-shortcuts.ts
│   └── use-dialog-state.ts
├── lib/                 # Utility functions
│   ├── types.ts        # TypeScript types
│   ├── validation.ts   # Zod schemas
│   ├── formatting.ts   # Formatting utilities
│   ├── analytics.ts    # Analytics logic
│   └── ...
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

For detailed architecture information, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** following the existing code style
4. **Test thoroughly** - ensure all features work as expected
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Development Guidelines
- Use TypeScript for all new code
- Follow the existing component patterns
- Add proper type definitions
- Update documentation for new features
- Test on multiple screen sizes
- Run `npm run lint` before committing

## 📋 Roadmap

See [PRODUCTION-ROADMAP.md](./PRODUCTION-ROADMAP.md) for detailed future enhancement plans, including:
- Multi-workspace support
- Real-time collaboration
- Advanced analytics visualizations
- API integrations
- Mobile native app
- And much more...

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Copyright (c) GitHub, Inc.

## 🙏 Acknowledgments

- Built with [GitHub Spark](https://githubnext.com/projects/spark)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Phosphor Icons](https://phosphoricons.com/)

---

**Made with ❤️ for dashboard managers everywhere**
