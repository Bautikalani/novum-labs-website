# PHASES.md — Novum Labs Website Phase Development Guide

## 📍 Current Phase: Phase 2 - Visual Design System ✅
*Phase 1 Completed: 2025-01-24*
*Phase 2 Completed: 2025-01-24*

## 🎯 Phase Philosophy

We use a strict 3-phase approach to build the Novum Labs website. This methodology ensures:
- **Reduced Complexity** — Each phase has a single focus
- **Clear Validation** — Objective pass/fail criteria
- **Progressive Enhancement** — Structure → Style → Motion
- **Quality Gates** — No advancing without validation

As stated in CLAUDE.md: **"Phase constraints override everything"**

## 📊 Phase Overview

| Phase | Name | Focus | Duration | Validation |
|-------|------|-------|----------|------------|
| 1 | Semantic Wireframe | HTML Structure | 2-3 days | `/validation/phase1-checks.md` |
| 2 | Visual Design | Styling & Theme | 3-4 days | `/validation/phase2-checks.md` |
| 3 | Interactive Polish | Animation & UX | 2-3 days | `/validation/phase3-checks.md` |

## 🏗️ Phase 1: Semantic Wireframe

### Goal
Create a fully functional, accessible HTML structure that matches the ASCII wireframe in DESIGN.md exactly.

### ✅ Allowed
```typescript
// Technical
- Next.js 15.4.1 App Router structure
- TypeScript components (no styling)
- Semantic HTML elements
- ARIA attributes for accessibility
- Basic responsive grid (CSS Grid/Flexbox)
- System default fonts and colors
- Form structure (no styling)
- Image placeholders with proper dimensions

// Content
- All text content from INITIAL.md
- Proper heading hierarchy (h1-h6)
- Navigation structure
- Section organization per ASCII wireframe
```

### ❌ Not Allowed
```typescript
// Styling
- Tailwind utility classes (except layout)
- Custom colors or fonts
- Box shadows or borders
- Background colors or images
- Custom spacing (use browser defaults)

// Interactivity
- Animations of any kind
- Hover effects
- Transitions
- JavaScript beyond Next.js routing
- Client-side state management
```

### 📋 Deliverables
1. Complete page structure matching ASCII wireframe
2. Mobile-responsive layout (no styling)
3. Accessibility audit passing
4. Semantic HTML validation passing
5. TypeScript types for all components

### 🎯 Success Criteria
See `/validation/phase1-checks.md` for executable tests:
- HTML validation: 0 errors
- Accessibility: WCAG AA compliant structure
- Mobile: No horizontal scroll at 320px
- Performance: < 50KB HTML
- TypeScript: No type errors

## 🎨 Phase 2: Visual Design System

### Goal
Apply the Linear-inspired design system with LCH colors, typography, and spacing while maintaining static presentation.

### ✅ Allowed
```typescript
// Design System
- LCH color tokens from DESIGN.md
- Inter font family implementation
- Mathematical spacing scale (4px base)
- Tailwind v4.1 utilities
- shadcn/ui component styling
- Dark theme implementation
- Design tokens from /examples/

// Visual Elements
- Background colors and gradients
- Border styles and shadows
- Typography styling
- Icon integration (Lucide)
- Image optimization with next/image
- Component visual states (not animated)
```

### ❌ Not Allowed
```typescript
// Animation
- CSS transitions
- Transform properties
- Opacity changes over time
- Hover state animations
- Loading animations
- Scroll-triggered effects

// Interaction
- Framer Motion imports
- JavaScript animations
- Interactive components beyond clicks
- Parallax effects
- Canvas elements
```

### 📋 Deliverables
1. Complete design system implementation
2. All components styled per DESIGN.md
3. Dark theme fully functional
4. Responsive design polished
5. Performance budget maintained

### 🎯 Success Criteria
See `/validation/phase2-checks.md` for executable tests:
- Design tokens: 100% coverage
- Color contrast: WCAG AAA where possible
- Typography: Mathematical scale verified
- Performance: < 100KB CSS (gzipped)
- Lighthouse: 90+ on all metrics

## 🚀 Phase 3: Interactive Polish

### Goal
Add CoLab-inspired functional animations and micro-interactions to create a premium, engaging experience.

### ✅ Allowed
```typescript
// Animation Library
- Framer Motion (Motion) 12.23.6
- GPU-accelerated transforms
- Scroll-triggered animations
- SVG path animations
- Staggered reveals
- Micro-interactions

// Interactive Elements
- Connection lines between sections
- Hover state transitions
- Loading states
- Form interactions
- Smooth scrolling
- Parallax effects (performance tested)

// Advanced Features
- Booking system integration (modular)
- Demo placeholders with interaction hints
- Progressive enhancement
- Reduced motion support
```

### ❌ Still Not Allowed
```typescript
// Out of Scope
- Light theme implementation
- Complex 3D animations
- WebGL/Canvas unless required
- Animation that breaks 60fps
- Features not in INITIAL.md
```

### 📋 Deliverables
1. All animations per DESIGN.md specs
2. 60fps performance verified
3. Reduced motion preferences respected
4. Booking system integration ready
5. Production deployment ready

### 🎯 Success Criteria
See `/validation/phase3-checks.md` for executable tests:
- Performance: 60fps all animations
- Bundle size: < 150KB JS (gzipped)
- Lighthouse: 95+ scores
- Accessibility: Motion preferences work
- Deployment: Vercel production ready

## 🔄 Phase Transitions

### How to Progress Phases

1. **Run Validation Suite**
   ```bash
   npm run validate:phase1  # or phase2, phase3
   ```

2. **Review Checklist**
   - Open `/validation/phaseX-checks.md`
   - Ensure all items checked
   - Fix any failing tests

3. **Update Current Phase**
   - Edit this file's "Current Phase" section
   - Commit with message: `chore: advance to Phase X`

4. **Generate New PRP**
   ```bash
   /generate-prp phase2 INITIAL.md  # or phase3
   ```

### ⚠️ Important Rules

- **No Skipping** — Must complete phases in order
- **No Mixing** — Don't implement Phase 2 features in Phase 1
- **No Shortcuts** — Validation must pass completely
- **No Assumptions** — When uncertain, check DESIGN.md

## 📚 Quick Reference

### Command Patterns
```bash
# Generate phase-specific PRP
/generate-prp phase1 INITIAL.md
/generate-prp phase2 INITIAL.md
/generate-prp phase3 INITIAL.md

# Run validation
npm run validate:phase1
npm run validate:phase2
npm run validate:phase3

# Check current phase
grep "Current Phase" PHASES.md
```

### File Dependencies
```
PHASES.md (this file)
├── References CLAUDE.md (principles)
├── References DESIGN.md (specifications)
├── References INITIAL.md (requirements)
├── Validates with /validation/*.md
└── Generates PRPs with /PRPs/templates/*
```

## 🎬 Phase Kickoff Checklist

Before starting any phase:
- [ ] Previous phase validation passed (if applicable)
- [ ] Current Phase updated in this file
- [ ] Relevant PRP generated
- [ ] Context7 MCP connected
- [ ] Development environment ready
- [ ] DESIGN.md reviewed
- [ ] Validation criteria understood

---

*Remember: Phase constraints override everything. When in doubt, consult CLAUDE.md for principles and DESIGN.md for specifications.*