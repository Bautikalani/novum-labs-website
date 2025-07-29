# DESIGN.md — Novum Labs Design System

## 🎨 Design Philosophy

Sophisticated AI consultancy aesthetics that demonstrate technical excellence through refined minimalism. Every design decision reinforces trust, capability, and innovation.

### Core Principles
1. **Technical Sophistication** - Demonstrate AI expertise through design excellence
2. **Visual Hierarchy** - Guide users naturally through content with clear priority
3. **Purposeful Motion** - Every animation serves user understanding
4. **Semantic Clarity** - AI-forward language balanced with human warmth
5. **Trust Through Quality** - Excellence speaks louder than testimonials

## 📏 Typography System

### Type Scale (Perfect Fourth - 1.333 ratio)
```css
/* Base: 16px (1rem) - Optimized for readability */
--font-size-xs: 0.75rem;     /* 12px - Meta information */
--font-size-sm: 0.875rem;    /* 14px - Supporting text */
--font-size-base: 1rem;      /* 16px - Body text */
--font-size-lg: 1.125rem;    /* 18px - Lead paragraphs */
--font-size-xl: 1.333rem;    /* 21px - Section intros */
--font-size-2xl: 1.777rem;   /* 28px - H3 headings */
--font-size-3xl: 2.369rem;   /* 38px - H2 headings */
--font-size-4xl: 3.157rem;   /* 51px - H1 headings */
--font-size-5xl: 4.209rem;   /* 67px - Hero headlines */
--font-size-6xl: 5.61rem;    /* 90px - Display text */
```

### Font Stack
```css
/* Primary - Technical precision */
--font-sans: 'Inter Variable', system-ui, -apple-system, sans-serif;

/* Display - Statement headlines */
--font-display: 'Satoshi Variable', var(--font-sans);

/* Mono - Code/technical elements */
--font-mono: 'JetBrains Mono Variable', 'SF Mono', monospace;

/* Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Typography Rules
- **Headlines**: Display font, -0.02em tracking, bold weight
- **Body**: Sans font, 1.6 line-height, regular weight
- **UI Elements**: Sans font, medium weight, -0.01em tracking
- **Technical**: Mono font for metrics, code, demos

## 🎨 Color System (LCH Color Space)

### Core Palette
```css
/* Backgrounds - Deep, sophisticated */
--color-background: lch(2% 0 0);              /* Pure black */
--color-surface-1: lch(5% 2 250);             /* Subtle elevation */
--color-surface-2: lch(8% 3 250);             /* Card background */
--color-surface-3: lch(12% 4 250);            /* Hover state */
--color-surface-elevated: lch(15% 5 250);     /* Floating elements */

/* Brand Colors - Electric, modern */
--color-primary: lch(55% 65 250);             /* Electric blue */
--color-primary-hover: lch(60% 70 250);       /* L+5, C+5 */
--color-primary-active: lch(50% 60 250);      /* L-5, C-5 */

/* Accent Palette - Tech-forward */
--color-accent-cyan: lch(75% 50 180);         /* Innovation */
--color-accent-purple: lch(65% 55 280);       /* AI/ML */
--color-accent-green: lch(70% 60 145);        /* Success */

/* Text Hierarchy - Clear contrast */
--color-text-primary: lch(98% 0 0);           /* High emphasis */
--color-text-secondary: lch(75% 0 0);         /* Medium emphasis */
--color-text-tertiary: lch(50% 0 0);          /* Low emphasis */

/* Semantic - Functional */
--color-success: lch(70% 60 145);
--color-warning: lch(75% 65 85);
--color-error: lch(55% 70 25);
--color-info: lch(65% 50 220);
```

### Gradient System
```css
/* Hero gradient - Ethereal mesh */
--gradient-hero: 
  radial-gradient(at 20% 30%, lch(55% 65 250 / 0.3) 0px, transparent 50%),
  radial-gradient(at 80% 20%, lch(75% 50 180 / 0.2) 0px, transparent 50%),
  radial-gradient(at 40% 70%, lch(65% 55 280 / 0.2) 0px, transparent 50%);

/* Interactive elements */
--gradient-primary: linear-gradient(135deg, 
  lch(55% 65 250) 0%, 
  lch(65% 55 280) 100%);

/* Surface enhancement */
--gradient-surface: linear-gradient(180deg,
  lch(12% 4 250) 0%,
  lch(8% 3 250) 100%);
```

## 📐 Spacing System

### Base Unit: 8px
```css
/* Micro spacing - Tight relationships */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */

/* Component spacing - Breathing room */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */

/* Layout spacing - Major sections */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Spacing Principles
1. **Proximity**: Related elements use space-2 to space-4
2. **Components**: Minimum space-6 internal padding
3. **Sections**: space-20 vertical rhythm (space-24 for hero/CTA)
4. **Responsive**: Scale -20% mobile, +20% wide screens

## 🏗️ Layout Structure

### Grid System
```css
/* 12-column grid with responsive gutters */
--grid-columns: 12;
--grid-gutter-mobile: 20px;
--grid-gutter-tablet: 32px;
--grid-gutter-desktop: 40px;

/* Container widths */
--container-sm: 640px;    /* Text content */
--container-md: 768px;    /* Forms */
--container-lg: 1024px;   /* Standard */
--container-xl: 1200px;   /* Wide */
--container-2xl: 1400px;  /* Hero */
```

### Section Architecture
```
┌─── NAVIGATION (80px fixed) ─────────────────┐
├─── HERO (100vh - 80px) ────────────────────┤
│     Padding: 120px top, 80px bottom         │
├─── DEMOS ───────────────────────────────────┤
│     Padding: 80px vertical                  │
├─── WHY CHOOSE US ───────────────────────────┤
│     Padding: 80px vertical                  │
├─── PROCESS ─────────────────────────────────┤
│     Padding: 80px vertical                  │
├─── TEAM ────────────────────────────────────┤
│     Padding: 80px vertical                  │
├─── CTA (60vh minimum) ──────────────────────┤
│     Padding: 120px vertical                 │
└─────────────────────────────────────────────┘
```

## 🎯 Visual Hierarchy

### Hierarchy Levels
1. **Primary**: Hero CTAs - Largest, highest contrast, animated
2. **Secondary**: Section headers - Large, high contrast
3. **Tertiary**: Cards/components - Medium size, interactive
4. **Supporting**: Body text - Optimized readability
5. **Meta**: Labels/timestamps - Smallest, subtle

### Implementation
```css
/* Size hierarchy */
.h1 { font-size: var(--font-size-4xl); line-height: 1.1; }
.h2 { font-size: var(--font-size-3xl); line-height: 1.2; }
.h3 { font-size: var(--font-size-2xl); line-height: 1.3; }
.lead { font-size: var(--font-size-lg); line-height: 1.6; }
.body { font-size: var(--font-size-base); line-height: 1.7; }
.small { font-size: var(--font-size-sm); line-height: 1.5; }

/* Emphasis hierarchy */
.text-high { color: var(--color-text-primary); }
.text-medium { color: var(--color-text-secondary); }
.text-low { color: var(--color-text-tertiary); }
```

## 🎭 Motion Design

### Animation Principles
1. **Purpose**: Guide attention and provide feedback
2. **Performance**: 60fps minimum, GPU-accelerated
3. **Subtlety**: Enhance without distraction
4. **Consistency**: Unified timing system

### Timing System
```css
/* Duration scale */
--duration-instant: 100ms;    /* Micro feedback */
--duration-fast: 200ms;       /* Hover states */
--duration-normal: 300ms;     /* Transitions */
--duration-slow: 500ms;       /* Elements */
--duration-slower: 800ms;     /* Hero animations */

/* Easing functions */
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Core Animations
```css
/* Entrance animations */
@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(30px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}

/* Hover interactions */
.interactive {
  transition: all var(--duration-fast) var(--ease-out);
}

.interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile-first approach */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Wide screens */
--breakpoint-2xl: 1536px; /* Ultra-wide */
```

### Fluid Typography
```css
/* Responsive type with clamp() */
--font-size-hero: clamp(2.5rem, 5vw + 1rem, 5.61rem);
--font-size-h1: clamp(2rem, 4vw + 0.5rem, 3.157rem);
--font-size-h2: clamp(1.5rem, 3vw + 0.5rem, 2.369rem);
--font-size-body: clamp(0.875rem, 1vw + 0.5rem, 1rem);
```

### Touch Optimization
- Minimum 48px touch targets
- Increased tap spacing on mobile
- Swipe gestures for carousels
- Bottom-sheet patterns for mobile CTAs

## 🔄 User Experience Flow

### Primary Journey
```
1. LANDING (Hero)
   → Typewriter headline captures attention
   → Clear value proposition
   → Dual CTA options (demos/call)

2. ENGAGEMENT (Demos)
   → Interactive previews prove capability
   → "Try it yourself" approach
   → Technical competence displayed

3. UNDERSTANDING (Why Choose Us)
   → Fast, Smart, Scalable messaging
   → Clear differentiators
   → Benefits over features

4. TRUST (Team)
   → Real people, real expertise
   → LinkedIn integration
   → Approachable professionals

5. ACTION (CTA)
   → Multiple conversion paths
   → Reduced friction
   → Clear next steps
```

### Micro-interactions
- **Hover**: 200ms ease-out transitions
- **Focus**: 2px primary color outline
- **Loading**: Skeleton screens with shimmer
- **Feedback**: Instant visual confirmation

## 🎪 Component Patterns

### Button Hierarchy
```css
/* Primary - High emphasis actions */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: var(--space-4) var(--space-8);
  font-weight: var(--font-weight-semibold);
}

/* Secondary - Alternative actions */
.btn-secondary {
  background: var(--color-surface-2);
  color: var(--color-text-primary);
  border: 1px solid var(--color-surface-3);
}

/* Ghost - Tertiary actions */
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  text-decoration: underline;
}
```

### Card System
```css
.card {
  background: var(--color-surface-2);
  border-radius: 16px;
  padding: var(--space-6);
  transition: all var(--duration-fast) var(--ease-out);
}

.card:hover {
  background: var(--gradient-surface);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
}
```

## 📊 Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Typography system setup
- [ ] Color system implementation
- [ ] Grid and spacing framework
- [ ] Core component library
- [ ] Mobile-first responsive base

### Phase 2: Experience (Week 2)
- [ ] Motion system integration
- [ ] Interactive components
- [ ] Advanced hover states
- [ ] Gradient backgrounds
- [ ] Performance optimization

### Phase 3: Polish (Week 3)
- [ ] Micro-interaction details
- [ ] Loading/error states
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Final optimizations

## 🎯 Success Metrics

### Performance
- Lighthouse Score: 90+ all categories
- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

### Engagement
- Demo interaction rate: > 40%
- Time on page: > 2 minutes
- CTA click rate: > 15%
- Mobile bounce rate: < 40%

### Quality
- WCAG AA compliance
- Cross-browser compatibility
- Touch-friendly on all devices
- Smooth 60fps animations

---

*This design system creates a premium AI consultancy presence through sophisticated typography, refined color usage, purposeful spacing, clear hierarchy, and seamless user flows. Every element reinforces Novum Labs' position as a technical leader with human understanding.*