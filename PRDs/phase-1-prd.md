# Phase 1 PRD - Structure & Content Foundation

## 🎯 Project Overview

Build a sophisticated single-page website for Novum Labs, an AI consultancy that helps businesses transform through cutting-edge AI solutions. This phase focuses on creating a fully functional, content-complete website with perfect information architecture.

### Technical Stack
See [CLAUDE.md](./CLAUDE.md) for complete technical stack and architecture principles.

### Design System
See [DESIGN.md](./DESIGN.md) for typography scales, spacing system, and layout grids.

## 📊 Phase 1 Objectives

### Primary Goals
1. **Complete Information Architecture** - Every section, every word finalized
2. **Semantic HTML Structure** - Perfect accessibility and SEO foundation
3. **Responsive Layout System** - Mobile-first, works on all devices
4. **Typography Hierarchy** - Clear visual hierarchy without colors
5. **User Flow Optimization** - Intuitive navigation and content flow

### Success Metrics
- [ ] 100% content complete and approved
- [ ] HTML validation passing (zero errors)
- [ ] WCAG AA accessibility compliant
- [ ] Mobile responsive (320px to 4K)
- [ ] 85+ Lighthouse scores (structure/SEO focus)
- [ ] < 3 second initial load time
- [ ] Keyboard navigation complete

### Deliverables
- Fully functional grayscale website
- All content implemented and editable
- Complete navigation and user flows
- SEO optimization in place
- Deployable to Vercel

## 🏗️ Component Specifications

### 1. Document Structure & Meta

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Transform your business with custom AI solutions. Novum Labs partners with companies to implement AI that drives real results. Book a discovery call today.">
  <meta name="keywords" content="AI consulting, custom AI solutions, business transformation, AI implementation, machine learning, enterprise AI">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Novum Labs - Custom AI Solutions for Business">
  <meta property="og:description" content="Transform your business with custom AI solutions that deliver real ROI.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://novumlabs.ai">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Novum Labs - Custom AI Solutions">
  <meta name="twitter:description" content="Transform your business with custom AI solutions that deliver real ROI.">
  
  <title>Novum Labs - Custom AI Solutions for Business Transformation</title>
</head>
```

### 2. Navigation Component

**Structure Requirements:**
- Fixed header with `position: fixed; top: 0; z-index: 50`
- Height: 80px desktop, 64px mobile
- Container max-width: 1200px with horizontal padding
- Blur backdrop effect (even in grayscale)

**HTML Structure:**
```html
<header role="banner" class="fixed-header">
  <nav role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <!-- Logo -->
      <a href="#hero" class="logo" aria-label="Novum Labs Home">
        <span class="font-semibold text-xl">Novum Labs</span>
      </a>
      
      <!-- Desktop Navigation -->
      <ul class="nav-menu" role="menubar">
        <li role="none">
          <a href="#demos" role="menuitem">Demos</a>
        </li>
        <li role="none">
          <a href="#why-us" role="menuitem">Why Us</a>
        </li>
        <li role="none">
          <a href="#process" role="menuitem">Process</a>
        </li>
        <li role="none">
          <a href="#team" role="menuitem">Team</a>
        </li>
        <li role="none">
          <a href="#contact" role="menuitem" class="cta-nav">
            Book a Call
          </a>
        </li>
      </ul>
      
      <!-- Mobile Menu Button -->
      <button 
        type="button"
        class="mobile-menu-button"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </nav>
  
  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu" class="mobile-drawer" hidden>
    <!-- Mobile menu items -->
  </div>
</header>
```

**Functionality Requirements:**
- Smooth scroll to sections on click
- Active section highlighting
- Mobile menu toggle with ARIA states
- Keyboard navigation (Tab, Enter, Escape)
- Focus trap when mobile menu open

### 3. Hero Section

**Layout Specifications:**
- Height: `calc(100vh - 80px)` desktop, `min-height: 600px`
- Padding: 120px top, 80px bottom (desktop), 60px/40px (mobile)
- Content max-width: 1200px, centered
- Two-column layout desktop, single column mobile

**Content Structure:**
```html
<section id="hero" class="hero-section">
  <div class="container">
    <div class="hero-content">
      <!-- Main Content Column -->
      <div class="hero-text">
        <p class="hero-slogan">
          Smarter Ops. Leaner Teams. Faster Growth.
        </p>
        <h1 class="hero-headline">
          Build AI Solutions That Actually Work
        </h1>
        <p class="hero-subheadline">
          Transform your business with custom AI that delivers real ROI. 
          Skip the complexity, get results.
        </p>
        
        <div class="hero-cta-group">
          <a href="#demos" class="btn btn-primary">
            Explore Our Demos
            <span class="arrow-icon">→</span>
          </a>
          <a href="#contact" class="btn btn-secondary">
            Book a Strategy Call
          </a>
        </div>
        
        <p class="hero-supporting">
          Trusted by forward-thinking companies ready to lead with AI
        </p>
      </div>
      
      <!-- Visual Column (Placeholder in Phase 1) -->
      <div class="hero-visual">
        <div class="placeholder-box" aria-hidden="true">
          <!-- Gradient mesh placeholder -->
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span class="scroll-text">Discover How</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</section>
```

**Typography Requirements:**
- Slogan: font-size-lg (18px), font-weight-semibold, letter-spacing: 0.05em
- Headline: font-size-5xl (67px desktop), font-size-4xl (51px mobile)
- Subheadline: font-size-xl (21px), line-height: 1.6
- CTAs: font-size-lg (18px), padding: 16px 32px
- Supporting: font-size-base (16px), opacity: 0.7

### 4. Demos Section

**Layout Specifications:**
- Section padding: 80px vertical (desktop), 40px (mobile)
- Card grid: 2 columns desktop, 1 column mobile
- Gap between cards: 32px
- Card padding: 32px

**Content Structure:**
```html
<section id="demos" class="demos-section">
  <div class="container">
    <!-- Section Header -->
    <header class="section-header">
      <h2 class="section-title">See AI in Action</h2>
      <p class="section-subtitle">
        Experience the power of custom AI through interactive demonstrations
      </p>
    </header>
    
    <!-- Demo Cards Grid -->
    <div class="demos-grid">
      <!-- Demo Card 1 -->
      <article class="demo-card">
        <div class="demo-preview">
          <div class="placeholder-demo">
            <p class="coming-soon-badge">Interactive Demo</p>
          </div>
        </div>
        
        <div class="demo-content">
          <h3 class="demo-title">
            Discover What's Possible with AI
          </h3>
          <p class="demo-description">
            Explore real AI solutions through our interactive demo. 
            See how custom AI can transform your specific business processes.
          </p>
          
          <div class="demo-features">
            <h4 class="features-title">What You'll Experience:</h4>
            <ul class="features-list">
              <li>Natural language interaction with AI</li>
              <li>Real-time intelligent responses</li>
              <li>Industry-specific solution examples</li>
              <li>Custom implementation possibilities</li>
            </ul>
          </div>
          
          <button type="button" class="demo-cta" disabled>
            Try Interactive Demo
            <span class="note">(Coming Soon)</span>
          </button>
        </div>
      </article>
      
      <!-- Demo Card 2 -->
      <article class="demo-card">
        <div class="demo-preview">
          <div class="placeholder-demo">
            <p class="coming-soon-badge">Live Demo</p>
          </div>
        </div>
        
        <div class="demo-content">
          <h3 class="demo-title">
            Invoice to Excel in Seconds
          </h3>
          <p class="demo-description">
            Watch AI transform messy invoices into structured data. 
            Handle any format, extract with precision, export ready-to-use Excel files.
          </p>
          
          <div class="demo-process">
            <h4 class="process-title">How It Works:</h4>
            <ol class="process-steps">
              <li>
                <span class="step-number">1</span>
                <span class="step-text">Upload any invoice format (PDF, PNG, JPG)</span>
              </li>
              <li>
                <span class="step-number">2</span>
                <span class="step-text">AI extracts all data fields automatically</span>
              </li>
              <li>
                <span class="step-number">3</span>
                <span class="step-text">Download perfect Excel file instantly</span>
              </li>
            </ol>
          </div>
          
          <button type="button" class="demo-cta" disabled>
            See It In Action
            <span class="note">(Coming Soon)</span>
          </button>
        </div>
      </article>
    </div>
  </div>
</section>
```

### 5. Why Choose Us Section

**Layout Specifications:**
- 3-column grid desktop, single column mobile
- Equal height cards with flexbox
- Icon placeholder areas: 48px x 48px
- Consistent padding and spacing

**Content Structure:**
```html
<section id="why-us" class="why-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Why Novum Labs</h2>
      <p class="section-subtitle">
        We deliver AI solutions that work in the real world, not just in theory
      </p>
    </header>
    
    <div class="benefits-grid">
      <!-- Benefit 1 -->
      <article class="benefit-card">
        <div class="benefit-icon" aria-hidden="true">
          <div class="icon-placeholder">⚡</div>
        </div>
        <h3 class="benefit-title">Lightning Fast Implementation</h3>
        <p class="benefit-description">
          From concept to deployment in weeks, not months. 
          Our rapid prototyping process gets you results faster.
        </p>
        <ul class="benefit-points">
          <li>Rapid prototyping methodology</li>
          <li>Iterative development approach</li>
          <li>Quick wins within first sprint</li>
        </ul>
      </article>
      
      <!-- Benefit 2 -->
      <article class="benefit-card">
        <div class="benefit-icon" aria-hidden="true">
          <div class="icon-placeholder">🧠</div>
        </div>
        <h3 class="benefit-title">Actually Smart Solutions</h3>
        <p class="benefit-description">
          Custom AI models trained on your data, not generic solutions. 
          Built specifically for your unique challenges.
        </p>
        <ul class="benefit-points">
          <li>Trained on your specific data</li>
          <li>Continuous learning & improvement</li>
          <li>No one-size-fits-all approaches</li>
        </ul>
      </article>
      
      <!-- Benefit 3 -->
      <article class="benefit-card">
        <div class="benefit-icon" aria-hidden="true">
          <div class="icon-placeholder">🚀</div>
        </div>
        <h3 class="benefit-title">Built to Scale</h3>
        <p class="benefit-description">
          Enterprise-ready from day one. Our solutions handle millions 
          of operations and grow with your business.
        </p>
        <ul class="benefit-points">
          <li>Enterprise-grade infrastructure</li>
          <li>Handles millions of operations</li>
          <li>Grows with your business needs</li>
        </ul>
      </article>
    </div>
  </div>
</section>
```

### 6. Process Section

**Layout Specifications:**
- Horizontal flow with connecting lines (desktop)
- Vertical timeline layout (mobile)
- Step numbers: 40px circles
- Connected by dashed lines

**Content Structure:**
```html
<section id="process" class="process-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Our Proven Process</h2>
      <p class="section-subtitle">
        From idea to implementation in four strategic steps
      </p>
    </header>
    
    <div class="process-timeline">
      <!-- Step 1 -->
      <div class="process-step">
        <div class="step-marker">
          <span class="step-number">1</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Discovery Deep Dive</h3>
          <p class="step-description">
            We immerse ourselves in your business to understand your unique challenges and opportunities.
          </p>
          <ul class="step-details">
            <li>Comprehensive business analysis</li>
            <li>Identify AI opportunities with highest ROI</li>
            <li>Map current workflows and pain points</li>
            <li>Define success metrics and KPIs</li>
          </ul>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div class="process-step">
        <div class="step-marker">
          <span class="step-number">2</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Strategic Design</h3>
          <p class="step-description">
            Architect custom AI solutions tailored to your specific needs and existing infrastructure.
          </p>
          <ul class="step-details">
            <li>Custom solution architecture</li>
            <li>Integration planning with existing systems</li>
            <li>Phased rollout strategy</li>
            <li>Risk mitigation planning</li>
          </ul>
        </div>
      </div>
      
      <!-- Step 3 -->
      <div class="process-step">
        <div class="step-marker">
          <span class="step-number">3</span>
          <div class="step-line" aria-hidden="true"></div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Rapid Development</h3>
          <p class="step-description">
            Build and refine your AI solution through iterative sprints with continuous feedback.
          </p>
          <ul class="step-details">
            <li>Agile development sprints</li>
            <li>Regular demos and feedback loops</li>
            <li>Continuous testing and refinement</li>
            <li>Performance optimization</li>
          </ul>
        </div>
      </div>
      
      <!-- Step 4 -->
      <div class="process-step">
        <div class="step-marker">
          <span class="step-number">4</span>
        </div>
        <div class="step-content">
          <h3 class="step-title">Seamless Deployment</h3>
          <p class="step-description">
            Launch your AI solution with comprehensive training and ongoing support for maximum adoption.
          </p>
          <ul class="step-details">
            <li>Smooth production deployment</li>
            <li>Comprehensive team training</li>
            <li>Documentation and best practices</li>
            <li>Ongoing support and optimization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 7. Team Section

**Layout Specifications:**
- 3-column grid for team cards
- Card size: Equal height using flexbox
- Image placeholder: 280px x 280px
- Hover state preparations (structure only)

**Content Structure:**
```html
<section id="team" class="team-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Meet the Team</h2>
      <p class="section-subtitle">
        AI experts who understand business, not just technology
      </p>
    </header>
    
    <div class="team-grid">
      <!-- Team Member 1 -->
      <article class="team-card">
        <div class="team-image">
          <div class="image-placeholder" aria-label="Sarah Chen photo">
            <span class="placeholder-text">Photo</span>
          </div>
        </div>
        <div class="team-info">
          <h3 class="team-name">Sarah Chen</h3>
          <p class="team-role">AI/ML Engineer</p>
          <p class="team-bio">
            Former Google AI researcher specializing in NLP and computer vision. 
            PhD in Machine Learning from Stanford. Published 15+ papers on 
            practical AI applications.
          </p>
          <div class="team-expertise">
            <span class="expertise-tag">NLP</span>
            <span class="expertise-tag">Computer Vision</span>
            <span class="expertise-tag">Deep Learning</span>
          </div>
          <a href="#" class="linkedin-link" aria-label="Sarah Chen's LinkedIn">
            <span class="linkedin-icon">LinkedIn</span>
          </a>
        </div>
      </article>
      
      <!-- Team Member 2 -->
      <article class="team-card">
        <div class="team-image">
          <div class="image-placeholder" aria-label="Marcus Rodriguez photo">
            <span class="placeholder-text">Photo</span>
          </div>
        </div>
        <div class="team-info">
          <h3 class="team-name">Marcus Rodriguez</h3>
          <p class="team-role">Solutions Architect</p>
          <p class="team-bio">
            15 years building enterprise AI systems for Fortune 500 companies. 
            Expert in scalable ML infrastructure and system integration. 
            Led AI transformation at 3 major corporations.
          </p>
          <div class="team-expertise">
            <span class="expertise-tag">Architecture</span>
            <span class="expertise-tag">MLOps</span>
            <span class="expertise-tag">Integration</span>
          </div>
          <a href="#" class="linkedin-link" aria-label="Marcus Rodriguez's LinkedIn">
            <span class="linkedin-icon">LinkedIn</span>
          </a>
        </div>
      </article>
      
      <!-- Team Member 3 -->
      <article class="team-card">
        <div class="team-image">
          <div class="image-placeholder" aria-label="Emily Watson photo">
            <span class="placeholder-text">Photo</span>
          </div>
        </div>
        <div class="team-info">
          <h3 class="team-name">Emily Watson</h3>
          <p class="team-role">Product Strategist</p>
          <p class="team-bio">
            Transforms complex AI capabilities into intuitive user experiences. 
            Former Microsoft product lead. Shipped AI products used by 
            millions globally.
          </p>
          <div class="team-expertise">
            <span class="expertise-tag">Product Strategy</span>
            <span class="expertise-tag">UX Design</span>
            <span class="expertise-tag">User Research</span>
          </div>
          <a href="#" class="linkedin-link" aria-label="Emily Watson's LinkedIn">
            <span class="linkedin-icon">LinkedIn</span>
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
```

### 8. CTA Section

**Layout Specifications:**
- Minimum height: 60vh
- Centered content with max-width: 800px
- Padding: 120px vertical
- CTAs side-by-side desktop, stacked mobile

**Content Structure:**
```html
<section id="contact" class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-headline">
        Ready to Transform Your Business with AI?
      </h2>
      <p class="cta-subheadline">
        Join forward-thinking companies already leveraging custom AI solutions 
        to stay ahead of the competition
      </p>
      
      <div class="cta-buttons">
        <a href="#" class="btn btn-primary btn-large">
          Schedule Your Free AI Assessment
          <span class="arrow-icon">→</span>
        </a>
        <a href="#" class="btn btn-secondary btn-large">
          Download AI Readiness Guide
          <span class="download-icon">↓</span>
        </a>
      </div>
      
      <div class="cta-trust">
        <p class="trust-text">
          <span class="trust-item">✓ 30-minute consultation</span>
          <span class="trust-item">✓ No obligations</span>
          <span class="trust-item">✓ Expert insights</span>
        </p>
      </div>
    </div>
  </div>
</section>
```

### 9. Footer

**Layout Specifications:**
- Background: Slightly darker than body
- 4-column layout desktop, single column mobile
- Padding: 60px vertical, standard horizontal
- Links organized by category

**Content Structure:**
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Company Column -->
      <div class="footer-column">
        <h3 class="footer-heading">Company</h3>
        <ul class="footer-links">
          <li><a href="#about">About Novum Labs</a></li>
          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#news">News & Updates</a></li>
        </ul>
      </div>
      
      <!-- Resources Column -->
      <div class="footer-column">
        <h3 class="footer-heading">Resources</h3>
        <ul class="footer-links">
          <li><a href="#guide">AI Readiness Guide</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      
      <!-- Connect Column -->
      <div class="footer-column">
        <h3 class="footer-heading">Connect</h3>
        <ul class="footer-links">
          <li><a href="#linkedin">LinkedIn</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
      </div>
      
      <!-- Legal Column -->
      <div class="footer-column">
        <h3 class="footer-heading">Legal</h3>
        <ul class="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#cookies">Cookie Policy</a></li>
          <li><a href="#compliance">Compliance</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p class="copyright">
        © 2025 Novum Labs. All rights reserved.
      </p>
      <p class="footer-tagline">
        Building the future of business with AI
      </p>
    </div>
  </div>
</footer>
```

## 🎨 Phase 1 Design Constraints

### Grayscale Color Palette
```css
:root {
  /* Backgrounds */
  --gray-50: #fafafa;
  --gray-100: #f5f5f5;
  --gray-200: #e5e5e5;
  
  /* Borders & Dividers */
  --gray-300: #d4d4d4;
  --gray-400: #a3a3a3;
  
  /* Text Hierarchy */
  --gray-500: #737373;  /* Muted text */
  --gray-600: #525252;  /* Secondary text */
  --gray-700: #404040;  /* Body text */
  --gray-800: #262626;  /* Headings */
  --gray-900: #171717;  /* High emphasis */
  --gray-950: #0a0a0a;  /* Backgrounds (dark) */
}
```

### Typography Scale (No Custom Fonts)
```css
/* Use system font stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;

/* Size scale from DESIGN.md */
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.333rem;    /* 21px */
--font-size-2xl: 1.777rem;   /* 28px */
--font-size-3xl: 2.369rem;   /* 38px */
--font-size-4xl: 3.157rem;   /* 51px */
--font-size-5xl: 4.209rem;   /* 67px */

/* Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-tight: 1.1;
--line-height-snug: 1.3;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

### Layout System
```css
/* Container widths from DESIGN.md */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1200px;

/* Spacing scale from DESIGN.md */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: 320px - 639px (Mobile) */

@media (min-width: 640px) {
  /* Tablet Portrait */
}

@media (min-width: 768px) {
  /* Tablet Landscape */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Wide Desktop */
}
```

## ♿ Accessibility Requirements

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark roles (banner, navigation, main, contentinfo)
- ARIA labels for interactive elements
- Skip navigation links

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Escape key closes modals/menus

### Screen Reader Support
- Alt text for all images
- Descriptive link text
- Form labels and instructions
- Error messages associated with inputs

### Color Contrast
- Large text (18px+): 3:1 minimum
- Normal text: 4.5:1 minimum
- Interactive elements: clear boundaries
- Don't rely on color alone

## 🚀 Technical Implementation

### Next.js Setup
```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
```

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── demos-section.tsx
│   │   ├── why-us-section.tsx
│   │   ├── process-section.tsx
│   │   ├── team-section.tsx
│   │   └── cta-section.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── section-header.tsx
```

### Performance Targets
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1
- HTML size: < 50KB
- CSS size: < 30KB

## 📝 Content Guidelines

### Voice and Tone
- **Professional** but approachable
- **Confident** without arrogance
- **Technical** but understandable
- **Action-oriented** language

### SEO Optimization
- Title tags: 50-60 characters
- Meta descriptions: 150-160 characters
- Heading structure for crawlability
- Internal linking strategy
- Schema markup for organization

### Content Hierarchy
1. **Primary**: Value proposition
2. **Secondary**: How it works
3. **Supporting**: Social proof
4. **Action**: Clear CTAs

## ✅ Phase 1 Checklist

### Pre-Development
- [ ] Content finalized and approved
- [ ] Information architecture mapped
- [ ] User flows documented
- [ ] Accessibility plan created

### Development
- [ ] Semantic HTML structure
- [ ] Responsive grid system
- [ ] Typography hierarchy
- [ ] Navigation implementation
- [ ] Form structure (no styling)
- [ ] Skip links and ARIA

### Testing
- [ ] HTML validation
- [ ] Accessibility audit
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Performance metrics

### Deployment
- [ ] Vercel project setup
- [ ] Environment variables
- [ ] Preview deployment
- [ ] Stakeholder review
- [ ] Sign-off for Phase 2

---

*Phase 1 creates the solid foundation for a premium AI consultancy website. With perfect structure, complete content, and optimal user flows, this grayscale prototype is fully functional and valuable even before visual design is applied.*