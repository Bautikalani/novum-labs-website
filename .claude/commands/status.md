# Status Command

Provides a comprehensive overview of the current project state across all development layers.

## Usage

```
/status [--flags]
```

## Flags

- `--verbose`: Show detailed information for each layer
- `--tasks`: Include full task list from TodoWrite
- `--metrics`: Show detailed performance metrics
- `--recent=[n]`: Show last n commits (default: 5)
- `--layer=[name]`: Focus on specific layer

## Examples

```bash
/status                          # Quick overview
/status --verbose               # Detailed layer information
/status --tasks --metrics       # Full project state
/status --layer=design          # Design layer deep dive
/status --recent=10             # Show last 10 commits
```

## Execution Process

1. **Gather Layer Status**
   - Check completion percentage for each layer
   - Identify recent changes per layer
   - Current validation state
   - Active work in progress

2. **Collect Metrics**
   - Lighthouse scores
   - Bundle size analysis
   - Performance metrics (FPS, Core Web Vitals)
   - Test coverage percentages
   - TypeScript error count

3. **Task Analysis**
   - Query TodoWrite for active tasks
   - Group by priority and assignee
   - Calculate completion rate
   - Identify blockers

4. **Generate Summary**

## Output Format

### Standard Output
```
🏗️  Novum Labs Website Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Development Progress
Foundation  ████████████░░░░  75% ✅
Design      ██████████░░░░░░  62% ✅  
Experience  ███████░░░░░░░░░  43% ⚠️
Quality     █████████████░░░  81% ✅

📈 Key Metrics
Performance: 92/100 | Accessibility: 96/100 | SEO: 94/100
Bundle Size: 142KB/150KB | FPS: 60 | CLS: 0.08

🔄 Recent Activity (last 24h)
• feat(design): implement testimonial cards - 2h ago
• fix(foundation): resolve TypeScript errors - 5h ago  
• perf(experience): optimize image loading - 8h ago

📝 Active Tasks: 7 total (3 high, 4 medium)
Next: Implement hover animations for cards → frontend-dev

💡 Recommendations
1. Address animation warning in Experience layer
2. Bundle size approaching limit (95% used)
3. 2 TODO comments need resolution

Last Updated: 2 minutes ago
```

### Verbose Output (`--verbose`)
```
🏗️  Novum Labs Website Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 FOUNDATION LAYER (75% complete)
Components:
  ✅ Header/Navigation - Complete
  ✅ HeroSection - Complete  
  ✅ DemosSection - Complete
  ⏳ TeamSection - In Progress (missing images)
  ❌ TestimonialsSection - Not Started

Validation: ✅ All passing
- TypeScript: 0 errors, 0 warnings
- HTML: Valid semantic structure
- Accessibility: WCAG AA compliant

Recent Changes:
- Added responsive navigation (PR #23)
- Fixed mobile layout issues
- Improved semantic HTML structure

[Similar sections for Design, Experience, Quality layers...]
```

### Task Focus (`--tasks`)
```
📝 Task Breakdown
━━━━━━━━━━━━━━━━━━━

🔴 High Priority (3)
1. Fix animation performance issue
   Assignee: frontend-dev
   Status: In Progress
   Blocking: Deploy to production

2. Implement testimonials section
   Assignee: ui-designer → frontend-dev
   Status: Design Phase
   Due: Tomorrow

3. Reduce bundle size below 150KB
   Assignee: performance-engineer
   Status: Not Started
   Current: 163KB

🟡 Medium Priority (4)
[...]

🟢 Low Priority (2)
[...]

📊 Task Velocity
Completed Today: 4
Weekly Average: 12
Estimated Completion: 3 days
```

## Integration Points

- **With Git**: Analyzes commit history
- **With Validation**: Shows current validation state
- **With TodoWrite**: Pulls active task list
- **With Metrics**: Integrates performance data
- **With Agents**: Shows who's working on what

## Status Indicators

- ✅ Layer passing all validations
- ⚠️ Layer has warnings but functional
- ❌ Layer has blocking errors
- ⏳ Active work in progress
- 🔄 Recently updated (< 1 hour)

## Use Cases

1. **Morning Standup**
   ```bash
   /status --recent=24h --tasks
   ```

2. **Pre-Deployment Check**
   ```bash
   /status --verbose --metrics
   ```

3. **Debug Specific Layer**
   ```bash
   /status --layer=experience --verbose
   ```

4. **Project Health Check**
   ```bash
   /status --all
   ```

## Notes

- Status updates every time files change
- Metrics are cached for 5 minutes
- Task priorities sync with project-manager agent
- Recommendations are AI-generated based on patterns