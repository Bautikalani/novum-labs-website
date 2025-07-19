# DESIGN.md — Novum Labs Website

## 1. Purpose

Create an impressive, modular marketing website for **Novum Labs** (novumlabs.ai).

**Immediate goal:** Wow high-value leads with live AI demos and move them to a discovery call.

## 2. Technology Stack

| Layer | Preferred Tools | Notes |
|-------|----------------|-------|
| Framework | **Next.js 15.4.1** (App Router) & **React 19.1** | Latest stable versions released July 2025 with server components, Turbopack builds, and React 19 stable features |
| Styling | **Tailwind CSS v4.1** + **shadcn/ui** | Tailwind v4.1 with 5x faster builds, automatic content detection, and text shadows. shadcn/ui fully updated for Tailwind v4 + React 19 |
| Motion | **Motion 12.23.6** (formerly Framer Motion) — GSAP / Lenis allowed if lighter | Latest Motion for React with hybrid engine combining JavaScript animations and native browser APIs |
| Hosting | Vercel (optional) | Optimized for Next.js deployment |
| Extensibility | Must allow future light theme & extra pages without re-architecting | Scalable architecture from day one |

## 3. Design Tokens (LCH Color Space)

| Token | Dark Value | Light Value (future) | Usage |
|-------|------------|---------------------|-------|
| `--bg-main` | `lch(18% 0 0)` | `lch(98% 0 0)` | Global background |
| `--fg-high` | `lch(95% 0 0)` | `lch(10% 0 0)` | Headings |
| `--fg-muted` | `lch(70% 0 0 / 0.7)` | `lch(35% 0 0 / 0.8)` | Body text |
| `--accent-1` | `lch(70% 90 230)` | same | Primary neon accent |
| `--accent-2` | `lch(65% 80 280)` | same | Gradient second stop |

### CSS Custom Properties Structure

```css
:root[data-theme='dark'] { 
  --bg-main: 18% 0 0;
  --fg-high: 95% 0 0;
  --fg-muted: 70% 0 0 / 0.7;
  --accent-1: 70% 90 230;
  --accent-2: 65% 80 280;
}

:root[data-theme='light'] { 
  --bg-main: 98% 0 0;
  --fg-high: 10% 0 0;
  --fg-muted: 35% 0 0 / 0.8;
  --accent-1: 70% 90 230;
  --accent-2: 65% 80 280;
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        bg:      'lch(var(--bg-main) / <alpha-value>)',
        fg:      'lch(var(--fg-high) / <alpha-value>)',
        muted:   'lch(var(--fg-muted) / <alpha-value>)',
        accent:  'lch(var(--accent-1) / <alpha-value>)',
        accent2: 'lch(var(--accent-2) / <alpha-value>)'
      }
    }
  }
};
```

## 4. Theme Management Strategy

- Add `data-theme="dark"` | `"light"` to the `<html>` element
- Provide a `ThemeProvider` (client component) that toggles the attribute and stores preference in localStorage
- All colors use CSS variables, so Tailwind classes automatically adapt across themes

## 5. Site Architecture

### Route Structure
```
/               Landing – hero → demos → team → process → CTA
/playground     Live demo hub
/book           Scheduler embed
/legal/*        Static docs
```

### Page Flow
```
Landing Page → Live Demos → Process Overview → Team/About → Call to Action
     ↓              ↓              ↓              ↓              ↓
  Hero Section   Demo Cards    Flow Diagram    Team Grid   Scheduler CTA
```

## 6. Component Inventory

### Core Components
- **`MeshHero`** – Full-viewport hero with mesh-gradient canvas
- **`DemoPreviewCard`** – Interactive mini-demo block
- **`TeamGrid`** – Professional team showcase with headshots and roles
- **`FlowDiagram`** – Animated SVG line graphic (CoLab style)
- **`Section`** – Grid wrapper with scroll-snap utilities
- **`SchedulerCTA`** – Button/dialog that lazy-loads call-scheduler

### Component Hierarchy
```
Website Layout
├── ThemeProvider
├── Header/Navigation
├── Main Content
│   ├── MeshHero
│   ├── Section (demos)
│   │   └── DemoPreviewCard[]
│   ├── Section (process)
│   │   └── FlowDiagram
│   ├── Section (team)
│   │   └── TeamGrid
│   └── Section (CTA)
│       └── SchedulerCTA
└── Footer
```

### Core Components
- **`MeshHero`** – Full-viewport hero with mesh-gradient canvas
- **`DemoPreviewCard`** – Interactive mini-demo block
- **`TeamGrid`** – Professional team showcase with headshots and roles
- **`FlowDiagram`** – Animated SVG line graphic (CoLab style)
- **`Section`** – Grid wrapper with scroll-snap utilities
- **`SchedulerCTA`** – Button/dialog that lazy-loads call-scheduler

## 7. Layout & Wireframes

### Design Inspiration
Drawing from industry leaders known for exceptional design:
- **Stripe:** Simple design, centrepieces, and impressive details with diagonal color sections and visible grid structure
- **Linear:** Dark background with linear gradient colors, blurs, dynamic streamers, and professional engineering-focused aesthetic
- **Vercel:** Clean design system with high contrast, accessible color system and consistent web experiences
- **CoLab:** Clear value proposition presentation with smooth gradients and professional CAD software aesthetic

### Desktop Layout Structure (Alternating Blocks + Animated Connecting Lines)
```
┌─────────────────────────────────────────────────────────────────┐
│ Header (fixed/transparent)          [Theme] [Menu] [Book Call] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    HERO SECTION                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Large Heading: "Build AI solutions..."                │   │
│  │  Subheading: Value proposition                          │   │
│  │  CTA: "See Live Demo" | "Book Discovery Call"          │   │
│  │                                                         │   │
│  │           [Mesh Gradient Background Canvas]             │   │
│  │              with floating elements                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                DEMOS SECTION (Alternating Layout)              │
│                                                                 │
│  ┌─────────────────────────────┐    ●────────────────────┐     │
│  │        Demo 1 Content       │    │  [Animated Line]   │     │
│  │    "Coming Soon Demo"       │    │                    │     │
│  │                             │    │                    │     │
│  │   [Coming Soon Preview]     │    │                    │     │
│  │      [Coming Soon]          │    │                    │     │
│  └─────────────────────────────┘    │                    │     │
│                                      │                    │     │
│              ┌───────────────────────┼────────────────────●     │
│              │  [Connecting Line]    │                          │
│              │                       │                          │
│     ┌────────┼───────────────────────┘                          │
│     │        │        Demo 2 Content                            │
│     │        │      "Coming Soon Demo"                          │
│     │        │                                                  │
│     │        │   [Coming Soon Preview]                          │
│     │        │      [Coming Soon]                               │
│     │        └─────────────────────────────┘                    │
│     │                                                           │
│     └──●──────────────────────────────────┐                    │
│        │  [Connecting Line]                │                    │
│        │                                   │                    │
│  ┌─────┼───────────────────────────────────┘                    │
│  │     │        Demo 3 Content                                  │
│  │     │     "Coming Soon Demo"                                 │
│  │     │                                                        │
│  │     │   [Coming Soon Preview]                                │
│  │     │      [Coming Soon]                                     │
│  │     └─────────────────────────────┘                          │
│  │                                                              │
├─┼──────────────────────────────────────────────────────────────┤
│ │               PROCESS SECTION (Split Layout)                 │
│ └──●────────────────────────────────────┐                     │
│    │                                    │                     │
│    │  "How We Work With You"            │                     │
│    │                                    │                     │
│    │  ┌─ Discovery ─●─ Strategy ─●─ Development ─●─ Deploy     │
│    │  │             │            │              │             │
│    │  │  Research   │ Planning   │   Building   │ Launch      │
│    │  │             │            │              │             │
│    │  └─────────────┴────────────┴──────────────┴─────────────┘│
│    │                                                           │
│    └─────────────────────────────────────┐                     │
│                                          │                     │
├──●───────────────────────────────────────┘                     │
│  │                    TEAM SECTION                             │
│  └──●──────────────────────────────────────────────────────────┐│
│     │ "Meet the Team Behind Novum Labs"                        ││
│     │                                                          ││
│     │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    ││
│     │  │ Bautista │ │Alessandro│ │Sebastian │ │  Tomas   │    ││
│     │  │ [Photo]  │ │ [Photo]  │ │ [Photo]  │ │ [Photo]  │    ││
│     │  │   CEO    │ │   CGO    │ │   CTO    │ │Lead Eng. │    ││
│     │  │[LinkedIn]│ │[LinkedIn]│ │[LinkedIn]│ │[LinkedIn]│    ││
│     │  └──────────┘ └──────────┘ └──────────┘ └──────────┘    ││
│     │                                                          ││
│     │       Brief company story/mission statement              ││
│     │                                                          ││
├─────┼──────────────────────────────────────────────────────────┤│
│     │                 CTA SECTION                             ││
│     └──●─────────────────────────────────────────────────────┐││
│        │                                                     │││
│        │  "Ready to Transform Your Business with AI?"        │││
│        │                                                     │││
│        │         ┌─────────────────────────────────┐         │││
│        │         │     [Book Discovery Call]       │         │││
│        │         │                                 │         │││
│        │         │  OR  [View More Demos]          │         │││
│        │         └─────────────────────────────────┘         │││
│        │                                                     │││
│        └─────────────────────────────────────────────────────┘││
├─────────────────────────────────────────────────────────────────┤
│ Footer: Legal | Contact | Social Links                         │
└─────────────────────────────────────────────────────────────────┘

Legend:
● = Connection points for animated lines
│ = Vertical animated connecting lines
─ = Horizontal animated connecting lines
```

### Mobile Layout Adaptations
```
┌─────────────────────┐
│ [≡] Novum    [Call] │ <- Collapsed header
├─────────────────────┤
│                     │
│       HERO          │
│                     │
│   Large Heading     │
│   (Stacked)         │
│                     │
│   Subheading        │
│                     │
│   [Primary CTA]     │
│   [Secondary CTA]   │
│                     │
│  [Mesh Background]  │
│                     │
├─────────────────────┤
│                     │
│      DEMOS          │
│                     │
│  ┌───────────────┐   │ <- Single column
│  │  Coming Soon  │   │    stack on mobile
│  │    Demo 1     │   │    (connecting lines
│  └───────────────┘   │     simplified to
│         │             │     vertical dots)
│         ●             │
│         │             │
│  ┌───────────────┐   │
│  │  Coming Soon  │   │
│  │    Demo 2     │   │
│  └───────────────┘   │
│         │             │
│         ●             │
│         │             │
│  ┌───────────────┐   │
│  │  Coming Soon  │   │
│  │    Demo 3     │   │
│  └───────────────┘   │
│                     │
├─────────────────────┤
│                     │
│     PROCESS         │
│                     │
│ [Simplified Flow]   │ <- Vertical stack
│                     │    instead of
│   Discovery         │    horizontal
│      ↓              │
│   Strategy          │
│      ↓              │
│   Development       │
│      ↓              │
│   Deployment        │
│                     │
├─────────────────────┤
│                     │
│    TEAM (2x2 Grid) │
│                     │
│ ┌────────┬────────┐ │ <- Compact square format
│ │ Bauti  │ Ale    │ │    for instant credibility
│ │ [CEO]  │ [CGO]  │ │    (Leadership team
│ │ [pic]  │ [pic]  │ │     positioned first)
│ ├────────┼────────┤ │
│ │ Sebas  │ Tomas  │ │
│ │ [CTO]  │[Lead]  │ │
│ │ [pic]  │ [pic]  │ │
│ └────────┴────────┘ │
│   [LinkedIn icons]  │ <- Non-clickable photos
│                     │    with LinkedIn links
│   Brief story text  │ <- Condensed company story
│                     │
├─────────────────────┤
│                     │
│       CTA           │
│                     │
│  [Book Call]        │
│                     │
│  [View Demos]       │
│                     │
└─────────────────────┘
```

### Section Transitions & Scroll Behavior
- **Animated connecting lines** that progress with scroll position (like CoLab/Stripe)
- **Alternating left/right content blocks** for visual rhythm and engagement
- **Scroll-triggered line drawing** using SVG path animation and Intersection Observer
- **Smooth easing** between connection points with cubic-bezier transitions
- **Sticky header** with 85% opacity and backdrop blur
- **Progressive content reveal** as user scrolls through the connecting line path

### Animated Line Implementation Notes
- **SVG path animation** using `stroke-dasharray` and `stroke-dashoffset`
- **Scroll progress calculation** to determine line completion percentage  
- **Connection points** marked with small animated dots that pulse when reached
- **Responsive behavior** - lines adapt to content positioning on different screen sizes
- **Performance optimized** using `will-change: transform` and GPU acceleration

### Key Layout Principles
1. **Generous white space** - Following Stripe's approach to clarity
2. **Visible grid structure** - Subtle grid lines like Stripe's design system
3. **Dark theme primary** - Linear-inspired professional aesthetic  
4. **Progressive enhancement** - Core content works without JavaScript
5. **Performance-first** - Critical path rendering optimized

## 8. Development Phases

### Phase 1: Static Foundation (Priority: Speed to Launch)
**Goal:** Get a professional, functional website live quickly for immediate credibility.

**Deliverables:**
- Responsive layout structure (Hero → Demos → Process → Team → CTA)
- Design system implementation (colors, typography, spacing)
- Static content with placeholder copy
- Basic navigation and routing
- "Coming Soon" demo placeholders
- Team section with LinkedIn icon links (non-clickable photos)
- Smooth scrolling between sections
- Performance optimization (90+ Lighthouse score)

**Technical Focus:**
- Next.js 15 + React 19 foundation
- Tailwind CSS + shadcn/ui components
- LCH color system implementation
- Mobile-responsive grid layouts
- SEO optimization

### Phase 2: Interactive & Animated (Priority: Wow Factor)
**Goal:** Add sophisticated animations and interactivity that positions Novum Labs as premium.

**Deliverables:**
- Scroll-triggered animated connecting lines
- Mesh gradient hero background with floating elements
- Interactive demo components (embedded within cards)
- Smooth section transitions and parallax effects
- Advanced animations (entrance, hover states, micro-interactions)
- Scheduler integration for CTA
- Analytics tracking setup

**Technical Focus:**
- Framer Motion implementation
- SVG path animation for connecting lines
- Canvas/WebGL for mesh hero background
- Intersection Observer for scroll triggers
- Third-party integrations (scheduler, analytics)
- Performance monitoring and optimization

### Content Management Strategy
- **Phase 1:** Hardcoded placeholder content for speed
- **Updates:** Use Claude Code for copy iterations and testing
- **Team photos:** Easy swap capability without code changes
- **Demo updates:** Modular structure for seamless Phase 2 integration

### Performance Targets
- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s

## 9. Motion & Animation Guidelines

### Animation Principles
1. **Duration:** 300–500ms with `cubic-bezier(0.65, 0, 0.35, 1)` easing
2. **Trigger:** Once per section using `viewport={{ once: true }}`
3. **Performance:** Max one complex animation per viewport fold
4. **Accessibility:** Respect `prefers-reduced-motion`

### Motion Library Priority
1. **Framer Motion** (preferred for React integration)
2. **GSAP/Lenis** (only if significantly lighter bundle)

## 8. Accessibility & Performance Standards

### Accessibility Requirements
- Dark/light color combinations must meet **WCAG AA contrast** standards
- Keyboard navigation support for all interactive elements
- Screen reader compatibility
- Reduced motion support

### Performance Optimization
- Lazy-load heavy canvases via `next/dynamic` with `ssr: false`
- Run `next build --profile` to monitor bundle impact of motion libraries
- Optimize images with Next.js Image component
- Code splitting for non-critical components

## 9. Success Metrics

### User Experience Goals
- Visitors grasp Novum Labs' value within **5 seconds**
- Live demo interaction within **10 seconds** of landing
- Clear path to booking a call with **< 3 clicks**
- Premium, AI-forward visual impression

### Technical Goals
- **< 3s** initial page load
- **> 90** Lighthouse performance score
- **Flexible architecture** for future pages, themes, and content
- **Zero breaking changes** when adding light theme

## 10. Team Information

### Team Members
- **Bautista Kalani Giesenow** - Chief Executive Officer (CEO) / Co-founder
- **Alessandro Donato Pascali** - Chief Growth Officer (CGO) / Co-founder  
- **Sebastian Kloster** - Chief Technology Officer (CTO)
- **Tomas Gerbi** - Lead Engineer

### Team Section Strategy
The team section serves as a credibility builder in the absence of case studies. It should:
- Display professional headshots in a clean grid layout
- Highlight relevant experience and expertise
- Include brief backgrounds that establish domain authority
- Position leadership team (co-founders) prominently while showcasing full technical capability
- Optionally include a company origin story paragraph
- Position after process demonstration and before the final CTA to reinforce capability with human credibility

## 11. Development Guidelines

### Code Organization
```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utilities and configurations
├── styles/             # Global styles and theme
└── types/              # TypeScript definitions
```

### Best Practices
- Use TypeScript for all components
- Implement proper error boundaries
- Follow Next.js 15 App Router conventions
- Maintain component composition over inheritance
- Write self-documenting code with clear prop interfaces

---

*This design document serves as the single source of truth for the Novum Labs website architecture and implementation guidelines.*