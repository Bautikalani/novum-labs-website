# validation/phase2-checks.md — Phase 2 Visual Design System Validation

## 🎯 Phase 2 Goal
Validate that the Linear-inspired design system is fully implemented with LCH colors, typography, and spacing while maintaining static presentation (NO animations).

## ✅ Prerequisite
```bash
# Phase 1 must still pass
npm run validate:phase1

# Expected: All Phase 1 checks still passing
```

## ✅ Automated Checks

### 1. Design Token Coverage
```bash
# Check all design tokens are used
npm run test:design-tokens

# Expected: 100% token usage, 0 hardcoded values
```

**Test Script (tests/design-tokens.test.ts)**:
```typescript
test('Phase 2: No hardcoded colors', async () => {
  const files = await glob('src/**/*.{tsx,css}');
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    // Check for hardcoded colors
    expect(content).not.toMatch(/#[0-9a-f]{3,6}/i);
    expect(content).not.toMatch(/rgb\(/i);
    expect(content).not.toMatch(/hsl\(/i);
    // Only lch() and var(--) allowed
  }
});
```

### 2. Color Contrast Validation
```bash
# Test WCAG compliance
npm run test:contrast

# Expected: AAA where possible, AA minimum
```

**Key Combinations to Test**:
- `--color-foreground` on `--color-background` 
- `--color-muted` on `--color-background`
- `--color-accent-blue` on `--color-background`
- Button text on button backgrounds

### 3. Typography Scale Validation
```bash
# Verify mathematical scale (Perfect Fourth - 1.333)
npm run test:typography

# Expected: All font sizes match scale
```

**Valid Font Sizes (from DESIGN.md)**:
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.5rem;      /* 24px */
--text-2xl: 2rem;       /* 32px */
--text-3xl: 2.667rem;   /* 42.67px */
--text-4xl: 3.556rem;   /* 56.89px */
--text-5xl: 4.741rem;   /* 75.85px */
```

### 4. Spacing System Validation
```bash
# Verify 8px base spacing system
npm run test:spacing

# Expected: All spacing uses defined scale
```

**Valid Spacing Values (from DESIGN.md)**:
```css
--space-0 through --space-20 only
No arbitrary spacing values
```

### 5. Performance Budget Check
```bash
# Build and analyze
npm run build
npm run analyze

# Expected from CLAUDE.md:
# - CSS < 100KB gzipped
# - Lighthouse 90+ all metrics
# - No CLS from web fonts
```

### 6. Static Validation (No Animations)
```bash
# Scan for animation/transition properties
npm run test:no-animations

# Expected: 0 animation properties found
```

**Prohibited Properties**:
- `transition`
- `animation`
- `@keyframes`
- `transform` with timing
- Motion/Framer Motion imports

## 📋 Manual Checklist

### Design System Implementation

#### Colors (LCH)
- [ ] Background uses `--color-background: lch(5% 0 0)`
- [ ] Text uses `--color-foreground: lch(98% 0 0)`
- [ ] Muted text uses `--color-muted: lch(45% 0 0 / 0.7)`
- [ ] Accent blue applied correctly
- [ ] Gradients match DESIGN.md specifications
- [ ] NO section dividers (seamless black background)

#### Typography
- [ ] Inter font loaded via next/font
- [ ] All headings use correct scale
- [ ] Font weights match design (400, 500, 600, 700)
- [ ] Line heights match DESIGN.md (tight, snug, normal, relaxed)
- [ ] No custom font sizes outside scale

#### Spacing & Layout
- [ ] All spacing uses 8px base system
- [ ] Container max-width: 1200px
- [ ] Proper padding at different breakpoints
- [ ] Grid gaps use spacing scale
- [ ] No arbitrary margins/paddings

### Component Styling

#### Hero Section
- [ ] Mesh gradient background visible
- [ ] Text hierarchy clear (5xl → xl)
- [ ] CTAs styled with gradients
- [ ] Proper spacing between elements

#### Demo Section
- [ ] Zigzag layout preserved from Phase 1
- [ ] Cards have correct styling (from DESIGN.md)
- [ ] 45% width for preview and explanation
- [ ] "Coming Soon" badges styled
- [ ] Proper spacing between demos

#### Process Section
- [ ] Horizontal flow on desktop maintained
- [ ] Step indicators styled
- [ ] Consistent spacing between steps
- [ ] Typography hierarchy clear

#### Team Section
- [ ] 2x2 grid with proper spacing
- [ ] Placeholder images styled consistently
- [ ] Names and roles typography correct
- [ ] Symmetrical layout (centered)

#### Journey Line
- [ ] Still static (NO animation)
- [ ] Styled with gradient colors
- [ ] Correct width (2px)
- [ ] Proper opacity (0.2 for static state)
- [ ] Follows the path from hero to CTA

### Dark Theme Validation
- [ ] Pure black background throughout
- [ ] High contrast maintained
- [ ] No light theme artifacts
- [ ] Borders use correct opacity
- [ ] Cards use `--color-surface`

### Responsive Styling
- [ ] Mobile styles properly applied
- [ ] Tablet breakpoint working
- [ ] Desktop layout matches design
- [ ] Typography scales appropriately
- [ ] Spacing adjusts per breakpoint

## 🚫 Must NOT Include

### Animations (Save for Phase 3)
- [ ] NO CSS transitions
- [ ] NO transform animations
- [ ] NO opacity changes over time
- [ ] NO hover state animations (color change OK, movement NOT)
- [ ] NO Framer Motion components
- [ ] NO loading animations
- [ ] NO scroll-triggered effects

### Out of Scope
- [ ] NO light theme toggle
- [ ] NO theme switching code
- [ ] NO JavaScript animations
- [ ] NO parallax effects
- [ ] NO canvas elements (except static gradient)

## 🏃 Run All Checks

```bash
# Add to package.json
"scripts": {
  "validate:phase2": "npm run validate:phase1 && npm run test:design-tokens && npm run test:contrast && npm run test:typography && npm run test:spacing && npm run test:no-animations && npm run build:analyze"
}

# Run all Phase 2 validation
npm run validate:phase2

# Expected: All checks pass
```

## 📊 Success Criteria Summary

| Check | Target | Source |
|-------|--------|---------|
| Phase 1 Tests | Still passing | phase1-checks.md |
| Hardcoded Colors | 0 | DESIGN.md |
| Contrast | WCAG AA minimum | CLAUDE.md |
| Typography Scale | 100% match | DESIGN.md |
| Spacing Scale | 100% match | DESIGN.md |
| CSS Bundle | < 100KB gzipped | CLAUDE.md |
| Lighthouse | 90+ | CLAUDE.md |
| Animation Properties | 0 | PHASES.md |

## 🎨 Visual Comparison

Before proceeding, visually verify:
1. Matches Linear's minimalist aesthetic
2. High contrast and readability
3. Mathematical harmony in spacing
4. Consistent use of gradients
5. Professional appearance

## 🎉 Phase 2 Complete When

1. **All Phase 1 checks still pass**
2. **All automated tests pass** (`npm run validate:phase2`)
3. **All manual checklist items checked** ✓
4. **NO animations present** (static only)
5. **Design matches DESIGN.md** specifications
6. **Performance budgets met** from CLAUDE.md
7. **Dark theme complete** and polished

## 📝 Notes for Implementer

- Use CSS custom properties for all colors
- Leverage Tailwind v4.1's LCH support
- Test with different zoom levels (design should hold)
- Verify gradients render correctly on different screens
- The journey line should be styled but NOT animated
- Focus on pixel-perfect implementation of DESIGN.md

---

*Once all checks pass, update PHASES.md to mark Phase 2 complete and generate Phase 3 PRP.*