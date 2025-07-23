# PRP: Phase 1 Semantic Wireframe - Novum Labs Website

**Generated**: 2025-01-23  
**Phase**: 1 - Semantic Wireframe  
**Confidence Score**: 9/10

## 📋 Executive Summary

Implement the complete semantic HTML structure for the Novum Labs AI consultancy website, focusing on accessibility, responsiveness, and content hierarchy without any custom styling. This phase establishes the foundation for all visual and interactive enhancements in subsequent phases.

The website features a single-page design with five main sections: Hero, Demos, Process, Team, and CTA, connected by a static journey line that will be animated in Phase 3.

## 🎯 Goal

Create a fully functional, accessible HTML structure that matches the ASCII wireframe in DESIGN.md exactly, implementing all content from INITIAL.md using semantic HTML5 elements.

### Success Criteria
- [ ] All Phase 1 validation checks pass (`npm run validate:phase1`)
- [ ] Perfect accessibility score (0 violations)
- [ ] Mobile responsive without custom CSS
- [ ] All content from INITIAL.md properly structured
- [ ] Semantic HTML validation passes
- [ ] Static journey line element present and visible

## 📚 Context & Documentation

### Core Project Files (Required Reading)
- **CLAUDE.md** - TypeScript strict mode, no `any` usage, performance budgets < 150KB JS
- **PHASES.md** - Current phase: 1 (Semantic Wireframe) - Only semantic HTML allowed
- **DESIGN.md** - ASCII wireframe specifications (sections 4-5), seamless dark canvas design
- **INITIAL.md** - All content requirements, team data, demo placeholders
- **validation/novum-phase1-checks.md** - 8 validation categories with automated tests

### Technical Documentation (Access via Context7)
- **Next.js 15.4.1**: App Router structure, Server Components, routing patterns
- **React 19.1**: Server Component patterns, new hook usage (useActionState, use)
- **TypeScript 5.7**: Strict mode requirements, interface patterns
- **HTML5 Semantic Elements**: proper landmark usage, ARIA best practices

### Design Patterns
- `/examples/` - Component structure patterns (ignore any styling)
- `/research/nextjs/` - Next.js 15.4.1 App Router documentation
- `/research/react/` - React 19.1 patterns and Server Components

## 🏗️ Implementation Blueprint

### Prerequisites
```bash
# Verify Phase 1 starting point
npm run dev  # Should start without errors
git status   # Clean working directory

# Install Phase 1 dependencies (minimal)
npm install next@15.4.1 react@19.1 typescript@5.7
npm install @types/react @types/node
```

### Project Structure for Phase 1
```
src/
├── app/                    # Next.js 15.4.1 App Router
│   ├── layout.tsx         # Root layout (minimal, dark theme vars)
│   └── page.tsx           # Main page component
├── components/
│   ├── sections/          # Major page sections
│   │   ├── hero-section.tsx
│   │   ├── demos-section.tsx
│   │   ├── process-section.tsx
│   │   ├── team-section.tsx
│   │   └── cta-section.tsx
│   ├── layout/            # Layout components
│   │   ├── header.tsx
│   │   └── journey-line.tsx
│   └── ui/                # Basic elements (prepare for shadcn)
│       └── index.ts
├── lib/
│   └── types.ts           # TypeScript interfaces
└── styles/
    └── globals.css        # Minimal reset only
```

### Implementation Tasks

#### Task 1: Set Up Base Document Structure
**File**: `src/app/layout.tsx`
**Purpose**: Create minimal root layout with proper HTML structure

```typescript
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Novum Labs - Custom AI Solutions for Business Transformation',
  description: 'Transform your business with custom AI solutions. Novum Labs partners with companies to implement AI that drives real results. Book a discovery call today.',
  keywords: 'AI consulting, custom AI solutions, business transformation, AI implementation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
```

**Validation**: 
- [ ] HTML validates (W3C)
- [ ] Has skip navigation link
- [ ] Includes all required meta tags from INITIAL.md

#### Task 2: Create Site Header
**File**: `src/components/layout/header.tsx`
**Purpose**: Semantic header with navigation structure

```typescript
export function Header() {
  return (
    <header role="banner" className="site-header">
      <div className="header-container">
        <div className="logo">
          <h1>Novum Labs</h1>
        </div>
        <nav role="navigation" aria-label="Main navigation">
          <a href="#book-call" className="cta-button">
            Book Call
          </a>
        </nav>
      </div>
    </header>
  )
}
```

**Validation**:
- [ ] Proper landmark roles
- [ ] Keyboard accessible
- [ ] Mobile structure present

#### Task 3: Implement Main Content Sections
**Purpose**: Build each major section matching DESIGN.md wireframe

**Hero Section** (`src/components/sections/hero-section.tsx`):
```typescript
export function HeroSection() {
  return (
    <section aria-label="Hero" className="hero-section">
      <div className="hero-content">
        <h1>Build AI solutions that transform your business</h1>
        <p className="hero-subtitle">
          Novum Labs partners with forward-thinking companies to implement 
          custom AI solutions that drive real results
        </p>
        
        <div className="hero-actions">
          <a href="#demos" className="primary-cta">See Live Demos</a>
          <a href="#book-call" className="secondary-cta">Book Discovery Call</a>
        </div>
      </div>
      
      {/* Journey line starts here */}
      <div className="journey-line-start" aria-hidden="true"></div>
    </section>
  )
}
```

**Demos Section** (`src/components/sections/demos-section.tsx`):
```typescript
interface DemoData {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  position: 'left' | 'right';
}

const demos: DemoData[] = [
  {
    id: 1,
    title: "Invoice to Excel Converter",
    description: "Transform invoices into structured data",
    instructions: ["Upload invoice PDF", "AI extracts data", "Download Excel file"],
    position: 'left'
  },
  {
    id: 2, 
    title: "Voice Navigation Assistant",
    description: "Navigate interfaces with voice commands",
    instructions: ["Speak your request", "AI processes command", "Action executed"],
    position: 'right'
  },
  {
    id: 3,
    title: "TBD AI Tool",
    description: "More AI solutions coming soon",
    instructions: ["Feature in development", "Stay tuned", "Contact us for updates"],
    position: 'left'
  }
];

export function DemosSection() {
  return (
    <section aria-label="Live Demos" className="demos-section">
      <h2>See Our AI Solutions in Action</h2>
      
      {demos.map((demo) => (
        <article key={demo.id} className={`demo-item demo-${demo.position}`}>
          <div className="demo-preview">
            <div className="demo-placeholder">
              <p>Coming Soon</p>
              <span className="demo-status">Demo {demo.id}</span>
            </div>
          </div>
          
          <div className="demo-explanation">
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            
            <div className="demo-instructions">
              <h4>How to use this demo:</h4>
              <ul>
                {demo.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
```

**Process Section** (`src/components/sections/process-section.tsx`):
```typescript
const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understand your unique challenges and opportunities"
  },
  {
    id: 2, 
    title: "Strategy",
    description: "Design AI solutions tailored to your business"
  },
  {
    id: 3,
    title: "Development", 
    description: "Build and test with industry best practices"
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launch, monitor, and continuously improve"
  }
];

export function ProcessSection() {
  return (
    <section aria-label="Our Process" className="process-section">
      <h2>How We Transform Your Business</h2>
      
      <div className="process-flow">
        {processSteps.map((step, index) => (
          <div key={step.id} className="process-step">
            <div className="step-number" aria-hidden="true">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            
            {index < processSteps.length - 1 && (
              <div className="step-connector" aria-hidden="true"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Team Section** (`src/components/sections/team-section.tsx`):
```typescript
const teamMembers = [
  {
    id: 1,
    name: "Bautista Kalani Giesenow",
    role: "Chief Executive Officer", 
    linkedin: "[placeholder-url]"
  },
  {
    id: 2,
    name: "Alessandro Donato Pascali",
    role: "Chief Growth Officer",
    linkedin: "[placeholder-url]"
  },
  {
    id: 3,
    name: "Sebastian Kloster", 
    role: "Chief Technology Officer",
    linkedin: "[placeholder-url]"
  },
  {
    id: 4,
    name: "Tomas Gerbi",
    role: "Lead Engineer",
    linkedin: "[placeholder-url]"
  }
];

export function TeamSection() {
  return (
    <section aria-label="Our Team" className="team-section">
      <h2>Meet the Team</h2>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-member">
            <div className="member-photo">
              <img 
                src={`/images/team-placeholder-${member.id}.jpg`}
                alt={`Photo of ${member.name}`}
                width="400"
                height="400"
              />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <a href={member.linkedin} className="linkedin-link">
                LinkedIn Profile
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
```

**CTA Section** (`src/components/sections/cta-section.tsx`):
```typescript
export function CTASection() {
  return (
    <section aria-label="Contact Us" className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Let's discuss how AI can solve your specific challenges</p>
        
        <a href="#book-call" id="book-call" className="primary-cta">
          Book Discovery Call
        </a>
      </div>
      
      {/* Journey line ends here */}
      <div className="journey-line-end" aria-hidden="true"></div>
    </section>
  )
}
```

#### Task 4: Journey Line Component
**File**: `src/components/layout/journey-line.tsx`
**Purpose**: Static line element that connects all sections

```typescript
export function JourneyLine() {
  return (
    <div className="journey-line" aria-hidden="true" role="presentation">
      <svg 
        className="journey-line-svg"
        viewBox="0 0 100 2000" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M20 50 Q20 200 80 350 Q20 500 80 650 Q20 800 50 950 L50 1200 L50 1450 L50 1700 L50 1950"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="journey-path"
        />
      </svg>
    </div>
  )
}
```

#### Task 5: Main Page Assembly
**File**: `src/app/page.tsx`
**Purpose**: Combine all sections into single page

```typescript
import { Header } from '@/components/layout/header'
import { JourneyLine } from '@/components/layout/journey-line'
import { HeroSection } from '@/components/sections/hero-section'
import { DemosSection } from '@/components/sections/demos-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section' 
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="main-content">
        <JourneyLine />
        
        <HeroSection />
        <DemosSection />
        <ProcessSection />
        <TeamSection />
        <CTASection />
      </main>
    </>
  )
}
```

#### Task 6: Minimal Styling (Layout Only)
**File**: `src/styles/globals.css`
**Purpose**: Essential reset and basic layout

```css
/* Phase 1: Minimal reset and layout only */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

body {
  background: #000;
  color: #fff;
}

/* Skip link accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}

/* Basic layout structure only */
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  padding: 1rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.main-content {
  padding-top: 80px;
  position: relative;
}

/* Journey line basic positioning */
.journey-line {
  position: absolute;
  left: 60px;
  top: 0;
  width: 100px;
  height: 100%;
  opacity: 0.3;
  z-index: 1;
}

.journey-line-svg {
  width: 100%;
  height: 100%;
}

/* Section spacing */
section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Demo layout (zigzag pattern) */
.demo-item {
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  align-items: center;
}

.demo-right {
  flex-direction: row-reverse;
}

.demo-preview, 
.demo-explanation {
  flex: 1;
}

.demo-placeholder {
  aspect-ratio: 16 / 9;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #666;
}

/* Process flow */
.process-flow {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.process-step {
  flex: 1;
  text-align: center;
  position: relative;
}

.step-connector {
  position: absolute;
  right: -1rem;
  top: 50%;
  width: 2rem;
  height: 2px;
  background: #666;
}

/* Team grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.member-photo img {
  width: 100%;
  height: auto;
  background: #333;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .journey-line {
    left: 20px;
    width: 50px;
  }
  
  .demo-item,
  .demo-right {
    flex-direction: column;
  }
  
  .process-flow {
    flex-direction: column;
  }
  
  .step-connector {
    display: none;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}

/* Focus styles for accessibility */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Links and buttons */
a {
  color: inherit;
  text-decoration: underline;
}

button, .cta-button, .primary-cta, .secondary-cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid #666;
  background: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
```

### Phase 1 Specific Constraints

**Allowed in Phase 1**:
- Semantic HTML5 elements
- Basic flexbox/grid for layout ONLY
- Minimal inline styles for structure (display, position)
- System default fonts and colors
- Form structure (no styling)
- Accessibility attributes (ARIA, roles)
- TypeScript interfaces and components

**Not Allowed (Save for Later Phases)**:
- Tailwind CSS utility classes
- Custom colors beyond basic black/white
- CSS transitions or animations
- JavaScript functionality beyond Next.js routing
- shadcn/ui components (structure only)
- Custom fonts or typography systems
- Background images or decorative elements
- Motion/Framer Motion library

## ✅ Validation Loop

### Level 1: Continuous HTML Validation
```bash
# HTML validation
npx html-validate "src/**/*.tsx" --config .htmlvalidate.json

# TypeScript strict mode
npx tsc --noEmit

# Expected: 0 errors, 0 warnings
```

### Level 2: Accessibility Testing  
```bash
# Run accessibility tests
npm run test:a11y

# Check specific criteria:
# - 0 WCAG violations
# - All images have alt text
# - Proper heading hierarchy (only one h1)
# - Keyboard navigation works
```

### Level 3: Mobile Responsiveness
```bash
# Test at multiple viewports
npm run test:responsive

# Key viewports (DESIGN.md Section 9):
# - 320px (minimum)
# - 640px (mobile breakpoint)
# - 768px (tablet)
# - 1024px (desktop)

# Expected: No horizontal scroll at any size
```

### Level 4: Phase 1 Complete Validation
```bash
# Run full Phase 1 validation suite
npm run validate:phase1

# This verifies:
# - All content present per INITIAL.md
# - Semantic structure correct
# - No custom styling beyond layout
# - Accessibility compliance (WCAG AA)
# - Journey line element present
```

## 🚫 Anti-Patterns to Avoid

### Phase 1 Specific Anti-Patterns
- ❌ Adding ANY Tailwind utility classes
- ❌ Installing shadcn/ui components yet
- ❌ Implementing custom colors or themes
- ❌ Adding hover states or transitions
- ❌ Using CSS variables for design tokens
- ❌ Implementing JavaScript interactivity
- ❌ Adding Motion/Framer Motion animations
- ❌ Using non-semantic HTML for layout

### Common Phase 1 Mistakes
- ❌ Jumping ahead to visual design
- ❌ Over-engineering the component structure
- ❌ Ignoring mobile responsiveness
- ❌ Forgetting accessibility basics
- ❌ Using divs instead of semantic elements
- ❌ Creating complex layouts with advanced CSS

## 📊 Performance Monitoring

### Phase 1 Metrics
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| HTML Size | < 50KB | Semantic markup is lightweight |
| CSS Size | < 5KB | Only reset/minimal layout |
| JS Bundle | < 20KB | Next.js framework only |
| Load Time | < 1s | No assets to slow it down |
| Accessibility | 100% | Foundation for inclusive design |
| Mobile Score | 100% | Works on all devices |

## 🎬 Completion Checklist

### Structure Complete
- [ ] All wireframe sections implemented per DESIGN.md
- [ ] Content from INITIAL.md included (hero text, team data, process steps)
- [ ] Semantic HTML throughout (section, article, nav, header, main)
- [ ] Document validates (W3C HTML5)
- [ ] Journey line element present as static SVG

### Accessibility Verified
- [ ] WCAG AA compliance (structure)
- [ ] Keyboard navigation works
- [ ] Screen reader tested (NVDA/JAWS)
- [ ] Proper landmarks and roles
- [ ] Skip navigation link functional
- [ ] All images have alt text (including placeholders)

### Responsive Confirmed  
- [ ] No horizontal scroll at 320px minimum
- [ ] Content readable without CSS
- [ ] Natural stacking on mobile (demo sections, team grid)
- [ ] Journey line repositions appropriately

### TypeScript Integration
- [ ] Strict mode enabled (no `any` types)
- [ ] All components properly typed
- [ ] Interface definitions in `/lib/types.ts`
- [ ] No TypeScript errors (`npx tsc --noEmit`)

### Phase 1 Validation
- [ ] `npm run validate:phase1` passes completely
- [ ] No custom styling present beyond layout
- [ ] All anti-patterns avoided
- [ ] Ready for Phase 2 Tailwind/shadcn integration

## 📝 Implementation Notes

### Browser Testing Strategy
Test Phase 1 with CSS disabled to ensure:
- Content hierarchy makes sense
- All information accessible
- Navigation is possible
- Forms are functional
- Screen readers can consume content

### Journey Line Implementation Notes
- SVG path follows zigzag pattern through demos
- Starts below hero CTAs, ends at final CTA button
- Static in Phase 1 (opacity: 0.3)
- Will animate based on scroll progress in Phase 3
- Mobile version is straight vertical line

### Content Accuracy Checklist
- [ ] Hero headline: "Build AI solutions that transform your business"
- [ ] Hero subtitle matches INITIAL.md exactly
- [ ] All 4 team members with correct names/roles
- [ ] Process steps: Discovery → Strategy → Development → Deploy
- [ ] 3 demo placeholders with "Coming Soon" status
- [ ] CTA headline: "Ready to Transform Your Business with AI?"

### Future Phase Considerations
Note any structural decisions that will affect later phases:
- Component structure ready for shadcn/ui integration
- CSS class naming prepared for Tailwind utilities
- Journey line SVG path optimized for smooth animations
- Team photo placeholders sized for 400x400 images

---

**Confidence Score Reasoning (9/10)**: High confidence based on:
- ✅ Clear ASCII wireframe in DESIGN.md
- ✅ Complete content specifications in INITIAL.md  
- ✅ Detailed validation criteria available
- ✅ Strong understanding of Next.js 15.4.1 App Router
- ✅ Comprehensive research documentation available
- ⚠️ Minor uncertainty around exact journey line SVG path coordinates

**Dependencies for Success**:
- Access to Context7 MCP for Next.js/React documentation
- Phase 1 validation scripts must be configured
- Team placeholder images need to be created (400x400px)
- HTML validation configuration (.htmlvalidate.json) required