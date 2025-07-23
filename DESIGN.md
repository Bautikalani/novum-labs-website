# DESIGN.md — Novum Labs Website Visual Design Specification

## 🎨 Design Vision

Create a sophisticated AI consultancy website that balances Linear's systematic minimalism with CoLab's functional dynamism. Every visual decision reinforces technical excellence through purposeful simplicity.

### Key Design Principles
- **Seamless Flow**: One continuous black canvas with no visual section breaks
- **Journey Narrative**: Animated line guides users through the experience
- **Purposeful Minimalism**: Every element earns its place
- **Technical Elegance**: Professional without being cold

## 🌈 Color System (LCH)

### Background Treatment
```css
/* Seamless background throughout entire page */
body {
  background: var(--color-background); /* lch(5% 0 0) */
  /* No section dividers or color changes */
  /* Sections flow continuously on single canvas */
}

/* Section separation through spacing only */
section {
  /* No background colors */
  /* No borders */
  /* Use padding/margin for visual separation */
}
```

### Core Palette
```css
:root {
  /* Primary Colors */
  --color-background: lch(5% 0 0);        /* Near black */
  --color-foreground: lch(98% 0 0);       /* Near white */
  --color-muted: lch(45% 0 0 / 0.7);      /* Muted text */
  
  /* Accent Colors (Linear-inspired) */
  --color-accent-blue: lch(65% 90 260);    /* Primary accent */
  --color-accent-purple: lch(70% 85 300);  /* Secondary accent */
  --color-accent-green: lch(75% 80 150);   /* Success states */
  --color-accent-orange: lch(75% 85 60);   /* Warning states */
  
  /* UI Colors */
  --color-border: lch(15% 0 0 / 0.2);     /* Subtle borders */
  --color-surface: lch(10% 0 0);          /* Card backgrounds */
  --color-hover: lch(12% 0 0);            /* Hover states */
}
```

### Gradient System
```css
/* Primary gradient (hero, CTAs) */
--gradient-primary: linear-gradient(135deg, 
  var(--color-accent-blue), 
  var(--color-accent-purple)
);

/* Mesh gradient (backgrounds) */
--gradient-mesh: 
  radial-gradient(at 40% 20%, var(--color-accent-blue) 0px, transparent 50%),
  radial-gradient(at 80% 0%, var(--color-accent-purple) 0px, transparent 50%),
  radial-gradient(at 0% 50%, var(--color-accent-green) 0px, transparent 50%);
```

## 📐 Typography System

### Font Stack
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

### Type Scale (Perfect Fourth - 1.333)
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

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-tight: 1.1;    /* Headings */
--leading-snug: 1.3;     /* Sub-headings */
--leading-normal: 1.6;   /* Body text */
--leading-relaxed: 1.8;  /* Small text */
```

## 📏 Spacing System (8px Base)

### Scale
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
--space-20: 10rem;    /* 160px */
```

### Container
```css
--container-max: 1200px;
--container-padding: var(--space-4);
--container-padding-lg: var(--space-6);
```

## 🗺️ Layout Structure

### Desktop Wireframe (1200px+)
```
┌─────────────────────────────────────────────────────────────────┐
│ Header (fixed, blur backdrop)                    [Book Call CTA] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         HERO SECTION                            │
│                   (100vh - header height)                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │           Headline (text-5xl, bold)                     │  │
│  │         Subheadline (text-xl, muted)                   │  │
│  │                                                         │  │
│  │      [Primary CTA]    [Secondary CTA]                  │  │
│  │                                                         │  │
│  │          (Mesh gradient background)                     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│●═══════════════════════════════════════════════════════════════●│
│                    DEMOS SECTION                                │
│                                                                 │
│  ┌─────────────────────┐  ╱  ┌─────────────────────────────┐  │
│  │                     │ ╱   │  Demo 1 Title               │  │
│  │                     │╱    │                             │  │
│  │    Demo 1 Preview  │     │  How to use this demo:      │  │
│  │                     │     │  - Step 1 instruction       │  │
│  │    Coming Soon     │     │  - Step 2 instruction       │  │
│  │                     │     │  - Expected outcome         │  │
│  └─────────────────────┘     └─────────────────────────────┘  │
│                                                                 │
│●────────────────────────────────────────────────────────────────●
│                                                                 │
│  ┌─────────────────────────────┐  ╲  ┌─────────────────────┐  │
│  │  Demo 2 Title               │   ╲ │                     │  │
│  │                             │    ╲│                     │  │
│  │  How to use this demo:      │     │    Demo 2 Preview  │  │
│  │  - Step 1 instruction       │     │                     │  │
│  │  - Step 2 instruction       │     │    Coming Soon     │  │
│  │  - Expected outcome         │     │                     │  │
│  └─────────────────────────────┘     └─────────────────────┘  │
│                                                                 │
│●────────────────────────────────────────────────────────────────●
│                                                                 │
│  ┌─────────────────────┐  ╱  ┌─────────────────────────────┐  │
│  │                     │ ╱   │  Demo 3 Title               │  │
│  │                     │╱    │                             │  │
│  │    Demo 3 Preview  │     │  How to use this demo:      │  │
│  │                     │     │  - Step 1 instruction       │  │
│  │    Coming Soon     │     │  - Step 2 instruction       │  │
│  │                     │     │  - Expected outcome         │  │
│  └─────────────────────┘     └─────────────────────────────┘  │
│                                                                 │
│●═══════════════════════════════════════════════════════════════●│

Legend:
╱ ╲ = Visual flow indicators showing zigzag reading pattern
│                    PROCESS SECTION                              │
│                                                                 │
│     Discovery ──●── Strategy ──●── Development ──●── Deploy    │
│                                                                 │
│●═══════════════════════════════════════════════════════════════●│
│                      TEAM SECTION                               │
│                                                                 │
│            ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐           │
│            │ IMG │    │ IMG │    │ IMG │    │ IMG │           │
│            │     │    │     │    │     │    │     │           │
│            └─────┘    └─────┘    └─────┘    └─────┘           │
│             Name       Name       Name       Name              │
│             Role       Role       Role       Role              │
│                                                                 │
│●═══════════════════════════════════════════════════════════════●│
│                       CTA SECTION                               │
│                                                                 │
│              Ready to Transform with AI?                        │
│                                                                 │
│                   [Book Discovery Call]                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Legend:
● = Start and end points of the ONE continuous journey line (static in Phase 1, animated in Phase 3)
│ = The single continuous line flowing through the entire page
╱ ╲ = Where the line curves between demos to create zigzag reading flow
    = Seamless black background with no section dividers
    = Visual separation through spacing only
```

### Mobile Wireframe (< 768px)
```
┌─────────────────┐
│ [≡]    [CTA]    │
├─────────────────┤
│                 │
│      HERO       │
│                 │
│    Headline     │
│   Subheadline   │
│                 │
│   [Primary]     │
│  [Secondary]    │
│●                │
││     DEMOS      │
││                │
││ ┌───────────┐  │
││ │  Demo 1   │  │
││ │  Preview  │  │
││ └───────────┘  │
││ How to use:    │
││ - Step 1       │
││ - Step 2       │
││                │
││ ┌───────────┐  │
││ │  Demo 2   │  │
││ │  Preview  │  │
││ └───────────┘  │
││ How to use:    │
││ - Step 1       │
││ - Step 2       │
││                │
││ ┌───────────┐  │
││ │  Demo 3   │  │
││ │  Preview  │  │
││ └───────────┘  │
││ How to use:    │
││ - Step 1       │
││ - Step 2       │
││                │
││   PROCESS      │
││  Discovery     │
││      ↓         │
││  Strategy      │
││      ↓         │
││ Development    │
││      ↓         │
││   Deploy       │
││                │
││     TEAM       │
││ ┌──┐  ┌──┐    │
││ └──┘  └──┘    │
││ Name  Name     │
││ Role  Role     │
││                │
││ ┌──┐  ┌──┐    │
││ └──┘  └──┘    │
││ Name  Name     │
││ Role  Role     │
││                │
││     CTA        │
││ [Book Call]    │
│●                │
└─────────────────┘

Legend:
● = Start and end points of journey line
│ = ONE continuous line flowing down the page
    = Seamless black background throughout
```

## 🧩 Component Specifications

### Demo Cards
```css
/* Demo section layout */
--demo-spacing: var(--space-20);        /* Between demos */
--demo-preview-width: 45%;              /* Preview area */
--demo-explanation-width: 45%;          /* Explanation area */
--demo-gap: var(--space-8);            /* Gap between preview/explanation */

/* Zigzag pattern (creates visual flow) */
/* Demo 1: Preview left, explanation right   → */
/* Demo 2: Explanation left, preview right   ← */  
/* Demo 3: Preview left, explanation right   → */

/* This creates natural eye movement pattern */
/* Journey line follows this zigzag flow */
```

### Cards
```css
/* Base card */
--card-padding: var(--space-6);
--card-radius: 0.75rem;
--card-border: 1px solid var(--color-border);
--card-shadow: 0 1px 3px 0 lch(0% 0 0 / 0.1);
--card-shadow-hover: 0 10px 40px -10px lch(0% 0 0 / 0.2);
```

### Buttons
```css
/* Primary button */
--button-padding-x: var(--space-6);
--button-padding-y: var(--space-3);
--button-radius: 0.5rem;
--button-font-weight: var(--font-semibold);

/* Sizes */
--button-height-sm: 2.25rem;   /* 36px */
--button-height-md: 2.75rem;   /* 44px */
--button-height-lg: 3.25rem;   /* 52px */
```

### Forms
```css
/* Input fields */
--input-height: 2.75rem;        /* 44px */
--input-padding-x: var(--space-4);
--input-border-width: 2px;
--input-radius: 0.5rem;
```

## 🎭 Animation Specifications

### Timing Functions
```css
--ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in: cubic-bezier(0.87, 0, 0.13, 1);
```

### Durations
```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Animation Patterns (Phase 3)

> **Note**: All animations are Phase 3 only. In Phase 1-2, elements are static with journey line visible but not animated.

#### Journey Line (Primary Navigation Element)
- **Concept**: ONE continuous line that guides users through their entire journey
- **Visual**: Like a single thread or river flowing through the page
  
- **Path Details**: 
  - Starts at hero section (below CTAs)
  - Flows vertically down the left side
  - Gently curves/weaves to connect the zigzag demo pattern
  - Continues straight through Process and Team sections
  - Ends at the final CTA
  - No breaks, no segments - one smooth, continuous path
  
- **Phase 1 (Static)**:
  - Entire line visible as a faint path (opacity: 0.2)
  - Shows users the journey they'll take
  - No animation, just a subtle visual guide
  - Implemented as SVG path or CSS pseudo-element
  
- **Phase 3 (Animated)**:
  - **Scroll Progress**: Line "fills" like a loading bar as user scrolls
  - **Visual Effect**: 
    - Unfilled portion: faint (opacity: 0.2)
    - Filled portion: brighter (opacity: 0.8)  
    - Current position: glowing pulse effect
  - **Technical**: Uses scroll percentage to determine fill amount
  - **Smooth**: Slight easing for fluid motion, no jumps
  
- **Implementation Note**: This is a single SVG path or continuous element, NOT multiple separate lines
- **Future**: Can host an animated avatar that runs along this path
- **Mobile**: Same concept but straight vertical line

#### Scroll-Triggered Reveals
- Elements fade in and slide up 20px
- Stagger children by 100ms
- Use Intersection Observer with 10% threshold

#### Demo Section Animations
- Alternating fade-in from left/right
- Subtle hover glow on demo cards
- Preview areas can pulse gently to indicate interactivity

#### Hover States
- Scale: 1.02 for cards
- Brightness: 1.1 for buttons
- All transitions: 200ms ease-smooth

#### Hero Mesh Gradient
- Slow rotation: 20s infinite
- Subtle scale breathing: 10s alternate
- Performance: Use CSS transforms only

## 📱 Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Scaling Strategy
- **Mobile First**: Base styles for < 640px
- **Tablet**: Enhance at 768px+
- **Desktop**: Optimize at 1024px+
- **Wide**: Max width at 1200px

## 🎯 Visual Hierarchy

### Journey Line Specifications
```css
/* ONE continuous line that flows through the entire page */
--journey-line-width: 2px;
--journey-line-color: var(--gradient-primary);
--journey-line-glow: 0 0 20px var(--color-accent-blue);

/* Path description:
   This is a SINGLE continuous line (like a river) that:
   1. Starts below hero CTA buttons
   2. Flows down the left side
   3. Weaves right to Demo 1, then left to Demo 2, then right to Demo 3
   4. Continues straight down through Process and Team
   5. Ends at the CTA button
   
   Think of it as a single thread guiding users through the experience.
   No breaks, no separate segments - one flowing path.
*/

/* Visual positioning */
--journey-line-desktop-offset: 60px;    /* From left edge on desktop */
--journey-line-mobile-offset: 20px;     /* From left edge on mobile */

/* Phase 1: Static appearance */
--journey-line-static-opacity: 0.2;
--journey-line-static-color: var(--color-muted);

/* Phase 3: Animation states */
--journey-line-filled-opacity: 0.8;     /* Already scrolled */
--journey-line-active-opacity: 1;       /* Current position + glow */
--journey-line-unfilled-opacity: 0.2;   /* Not yet scrolled */

/* Scroll progress calculation for Phase 3 */
/* fillPercentage = (window.scrollY / (document.height - window.height)) * 100 */
/* The line "fills" like a loading bar as user scrolls */
```

### Z-Index Scale
```css
--z-base: 0;
--z-dropdown: 10;
--z-sticky: 20;
--z-fixed: 30;
--z-modal-backdrop: 40;
--z-modal: 50;
--z-popover: 60;
--z-tooltip: 70;
```

### Focus States
- Ring width: 2px
- Ring color: var(--color-accent-blue)
- Ring offset: 2px
- Ring opacity: 0.5

## 🌟 Design Inspiration References

### Linear.app Principles
- **Systematic Design**: Every spacing value follows the scale
- **Purposeful Simplicity**: No decoration without function
- **High Contrast**: Clear visual hierarchy
- **Consistent Rhythm**: Mathematical relationships
- **Seamless Experience**: Continuous flow without jarring transitions

### CoLab Software Patterns
- **Functional Animation**: Every motion has purpose
- **Progressive Disclosure**: Complexity revealed as needed
- **Engineering Aesthetic**: Technical but approachable
- **Performance First**: 60fps mandatory
- **Guided Journey**: Clear navigation through content

### Unique Novum Elements
- **Journey Line**: Animated companion that guides users through the experience
- **Seamless Canvas**: No section dividers, one continuous black background
- **Alternating Demos**: Left/right pattern creates visual rhythm
- **Symmetrical Team**: Balanced 4-person grid layout

---

*This document contains only visual design specifications. For technical implementation details, see INITIAL.md. For phase-specific constraints, see PHASES.md.*