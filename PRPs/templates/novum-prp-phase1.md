# PRP: Phase 1 Semantic Wireframe - [Project Name]

**Generated**: [Date]  
**Phase**: 1 - Semantic Wireframe  
**Confidence Score**: [X]/10

## 📋 Executive Summary

Implement the complete semantic HTML structure for [project description], focusing on accessibility, responsiveness, and content hierarchy without any custom styling. This phase establishes the foundation for all future visual and interactive enhancements.

## 🎯 Goal

Create a fully functional, accessible HTML structure that matches the project's wireframe specifications, with all content properly organized using semantic HTML5 elements.

### Success Criteria
- [ ] All Phase 1 validation checks pass (`npm run validate:phase1`)
- [ ] Perfect accessibility score (0 violations)
- [ ] Mobile responsive without custom CSS
- [ ] All content from INITIAL.md properly structured
- [ ] Semantic HTML validation passes

## 📚 Context & Documentation

### Core Project Files (Required Reading)
- **CLAUDE.md** - Project structure, TypeScript requirements, anti-patterns
- **PHASES.md** - Current phase: 1 (Semantic Wireframe) - Review allowed/not allowed
- **DESIGN.md** - Wireframe specifications (ASCII or visual)
- **INITIAL.md** - All content requirements and copy
- **validation/phase1-checks.md** - Detailed Phase 1 success criteria

### Technical Documentation
Request via Context7 when implementing:
- [Framework] routing and structure patterns
- HTML5 semantic element best practices
- ARIA accessibility patterns and landmarks
- Mobile-first responsive HTML techniques

### Design Patterns
- `/examples/` - Look for component structure patterns (ignore any styling)
- Focus on semantic markup patterns and accessibility examples

## 🏗️ Implementation Blueprint

### Prerequisites
```bash
# Initialize project if not already done
[Project initialization command]

# Verify development environment
npm run dev  # Should start without errors

# Install Phase 1 dependencies only
# (Usually none beyond base framework)
```

### Project Structure for Phase 1
```
src/
├── app/                    # [Framework routing structure]
│   ├── layout.[ext]       # Root layout (minimal, no styling)
│   └── page.[ext]         # Main page component
├── components/
│   ├── sections/          # Major page sections
│   │   ├── [section-name]-section.[ext]
│   │   └── [organize by wireframe sections]
│   └── layout/            # Layout components
│       ├── header.[ext]   # Site header
│       └── footer.[ext]   # Site footer (if needed)
└── types/                 # TypeScript interfaces (if applicable)
    └── index.ts
```

### Implementation Tasks

#### Task 1: Set Up Base Document Structure
**File**: `src/app/layout.[ext]`
**Purpose**: Create minimal root layout with proper HTML structure

```typescript
// Pseudocode for base layout
// - DOCTYPE and html element with lang attribute
// - Proper head with title and meta tags from INITIAL.md
// - Skip navigation link for accessibility
// - Semantic body structure
// - No custom styles except minimal layout CSS
```

**Validation**: 
- [ ] HTML validates (W3C)
- [ ] Has skip navigation link
- [ ] Includes all required meta tags

#### Task 2: Create Site Header
**File**: `src/components/layout/header.[ext]`
**Purpose**: Semantic header with navigation structure

```typescript
// Structure approach:
// - Use <header> with role="banner"
// - Site name/logo as text (no images in Phase 1)
// - <nav> element with role="navigation"
// - Consider mobile menu structure (but no JS)
// - Use semantic list for navigation items
```

**Validation**:
- [ ] Proper landmark roles
- [ ] Keyboard accessible
- [ ] Mobile structure present

#### Task 3: Implement Main Content Sections
**Purpose**: Build each major section from wireframe

For each section in the wireframe:
```typescript
// Section structure pattern:
// - Use <section> with descriptive aria-label
// - Proper heading hierarchy (only one h1)
// - Semantic HTML for content
// - Consider mobile layout (using flexbox/grid sparingly)
// - Alt text for any placeholder images
```

**Key sections typically include**:
- Hero/Landing section (with h1)
- Features/Services sections
- About/Team section
- Contact/CTA section

#### Task 4: Handle Responsive Layout (No Custom CSS)
**Purpose**: Ensure mobile responsiveness with semantic HTML

```typescript
// Approach:
// - Use browser default block-level behavior
// - Minimal flexbox/grid ONLY for essential layout
// - Test at 320px minimum width
// - Content should stack naturally on mobile
// - No media queries in Phase 1
```

#### Task 5: Accessibility Implementation
**Purpose**: Ensure full accessibility from the start

```typescript
// Required accessibility features:
// - Proper heading hierarchy (h1 → h2 → h3)
// - All interactive elements keyboard accessible
// - Form labels associated with inputs
// - ARIA landmarks for major sections
// - Alt text for images (even placeholders)
// - Semantic HTML throughout
```

### Phase 1 Specific Constraints

**Allowed in Phase 1**:
- Semantic HTML5 elements
- Basic flexbox/grid for layout ONLY
- Minimal inline styles for structure (position, display)
- System default fonts and colors
- Form structure (no styling)
- Accessibility attributes (ARIA, roles)

**Not Allowed (Save for Later Phases)**:
- Custom colors or typography
- CSS files beyond minimal reset
- JavaScript functionality
- Animations or transitions
- Custom styling of any kind
- Background images or decorative elements
- Icon fonts or SVGs
- Component libraries (even unstyled)

## ✅ Validation Loop

### Level 1: Continuous HTML Validation
```bash
# HTML validation
npx html-validate "src/**/*.[ext]"

# TypeScript (if applicable)
npm run type-check

# Expected: 0 errors, 0 warnings
```

### Level 2: Accessibility Testing
```bash
# Run accessibility tests
npm run test:a11y

# Check specific criteria:
- 0 WCAG violations
- All images have alt text
- Proper heading hierarchy
- Keyboard navigation works
```

### Level 3: Mobile Responsiveness
```bash
# Test at multiple viewports
npm run test:responsive

# Key viewports:
- 320px (minimum)
- 375px (iPhone)
- 768px (tablet)
- 1024px (desktop)

# Expected: No horizontal scroll at any size
```

### Level 4: Phase 1 Complete Validation
```bash
# Run full Phase 1 validation suite
npm run validate:phase1

# This should verify:
- All content present
- Semantic structure correct
- No custom styling
- Accessibility compliance
- Mobile responsiveness
```

## 🚫 Anti-Patterns to Avoid

### Phase 1 Specific Anti-Patterns
- ❌ Adding ANY custom colors (use browser defaults)
- ❌ Implementing custom typography
- ❌ Using CSS frameworks or libraries
- ❌ Adding hover states or transitions
- ❌ Creating visual effects
- ❌ Implementing JavaScript interactivity
- ❌ Optimizing for visual appearance
- ❌ Using non-semantic HTML for layout

### Common Phase 1 Mistakes
- ❌ Jumping ahead to visual design
- ❌ Over-engineering the structure
- ❌ Ignoring mobile responsiveness
- ❌ Forgetting accessibility basics
- ❌ Using divs instead of semantic elements
- ❌ Creating complex layouts with CSS

## 📊 Performance Monitoring

### Phase 1 Metrics
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| HTML Size | < 50KB | Semantic markup is lightweight |
| CSS Size | < 5KB | Only reset/minimal layout |
| Load Time | < 1s | No assets to slow it down |
| Accessibility | 100% | Foundation for inclusive design |
| Mobile Score | 100% | Works on all devices |

## 🎬 Completion Checklist

### Structure Complete
- [ ] All wireframe sections implemented
- [ ] Content from INITIAL.md included
- [ ] Semantic HTML throughout
- [ ] Document validates (W3C)

### Accessibility Verified
- [ ] WCAG AA compliance (structure)
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Proper landmarks and roles

### Responsive Confirmed
- [ ] No horizontal scroll at 320px
- [ ] Content readable without CSS
- [ ] Natural stacking on mobile
- [ ] Flexible layout structure

### Phase 1 Validation
- [ ] `npm run validate:phase1` passes
- [ ] No custom styling present
- [ ] All anti-patterns avoided
- [ ] Ready for Phase 2 styling

## 📝 Implementation Notes

### Browser Testing
Test Phase 1 with CSS disabled to ensure:
- Content is still readable
- Structure makes sense
- Navigation is possible
- Forms are functional

### Future Considerations
Note any structural decisions that will affect later phases:
- Complex layout requirements
- Component organization
- Accessibility enhancements
- Performance optimizations

---

**Confidence Score Reasoning**: Base confidence on:
- Clarity of wireframes provided
- Completeness of content in INITIAL.md
- Complexity of required structure
- Framework familiarity
- Any ambiguous requirements