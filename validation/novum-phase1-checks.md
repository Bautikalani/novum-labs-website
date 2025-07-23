# validation/phase1-checks.md — Phase 1 Semantic Wireframe Validation

## 🎯 Phase 1 Goal
Validate that the semantic HTML structure is complete, accessible, and responsive WITHOUT any custom styling.

## ✅ Automated Checks

### 1. HTML Validation
```bash
# Install validator if needed
npm install -g html-validate

# Run validation
npx html-validate "src/**/*.{html,tsx}" --config .htmlvalidate.json

# Expected: 0 errors, 0 warnings
```

**Config (.htmlvalidate.json)**:
```json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "no-inline-style": "error",
    "require-sri": "off",
    "valid-id": "error",
    "no-dup-id": "error"
  }
}
```

### 2. Accessibility Testing
```bash
# Install axe-core testing
npm install --save-dev @axe-core/playwright

# Run accessibility tests
npm run test:a11y

# Expected: 0 violations
```

**Test Script (tests/a11y.test.ts)**:
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Phase 1: Accessibility compliance', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});
```

### 3. Mobile Responsiveness
```bash
# Test multiple viewport sizes
npm run test:responsive

# Expected: No horizontal scroll at any viewport
```

**Test Viewports**:
- 320px (iPhone SE)
- 375px (iPhone 12)
- 768px (iPad)
- 1024px (Desktop)
- 1440px (Large Desktop)

### 4. TypeScript Validation
```bash
# Run TypeScript compiler
npx tsc --noEmit

# Expected: 0 errors
```

### 5. Journey Line Presence
```bash
# Check for journey line element
npm run test:journey-line

# Expected: Static line element present
```

## 📋 Manual Checklist

### Structure Validation
- [ ] All sections from DESIGN.md wireframe are present
- [ ] Sections appear in correct order: Hero → Demos → Process → Team → CTA
- [ ] Journey line is visible as a static element (faint line)
- [ ] No horizontal scrollbar at 320px viewport
- [ ] Content is readable without any CSS

### Semantic HTML
- [ ] Only one `<h1>` tag (in hero section)
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skips)
- [ ] All images have alt text (even placeholders)
- [ ] Form elements have associated labels
- [ ] Lists use proper `<ul>` or `<ol>` tags
- [ ] Navigation uses `<nav>` element
- [ ] Main content in `<main>` element
- [ ] Sections use `<section>` tags

### Content Verification
- [ ] Hero headline matches INITIAL.md
- [ ] Hero subheadline matches INITIAL.md
- [ ] All 4 team members listed with correct names/roles
- [ ] Process section has all 4 steps
- [ ] 3 demo placeholders with "Coming Soon"
- [ ] CTA section headline matches INITIAL.md

### Demo Section Layout
- [ ] Demo 1: Preview on left, explanation on right
- [ ] Demo 2: Explanation on left, preview on right (zigzag)
- [ ] Demo 3: Preview on left, explanation on right
- [ ] Each demo has "How to use" instructions
- [ ] Demos stack vertically on mobile

### Accessibility Features
- [ ] Skip navigation link present
- [ ] ARIA landmarks properly used
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators visible (browser default)
- [ ] Color contrast passes with system colors
- [ ] Screen reader announces content correctly

### Responsive Behavior
- [ ] Mobile: Single column layout
- [ ] Tablet: Appropriate adjustments
- [ ] Desktop: Multi-column where specified
- [ ] Images scale properly (placeholders)
- [ ] Text remains readable at all sizes

## 🚫 Must NOT Include

### Styling
- [ ] NO Tailwind utility classes (except grid/flex for layout)
- [ ] NO custom colors (only browser defaults)
- [ ] NO custom fonts (only system fonts)
- [ ] NO shadows, borders, or decorative elements
- [ ] NO background colors or images
- [ ] NO custom spacing (browser defaults only)

### Interactivity
- [ ] NO animations of any kind
- [ ] NO hover effects
- [ ] NO transitions
- [ ] NO JavaScript beyond Next.js routing
- [ ] NO client-side state management

## 🏃 Run All Checks

```bash
# Create npm script in package.json
"scripts": {
  "validate:phase1": "npm run validate:html && npm run test:a11y && npm run test:responsive && npm run type-check && npm run test:structure"
}

# Run all Phase 1 validation
npm run validate:phase1

# Expected: All checks pass
```

## 📊 Success Criteria Summary

| Check | Target | Required |
|-------|--------|----------|
| HTML Errors | 0 | Yes |
| Accessibility Violations | 0 | Yes |
| TypeScript Errors | 0 | Yes |
| Horizontal Scroll | None at 320px | Yes |
| Journey Line | Present (static) | Yes |
| All Sections | Present | Yes |
| Semantic Structure | Valid | Yes |
| Mobile Layout | Working | Yes |

## 🎉 Phase 1 Complete When

1. **All automated tests pass** (run `npm run validate:phase1`)
2. **All manual checklist items checked** ✓
3. **No styling present** (only semantic HTML)
4. **Journey line visible** as static element
5. **Content matches** INITIAL.md specifications
6. **Responsive** without custom CSS

## 📝 Notes for Implementer

- Use semantic HTML5 elements
- Let browser defaults handle all styling
- Focus on structure and accessibility
- The journey line should be a simple element (like a `<div>` or `<span>`) positioned with basic CSS Grid/Flexbox
- Test with CSS disabled to ensure content is still consumable
- Use placeholder images with proper dimensions (e.g., 400x400 for team photos)

---

*Once all checks pass, update PHASES.md to mark Phase 1 complete and generate Phase 2 PRP.*