# AI Development Workflow - Complete Guide

A modern development system that uses AI agents mimicking real development teams. Build websites and applications with specialized agents handling different aspects of development - just like working with human developers.

## 🚀 Quick Start (< 2 minutes)

### Your First Feature
```bash
# 1. Tell the system what you want
/plan add testimonials section to homepage

# 2. Watch AI agents work (with automatic quality checks)
# 3. Review and commit when done
/commit

# 4. Deploy when ready
/deploy production
```

That's it! The AI agents handle the complexity while you focus on what you want built.

## 📖 Table of Contents

- [Overview](#overview)
- [How Information Flows](#how-information-flows)
- [The AI Team - Detailed Profiles](#the-ai-team---detailed-profiles)
- [Commands - Complete Reference](#commands---complete-reference)
- [Development Layers](#development-layers)
- [Workflow Examples](#workflow-examples)
- [Common Scenarios](#common-scenarios)
- [Troubleshooting](#troubleshooting)

## Overview

This workflow replaces traditional development phases with **concurrent development layers** and **specialized AI agents**. Think of it as having an entire development team at your command:

- **No more rigid phases** - Work on any aspect at any time
- **Automatic quality control** - Validation happens continuously
- **Natural language interface** - Just describe what you want
- **Real team structure** - Agents work like human developers

## How Information Flows

### The Complete Workflow

```
YOU → /plan → PROJECT MANAGER → Breaks down tasks
                ↓
         Creates task list
                ↓
    Assigns to specialists
         ↙     ↓     ↘
UI DESIGNER  FRONTEND  PERFORMANCE
    ↓          ↓          ↓
 Design    Implement   Optimize
    ↓          ↓          ↓
    ↘         ↓         ↙
      QA ENGINEER (Automatic)
           ↓
    Validation Results
           ↓
YOU → /commit → /deploy
```

### Agent Collaboration Example

When you request "Add testimonials section":

```
1. YOU: "/plan add testimonials section"
   ↓
2. PROJECT MANAGER: "Breaking into 4 tasks..."
   ├─→ Task 1: Design testimonial cards → UI DESIGNER
   ├─→ Task 2: Create data structure → FRONTEND DEV
   ├─→ Task 3: Build component → FRONTEND DEV
   └─→ Task 4: Add animations → FRONTEND DEV
   
3. UI DESIGNER: "Creating card layout with gradient borders..."
   → Passes design to FRONTEND DEV
   
4. FRONTEND DEV: "Implementing TestimonialCard component..."
   → QA ENGINEER automatically validates
   
5. QA ENGINEER: "✅ All tests passing, no accessibility issues"
   
6. YOU: "/commit" → Changes saved with descriptive message
```

## The AI Team - Detailed Profiles

### 📋 **Project Manager**

**Role**: Your development orchestrator and task breakdown specialist

**Capabilities**:
- Analyzes requirements and breaks them into specific tasks
- Determines which agents are needed
- Creates logical task sequences
- Estimates complexity and time
- Identifies dependencies between tasks

**When Activated**:
- ALWAYS first when using `/plan`
- When requirements are complex or vague
- When coordinating multiple features

**Example Interaction**:
```
You: /plan add blog with comments and admin panel

PM: I'll break this down into manageable phases:

Phase 1: Blog Foundation (5 tasks)
1. [Design] Blog post layout → ui-designer
2. [Frontend] Create BlogPost component → frontend-dev
3. [Frontend] Setup routing → frontend-dev
4. [Design] Blog listing page → ui-designer
5. [Frontend] Implement blog listing → frontend-dev

Phase 2: Comments System (4 tasks)...
Phase 3: Admin Panel (6 tasks)...

Shall I proceed with Phase 1 first?
```

**Decision Process**:
- Considers current project state
- Prioritizes based on dependencies
- Suggests incremental delivery
- Balances quick wins with long-term goals

---

### 👨‍💻 **Frontend Developer**

**Role**: Your implementation powerhouse for all coding tasks

**Capabilities**:
- Writes React components and Next.js pages
- Implements business logic and state management
- Integrates APIs and handles data fetching
- Ensures TypeScript type safety
- Optimizes component performance
- Fixes bugs and technical issues

**Tools & Technologies**:
- React 19.1 & Next.js 15.4
- TypeScript (strict mode)
- shadcn/ui component library
- Tailwind CSS integration
- State management (Context/Redux)

**When Activated**:
- Building new features or components
- Fixing functionality bugs
- Implementing interactivity
- API integration
- Refactoring code

**Example Interaction**:
```
Frontend Dev: Implementing testimonials section...

Created files:
- components/testimonials/TestimonialCard.tsx
- components/testimonials/TestimonialSection.tsx
- lib/types/testimonial.ts

Key decisions:
- Used shadcn/ui Card component as base
- Implemented rotation with React state
- Added keyboard navigation for accessibility
- Optimized with React.memo for performance

The component auto-rotates every 5 seconds but pauses
on hover. All text is readable by screen readers.

✅ TypeScript: No errors
✅ Build: Successful
✅ Accessibility: Keyboard navigable
```

**Code Quality Standards**:
- Always uses TypeScript interfaces
- Follows React best practices
- Implements error boundaries
- Considers SEO and accessibility
- Documents complex logic

---

### 🎨 **UI Designer**

**Role**: Your visual design expert and user experience specialist

**Capabilities**:
- Creates cohesive visual designs
- Manages design system and tokens
- Ensures brand consistency
- Optimizes layouts for all devices
- Selects appropriate colors and typography
- Designs interactive states (hover, focus, active)

**Design Principles**:
- Mathematical spacing (8px grid)
- LCH color system for perceptual uniformity
- Typography scale (Perfect Fourth: 1.333)
- High contrast for accessibility
- Consistent component styling

**When Activated**:
- Any visual changes needed
- Creating new UI components
- Improving user experience
- Fixing design inconsistencies
- Responsive design adjustments

**Example Interaction**:
```
UI Designer: Designing testimonial cards...

Design decisions:
- Card style: Elevated with subtle shadow
- Border: 1px with 10% opacity for depth
- Spacing: 24px padding (3x base unit)
- Typography: Quote in text-lg, author in text-sm muted
- Hover state: Slight scale (1.02) and glow effect
- Color: Gradient accent on quote marks

Creating cohesive design that matches existing components
while adding unique testimonial personality.

Updated design tokens:
--testimonial-quote-color: lch(65% 90 260);
--testimonial-border: lch(15% 0 0 / 0.1);
```

**Design System Management**:
- Never hardcodes values
- Updates design tokens
- Maintains visual hierarchy
- Ensures touch-friendly targets
- Tests color contrast ratios

---

### 🧪 **QA Engineer**

**Role**: Your quality guardian ensuring everything works perfectly

**Capabilities**:
- Runs automated test suites
- Checks accessibility compliance
- Validates responsive design
- Monitors performance metrics
- Tests cross-browser compatibility
- Verifies user interactions

**Testing Layers**:
- **Foundation**: Structure, routing, TypeScript
- **Design**: Tokens, contrast, consistency
- **Experience**: Animations, performance
- **Quality**: Integration, security

**When Activated**:
- AUTOMATICALLY after every code change
- Before any deployment
- When issues are reported
- During performance audits

**Example Interaction**:
```
QA Engineer: Running validation after testimonial changes...

✅ Foundation Layer
   - TypeScript: 0 errors
   - Component structure: Valid
   - Routes: All accessible

⚠️ Design Layer
   - Color contrast: Quote text 4.3:1 (AA pass, AAA fail)
   - Suggestion: Darken text by 10% for AAA

✅ Experience Layer
   - Animation: 60fps maintained
   - Interactions: Keyboard/mouse working
   - Mobile: Touch targets 44px+ ✓

✅ Quality Layer
   - Tests: 48/48 passing
   - Coverage: 87%
   - Lighthouse: 94/100

Overall: READY TO COMMIT (1 warning)
```

**Continuous Monitoring**:
- Watches file changes
- Runs relevant tests only
- Provides instant feedback
- Suggests fixes
- Blocks bad code

---

### 🏗️ **Tech Lead**

**Role**: Your architectural advisor and code quality expert

**Capabilities**:
- Makes technology decisions
- Reviews code patterns
- Ensures scalability
- Manages technical debt
- Chooses appropriate tools
- Documents decisions

**Expertise Areas**:
- System architecture
- Performance optimization
- Security best practices
- Database design
- API architecture
- DevOps considerations

**When Activated**:
- Architecture decisions needed
- Choosing between approaches
- Code review requested
- Performance optimization
- Technical debt evaluation

**Example Interaction**:
```
Tech Lead: Reviewing testimonials implementation...

Architecture Analysis:
- Component structure: ✓ Good separation of concerns
- State management: ✓ Local state appropriate here
- Performance: Consider lazy loading if > 10 testimonials
- Scalability: Add pagination for future growth

Recommendations:
1. Extract rotation logic to custom hook (reusability)
2. Add error boundary for external quote API
3. Consider IndexedDB for offline testimonials
4. Implement virtual scrolling if list grows

Technical debt: None introduced
Maintainability score: 8/10
```

---

### 📄 **Documentation Maintainer**

**Role**: Your documentation accuracy guardian

**Capabilities**:
- Automatically syncs documentation with code changes
- Makes surgical updates to specific values
- Updates design tokens, features, and specifications
- Maintains wireframes and technical constants
- Preserves document structure and style
- Ensures docs are included in same commit as code

**Documentation Scope**:
- **CLAUDE.md**: Technical constants, performance budgets
- **DESIGN.md**: Colors, typography, layouts, wireframes
- **PRD.md**: Features, scope, requirements
- **LAYERS.md**: Validation rules, layer ownership

**When Activated**:
- AUTOMATICALLY during validation phase
- Before any commit (as part of QA process)
- When using `/sync-docs` manually
- Before production deployments

**Example Interaction**:
```
Documentation Maintainer: Syncing documentation...

Detected changes:
- New component: TestimonialSection
- Color token modified: --color-primary
- Team layout changed: 1x4 → 2x2

Updating documentation:
✓ PRD.md: Added testimonials to feature list
✓ DESIGN.md: Updated primary color value
✓ DESIGN.md: Modified team section wireframe

Documentation synchronized!
```

**Surgical Updates Only**:
- Never rewrites entire documents
- Only updates specific changed values
- Maintains original formatting
- Preserves writing style
- Minimal, focused changes

---

### ⚡ **Performance Engineer**

**Role**: Your speed optimization specialist

**Capabilities**:
- Analyzes bundle sizes
- Optimizes load times
- Implements code splitting
- Reduces JavaScript execution
- Optimizes images and assets
- Monitors Core Web Vitals

**Performance Targets**:
- Lighthouse: 95+ all metrics
- Bundle: < 150KB JavaScript
- FCP: < 1.5 seconds
- LCP: < 2.5 seconds
- CLS: < 0.1
- FID: < 100ms

**When Activated**:
- Performance scores drop
- Bundle size too large
- Slow page loads
- Animation jank
- High memory usage

**Example Interaction**:
```
Performance Engineer: Analyzing testimonial section impact...

Current metrics:
- Component size: 12KB (uncompressed)
- Render time: 23ms
- Re-renders: Only on rotation (good)

Optimizations implemented:
1. Lazy loaded testimonial images
2. Used srcSet for responsive images
3. Preloaded next testimonial during idle
4. Debounced rotation to reduce CPU

Results:
- Page load: 2.1s → 1.8s
- Bundle: +4KB (gzipped)
- FPS during rotation: Stable 60

✅ Within all performance budgets
```

## Commands - Complete Reference

### `/plan` - Start Any Work

**Purpose**: Breaks down any request into actionable tasks

**Syntax**:
```bash
/plan [detailed description of what you want]
```

**What Happens**:
1. Project Manager analyzes request
2. Creates hierarchical task breakdown  
3. Assigns tasks to appropriate agents
4. Shows execution order
5. Begins implementation automatically

**Examples**:
```bash
# Feature request
/plan add search functionality with filters and sorting

# Bug fix
/plan fix mobile menu not closing when clicking outside

# Enhancement
/plan improve form validation with better error messages

# Performance
/plan optimize homepage load time
```

**Output Format**:
```
📋 Plan: Add Search Functionality

Tasks (7):
1. [Design] Search bar UI design
   → ui-designer | Size: S | Deps: None
   
2. [Frontend] Implement search input component
   → frontend-dev | Size: M | Deps: Task 1
   
3. [Frontend] Create filter components
   → frontend-dev | Size: M | Deps: Task 1
   
[... more tasks ...]

Estimated: 6-8 hours
Starting with Task 1...
```

---

### `/status` - Project Overview

**Purpose**: Shows comprehensive project state

**Syntax**:
```bash
/status [--flags]
```

**Flags**:
- `--verbose`: Detailed information
- `--tasks`: Show all active tasks
- `--metrics`: Performance metrics
- `--layer=X`: Focus on specific layer

**Output Sections**:
1. Layer progress visualization
2. Recent activity
3. Current metrics
4. Active tasks
5. Recommendations

**Example Output**:
```
🏗️ Project Status
━━━━━━━━━━━━━━━━━━

📊 Layer Progress
Foundation  ████████████░░  85% ✅
Design      ██████████░░░░  70% ✅  
Experience  ████████░░░░░░  55% ⚠️
Quality     ███████████░░░  78% ✅

📈 Metrics
Performance: 94 | Bundle: 142KB/150KB | Tests: 52/52

🔄 Recent (last 24h)
• feat: testimonials section - 2h ago
• fix: mobile navigation - 5h ago
• perf: image optimization - 1d ago

📝 Active Tasks (3)
1. ⚡ Implement search filters (in progress)
2. 🎨 Design dark mode toggle (queued)
3. 🧪 Add E2E tests for checkout (queued)

💡 Recommendations
- Address animation warning in Experience layer
- Bundle approaching limit (95%)
- Consider code splitting for search feature
```

---

### `/validate` - Quality Checks

**Purpose**: Manual validation (automatic validation always running)

**Syntax**:
```bash
/validate [layer] [--flags]
```

**Layers**:
- `foundation`: Structure, types, routing
- `design`: Visual consistency, tokens
- `experience`: Performance, animations
- `quality`: Tests, security, docs

**Flags**:
- `--all`: Check everything
- `--fix`: Auto-fix where possible
- `--report`: Generate detailed report

**Example Usage**:
```bash
# Smart validation (only changed files)
/validate

# Check specific layer
/validate design

# Full system check
/validate --all --report

# Auto-fix issues
/validate --fix
```

**Output Example**:
```
🔍 Validation Results
━━━━━━━━━━━━━━━━━━━

✅ Foundation (2.3s)
   └─ TypeScript: Clean
   └─ Structure: Valid
   └─ Routing: Accessible

⚠️ Design (1.1s)
   └─ Tokens: 98% (2 hardcoded)
   └─ Contrast: 1 warning
   └─ Fix available: run with --fix

✅ Experience (3.2s)
   └─ Performance: 60fps
   └─ Bundle: 142KB ✓
   └─ Animations: Smooth

Summary: 1 warning (fixable)
```

---

### `/commit` - Save Your Work

**Purpose**: Creates professional git commits

**Syntax**:
```bash
/commit [action] [--message="custom"]
```

**Actions**:
- `(none)`: Commit locally
- `push`: Commit and push
- `amend`: Modify last commit

**Auto-Generated Messages Include**:
- Type (feat/fix/perf/style)
- Scope (affected components)
- Description
- Breaking changes
- Performance impact

**Example Flow**:
```bash
You: /commit

System: Analyzing changes...

Generated commit:
━━━━━━━━━━━━━━━━━━━
feat(testimonials): add rotating testimonial section

- Implement TestimonialCard with auto-rotation
- Add keyboard navigation for accessibility  
- Optimize images with lazy loading
- Style with gradient borders and hover effects

Performance: No regression (142KB → 144KB)
Tests: All passing
Affected layers: Design, Foundation

Commit? [Y/n]: Y

✅ Committed successfully!
```

---

### `/deploy` - Ship to Production

**Purpose**: Deploy with comprehensive safety checks

**Syntax**:
```bash
/deploy [environment] [--flags]
```

**Environments**:
- `(none)`: Deploy to preview
- `production`: Live deployment
- `test`: Test environment

**Pre-Flight Checks**:
1. All validation passing
2. No uncommitted changes
3. Performance budgets met
4. Recent QA approval
5. Build successful

**Example**:
```bash
You: /deploy production

🚀 Pre-Flight Check
━━━━━━━━━━━━━━━━━━━

✅ Code Quality
   - TypeScript: Clean
   - Tests: 52/52
   - Coverage: 87%

✅ Performance  
   - Lighthouse: 94
   - Bundle: 142KB ✓
   - Core Vitals: Pass

⚠️ Warnings (non-blocking)
   - 2 TODO comments
   - Last QA: 25 hours ago

Deploy to PRODUCTION? [y/N]: y

📦 Building...
📤 Uploading...
🔍 Verifying...

✅ Deployed Successfully!

Production: https://yoursite.com
Preview: https://preview-a1b2c3.vercel.app

Monitoring for 5 minutes... [▓▓▓░░]
```

---

### `/sync-docs` - Documentation Sync

**Purpose**: Manually sync documentation or check sync status

**Syntax**:
```bash
/sync-docs [--flags]
```

**Flags**:
- `--check`: See what needs updating without making changes
- `--verbose`: Show detailed updates being made
- `--report`: Get documentation health metrics
- `--force`: Force sync even if no changes detected

**When to Use Manually**:
- After git reset or rollback
- Before major deployments (verification)
- After merging branches
- When you suspect documentation drift
- If automatic sync was previously skipped

**Example Usage**:
```bash
# Check what's out of sync
/sync-docs --check

# Get documentation health report
/sync-docs --report

# See detailed updates
/sync-docs --verbose

# Force sync after rollback
git reset --hard HEAD~1
/sync-docs
```

**Output Example**:
```
📝 Documentation Status
━━━━━━━━━━━━━━━━━━━━━

⚠️ 2 files need updates:

DESIGN.md:
- Color token: --color-primary outdated
- Team layout: Shows 1x4, code has 2x2

PRD.md:
- Missing feature: Testimonials section

Run without --check to apply updates
```

**Note**: Documentation sync runs automatically during validation, so manual use is rarely needed. This command is primarily for verification and special cases.

---

## Update "How Information Flows" section:

### Replace the existing workflow diagram with:

```
YOU → /plan → PROJECT MANAGER → Breaks down tasks
                ↓
         Creates task list
                ↓
    Assigns to specialists
         ↙     ↓     ↘
UI DESIGNER  FRONTEND  PERFORMANCE
    ↓          ↓          ↓
 Design    Implement   Optimize
    ↓          ↓          ↓
    ↘         ↓         ↙
      QA ENGINEER (Validation)
           ↓
    DOC MAINTAINER (Auto-sync)
           ↓
    Validation Results
           ↓
YOU → /commit → /deploy
```

### Update the "Agent Collaboration Example" to include doc sync:

After the existing example, add:

```
7. DOC MAINTAINER: "Updating documentation..."
   - Updates PRD.md with testimonials feature
   - Updates DESIGN.md with new design tokens
   
8. YOU: "/commit" → Changes saved INCLUDING doc updates
```

---

## Update "Quick Reference Card" section:

**Essential Commands**:
- `/plan` - Start anything new
- `/status` - See what's happening
- `/validate` - Check quality
- `/commit` - Save work
- `/deploy` - Go live
- `/sync-docs` - Verify documentation (rarely needed)

**Agent Specialties**:
- **PM**: Planning and coordination
- **Frontend**: Building features
- **Designer**: Making it beautiful
- **QA**: Ensuring quality
- **Tech Lead**: Architecture decisions
- **Performance**: Making it fast
- **Doc Maintainer**: Keeping docs accurate

---

## Common Scenarios

### Scenario: "Make it look more modern"

```bash
You: /plan make the website look more modern

PM: I'll break this down into specific improvements:

1. [Design] Update color scheme to use gradients
2. [Design] Add subtle animations to cards
3. [Design] Modernize typography with variable fonts
4. [Frontend] Implement glass-morphism effects
5. [Design] Add micro-interactions to buttons

UI Designer: Starting with gradient system...
```

### Scenario: "It's broken on iPhone"

```bash
You: /plan header menu not working on iPhone

PM: Assigning to Frontend Dev for immediate fix...

Frontend Dev: Investigating iPhone issue...
- Found: Touch events not registering
- Issue: Using hover states on mobile
- Fix: Implementing touch-friendly interactions

QA: Testing across devices...
✅ iPhone 12: Fixed
✅ iPhone 13: Fixed  
✅ iPad: Working
```

### Scenario: "Client wants it faster"

```bash
You: /plan client says site loads too slowly

PM: Performance audit needed. Assigning to Performance Engineer...

Perf Eng: Running diagnostics...

Issues found:
1. Images not optimized (2.3MB total)
2. JavaScript bundle too large (187KB)
3. No caching headers
4. Render-blocking CSS

Implementing fixes...
- Converting images to WebP: 2.3MB → 534KB
- Code splitting routes: 187KB → 134KB
- Adding cache headers: 1 year for assets
- Inlining critical CSS

Results: Load time 4.2s → 1.8s (57% faster)
```

## Advanced Workflows

### Multi-Phase Features

For complex features, agents coordinate across phases:

```
Phase 1: Foundation (Frontend Dev)
- Data structures
- Basic components
- API integration

Phase 2: Enhancement (UI Designer + Frontend Dev)
- Visual design
- Polish interactions
- Responsive refinement

Phase 3: Optimization (Performance Eng + QA)
- Performance tuning
- Final testing
- Production prep
```

### Agent Handoffs

Agents pass context between each other:

```
UI Designer → Frontend Dev:
"Created design with 16px border radius and shadow-lg. 
 Color tokens updated in design-tokens.ts"
 
Frontend Dev → QA Engineer:
"Implemented with shadcn Card component. Added 
 aria-labels for screen readers"
 
QA → Performance Engineer:
"All tests passing but FCP is 2.1s (target 1.5s)"
```

## Tips for Power Users

### Direct Agent Requests
```bash
# Ask specific agent
"Have the UI Designer review the color contrast"

# Override agent decision
"Use 14px font even though it's not in the scale"
```

### Workflow Customization
```bash
# Skip certain validations
/validate --skip=animations

# Force deployment despite warnings
/deploy production --force

# Custom commit format
/commit --message="WIP: experimenting with layouts"
```

### Debugging Agent Decisions
```bash
# See agent reasoning
/status --verbose --show-reasoning

# Review agent communication
/status --show-handoffs
```

## Troubleshooting

### "Agents seem confused"
- Be more specific in your request
- Break complex features into smaller pieces
- Use examples: "like Amazon's search bar"

### "Validation keeps failing"
```bash
# See exact errors
/validate --verbose

# Auto-fix what's possible  
/validate --fix

# Skip non-critical checks
/validate --essential-only
```

### "Wrong agent working on task"
- Agents self-correct through validation
- You can request specific agents
- Tech Lead reviews assignments

### "Changes aren't what I wanted"
- Agents iterate based on feedback
- Be specific about what's wrong
- Use visual references when possible

## System Architecture

### Why This Approach Works

1. **Separation of Concerns**: Each agent masters their domain
2. **Continuous Validation**: Catches issues immediately
3. **Natural Language**: No technical syntax required
4. **Parallel Work**: Multiple agents can work simultaneously
5. **Real Team Dynamics**: Agents collaborate like humans

### The Layer System Advantage

Traditional: Phase 1 → Phase 2 → Phase 3 (Sequential)
This System: All layers active, work anywhere (Concurrent)

Benefits:
- Fix bugs while adding features
- Update design without breaking function
- Optimize continuously
- Ship faster

---

## Quick Reference Card

**Essential Commands**:
- `/plan` - Start anything new
- `/status` - See what's happening
- `/validate` - Check quality
- `/commit` - Save work
- `/deploy` - Go live

**Agent Specialties**:
- **PM**: Planning and coordination
- **Frontend**: Building features
- **Designer**: Making it beautiful
- **QA**: Ensuring quality
- **Tech Lead**: Architecture decisions
- **Performance**: Making it fast

**Remember**: 
- Be specific in requests
- Trust agent expertise
- Commit often
- Check status regularly
- Quality is automatic

---

*This system is designed to feel like working with a real development team. The more naturally you communicate, the better the results. Happy building!*