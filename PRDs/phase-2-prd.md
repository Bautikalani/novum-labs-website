# Phase 2 PRD - Visual Design & Polish

## 🎯 Project Overview

Transform the Phase 1 wireframe into a visually stunning website for Novum Labs with the full color system, custom typography, imagery, and polished UI components while maintaining the solid foundation.

### Technical Stack
See [CLAUDE.md](./CLAUDE.md) for complete technical stack and architecture principles.

### Design System
See [DESIGN.md](./DESIGN.md) for the complete design system including colors, typography, and spacing.

## 📊 Phase 2 Objectives

### Primary Goals
1. **Implement Full Color System** - LCH colors for perceptual uniformity
2. **Custom Typography** - Load and optimize web fonts
3. **Visual Hierarchy** - Enhance with color and contrast
4. **Component Polish** - Elevate every UI element
5. **Brand Expression** - Sophisticated AI consultancy aesthetic

### Success Metrics
- [ ] All design tokens implemented
- [ ] Custom fonts loading < 100ms
- [ ] Color contrast WCAG AA compliant
- [ ] Visual consistency 100%
- [ ] 90+ Lighthouse scores maintained
- [ ] < 50KB additional CSS
- [ ] Zero layout shifts from fonts

### Deliverables
- Fully designed website with complete visual system
- All components polished and interactive states defined
- Background effects and gradients implemented
- Images and icons integrated
- Production-ready for Phase 3 animations

## 🎨 Color System Implementation

### 1. CSS Variables Setup

```css
/* styles/design-tokens.css */
:root {
  /* Primary Backgrounds - Deep sophistication */
  --color-background: lch(2% 0 0);              /* Near black */
  --color-foreground: lch(98% 0 0);             /* Near white */
  
  /* Surface Elevation System */
  --color-surface-1: lch(5% 2 250);             /* Subtle blue tint */
  --color-surface-2: lch(8% 3 250);             /* Card backgrounds */
  --color-surface-3: lch(12% 4 250);            /* Hover states */
  --color-surface-elevated: lch(15% 5 250);     /* Floating elements */
  
  /* Brand Colors - Electric presence */
  --color-primary: lch(55% 65 250);             /* Electric blue */
  --color-primary-hover: lch(60% 70 250);       /* Hover state */
  --color-primary-active: lch(50% 60 250);      /* Active state */
  
  /* Accent Colors - Tech forward */
  --color-accent-cyan: lch(75% 50 180);         /* Bright cyan */
  --color-accent-purple: lch(65% 55 280);       /* AI purple */
  --color-accent-green: lch(70% 60 145);        /* Success green */
  
  /* Text Hierarchy - Clear contrast */
  --color-text-primary: lch(98% 0 0);           /* High emphasis */
  --color-text-secondary: lch(75% 0 0);         /* Medium emphasis */
  --color-text-tertiary: lch(50% 0 0);          /* Low emphasis */
  
  /* Semantic Colors */
  --color-success: lch(70% 60 145);
  --color-warning: lch(75% 65 85);
  --color-error: lch(55% 70 25);
  --color-info: lch(65% 50 220);
  
  /* Gradient Definitions */
  --gradient-hero: 
    radial-gradient(ellipse 800px 600px at 20% 30%, 
      lch(55% 65 250 / 0.4) 0%, 
      transparent 50%),
    radial-gradient(ellipse 600px 800px at 80% 20%, 
      lch(75% 50 180 / 0.3) 0%, 
      transparent 50%),
    radial-gradient(ellipse 1000px 1000px at 40% 70%, 
      lch(65% 55 280 / 0.2) 0%, 
      transparent 50%);
  
  --gradient-primary: linear-gradient(135deg, 
    lch(55% 65 250) 0%, 
    lch(65% 55 280) 100%);
    
  --gradient-surface: linear-gradient(180deg,
    lch(12% 4 250) 0%,
    lch(8% 3 250) 100%);
    
  --gradient-text: linear-gradient(135deg,
    lch(75% 50 180) 0%,
    lch(55% 65 250) 50%,
    lch(65% 55 280) 100%);
}
```

### 2. Color Application Strategy

#### Navigation Component
```css
.header {
  background: lch(2% 0 0 / 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid lch(98% 0 0 / 0.1);
}

.nav-link {
  color: var(--color-text-secondary);
  transition: color 200ms ease-out;
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link.active {
  color: var(--color-primary);
}

.nav-cta {
  background: var(--gradient-primary);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;
}

.nav-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: lch(98% 0 0 / 0.1);
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.nav-cta:hover::before {
  opacity: 1;
}
```

#### Hero Section
```css
.hero-section {
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  opacity: 0.6;
  animation: gradient-shift 20s ease-in-out infinite;
}

.hero-headline {
  color: var(--color-text-primary);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheadline {
  color: var(--color-text-secondary);
}

@keyframes gradient-shift {
  0%, 100% { transform: scale(1) rotate(0deg); }
  33% { transform: scale(1.1) rotate(120deg); }
  66% { transform: scale(0.9) rotate(240deg); }
}
```

### 3. Component Color Schemes

#### Card Components
```css
.card {
  background: var(--color-surface-2);
  border: 1px solid lch(98% 0 0 / 0.1);
  transition: all 300ms ease-out;
}

.card:hover {
  background: var(--gradient-surface);
  border-color: var(--color-primary);
  box-shadow: 
    0 20px 40px -20px lch(55% 65 250 / 0.3),
    0 0 0 1px var(--color-primary);
  transform: translateY(-4px);
}

.demo-card .preview {
  background: var(--color-surface-1);
  border: 1px solid lch(98% 0 0 / 0.05);
  position: relative;
  overflow: hidden;
}

.demo-card .preview::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, 
      transparent 30%, 
      lch(55% 65 250 / 0.1) 50%, 
      transparent 70%);
  transform: translateX(-100%);
  transition: transform 800ms ease-out;
}

.demo-card:hover .preview::after {
  transform: translateX(100%);
}
```

## 📝 Typography Implementation

### 1. Font Loading Strategy

```html
<!-- Preconnect to font sources -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/satoshi-var.woff2" as="font" type="font/woff2" crossorigin>
```

```css
/* Font Face Declarations */
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-var.woff2') format('woff2-variations');
  font-weight: 400 700;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Satoshi Variable';
  src: url('/fonts/satoshi-var.woff2') format('woff2-variations');
  font-weight: 400 700;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'JetBrains Mono Variable';
  src: url('/fonts/jetbrains-mono-var.woff2') format('woff2-variations');
  font-weight: 400 700;
  font-display: swap;
  font-style: normal;
}
```

### 2. Typography Application

```css
/* Base Typography */
body {
  font-family: 'Inter Variable', var(--font-sans);
  font-weight: 400;
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-primary);
  font-feature-settings: 'cv11', 'ss01', 'ss03';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3 {
  font-family: 'Satoshi Variable', var(--font-display);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h1 {
  font-size: var(--font-size-5xl);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: var(--font-size-3xl);
  color: var(--color-text-primary);
}

h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
}

/* Lead Text */
.lead {
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-text-secondary);
  font-weight: 450;
}

/* Code/Technical */
.mono {
  font-family: 'JetBrains Mono Variable', var(--font-mono);
  font-weight: 450;
  font-size: 0.9em;
  letter-spacing: -0.01em;
}
```

### 3. Responsive Typography

```css
/* Fluid Typography with clamp() */
h1 {
  font-size: clamp(2.5rem, 5vw + 1rem, var(--font-size-5xl));
}

h2 {
  font-size: clamp(2rem, 4vw + 0.5rem, var(--font-size-3xl));
}

h3 {
  font-size: clamp(1.5rem, 3vw + 0.5rem, var(--font-size-2xl));
}

.lead {
  font-size: clamp(1rem, 2vw + 0.5rem, var(--font-size-lg));
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  body {
    font-size: var(--font-size-sm);
  }
  
  h1, h2, h3 {
    letter-spacing: -0.01em;
  }
}
```

## 🖼️ Visual Elements

### 1. Background Effects

#### Noise Texture Overlay
```css
.noise-overlay {
  position: fixed;
  inset: 0;
  opacity: 0.02;
  z-index: 1;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
}
```

#### Grid Pattern
```css
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(lch(98% 0 0 / 0.03) 1px, transparent 1px),
    linear-gradient(90deg, lch(98% 0 0 / 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
}
```

#### Gradient Mesh
```css
.gradient-mesh {
  position: absolute;
  width: 200%;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 3. Error States

```css
/* Form Error States */
.input-error {
  border-color: var(--color-error);
  background: lch(55% 70 25 / 0.05);
}

.error-message {
  color: var(--color-error);
  font-size: var(--font-size-sm);
  margin-top: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.error-icon {
  width: 16px;
  height: 16px;
  stroke: currentColor;
}
```

## 🎨 Component Library Updates

### 1. Card Component Variants

```typescript
// components/ui/card.tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'interactive' | 'gradient';
  className?: string;
  children: React.ReactNode;
}

export function Card({ variant = 'default', className, children }: CardProps) {
  const variants = {
    default: 'bg-surface-2 border border-white/10',
    elevated: 'bg-surface-elevated shadow-xl',
    interactive: 'bg-surface-2 hover:bg-gradient-surface transition-all duration-300',
    gradient: 'bg-gradient-primary text-white'
  };
  
  return (
    <div className={cn(
      'rounded-2xl p-6',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
}
```

### 2. Section Header Component

```typescript
// components/ui/section-header.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  gradient = false 
}: SectionHeaderProps) {
  return (
    <header className={cn(
      'mb-16',
      centered && 'text-center'
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-4',
        gradient && 'bg-gradient-text bg-clip-text text-transparent'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  );
}
```

### 3. Badge Component

```typescript
// components/ui/badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ 
  children, 
  variant = 'default',
  size = 'md' 
}: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-text-secondary',
    primary: 'bg-gradient-primary text-white',
    success: 'bg-success/20 text-success',
    warning: 'bg-warning/20 text-warning'
  };
  
  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };
  
  return (
    <span className={cn(
      'inline-block rounded-full font-medium',
      variants[variant],
      sizes[size]
    )}>
      {children}
    </span>
  );
}
```

## 🌈 Special Effects

### 1. Gradient Text Animation

```css
/* Animated Gradient Text */
.gradient-text-animated {
  background: linear-gradient(
    135deg,
    var(--color-accent-cyan) 0%,
    var(--color-primary) 25%,
    var(--color-accent-purple) 50%,
    var(--color-primary) 75%,
    var(--color-accent-cyan) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 3s linear infinite;
}

@keyframes gradient-flow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
```

### 2. Glass Morphism Effects

```css
/* Glass Card */
.glass {
  background: lch(98% 0 0 / 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid lch(98% 0 0 / 0.1);
  border-radius: 20px;
}

/* Glass with Gradient Border */
.glass-gradient {
  position: relative;
  background: lch(98% 0 0 / 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  padding: 1px;
}

.glass-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: var(--gradient-primary);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.5;
}
```

### 3. Glow Effects

```css
/* Subtle Glow */
.glow {
  box-shadow: 
    0 0 20px lch(55% 65 250 / 0.3),
    0 0 40px lch(55% 65 250 / 0.1);
}

/* Intense Glow */
.glow-intense {
  box-shadow: 
    0 0 30px lch(55% 65 250 / 0.5),
    0 0 60px lch(55% 65 250 / 0.3),
    0 0 90px lch(55% 65 250 / 0.1);
}

/* Text Glow */
.text-glow {
  text-shadow: 
    0 0 20px lch(55% 65 250 / 0.5),
    0 0 40px lch(55% 65 250 / 0.3);
}
```

## 📐 Layout Enhancements

### 1. Section Backgrounds

```css
/* Alternating Section Backgrounds */
section:nth-child(odd) {
  background: var(--color-background);
}

section:nth-child(even) {
  background: var(--color-surface-1);
  position: relative;
}

section:nth-child(even)::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  opacity: 0.03;
  pointer-events: none;
}
```

### 2. Container Variations

```css
/* Fluid Container */
.container-fluid {
  width: 100%;
  padding-inline: var(--space-6);
}

/* Narrow Container */
.container-narrow {
  max-width: var(--container-md);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

/* Wide Container */
.container-wide {
  max-width: var(--container-2xl);
  margin-inline: auto;
  padding-inline: var(--space-6);
}
```

### 3. Decorative Elements

```css
/* Floating Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  pointer-events: none;
}

.orb-primary {
  background: var(--color-primary);
  width: 400px;
  height: 400px;
}

.orb-accent {
  background: var(--color-accent-cyan);
  width: 300px;
  height: 300px;
}

/* Divider Lines */
.divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    lch(98% 0 0 / 0.2) 50%,
    transparent 100%
  );
  margin: var(--space-20) 0;
}
```

## 🎯 Performance Optimization

### 1. Critical CSS

```css
/* Inline critical CSS in <head> */
/* Base reset and colors */
:root {
  --color-background: lch(2% 0 0);
  --color-text-primary: lch(98% 0 0);
  --font-size-base: 1rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
}
```

### 2. Font Loading Optimization

```typescript
// lib/fonts.ts
export async function loadFonts() {
  const fonts = [
    new FontFace('Inter Variable', 'url(/fonts/inter-var.woff2)', {
      weight: '400 700',
      display: 'swap'
    }),
    new FontFace('Satoshi Variable', 'url(/fonts/satoshi-var.woff2)', {
      weight: '400 700',
      display: 'swap'
    })
  ];
  
  // Load fonts in parallel
  await Promise.all(fonts.map(font => font.load()));
  
  // Add to document
  fonts.forEach(font => document.fonts.add(font));
}
```

### 3. Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}
```

## ✅ Phase 2 Checklist

### Pre-Implementation
- [ ] Color system tokens defined
- [ ] Font files obtained and optimized
- [ ] Icon library selected (Lucide React)
- [ ] Image assets prepared

### Visual Design
- [ ] Full color system implemented
- [ ] Custom fonts loading properly
- [ ] All gradients and effects working
- [ ] Background patterns implemented
- [ ] Glass morphism effects
- [ ] Hover states defined

### Components
- [ ] All buttons styled
- [ ] Cards with elevation
- [ ] Form elements (if needed)
- [ ] Navigation polished
- [ ] Footer enhanced
- [ ] Loading states

### Typography
- [ ] Font loading optimized
- [ ] Type scale applied
- [ ] Responsive sizing
- [ ] Gradient text effects
- [ ] Proper line heights

### Quality Assurance
- [ ] Color contrast passing WCAG AA
- [ ] No layout shift from fonts
- [ ] Images optimized
- [ ] Performance maintained at 90+
- [ ] Cross-browser testing
- [ ] Dark theme consistent

### Deployment
- [ ] Asset optimization
- [ ] Critical CSS extracted
- [ ] Font preloading
- [ ] Preview deployment
- [ ] Stakeholder review
- [ ] Sign-off for Phase 3

---

*Phase 2 transforms the solid foundation into a visually stunning website that embodies Novum Labs' position as a premium AI consultancy. Every visual decision reinforces sophistication, technical excellence, and trustworthiness through careful use of color, typography, and polish.*200%;
  top: -50%;
  left: -50%;
  background: var(--gradient-hero);
  filter: blur(100px);
  opacity: 0.6;
  animation: mesh-animation 30s ease-in-out infinite;
}

@keyframes mesh-animation {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(-20%, -20%) rotate(120deg) scale(1.2);
  }
  66% {
    transform: translate(20%, -10%) rotate(240deg) scale(0.8);
  }
}
```

### 2. Button Styles

```css
/* Base Button */
.btn {
  font-family: 'Inter Variable', var(--font-sans);
  font-weight: 500;
  font-size: var(--font-size-base);
  padding: var(--space-4) var(--space-8);
  border-radius: 12px;
  transition: all 200ms ease-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Primary Button */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: 1px solid transparent;
  box-shadow: 
    0 4px 12px -2px lch(55% 65 250 / 0.3),
    inset 0 1px 0 lch(98% 0 0 / 0.1);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
    lch(98% 0 0 / 0.1) 0%, 
    transparent 50%);
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 20px -4px lch(55% 65 250 / 0.4),
    inset 0 1px 0 lch(98% 0 0 / 0.2);
}

.btn-primary:hover::before {
  opacity: 1;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid lch(98% 0 0 / 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: lch(98% 0 0 / 0.05);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* Large Button Variant */
.btn-large {
  font-size: var(--font-size-lg);
  padding: var(--space-5) var(--space-10);
  border-radius: 16px;
}
```

### 3. Icon Integration

```typescript
// Install lucide-react
// npm install lucide-react

// Icon Component Usage
import { 
  ArrowRight, 
  Download, 
  ChevronDown, 
  Menu, 
  X, 
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Check,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

// Icon Styling
const iconStyles = {
  size: 24,
  strokeWidth: 2,
  color: 'currentColor'
};
```

```css
/* Icon Styles */
.icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  transition: all 200ms ease-out;
}

.icon-primary {
  color: var(--color-primary);
}

.icon-muted {
  color: var(--color-text-tertiary);
}

/* Icon in buttons */
.btn .icon {
  margin-left: var(--space-2);
  transition: transform 200ms ease-out;
}

.btn:hover .icon {
  transform: translateX(4px);
}
```

### 4. Image Treatment

```css
/* Team Photos */
.team-image {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: var(--color-surface-2);
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease-out;
}

.team-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    lch(2% 0 0 / 0.6) 100%
  );
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-card:hover .team-image::after {
  opacity: 1;
}

/* Image Loading States */
.image-container {
  position: relative;
  background: var(--color-surface-2);
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(
      90deg,
      var(--color-surface-2) 0%,
      var(--color-surface-3) 50%,
      var(--color-surface-2) 100%
    );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

## 🎯 Section-Specific Enhancements

### 1. Hero Section Polish

```css
/* Hero Container */
.hero-section {
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

/* Multiple Background Layers */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-background .gradient-mesh {
  position: absolute;
  inset: -50%;
  background: var(--gradient-hero);
  filter: blur(120px);
  opacity: 0.6;
}

.hero-background .grid-pattern {
  opacity: 0.3;
  mask-image: radial-gradient(
    ellipse at 30% 50%, 
    black 20%, 
    transparent 70%
  );
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
}

/* CTA Group Enhancement */
.hero-cta-group {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-tertiary);
  transition: color 200ms ease-out;
}

.scroll-indicator:hover {
  color: var(--color-text-secondary);
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
```

### 2. Demo Cards Enhancement

```css
/* Demo Card Container */
.demo-card {
  background: var(--color-surface-2);
  border: 1px solid lch(98% 0 0 / 0.1);
  border-radius: 20px;
  padding: var(--space-8);
  transition: all 300ms ease-out;
  position: relative;
  overflow: hidden;
}

/* Hover Glow Effect */
.demo-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: 20px;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 300ms ease-out;
  z-index: -1;
}

.demo-card:hover {
  transform: translateY(-8px);
  border-color: transparent;
  box-shadow: 
    0 24px 48px -12px lch(0% 0 0 / 0.3),
    0 0 0 1px var(--color-primary);
}

.demo-card:hover::before {
  opacity: 0.5;
}

/* Demo Preview Area */
.demo-preview {
  background: var(--color-surface-1);
  border-radius: 12px;
  height: 300px;
  margin-bottom: var(--space-6);
  position: relative;
  overflow: hidden;
}

/* Coming Soon Badge */
.coming-soon-badge {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--gradient-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  border-radius: 100px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  box-shadow: 0 4px 12px -2px lch(55% 65 250 / 0.4);
}
```

### 3. Process Section Visual Flow

```css
/* Process Timeline */
.process-timeline {
  position: relative;
}

/* Connecting Lines */
.process-step:not(:last-child) .step-line {
  position: absolute;
  top: 50%;
  left: 100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    var(--color-primary) 0%,
    var(--color-accent-cyan) 100%
  );
  opacity: 0.3;
  transform: translateY(-50%);
}

/* Step Markers */
.step-marker {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 24px -8px lch(55% 65 250 / 0.4),
    inset 0 2px 4px lch(98% 0 0 / 0.2);
}

.step-number {
  color: white;
  font-weight: 700;
  font-size: var(--font-size-lg);
}

/* Active Step Effect */
.process-step:hover .step-marker {
  transform: scale(1.1);
  box-shadow: 
    0 12px 32px -8px lch(55% 65 250 / 0.6),
    inset 0 2px 4px lch(98% 0 0 / 0.2);
}
```

### 4. Team Section Polish

```css
/* Team Card */
.team-card {
  background: var(--color-surface-2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 300ms ease-out;
}

/* Team Image Treatment */
.team-image {
  height: 320px;
  position: relative;
  overflow: hidden;
  background: var(--gradient-primary);
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: luminosity;
  opacity: 0.9;
  transition: all 300ms ease-out;
}

.team-card:hover .team-image img {
  mix-blend-mode: normal;
  opacity: 1;
  transform: scale(1.05);
}

/* Team Info */
.team-info {
  padding: var(--space-6);
}

.team-name {
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.team-role {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

/* Expertise Tags */
.expertise-tag {
  display: inline-block;
  background: lch(98% 0 0 / 0.1);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-3);
  border-radius: 100px;
  font-size: var(--font-size-xs);
  margin-right: var(--space-2);
  margin-bottom: var(--space-2);
  border: 1px solid lch(98% 0 0 / 0.1);
  transition: all 200ms ease-out;
}

.expertise-tag:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* LinkedIn Link */
.linkedin-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-tertiary);
  margin-top: var(--space-4);
  transition: color 200ms ease-out;
}

.linkedin-link:hover {
  color: var(--color-primary);
}
```

## 🎭 Interactive States

### 1. Focus States

```css
/* Focus Visible */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Custom Focus for Buttons */
.btn:focus-visible {
  outline-offset: 4px;
  box-shadow: 
    0 0 0 4px lch(2% 0 0),
    0 0 0 6px var(--color-primary);
}

/* Skip Link Focus */
.skip-link:focus {
  position: fixed;
  top: var(--space-4);
  left: var(--space-4);
  z-index: 9999;
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
```

### 2. Loading States

```css
/* Skeleton Loading */
.skeleton {
  background: var(--color-surface-2);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    lch(98% 0 0 / 0.05) 50%,
    transparent 100%
  );
  animation: skeleton-wave 1.5s infinite;
}

@keyframes skeleton-wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Button Loading State */
.btn.loading {
  color: transparent;
  pointer-events: none;
}

.btn.loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}