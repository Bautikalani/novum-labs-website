# PRP: Phase 2 Visual Design System - [Project Name]

**Generated**: [Date]  
**Phase**: 2 - Visual Design  
**Confidence Score**: [X]/10

## 📋 Executive Summary

Apply the project's complete design system to the semantic structure from Phase 1, implementing colors, typography, spacing, and component styling while maintaining a completely static presentation. No animations or transitions are allowed in this phase.

## 🎯 Goal

Transform the wireframe into a visually polished interface that demonstrates design excellence through systematic implementation of the design system, without any motion or animated interactivity.

### Success Criteria
- [ ] All Phase 2 validation checks pass (`npm run validate:phase2`)
- [ ] Phase 1 checks still pass (no regressions)
- [ ] Design matches DESIGN.md specifications exactly
- [ ] Performance: CSS bundle < 100KB, 90+ Lighthouse score
- [ ] Zero animation properties in codebase
- [ ] 100% design token usage (no hardcoded values)

## 📚 Context & Documentation

### Core Project Files (Required Reading)
- **CLAUDE.md** - Design philosophy, theme requirements, performance budgets
- **PHASES.md** - Current phase: 2 (Visual Design) - Review constraints
- **DESIGN.md** - Complete visual specifications (colors, typography, spacing)
- **INITIAL.md** - Theme constraints (dark only, light only, or both)
- **validation/phase2-checks.md** - Visual validation criteria

### Technical Documentation
Request via Context7 when implementing:
- CSS framework documentation (Tailwind, CSS-in-JS, etc.)
- Design system component library docs
- Font loading optimization techniques
- CSS custom properties best practices
- Color space documentation (RGB, HSL, LCH, etc.)

### Design Patterns
- `/examples/` - Design system implementation patterns
- `/research/design-inspiration/` - Reference sites and their approaches
- Study color system, typography scale, spacing rhythm

## 🏗️ Implementation Blueprint

### Prerequisites
```bash
# Phase 1 must be complete and passing
npm run validate:phase1  # Must pass before starting

# Install design dependencies
[CSS framework installation]
[Component library setup if needed]
[Font packages]

# Verify clean starting point
git status  # Ensure Phase 1 is committed
```

### Design System Implementation

#### Task 1: Configure Design Tokens
**File**: `[Config file for your CSS solution]`
**Purpose**: Establish the single source of truth for all design values

```typescript
// Token structure approach:
// - Colors (using specified color space)
// - Typography scale (mathematical progression)
// - Spacing scale (consistent rhythm)
// - Border radius scale
// - Shadow scale
// - Breakpoints

// Ensure tokens cover:
// - Every color in DESIGN.md
// - Complete type scale
// - All spacing values
// - No arbitrary values allowed
```

**Validation**:
- [ ] All tokens from DESIGN.md defined
- [ ] No hardcoded values in components
- [ ] Tokens follow naming convention

#### Task 2: Global Styles and Reset
**File**: `src/styles/globals.css` or equivalent
**Purpose**: Establish baseline styles and CSS custom properties

```css
/* Key considerations:
   - CSS reset/normalize approach
   - Box-sizing: border-box globally
   - Font smoothing settings
   - Focus outline styles (not remove)
   - Print styles if needed
   - Root custom properties
*/

/* Critical: NO transition or animation properties */
```

#### Task 3: Typography System
**File**: Font configuration files
**Purpose**: Implement complete typography system

```typescript
// Implementation approach:
// - Load fonts (self-hosted or service)
// - Define font families
// - Implement type scale classes/components
// - Line height system
// - Font weight variations
// - Responsive typography (if needed)

// Performance considerations:
// - Font loading strategy (FOIT/FOUT)
// - Subset fonts for performance
// - Variable fonts if applicable
```

**Validation**:
- [ ] All fonts load correctly
- [ ] Type scale matches DESIGN.md exactly
- [ ] No layout shift from font loading

#### Task 4: Color System Implementation
**Purpose**: Apply color palette throughout

```typescript
// Color implementation strategy:
// - Use CSS custom properties or framework tokens
// - Implement color variations (opacity, shades)
// - Ensure contrast compliance
// - Handle transparent variations
// - Theme-specific implementations

// Common patterns:
// - Background colors
// - Text colors
// - Border colors
// - Interactive state colors (no animation)
```

#### Task 5: Component Styling
**Purpose**: Apply visual design to all components

For each component type:
```typescript
// Component styling approach:
// - Start with layout/structure
// - Apply spacing from scale
// - Add typography classes
// - Implement color system
// - Add borders/shadows as designed
// - Ensure responsive behavior

// Remember: No hover animations, only color changes
```

Key components typically include:
- Buttons (all variants)
- Cards/Panels
- Forms and inputs
- Navigation elements
- Content sections
- Headers and footers

#### Task 6: Spacing and Layout Polish
**Purpose**: Implement consistent spacing system

```typescript
// Spacing implementation:
// - Use only values from spacing scale
// - Implement consistent component spacing
// - Handle responsive spacing adjustments
// - Section spacing and rhythm
// - Ensure visual hierarchy through space
```

#### Task 7: Static Visual Effects
**Purpose**: Add non-animated visual enhancements

```css
/* Allowed static effects:
   - Box shadows
   - Gradients
   - Border styles
   - Background patterns
   - Opacity (static only)
   - Filters (static only)
*/

/* Not allowed:
   - Transitions
   - Transforms
   - Animations
   - Hover movements
*/
```

### Phase 2 Specific Constraints

**Allowed in Phase 2**:
- All design tokens from DESIGN.md
- Complete color palette
- Full typography system
- Spacing and layout systems
- Static visual effects (shadows, gradients)
- Component library styling
- Hover/focus color changes (no motion)
- Responsive design adjustments

**Not Allowed (Save for Phase 3)**:
- CSS transitions or animations
- Transform properties
- @keyframes definitions
- JavaScript-driven animations
- Parallax effects
- Loading animations
- Animated SVGs
- Motion libraries (Framer Motion, etc.)

## ✅ Validation Loop

### Level 1: Design Token Compliance
```bash
# Check for hardcoded values
npm run test:design-tokens

# Scan for:
- Hardcoded colors (#hex, rgb, hsl)
- Arbitrary spacing values
- Non-scale typography

# Expected: 0 hardcoded values
```

### Level 2: Visual Regression Testing
```bash
# Capture visual snapshots
npm run test:visual

# Verify:
- Components match design specs
- Consistent spacing applied
- Colors render correctly
- Typography hierarchy clear
```

### Level 3: Performance Testing
```bash
# Build and analyze CSS
npm run build
npm run analyze:css

# Targets:
- CSS < 100KB gzipped
- No unused styles
- Efficient selectors
```

### Level 4: Accessibility & Standards
```bash
# Color contrast testing
npm run test:contrast

# Verify:
- WCAG AA minimum (AAA preferred)
- Focus indicators visible
- Text remains readable
```

### Level 5: Phase 2 Complete Validation
```bash
# Run full validation
npm run validate:phase2

# Must verify:
- Phase 1 still passes
- All visual specs implemented
- Zero animations present
- Performance targets met
```

## 🚫 Anti-Patterns to Avoid

### Phase 2 Specific Anti-Patterns
- ❌ Adding ANY animations or transitions
- ❌ Using transform properties
- ❌ Implementing motion hover states
- ❌ Creating loading spinners
- ❌ Adding JavaScript visual effects
- ❌ Installing animation libraries
- ❌ Using animated GIFs or videos
- ❌ Implementing parallax scrolling

### Common Visual Implementation Mistakes
- ❌ Hardcoding design values
- ❌ Creating one-off styles
- ❌ Inconsistent spacing
- ❌ Skipping responsive design
- ❌ Ignoring contrast requirements
- ❌ Over-designing beyond specs
- ❌ Adding "nice-to-have" features

## 📊 Performance Monitoring

### Phase 2 Metrics
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| CSS Size | < 100KB gzipped | Build analysis |
| Font Loading | < 3s | Performance profiler |
| Lighthouse | 90+ all metrics | Lighthouse CI |
| CLS | < 0.1 | Core Web Vitals |
| Token Coverage | 100% | Custom lint rule |
| Unused CSS | < 10% | PurgeCSS analysis |

### Performance Optimization Checklist
- [ ] CSS is minified and compressed
- [ ] Fonts are optimized and subset
- [ ] Critical CSS is inlined
- [ ] Non-critical CSS is deferred
- [ ] Images are optimized (if any)
- [ ] No render-blocking resources

## 🎬 Completion Checklist

### Design Implementation
- [ ] All colors match design system
- [ ] Typography scale fully implemented
- [ ] Spacing system consistently applied
- [ ] Component styling complete
- [ ] Responsive design working
- [ ] Theme properly implemented

### Quality Assurance
- [ ] Zero hardcoded design values
- [ ] Contrast ratios pass WCAG
- [ ] Focus states clearly visible
- [ ] Print styles functional (if needed)
- [ ] Cross-browser testing complete

### Performance Verified
- [ ] CSS bundle within budget
- [ ] Fonts load efficiently
- [ ] No layout shifts
- [ ] Lighthouse scores meet targets

### Phase Compliance
- [ ] No animations present
- [ ] Phase 1 still passes
- [ ] All Phase 2 validation passes
- [ ] Ready for Phase 3

## 📝 Implementation Notes

### Design Token Usage Examples
Document patterns for common scenarios:
- How to apply spacing
- Color usage patterns
- Typography combinations
- Component composition

### Browser Compatibility Notes
- CSS feature support required
- Fallbacks implemented where needed
- Progressive enhancement approach
- Testing matrix covered

### Future Considerations for Phase 3
Note any decisions that will affect animations:
- Elements that will animate
- Performance bottlenecks to address
- Interaction patterns to enhance
- Loading states to implement

---

**Confidence Score Reasoning**: Base confidence on:
- Completeness of design specifications
- Clarity of design system
- Complexity of visual requirements
- Performance constraints
- Team's CSS expertise