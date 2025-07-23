# Generate PRP for Novum Labs Website

YOU MUST DO IN-DEPTH RESEARCH, FOLLOW THE <RESEARCH PROCESS>

<RESEARCH PROCESS>

   - **Use Context7 for documentation** - Context7 MCP server allows searching official documentation pages for Next.js 15.4.1, React 19.1, Tailwind v4.1, Motion 12.23.6, and shadcn/ui
   - **Research design inspiration** - Analyze Linear and CoLab design systems for visual patterns and animation approaches
   - **Don't only research one page** - Search multiple documentation pages per technology to ensure comprehensive understanding
   - **Create exhaustive research notes** - When researching, create detailed notes about implementation patterns, best practices, and gotchas
   - **Phase-specific research** - Each phase requires different documentation emphasis:
     - Phase 1: Focus on Next.js App Router structure, Tailwind setup, shadcn/ui components
     - Phase 2: Focus on Tailwind v4.1 design system, LCH colors, responsive patterns
     - Phase 3: Focus on Motion/Framer Motion animations, performance optimization
   - **Store research properly** - Put each technology's research in `/research/[technology]/` as separate .md files
   - **Reference DESIGN.md constantly** - The design spec is sacred truth for visual requirements

</RESEARCH PROCESS>

## Feature file: $ARGUMENTS

Generate comprehensive PRPs for the Novum Labs website implementation following the 3-phase approach defined in DESIGN.md. Read the feature file first to understand what needs to be created, then generate phase-specific PRPs.

The AI agent only gets the context you provide in the PRP. Assume the AI agent has access to the codebase, research directory, and examples folder. The Agent has Context7 MCP for documentation access.

## Phase-Specific PRP Generation

### Phase 1: Static Foundation (Speed to Launch)
**Goal:** Professional, functional website live quickly for immediate credibility

**Focus Areas:**
- Next.js 15.4.1 App Router setup with TypeScript
- Tailwind CSS v4.1 configuration with LCH color system
- shadcn/ui component integration
- Responsive layout structure (Hero → Demos → Process → Team → CTA)
- Static content with placeholder copy
- Basic navigation and routing
- Performance optimization (90+ Lighthouse score)

### Phase 2: Interactive & Animated (Wow Factor)
**Goal:** Add sophisticated animations and interactivity positioning Novum Labs as premium

**Focus Areas:**
- Motion 12.23.6 (Framer Motion) integration
- Scroll-triggered animated connecting lines
- Mesh gradient hero background with floating elements
- Interactive demo components
- Smooth section transitions and parallax effects
- Advanced animations (entrance, hover states, micro-interactions)
- Scheduler integration for CTA



## Research Process

### 1. **Technology Stack Analysis**
   - Next.js 15.4.1 App Router patterns
   - React 19.1 new features and patterns
   - Tailwind CSS v4.1 with automatic content detection
   - Motion 12.23.6 animation patterns
   - shadcn/ui component library usage
   - **LCH color space implementation (CRITICAL: All colors must use LCH format as defined in DESIGN.md)**

### 2. **Design System Research**
   - Linear.app dark theme analysis
   - CoLab animation patterns
   - Color token implementation
   - Typography and spacing systems
   - Component interaction patterns

### 3. **Performance Requirements**
   - Core Web Vitals targets from DESIGN.md Section 8
   - Bundle size optimization strategies
   - Image optimization approaches
   - Code splitting patterns

### 4. **Codebase Pattern Analysis**
   - Review examples/ directory for reusable patterns
   - Identify component structure conventions
   - Check validation/ directory for phase-specific criteria
   - Study existing design tokens and animation configs

### 5. **External Research via Context7**
   - Search Next.js 15 docs for App Router best practices
   - Research React 19 Server Components and new features
   - Study Tailwind v4.1 performance improvements
   - Learn Motion 12.23.6 hybrid animation engine
   - Review shadcn/ui + Tailwind v4 integration patterns

### 6. **User Clarification** (if needed)
   - Specific animation details for connecting lines?
   - Team member photos available?
   - Scheduler service preference?
   - Analytics platform choice?

## PRP Generation Structure

For each phase, generate a separate PRP file:
- `PRPs/phase-1-static-foundation.md`
- `PRPs/phase-2-interactive-animated.md`

Using the appropriate phase template from PRPs/templates/:

### Critical Context to Include
- **Documentation**: Context7 search patterns and key findings
- **Design Requirements**: Specific sections from DESIGN.md
- **Code Examples**: Patterns from examples/ directory
- **Performance Budgets**: From validation/ directory
- **Phase Dependencies**: What must be complete from previous phases
- **Color System**: ALL colors must use LCH format: `lch(lightness% chroma hue / alpha)`

### Implementation Blueprint
- Component hierarchy with clear responsibilities
- File structure following Next.js 15 conventions
- Data flow and state management approach
- Animation timing and trigger strategy
- Performance optimization techniques

### Validation Gates (Phase-Specific)

#### Phase 1 Validation
```bash
# Structure & Dependencies
npm run build && npm run start

# Performance
npm run lighthouse -- --performance=90

# Type Safety
npm run type-check

# Accessibility
npm run test:a11y
```

#### Phase 2 Validation
```bash
# Animation Performance
npm run analyze:animations

# Bundle Size
npm run analyze:bundle

# Interactive Elements
npm run test:e2e
```



*** CRITICAL: PHASE-AWARE IMPLEMENTATION ***

Each phase builds on the previous. Ensure:
1. **Phase 1** creates a solid, performant foundation
2. **Phase 2** enhances without breaking Phase 1

*** ULTRATHINK ABOUT THE PRP AND PLAN YOUR APPROACH FOR EACH PHASE ***

## Output

Generate 3 separate PRP files:
1. `PRPs/phase-1-static-foundation.md` - Static website with all content
2. `PRPs/phase-2-interactive-animated.md` - Animations and interactivity
3. `PRPs/phase-3-polish-optimization.md` - Final polish and deployment

## Quality Checklist
- [ ] All design requirements from DESIGN.md included
- [ ] Phase-specific validation gates are executable
- [ ] References existing patterns from examples/
- [ ] Clear implementation path with no breaking changes between phases
- [ ] Performance budgets maintained throughout
- [ ] Each phase provides immediate value

Score each PRP on a scale of 1-10 (confidence level for successful phase implementation)

Remember: The goal is incremental value delivery - Phase 1 must be shippable, Phase 2 adds delight, Phase 3 ensures excellence.