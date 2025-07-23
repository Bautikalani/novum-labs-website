# INITIAL.md — Novum Labs Website Implementation Requirements

## 🎯 Project Overview

Build a sophisticated single-page website for Novum Labs, an AI consultancy that helps businesses transform through cutting-edge AI solutions. The website must demonstrate technical excellence while maintaining approachability.

## 🛠️ Technical Requirements

### Core Stack
```yaml
Framework: Next.js 15.4.1 (App Router)
UI Library: React 19.1
Language: TypeScript 5.7 (strict mode)
Styling: Tailwind CSS v4.1
Components: shadcn/ui (Radix UI based)
Animation: Motion 12.23.6 (Framer Motion)
Deployment: Vercel
```

### Development Tools
```yaml
Package Manager: npm/yarn/pnpm
Linting: ESLint
Formatting: Prettier
Type Checking: TypeScript strict
Build Tool: Next.js built-in (Turbopack)
```

## 📋 Features to Build

### 1. Landing Page Sections

#### Hero Section
- **Headline**: "Build AI solutions that transform your business"
- **Subheadline**: "Novum Labs partners with forward-thinking companies to implement custom AI solutions that drive real results"
- **Primary CTA**: "See Live Demos"
- **Secondary CTA**: "Book Discovery Call"
- **Background**: Animated mesh gradient (Phase 3)
- **Journey Line Start**: Below CTAs

#### Demos Section
- **3 Demo Placeholders** with "Coming Soon" status
- **Zigzag Layout**: Alternating left/right pattern
- **Future Demos** (not implemented yet):
  - Demo 1: Invoice to Excel converter
  - Demo 2: Voice navigation assistant
  - Demo 3: TBD AI tool
- **Each Demo Includes**:
  - Preview area (45% width)
  - How-to instructions (45% width)
  - Visual placeholder for future integration

#### Process Section  
- **Four Steps**: Discovery → Strategy → Development → Deploy
- **Visual**: Horizontal flow on desktop, vertical on mobile
- **Descriptions**:
  - Discovery: "Understand your unique challenges and opportunities"
  - Strategy: "Design AI solutions tailored to your business"
  - Development: "Build and test with industry best practices"
  - Deploy: "Launch, monitor, and continuously improve"

#### Team Section
- **Four Team Members** (2x2 grid desktop, 2x2 mobile)
- **Placeholder Images**: Use numbered placeholders (1-4)
- **Team Data**:
  ```yaml
  - Name: Bautista Kalani Giesenow
    Role: Chief Executive Officer
    LinkedIn: [placeholder-url]
    
  - Name: Alessandro Donato Pascali
    Role: Chief Growth Officer
    LinkedIn: [placeholder-url]
    
  - Name: Sebastian Kloster
    Role: Chief Technology Officer
    LinkedIn: [placeholder-url]
    
  - Name: Tomas Gerbi
    Role: Lead Engineer
    LinkedIn: [placeholder-url]
  ```

#### CTA Section
- **Headline**: "Ready to Transform Your Business with AI?"
- **Subtext**: "Let's discuss how AI can solve your specific challenges"
- **CTA Button**: "Book Discovery Call"
- **Journey Line End**: At CTA button

### 2. Navigation
- **Fixed Header**: Blur backdrop, transparent background
- **Logo**: "Novum Labs" text (no image yet)
- **Desktop**: Hidden nav (single page)
- **Mobile**: Hamburger menu (if needed)
- **Header CTA**: "Book Call" button

### 3. Booking Integration (Phase 3)
- **Tool**: Google Calendar booking (or similar)
- **Implementation**: Modal or embedded widget
- **Fallback**: External link if integration fails
- **Keep Modular**: Easy to swap booking providers

## 📝 Content Specifications

### Copy Voice & Tone
- **Professional** but approachable
- **Confident** without arrogance  
- **Technical** but accessible
- **Action-oriented** and results-focused

### SEO Meta Tags
```yaml
Title: "Novum Labs - Custom AI Solutions for Business Transformation"
Description: "Transform your business with custom AI solutions. Novum Labs partners with companies to implement AI that drives real results. Book a discovery call today."
Keywords: "AI consulting, custom AI solutions, business transformation, AI implementation"
OG Image: [to be created]
```

### Content That Needs Creation
- [ ] Demo descriptions and use cases
- [ ] Detailed process explanations
- [ ] Team member bios (optional)
- [ ] Privacy Policy (link only)
- [ ] Terms of Service (link only)

## 🚫 Constraints & Limitations

### Theme
- **Dark Theme Only** - No light theme in any phase
- **Future-Ready** - Architecture supports light theme addition
- **No Toggle** - Don't build theme switcher yet

### Content
- **Placeholder Images** - Team photos not ready
- **Demo Content** - All demos show "Coming Soon"
- **No Blog** - Single page only
- **No Case Studies** - Not ready yet

### Technical
- **No Backend** - Static site only
- **No Forms** - Booking via external service
- **No Analytics** - Add later if needed
- **No Auth** - Public site only

## 🔄 State Management

### Client State
```typescript
// Minimal state needs
interface AppState {
  mobileMenuOpen: boolean;
  currentSection: string; // For journey line
  scrollProgress: number; // For Phase 3 animations
}
```

### No Persistence
- No localStorage usage
- No cookies (except essential)
- No user preferences saved

## 🌐 Browser Support

### Modern Browsers Only
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- No IE11 support

### Mobile First
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

## 📱 Responsive Breakpoints

Follow breakpoints defined in DESIGN.md:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: 1024px+
- Max Width: 1200px container

## 🚀 Performance Requirements

### Targets (from CLAUDE.md)
- Lighthouse Score: 90+
- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1
- TTI: < 3s
- Bundle: < 150KB JS

### Optimization Strategy
- Image optimization with next/image
- Font optimization (Inter via next/font)
- Code splitting by default
- Lazy load below-fold content
- Preload critical resources

## 📂 Deliverables

### Phase 1
- Semantic HTML structure
- Mobile-responsive layout
- Accessibility compliant
- Static journey line visible

### Phase 2  
- Full visual design applied
- Dark theme complete
- All components styled
- Performance optimized

### Phase 3
- Animations implemented
- Journey line animated
- Booking integration
- Production ready

## 🔍 Success Metrics

### Technical
- All validation tests passing
- Performance budgets met
- Zero accessibility violations
- TypeScript strict mode clean

### Business
- Clear value proposition
- Professional appearance
- Easy booking flow
- Mobile-first experience

---

*This document contains implementation requirements. For visual design specifications, see DESIGN.md. For development workflow, see PHASES.md. For project principles, see CLAUDE.md.*