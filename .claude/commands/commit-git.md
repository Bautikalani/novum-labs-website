# commit-git.md — Structured Git Commit Command

## Command: `/commit-git`

**Purpose:** Generate and execute structured git commits with consistent messaging that clearly communicates the nature and impact of polish tasks on the Novum Labs website.

**Philosophy:** Every commit tells a story. This command ensures that story is clear, searchable, and provides immediate understanding of what changed, why it changed, and what impact it has on the system.

## Usage

```bash
/commit-git [action]
```

### Arguments:
- `[action]` (optional):
  - `commit` or blank: Stage changes and commit with structured message
  - `push`: Commit and push to remote repository

### Examples:
```bash
/commit-git          # Commit only (default)
/commit-git commit   # Commit only (explicit)
/commit-git push     # Commit and push
```

## Execution Flow

### Phase 1: Change Analysis

1. **Detect Modified Files**
   ```bash
   # Analyze git status
   - List all modified files
   - Group by component/section
   - Identify file types (components, styles, configs)
   ```

2. **Categorize Changes**
   ```
   Determine primary change type:
   - polish: Visual/UX improvements
   - perf: Performance optimizations  
   - a11y: Accessibility enhancements
   - fix: Bug fixes
   - refactor: Code structure improvements
   - style: Formatting only
   ```

3. **Extract Assignment Context**
   ```
   If assignment.md exists:
   - Pull task ID
   - Extract one-line summary
   - Note key metrics/validations
   ```

### Phase 2: Message Generation

The commit message follows this structured format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Message Components:

1. **Type** (required)
   ```
   polish   - Visual/UX improvements
   perf     - Performance optimizations
   a11y     - Accessibility enhancements
   fix      - Bug fixes
   refactor - Code improvements
   style    - Code formatting
   docs     - Documentation only
   ```

2. **Scope** (required)
   ```
   Component-based:
   - hero, demos, team, process, cta
   - navigation, footer, layout
   - ui/button, ui/card, ui/dialog
   
   Or file-based:
   - MeshHero, TeamGrid, DemoCard
   ```

3. **Subject** (required)
   ```
   - Imperative mood ("add", not "added")
   - No capitalization
   - No period at end
   - Under 50 characters
   - Clear and specific
   ```

4. **Body** (required for polish tasks)
   ```
   - Explain what changed and why
   - Reference visual/behavioral changes
   - Note performance impact
   - Mention design inspiration if applicable
   - Wrap at 72 characters
   ```

5. **Footer** (when applicable)
   ```
   - Task ID: POLISH-2025-07-25-001
   - Performance: No regression | Improved by X%
   - Breaking: Yes/No
   - Tested: Chrome, Safari, Firefox
   ```

### Phase 3: Message Templates

Based on the change type, use appropriate template:

#### Polish Task Template
```
polish(<scope>): <what changed>

<why it was changed>
<visual/behavioral impact>
<design reference if applicable>

Task: <POLISH-ID>
Performance: <impact>
Tested: <browsers/viewports>
```

#### Performance Template
```
perf(<scope>): <optimization made>

<previous metric> → <new metric>
<technique used>

Performance: <specific improvements>
Bundle: <size change>
```

#### Accessibility Template
```
a11y(<scope>): <improvement made>

<WCAG criterion addressed>
<user impact>

WCAG: <specific standard>
Tested: <assistive technology>
```

### Phase 4: Commit Execution

1. **Stage Changes**
   ```bash
   # Intelligent staging
   - Stage all tracked files by default
   - Exclude common ignore patterns
   - Warn if large files detected
   ```

2. **Generate Final Message**
   ```bash
   # Example output:
   polish(hero): add subtle mesh gradient animation
   
   Enhanced the hero section with a smooth mesh gradient
   that shifts colors using Linear-inspired palette.
   Animation runs at consistent 60fps with GPU acceleration.
   
   Task: POLISH-2025-07-25-001
   Performance: No regression (Lighthouse 94)
   Tested: Chrome, Safari, Firefox, Mobile
   ```

3. **Execute Git Commands**
   ```bash
   # If action is "commit" or blank:
   git add <staged files>
   git commit -m "<generated message>"
   
   # If action is "push":
   git add <staged files>
   git commit -m "<generated message>"
   git push origin <current branch>
   ```

### Phase 5: Confirmation

Provide clear feedback:

```markdown
✓ Commit successful: polish(hero): add subtle mesh gradient animation

Files changed (3):
- src/components/sections/HeroSection.tsx
- src/lib/animations/mesh-config.ts
- src/styles/gradients.css

Commit hash: a1b2c3d
Branch: main
[Pushed to origin: ✓] (if push was requested)
```

## Example Commit Messages

### Polish Example
```
polish(team): enhance card hover states with glow effect

Added Linear-style border glow on hover using accent-blue
at 20% opacity. Smooth 300ms transition maintains 60fps.
Cards now feel more interactive and premium.

Task: POLISH-2025-07-25-002
Performance: No regression
Tested: All major browsers
```

### Performance Example
```
perf(demos): lazy load connection line SVGs

Reduced initial bundle by 5.2KB by implementing dynamic
imports for ConnectionLine components below the fold.
FCP improved from 1.4s to 1.2s.

Performance: FCP -200ms, Bundle -5.2KB
Breaking: No
```

### Accessibility Example
```
a11y(navigation): improve keyboard navigation flow

Added focus-visible states and proper tab order.
Skip links now properly announce in screen readers.
Mobile menu trap focus when open.

WCAG: 2.1.1, 2.4.3, 2.4.7
Tested: NVDA, VoiceOver, JAWS
```

## Style Guide

### DO:
- Keep subject line under 50 characters
- Use present tense imperative mood
- Include measurable impacts
- Reference specific components
- Mention browser testing

### DON'T:
- Use past tense ("added" → "add")
- Be vague ("update styles" → "add hover glow effect")
- Forget the why (always explain reasoning)
- Skip testing notes
- Use emoji (maintain professionalism)

## Error Handling

1. **No Changes Detected**
   ```
   Error: No changes to commit
   Solution: Check git status and stage files manually
   ```

2. **Uncommitted Assignment**
   ```
   Warning: assignment.md has uncommitted changes
   Suggestion: Include assignment in this commit? [Y/n]
   ```

3. **Large Files**
   ```
   Warning: Large file detected (>1MB)
   File: <path>
   Continue? [y/N]
   ```

4. **Push Failures**
   ```
   Error: Push rejected (non-fast-forward)
   Solution: Pull latest changes first
   Command: git pull --rebase origin <branch>
   ```

## Integration with Workflow

This command integrates with the polish workflow:

1. `INIT-ASSIGNMENT.md` → Define task
2. `/generate-assignment` → Create detailed plan
3. `/execute-assignment` → Implement changes
4. `/commit-git` → Document changes with structured commit

The commit message automatically references the assignment context, creating a clear audit trail from requirement to implementation.

---

*This command ensures every commit in the Novum Labs repository tells a clear story about what changed, why it changed, and what impact it has on the premium user experience.*