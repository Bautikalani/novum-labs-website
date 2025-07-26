# INIT-ASSIGNMENT.md — Layout Margins Redesign

## Task Metadata
**Task ID:** LAYOUT-2025-01-26-001  
**Priority:** High  
**Type:** Layout  
**Estimated Impact:** Significant  
**Target Completion:** 45 minutes

## Task Description
**One-line summary:**  
Tighten layout margins and content width to match Linear.app's precise, focused spacing system

**Detailed requirements:**  
- Current state: Generic container with standard margins/padding
- Desired outcome: Linear-style tight margins that create focus and sophistication
- Success criteria: All content sections use consistent, tighter spacing that matches Linear's approach
- Constraints: Maintain readability and responsive behavior across all breakpoints

## Target Component/Section
**Primary target:**  
- [x] Global: `Layout | Container spacing`

**Specific elements:**  
- Global container/wrapper max-width
- Section horizontal padding
- Responsive breakpoint adjustments
- Vertical spacing between sections
- Content area constraints

## Expected Outcomes
### Visual Changes
- [x] Container max-width reduced from default to 1200px (Linear-style)
- [x] Desktop side margins: 32px (2rem) instead of current wider padding
- [x] Mobile side margins: 20px (1.25rem) for better mobile real estate usage
- [x] Tablet margins: 24px (1.5rem) as intermediate step
- [x] Section vertical spacing: 80-120px (5-7.5rem) for better rhythm
- [x] Tighter prose max-width: ~65ch for optimal readability

### Behavioral Changes
- [x] Content feels more focused and intentional
- [x] Better visual hierarchy through precise spacing
- [x] Smooth responsive transitions between breakpoints
- [x] Consistent spacing across all page sections

### Performance Impact
- [x] No performance regression
- [x] No JavaScript changes (pure CSS)
- [x] Lighthouse score remains 90+
- [x] Zero increase in bundle size

## Quality Gates
### Pre-execution Checks
- [x] Measure Linear.app's exact container dimensions
- [x] Document current spacing values in codebase
- [x] Verify responsive breakpoint strategy
- [x] Check all sections that will be affected

### Post-execution Validation
- [x] All sections use new container consistently
- [x] Responsive behavior verified (320px to 4K)
- [x] Content remains readable at all sizes
- [x] No horizontal scroll at any breakpoint
- [x] Visual regression testing passed
- [x] Typography maintains proper measure (line length)

## Files Affected Checklist
### Likely to modify:
- [x] `src/app/globals.css` (CSS custom properties for spacing)
- [x] `src/components/layout/Container.tsx` (create new component)
- [x] `tailwind.config.ts` (container configuration)

### Potentially impacted (verify):
- [x] All section components (must update to use new Container)
- [x] Header/Navigation (ensure alignment with content)
- [x] Footer (ensure alignment with content)
- [x] Any full-width elements (hero backgrounds, etc.)

## Implementation Notes
### Approach:
Create a reusable Container component that enforces Linear-style margins globally. Update CSS custom properties for consistent spacing values.

### Spacing Specifications:
```css
/* Global spacing variables */
:root {
  --container-max-width: 1200px;    /* Linear-inspired */
  --container-padding-desktop: 2rem;  /* 32px */
  --container-padding-tablet: 1.5rem; /* 24px */
  --container-padding-mobile: 1.25rem;/* 20px */
  --section-spacing-lg: 7.5rem;      /* 120px */
  --section-spacing-md: 5rem;        /* 80px */
  --section-spacing-sm: 3rem;        /* 48px */
}

/* Container implementation */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding-mobile);
  padding-right: var(--container-padding-mobile);
}

@media (min-width: 640px) {
  .container {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--container-padding-desktop);
    padding-right: var(--container-padding-desktop);
  }
}
```

### Responsive Strategy:
- **Mobile (< 640px)**: 20px margins, full-width content
- **Tablet (640px - 1024px)**: 24px margins, constrained width
- **Desktop (> 1024px)**: 32px margins, max 1200px width
- **Large screens (> 1280px)**: Content stays centered at 1200px

### Design System Alignment:
- Follow 8px grid system (margins are multiples of 8)
- Maintain consistent vertical rhythm
- Ensure optical alignment (not just mathematical)

## Context & References
### Linear.app Analysis:
- Container max-width: ~1184px actual content width
- Side padding: 32px (2rem) on desktop
- Clean breaks between sections
- Generous but purposeful whitespace
- Content feels "held" rather than floating

### Key Measurements:
```
Linear.app (measured):
- Viewport: 1440px
- Container: 1184px (including padding)
- Side margins: 128px each (auto-centered)
- Content width: 1120px (after padding)
- Effective padding: 32px each side

Our target:
- Max-width: 1200px
- Padding: 32px (desktop)
- Content width: 1136px
- Auto margins for centering
```

### Implementation Priority:
1. Create Container component
2. Update global CSS variables
3. Apply Container to all sections
4. Verify responsive behavior
5. Fine-tune vertical spacing

## Additional Context
**Why this matters:**
- Tighter margins create focus and premium feel
- Consistent spacing builds trust and professionalism
- Linear's approach makes content feel intentional, not accidental
- Better use of screen real estate on all devices

**Critical sections to update:**
- Hero section (maintain full-width background)
- All content sections (demos, process, team, CTA)
- Navigation (align with content margins)
- Footer (align with content margins)

**Note:** This is purely a spacing/layout update. No changes to colors, typography, or component functionality. Focus is 100% on achieving Linear's precise, intentional spacing system.

---
*Instructions: This task creates a more focused, premium layout through precise margin control. The goal is to match Linear's sophisticated spacing system that makes content feel intentional and well-crafted.*