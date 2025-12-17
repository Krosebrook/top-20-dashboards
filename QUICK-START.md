# Quick Start Guide

> **Navigation:** [README](./README.md) | [PRD](./PRD.md) | [Contributing](./CONTRIBUTING.md)

Get up and running with Dashboard Manager in minutes!

## ⚡ 5-Minute Setup

### 1. Install and Run

```bash
# Clone the repository
git clone https://github.com/Krosebrook/top-20-dashboards.git
cd top-20-dashboards

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### 2. Create Your First Dashboard

1. Click the **"Add Dashboard"** button (or press `Ctrl+N`)
2. Fill in the details:
   - **Title**: "Sales Performance Dashboard"
   - **Description**: "Track monthly sales metrics and team performance"
   - **Category**: Sales
   - **Priority**: High
   - **Status**: In Progress
3. Click **"Create Dashboard"**

🎉 Your first dashboard is created!

### 3. Explore Key Features

#### Add Tags
- Click on your dashboard to edit it
- In the Tags field, type "Q1-2024" and press Enter
- Add more tags like "revenue" and "team-metrics"

#### Filter and Search
- Use the search bar to find dashboards by name
- Click the **Priority**, **Status**, or **Category** dropdowns to filter
- Click **Tags** button to filter by tags

#### Try Keyboard Shortcuts
- Press `/` to see all keyboard shortcuts
- Press `Ctrl+K` to focus the search box
- Press `Ctrl+T` to see dashboard templates
- Press `Ctrl+A` to view analytics

#### View Dashboard Details
- Click the **eye icon** on any dashboard card
- Explore the tabs: Overview, Details, Activity, Notes
- Click **Edit** to make changes

## 🎯 Common Workflows

### Workflow 1: Team Planning
1. Create dashboards for each team member
2. Tag them with project names (e.g., "project-alpha")
3. Set priorities to identify critical items
4. Track status from "Not Started" to "Completed"
5. Use analytics to monitor progress

### Workflow 2: Executive Dashboard Planning
1. Use the **Templates** feature (`Ctrl+T`)
2. Select "Executive Dashboard" template
3. Customize for your needs
4. Set priority to "Critical"
5. Export the list (`Ctrl+E`) to share with your team

### Workflow 3: Managing Multiple Projects
1. Create dashboards for different projects
2. Use tags for organization: "project-a", "project-b"
3. Filter by tag to view project-specific dashboards
4. Use bulk tag operations (`Ctrl+B`) to update multiple at once
5. Track completion rates in Analytics

## 📊 Understanding the Interface

### Main Toolbar
- **Add Dashboard** - Create new dashboard
- **Export** - Download your data as JSON or CSV
- **Import** - Upload previously exported data
- **Templates** - Use pre-built templates
- **Suggestions** - Get AI-powered recommendations
- **Bulk Tags** - Manage tags across multiple dashboards
- **Analytics** - View usage statistics and insights
- **Keyboard** - View all keyboard shortcuts

### Dashboard Cards
Each card shows:
- **Title** and **Description**
- **Priority Badge** (color-coded)
- **Status Badge**
- **Category**
- **Tags** (if any)
- **Quick Actions**: View (eye icon), Edit (pencil), Delete (trash)

### Filters Panel
- **Search** - Find dashboards by name or description
- **Priority** - Filter by Critical, High, Medium, Low
- **Status** - Filter by Not Started, In Progress, Completed, On Hold
- **Category** - Filter by category type
- **Tags** - Filter by one or multiple tags
- **Advanced Filters** - Sort and display options
- **Clear Filters** - Reset all filters

## 💡 Pro Tips

### Keyboard Shortcuts for Speed
Learn these essential shortcuts:
- `Ctrl+N` - Add new dashboard
- `Ctrl+K` - Focus search
- `Ctrl+E` - Export data
- `Ctrl+B` - Bulk tag operations
- `Esc` - Clear filters

### Organization Best Practices
- **Use Tags Liberally** - Tags help you create cross-cutting views
- **Set Realistic Priorities** - Don't mark everything as Critical
- **Update Status Regularly** - Keep your dashboard list current
- **Use Templates** - Save time with pre-built templates
- **Review Analytics** - Check what dashboards you use most

### Data Management
- **Export Regularly** - Back up your data with `Ctrl+E`
- **Import Carefully** - Preview data before importing
- **Limit to 20** - Keep your list focused on top priorities
- **Archive Old Items** - Delete completed dashboards you no longer need

## 🔍 Finding What You Need

### By Priority
1. Click the **Priority** dropdown
2. Select "Critical" or "High"
3. See your most important dashboards

### By Status
1. Click the **Status** dropdown
2. Select "In Progress"
3. See what's currently being worked on

### By Tags
1. Click the **Tags** button
2. Select one or multiple tags
3. See dashboards with any selected tag

### By Search
1. Click in the search box (or press `Ctrl+K`)
2. Type any text from title or description
3. Results filter instantly

## 📈 Viewing Analytics

1. Click **Analytics** button or press `Ctrl+A`
2. Explore three tabs:
   - **Overview** - Key metrics, status distribution, activity trends
   - **Usage Details** - Per-dashboard statistics
   - **Activity Log** - Recent actions
3. Use insights to improve your workflow

## 📥 Import/Export

### Export Your Data
1. Click **Export** or press `Ctrl+E`
2. Choose format: JSON (full data) or CSV (spreadsheet)
3. File downloads automatically

### Import Data
1. Click **Import** or press `Ctrl+I`
2. Drag and drop your JSON file or click to browse
3. Preview the data
4. Confirm import

## 🤔 Common Questions

**Q: Can I have more than 20 dashboards?**
A: Currently limited to 20 to maintain focus. See [PRODUCTION-ROADMAP.md](./PRODUCTION-ROADMAP.md) for future plans.

**Q: Where is my data stored?**
A: Locally in your browser using GitHub Spark's useKV hook. Export regularly to back up.

**Q: Can I share my dashboards?**
A: Export and share the JSON file. Multi-user features are planned for future releases.

**Q: Do keyboard shortcuts work everywhere?**
A: Most shortcuts work globally, but are disabled when typing in text fields (except Ctrl combinations).

**Q: Can I customize the categories or priorities?**
A: Currently they're fixed, but custom fields are planned for future releases.

## 🚀 Next Steps

1. ✅ Create 5-10 dashboards for your work
2. ✅ Organize them with tags
3. ✅ Set up filters for common views
4. ✅ Learn keyboard shortcuts
5. ✅ Check analytics weekly
6. ✅ Export your data for backup

## 📚 Learn More

- **[README.md](./README.md)** - Full project overview
- **[FEATURES-SUMMARY.md](./FEATURES-SUMMARY.md)** - Detailed feature list
- **[KEYBOARD-SHORTCUTS.md](./KEYBOARD-SHORTCUTS.md)** - Complete shortcuts reference
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute
- **[PRODUCTION-ROADMAP.md](./PRODUCTION-ROADMAP.md)** - Future plans

## 🆘 Need Help?

- Check the documentation files above
- Press `/` in the app to see keyboard shortcuts
- Open an issue on [GitHub](https://github.com/Krosebrook/top-20-dashboards/issues)

---

Happy dashboard managing! 🎯
