# Validate Command

Manually triggers validation checks for specific layers or the entire project. Note: Validation runs automatically during development after every file change.

## Usage

```
/validate [layer] [--flags]
```

## Arguments

- `layer` (optional): Specific layer to validate
  - `foundation`: Structure, HTML, accessibility, TypeScript
  - `design`: Design tokens, colors, typography, spacing
  - `experience`: Animations, performance, interactions
  - `quality`: Tests, coverage, security, best practices
  - If omitted, validates only changed files/layers

## Flags

- `--all`: Force validation of all layers (ignore change detection)
- `--fix`: Attempt automatic fixes for common issues
- `--report`: Generate detailed validation report
- `--ci`: Run in CI mode (strict, no interactive prompts)

## Examples

```bash
/validate                        # Smart validation of changes
/validate design                 # Validate design layer only
/validate experience --fix       # Validate and auto-fix animations
/validate --all --report        # Full validation with report
/validate foundation quality    # Validate multiple specific layers
```

## Execution Process

1. **Change Detection** (if no layer specified)
   ```bash
   git diff --name-only HEAD~1
   # Maps changed files to affected layers:
   # *.css, tokens.ts → design
   # *.tsx, *.ts → foundation
   # *motion*, *animate* → experience
   ```

2. **Layer-Specific Validation**

   **Foundation Layer**
   - TypeScript compilation check
   - HTML semantic validation
   - Accessibility audit (WCAG AA)
   - Component structure verification
   - Import/export validation

   **Design Layer**
   - Design token usage (100% required)
   - Color contrast ratios
   - Typography scale compliance
   - Spacing system adherence
   - No hardcoded values

   **Experience Layer**
   - Animation performance (60fps)
   - Bundle size check (<150KB)
   - Interaction responsiveness
   - Reduced motion support
   - Loading state coverage

   **Quality Layer**
   - Test coverage thresholds
   - Linting rules compliance
   - Security vulnerabilities
   - Best practices audit
   - Documentation coverage

3. **Output Format**
   ```
   🔍 Validation Results
   ━━━━━━━━━━━━━━━━━━━━━━━
   
   ✅ Foundation Layer
      └─ TypeScript: 0 errors
      └─ Accessibility: WCAG AA compliant
      └─ Structure: Valid
   
   ⚠️  Design Layer
      └─ Tokens: 98% coverage (2 hardcoded colors found)
      └─ Contrast: 1 warning - button hover state 4.3:1
      └─ Typography: Valid
   
   ❌ Experience Layer
      └─ Performance: Hero animation at 52fps
      └─ Bundle: 163KB (exceeds 150KB limit)
      └─ Motion: Reduced motion not respected
   
   📊 Summary: 2 errors, 3 warnings
   Run with --fix to auto-fix 2 issues
   ```

4. **Auto-Fix Mode** (`--fix`)
   - Replace hardcoded colors with tokens
   - Optimize images and assets
   - Add missing accessibility attributes
   - Update import statements
   - Format code to standards

## Integration Points

- **With QA Engineer**: Invoked if validation fails
- **With Continuous Validation**: Supplements automatic checking
- **With Commit**: Blocks commits if validation failing
- **With Deploy**: Required check before deployment

## Continuous Validation Context

By default, validation runs automatically:
- After every file save
- Before allowing task progression
- As part of the development flow

This manual command is for:
- Comprehensive checks before deployment
- Generating validation reports
- Debugging specific validation issues
- CI/CD pipeline integration
- Forcing full validation sweeps

## Error Patterns

1. **Token Violations**
   ```
   ❌ Hardcoded color found: #000000
   Location: HeroSection.tsx:45
   Fix: Use color token 'background' instead
   Auto-fix available: Run with --fix
   ```

2. **Performance Issues**
   ```
   ❌ Animation performance: 52fps (minimum 60fps)
   Location: ScrollAnimation component
   Issue: Too many DOM manipulations
   Suggestion: Use transform instead of top/left
   ```

3. **Accessibility Failures**
   ```
   ❌ Missing alt text on image
   Location: TeamMember.tsx:23
   Fix: Add descriptive alt text
   Impact: Screen readers cannot describe image
   ```

## Best Practices

- Run `/validate --all` before major commits
- Use `/validate [layer]` for focused debugging
- Enable `--fix` for quick corrections
- Generate reports for PR reviews
- Trust continuous validation during development

## Notes

- Validation is non-blocking by default (except in CI mode)
- Auto-fix only handles safe, deterministic fixes
- Reports are saved to `/validation-reports/`
- Custom validation rules can be added to layer configs