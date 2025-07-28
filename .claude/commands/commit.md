# Commit Command

Creates structured, semantic git commits with automatic message generation based on changes and affected layers.

## Usage

```
/commit [action] [--flags]
```

## Arguments

- `action` (optional):
  - `push`: Commit and push to remote
  - `amend`: Amend the last commit
  - If omitted: Commit locally only

## Flags

- `--message="custom message"`: Override auto-generated message
- `--skip-validation`: Commit even with validation warnings
- `--no-verify`: Skip git hooks
- `--layer`: Manually specify affected layers

## Examples

```bash
/commit                              # Auto-generate message and commit
/commit push                         # Commit and push to remote
/commit --message="quick fix"        # Custom message
/commit amend                        # Amend last commit
/commit push --skip-validation       # Force commit despite warnings
```

## Execution Process

1. **Analyze Changes**
   ```bash
   # Detect modified files
   git status --porcelain
   git diff --cached --name-status
   
   # Categorize by type:
   - Components: *.tsx files
   - Styles: *.css, tokens files  
   - Config: *.json, *.config.*
   - Tests: *.test.*, *.spec.*
   ```

2. **Determine Commit Type**
   - `feat`: New feature or component
   - `fix`: Bug fixes
   - `style`: Design/styling changes
   - `perf`: Performance improvements
   - `refactor`: Code restructuring
   - `test`: Test additions/changes
   - `docs`: Documentation updates
   - `chore`: Maintenance tasks

3. **Identify Affected Layers**
   - Map files to layers automatically
   - Detect cross-layer changes
   - Validate each affected layer

4. **Generate Commit Message**

## Message Format

### Standard Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Real Examples
```
feat(design/foundation): add testimonials section

- Create TestimonialCard component with rotating quotes
- Add testimonial data structure and types
- Implement responsive grid layout
- Apply design tokens for consistent styling

Layers: design, foundation
Validation: all passing
Performance: no regression (142KB → 144KB)
```

```
fix(experience): improve hero animation performance

Optimized scroll-triggered animations to maintain 60fps:
- Replace jQuery animations with CSS transforms
- Use will-change for GPU acceleration
- Debounce scroll event handlers

Layers: experience
Validation: performance checks now passing
Metrics: 52fps → 60fps stable
```

```
style(design): update color tokens for better contrast

- Adjust button hover state: 4.3:1 → 5.2:1 contrast
- Update muted text color for WCAG AAA
- Apply new tokens across all components

Layers: design
Validation: accessibility improved
Breaking: no
```

## Validation Integration

Before committing:
1. Check continuous validation status
2. Run quick validation on affected layers
3. Block commit if critical errors exist

```
🔍 Pre-commit Validation
━━━━━━━━━━━━━━━━━━━━━━
✅ Foundation: Valid
✅ Design: Valid
⚠️ Experience: 1 warning (non-blocking)
✅ Quality: Valid

Proceeding with commit...
```

## Smart Features

### 1. **Scope Detection**
Automatically determines scope from changed files:
- Single component → component name
- Multiple in same folder → folder name
- Cross-cutting → multiple scopes

### 2. **Breaking Change Detection**
Flags potential breaking changes:
- API signature changes
- Prop removals
- Config structure changes

### 3. **Collaborative Context**
Includes relevant context:
- Related issue/task numbers
- Co-authors if pair programming
- Review requests

### 4. **Metrics Tracking**
Automatically includes:
- Bundle size changes
- Performance impacts
- Test coverage deltas

## Error Handling

1. **Validation Failures**
   ```
   ❌ Cannot commit: 3 validation errors
   
   Run /validate --fix to attempt auto-fixes
   Or use --skip-validation to force (not recommended)
   ```

2. **Unstaged Changes**
   ```
   Warning: Unstaged changes detected
   
   Stage all changes? [Y/n]
   Or specify files: /commit --files="src/components/*"
   ```

3. **Merge Conflicts**
   ```
   Error: Merge conflicts must be resolved
   
   Conflicted files:
   - src/components/Header.tsx
   - src/styles/globals.css
   ```

## Integration Points

- **With Validation**: Ensures quality before commits
- **With Agents**: Can invoke tech-lead for commit review
- **With Status**: Updates project status after commit
- **With Deploy**: Tags deployable commits

## Commit Templates

The system includes templates for common scenarios:

1. **Feature Implementation**
   ```
   feat(<scope>): <what>
   
   <why needed>
   <how implemented>
   <user impact>
   ```

2. **Bug Fix**
   ```
   fix(<scope>): <what was broken>
   
   Root cause: <explanation>
   Solution: <what was changed>
   Testing: <how verified>
   ```

3. **Performance**
   ```
   perf(<scope>): <optimization>
   
   Before: <metric>
   After: <metric>
   Technique: <what was done>
   ```

## Best Practices

- Let the system generate messages (they're comprehensive)
- Don't skip validation unless absolutely necessary
- Use amend for small fixes to previous commit
- Push regularly to avoid large divergences
- Review generated message before confirming

## Notes

- Respects .gitignore patterns
- Integrates with existing git hooks
- Messages follow Conventional Commits spec
- Automatically signs commits if configured