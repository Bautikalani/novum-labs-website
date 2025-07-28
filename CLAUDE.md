# CLAUDE.md — Novum Labs Website

## 🎯 Project North Star
Build a cutting-edge AI consultancy website that showcases technical excellence through sophisticated minimalism. Every decision should reinforce Novum Labs as a premium AI partner capable of transforming businesses.

## 🏗️ Architecture Principles

### Context7 MCP is Truth
- **All documentation comes through Context7 MCP** — Never web scrape for Next.js, React, Tailwind, or Motion documentation
- **Use `context7` for library-specific information** — Request documentation when implementing features that require external APIs
- **Trust Context7 versions** — The documentation provided is version-accurate for our tech stack
- **Manual research only for design inspiration** — Linear.app and CoLab patterns are stored in `/research/design-inspiration/`

### Layer-Driven Development
- **Always check LAYERS.md** for development approach — Work on any layer based on need
- **Layers are concurrent** — Foundation, Design, Experience, and Quality layers can be modified simultaneously
- **Smart validation only** — Tests run only for affected layers, not everything
- **Quality gates remain** — Standards don't change, just the workflow flexibility

### Agent-First Workflow
- **Agents are specialists** — Each agent has deep expertise in their domain
- **Natural handoffs** — Agents pass context and collaborate automatically
- **Continuous validation** — QA Engineer monitors all changes in real-time
- **Trust agent expertise** — Let specialists make decisions in their domains

### TypeScript First
- **Use TypeScript exclusively** — No JavaScript files except for configuration
- **Strict mode always** — `"strict": true` in tsconfig.json
- **Type safety over convenience** — Never use `any` unless absolutely necessary with justification
- **Interfaces over types** — For consistency and better error messages

## 🛠️ Technical Constants

### Core Stack (Immutable)
```typescript
const TECH_STACK = {
  framework: "next@15.4.1",      // App Router only
  ui: "react@19.1",              // Latest stable
  styles: "tailwindcss@4.1",     // With LCH color space
  components: "shadcn/ui",       // Radix-based
  animation: "motion@12.23.6",   // Formerly Framer Motion
  language: "typescript@5.7",    // Strict mode
  deployment: "vercel"           // Optimized for Next.js
} as const;
```

### Project Structure (Fixed)
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utilities and helpers
├── styles/             # Global styles
└── types/              # TypeScript definitions
```

### Performance Budgets (Non-Negotiable)
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s
- **Bundle Size**: < 150KB JS (gzipped)

## 🎨 Design Philosophy

### Linear-Inspired Minimalism
- **Every element has purpose** — No decorative additions without functional value
- **Mathematical relationships** — Spacing, typography follow systematic scales
- **LCH color space** — Perceptually uniform color generation
- **Reduction over addition** — Start minimal, add only what's essential

### CoLab-Inspired Functionality
- **Animation serves user goals** — Never animate for animation's sake
- **Performance over complexity** — 60fps is mandatory for all animations
- **Progressive disclosure** — Reveal complexity only when needed
- **Engineering-first interactions** — Practical over playful

### Dark Theme Foundation
- **Dark is primary** — Build dark-first, not dark-adapted
- **Future-ready architecture** — Theme system supports light mode addition
- **Contrast accessibility** — WCAG AAA where possible, AA minimum
- **Consistent token usage** — Never hardcode colors outside design system

## 📁 File Organization Rules

### Component Structure
```typescript
// components/sections/hero-section.tsx
export function HeroSection() {
  // Component implementation
}

// Always prefer named exports for components
// Always use kebab-case for filenames
// Always colocate related files
```

### Import Hierarchy
1. External dependencies
2. Internal aliases (@/...)
3. Relative imports
4. Type imports

### Naming Conventions
- **Files**: `kebab-case.tsx`
- **Components**: `PascalCase`
- **Utilities**: `camelCase`
- **Constants**: `SCREAMING_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase`

## ✅ Quality Standards

### Code Quality
- **ESLint**: Zero warnings policy
- **Prettier**: Automatic formatting
- **TypeScript**: No implicit any
- **Imports**: Sorted and grouped

### Accessibility
- **Semantic HTML**: Proper element usage
- **ARIA**: Only when semantic HTML insufficient
- **Keyboard**: Full keyboard navigation
- **Screen readers**: Tested with NVDA/JAWS

### Testing Philosophy
- **Type safety is first test** — TypeScript catches many bugs
- **Integration over unit** — Test user flows, not implementation
- **Visual regression** — Prevent style breaks between layers
- **Performance monitoring** — Continuous Core Web Vitals tracking

## 🚫 Anti-Patterns to Avoid

### Never Do This
- ❌ Skip validation between changes
- ❌ Use `any` without comment justification
- ❌ Work outside the layer system
- ❌ Web scrape when Context7 can provide
- ❌ Hardcode values that should be tokens
- ❌ Create files over 300 lines
- ❌ Mix concerns in single component
- ❌ Animate without performance testing

### Always Do This
- ✅ Let agents handle their specialties
- ✅ Run validation continuously
- ✅ Use design tokens from examples/
- ✅ Request Context7 documentation for APIs
- ✅ Test on real mobile devices
- ✅ Consider reduced motion preferences
- ✅ Document non-obvious decisions
- ✅ Trust the workflow process

## 🤖 Agent Collaboration Principles

### Agent Expertise Domains
```typescript
const AGENT_DOMAINS = {
  "ui-designer": ["visual design", "design systems", "user experience"],
  "frontend-dev": ["implementation", "logic", "state management"],
  "qa-engineer": ["testing", "validation", "quality assurance"],
  "tech-lead": ["architecture", "decisions", "best practices"],
  "project-manager": ["planning", "coordination", "task breakdown"],
  "performance-engineer": ["optimization", "metrics", "speed"]
} as const;
```

### Agent Handoff Protocol
1. **Clear context passing** — Each agent provides summary for next
2. **Respect specializations** — Don't override expert decisions
3. **Validation between handoffs** — QA checks all transitions
4. **Document decisions** — Important choices recorded

### Continuous Validation Rules
- **After every save** — Relevant validation runs automatically
- **Blocking on errors** — Can't proceed with failing validation
- **Smart detection** — Only affected layers tested
- **Immediate feedback** — Results within 3 seconds

## 🎯 Success Definition

The Novum Labs website succeeds when:
1. **Technical Excellence**: 95+ Lighthouse scores prove our capability
2. **Design Sophistication**: Linear-inspired minimalism creates premium perception
3. **Functional Delight**: CoLab-inspired interactions engage without overwhelming
4. **Future Readiness**: Architecture supports growth without refactoring
5. **Team Pride**: The website represents our best work

## 📝 Implementation Notes

### Working with Layers
- **Foundation Layer**: Core functionality and structure
- **Design Layer**: Visual design and styling
- **Experience Layer**: Animations and interactions
- **Quality Layer**: Testing and standards

### Agent-Driven Development
- Start with `/plan` for any new work
- Trust agent expertise in their domains
- Use `/status` to track progress
- Commit often with `/commit`
- Deploy confidently with `/deploy`

### Validation as Safety Net
- Validation runs automatically
- Errors block progress (good thing!)
- Fix immediately when issues found
- Quality maintained throughout

---

*This document defines the unchanging principles that guide every decision in the Novum Labs website project. For layer specifications, see LAYERS.md. For design specifications, see DESIGN.md. For workflow details, see README.md.*