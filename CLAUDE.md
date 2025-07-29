# CLAUDE.md — Novum Labs Website

## 🎯 Project North Star

Build a cutting-edge AI consultancy website that demonstrates technical excellence through sophisticated minimalism. Every decision reinforces Novum Labs as a premium AI partner capable of transforming businesses through elegant, performant solutions.

## 🏗️ Architecture Principles

### Context7 MCP is Truth
- **All documentation through Context7** — Never web scrape for Next.js, React, Tailwind, or Motion docs
- **Use `context7` for API specs** — Request documentation when implementing features requiring external APIs
- **Trust Context7 versions** — Documentation provided is version-accurate for our tech stack
- **Design research only** — Manual research limited to Linear.app and CoLab patterns in `/research/design-inspiration/`

### Design System First
- **Tokens before values** — Never hardcode colors, spacing, or typography outside the system
- **Component hierarchy** — Primary → Secondary → Tertiary → Supporting → Meta
- **Motion with purpose** — Every animation must guide attention or provide feedback
- **Performance non-negotiable** — 60fps minimum, prefer transform/opacity animations

### Layer-Driven Development
- **Check LAYERS.md first** — Understand which layer needs modification
- **Concurrent development** — Foundation, Design, Experience, and Quality layers work in parallel
- **Smart validation** — Tests run only for affected layers, not entire codebase
- **Quality gates enforced** — Standards remain high, workflow stays flexible

### Agent-First Workflow
- **Specialists own decisions** — Each agent has final say in their domain
- **Natural collaboration** — Agents pass context seamlessly
- **Continuous validation** — QA monitors all changes in real-time
- **Trust expertise** — Don't override specialist recommendations

### TypeScript Excellence
- **TypeScript only** — JavaScript limited to unavoidable configs
- **Strict mode always** — `"strict": true` without exceptions
- **Type safety paramount** — `any` requires written justification
- **Interfaces preferred** — Better error messages and consistency

## 🛠️ Technical Constants

### Core Stack (Immutable)
```typescript
const TECH_STACK = {
  framework: "next@15.4.1",        // App Router architecture
  ui: "react@19.1",                // Latest stable
  styles: "tailwindcss@4.1",       // CSS-first with LCH colors
  components: "shadcn/ui",         // Radix-based, accessible
  animation: "motion@12.23.6",     // GPU-accelerated animations
  language: "typescript@5.7",      // Strict mode enforced
  deployment: "vercel",            // Edge-optimized
  fonts: ["Inter Variable", "Satoshi Variable", "JetBrains Mono Variable"]
} as const;
```

### Project Structure (Fixed)
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page sections
│   └── globals.css        # Tailwind imports
├── components/            
│   ├── ui/                # shadcn/ui primitives
│   ├── sections/          # Page section components
│   ├── layout/            # Header, Footer, etc.
│   └── interactive/       # Demo components
├── lib/                   
│   ├── utils.ts           # Helper functions
│   ├── constants.ts       # App constants
│   └── animations.ts      # Motion variants
├── styles/               
│   └── tokens.css         # Design tokens
└── types/                 # TypeScript definitions
```

### Performance Budgets (Non-Negotiable)
```typescript
const PERFORMANCE_BUDGETS = {
  lighthouse: {
    performance: 95,      // Minimum acceptable
    accessibility: 95,    // WCAG AA standard
    bestPractices: 95,   
    seo: 95,
    pwa: 90              // Future-ready
  },
  metrics: {
    fcp: 1500,           // First Contentful Paint (ms)
    lcp: 2500,           // Largest Contentful Paint (ms)
    cls: 0.1,            // Cumulative Layout Shift
    fid: 100,            // First Input Delay (ms)
    ttfb: 600,           // Time to First Byte (ms)
    tti: 3000            // Time to Interactive (ms)
  },
  bundle: {
    js: 150,             // KB gzipped
    css: 50,             // KB gzipped
    images: 500,         // KB per image
    totalPageWeight: 1000 // KB total
  }
} as const;
```

## 🎨 Design Implementation Standards

### Typography Implementation
```typescript
// Always use design tokens
const headingStyles = {
  h1: "font-display text-4xl font-bold tracking-tight",
  h2: "font-display text-3xl font-semibold tracking-tight",
  h3: "font-sans text-2xl font-semibold",
  body: "font-sans text-base leading-relaxed",
  code: "font-mono text-sm"
};

// Never hardcode font sizes
❌ className="text-[32px]"
✅ className="text-2xl"
```

### Color Usage
```typescript
// Use semantic color tokens
const colorUsage = {
  // Surfaces
  background: "bg-background",           // Deep black
  card: "bg-surface-2",                 // Elevated surface
  hover: "hover:bg-surface-3",          // Interactive state
  
  // Text
  primary: "text-text-primary",          // High emphasis
  secondary: "text-text-secondary",      // Medium emphasis
  muted: "text-text-tertiary",          // Low emphasis
  
  // Accents
  cta: "bg-gradient-primary",           // Primary actions
  highlight: "text-accent-cyan",        // Emphasis
  success: "text-success"               // Positive feedback
};
```

### Spacing Consistency
```typescript
// Use spacing scale religiously
const spacingPatterns = {
  sectionPadding: "py-20",              // 80px vertical
  componentPadding: "p-6",              // 24px all sides
  elementGap: "gap-4",                  // 16px between elements
  tightGroup: "space-y-2",              // 8px vertical spacing
  
  // Responsive adjustments
  mobilePadding: "p-4 md:p-6",          // Scale with viewport
  heroSpacing: "pt-24 pb-20"            // Asymmetric for visual flow
};
```

## 📁 Development Standards

### Component Patterns
```typescript
// 1. Always use function components with TypeScript
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export function Component({ 
  title, 
  description, 
  className 
}: ComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {/* Implementation */}
    </div>
  );
}

// 2. Props interface above component
// 3. Destructure props in parameters
// 4. Use cn() for className merging
// 5. Export named functions
```

### Import Organization
```typescript
// 1. External packages
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// 2. Internal packages
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// 3. Types
import type { ComponentProps } from '@/types';

// 4. Styles (if needed)
import styles from './component.module.css';
```

### State Management
```typescript
// Prefer local state for component-specific data
const [isOpen, setIsOpen] = useState(false);

// Use context for cross-component state
const theme = useTheme();

// Consider URLs for shareable state
const searchParams = useSearchParams();

// Never store derived state
❌ const [fullName, setFullName] = useState(`${first} ${last}`);
✅ const fullName = `${first} ${last}`;
```

## ✅ Quality Standards

### Code Quality Checklist
- [ ] TypeScript strict mode passing
- [ ] No `any` types without justification
- [ ] All props properly typed
- [ ] Components under 300 lines
- [ ] Functions under 50 lines
- [ ] Meaningful variable names
- [ ] No magic numbers (use constants)
- [ ] Proper error boundaries

### Accessibility Checklist
- [ ] Semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Reduced motion respected

### Performance Checklist
- [ ] Images optimized and lazy loaded
- [ ] Fonts subset and preloaded
- [ ] Critical CSS inlined
- [ ] JavaScript code-split
- [ ] No layout shifts
- [ ] Animations GPU-accelerated
- [ ] Bundle size within budget
- [ ] Lighthouse scores passing

## 🚫 Anti-Patterns to Avoid

### Never Do This
```typescript
// ❌ Hardcoded values
<div style={{ color: '#3b82f6', padding: '24px' }}>

// ❌ Any without justification
const data: any = fetchData();

// ❌ Inline functions in JSX
<button onClick={() => doSomething()}>

// ❌ Nested ternaries
const style = isActive ? isPrimary ? 'primary' : 'secondary' : 'disabled';

// ❌ Direct DOM manipulation
document.getElementById('thing').style.display = 'none';

// ❌ Ignoring TypeScript errors
// @ts-ignore

// ❌ Global styles in components
:global(.my-class) { }

// ❌ Promises without error handling
fetch('/api').then(r => r.json());
```

### Always Do This
```typescript
// ✅ Design tokens
<div className="text-primary p-6">

// ✅ Proper typing
const data: UserData = await fetchData();

// ✅ Named functions
const handleClick = () => doSomething();
<button onClick={handleClick}>

// ✅ Early returns
if (!isActive) return 'disabled';
return isPrimary ? 'primary' : 'secondary';

// ✅ React state
const [isVisible, setIsVisible] = useState(true);

// ✅ Suppress with reason
// @ts-expect-error - Third-party library types are incorrect
externalLib.method();

// ✅ CSS Modules or Tailwind
className={styles.myClass} or className="my-tailwind-class"

// ✅ Error boundaries
try {
  const res = await fetch('/api');
  return await res.json();
} catch (error) {
  console.error('Failed to fetch:', error);
  return fallbackData;
}
```

## 🤖 Agent Collaboration

### Agent Domains
```typescript
const AGENT_EXPERTISE = {
  "ui-designer": {
    owns: ["visual design", "design tokens", "user experience"],
    reviews: ["accessibility", "responsive design"],
    tools: ["Figma", "design systems", "color theory"]
  },
  
  "frontend-dev": {
    owns: ["implementation", "state management", "API integration"],
    reviews: ["performance", "code quality"],
    tools: ["React", "TypeScript", "build tools"]
  },
  
  "qa-engineer": {
    owns: ["testing", "validation", "quality assurance"],
    reviews: ["all changes", "user flows"],
    tools: ["Jest", "Playwright", "Lighthouse"]
  },
  
  "tech-lead": {
    owns: ["architecture", "technical decisions", "standards"],
    reviews: ["complex implementations", "new patterns"],
    tools: ["system design", "best practices"]
  },
  
  "performance-engineer": {
    owns: ["optimization", "metrics", "monitoring"],
    reviews: ["bundle size", "runtime performance"],
    tools: ["webpack analyzer", "Chrome DevTools"]
  }
} as const;
```

### Handoff Protocol
```typescript
interface AgentHandoff {
  from: Agent;
  to: Agent;
  context: {
    summary: string;           // What was done
    decisions: Decision[];     // Key choices made
    blockers: string[];       // Issues for next agent
    validation: TestResult;   // Current test status
  };
  artifacts: {
    files: string[];          // Modified files
    pr: string;              // Pull request link
    preview: string;         // Deployment preview
  };
}
```

## 🎯 Success Criteria

### Technical Excellence
- **Performance**: 95+ Lighthouse scores maintained
- **Type Safety**: 100% TypeScript coverage, zero `any`
- **Bundle Size**: Under 150KB JS gzipped
- **Accessibility**: WCAG AA compliant
- **Browser Support**: Chrome, Safari, Firefox, Edge latest 2 versions

### Design Sophistication
- **Visual Hierarchy**: Clear 5-level system implemented
- **Motion Design**: All animations serve user goals
- **Consistency**: 100% design token usage
- **Responsive**: Flawless experience 320px to 4K
- **Dark Theme**: Optimized contrast and readability

### Developer Experience
- **Onboarding**: New devs productive in < 1 day
- **Documentation**: Self-documenting code + guides
- **Tooling**: Fast builds, instant feedback
- **Patterns**: Consistent, predictable, reusable
- **Collaboration**: Clear ownership, smooth handoffs

### Business Impact
- **Conversion**: CTAs prominently displayed
- **Trust**: Premium feel inspires confidence
- **Performance**: Fast loads keep users engaged
- **SEO**: Optimized for AI consultancy keywords
- **Maintenance**: Easy updates without refactoring

---

*This document defines the technical principles, standards, and workflows that ensure Novum Labs' website represents the pinnacle of modern web development. For design specifications, see DESIGN.md. For project requirements, see PRD.md. For development workflow, see README.md.*