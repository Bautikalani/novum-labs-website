# Tailwind CSS v4.1 Documentation

## What's New in Tailwind CSS v4

Tailwind CSS v4 represents a major evolution with a new engine, zero-configuration setup, and enhanced performance.

## Key Changes and Features

### 1. Zero Configuration
No more configuration files needed for basic setups:

```css
/* styles.css */
@import "tailwindcss";

/* That's it! No tailwind.config.js required */
```

### 2. CSS-First Configuration
Configure Tailwind using CSS custom properties:

```css
@import "tailwindcss";

/* Custom theme configuration */
@theme {
  --font-family-display: "Satoshi", "sans-serif";
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  
  --color-neon-pink: oklch(71.5% 0.25 360);
  --color-neon-lime: oklch(91.5% 0.258 129);
  
  --breakpoint-3xs: 20rem;
  --breakpoint-2xs: 24rem;
}

/* Use your custom values */
.title {
  font-family: var(--font-family-display);
  color: var(--color-neon-pink);
}
```

### 3. New Color Space Support
Enhanced color system with modern color spaces:

```css
@theme {
  /* OKLCH colors for better perceptual uniformity */
  --color-primary: oklch(59% 0.25 262);
  --color-secondary: oklch(85% 0.15 142);
  
  /* P3 colors for wide gamut displays */
  --color-accent: color(display-p3 1 0.5 0);
  
  /* HSL with modern syntax */
  --color-surface: hsl(210 25% 98%);
}
```

### 4. Container Queries
Built-in container query support:

```html
<div class="@container">
  <div class="@lg:grid @lg:grid-cols-2">
    <!-- Content that responds to container size -->
  </div>
</div>
```

```css
/* Custom container queries */
@container (min-width: 400px) {
  .card {
    @apply grid grid-cols-2;
  }
}
```

### 5. New Engine Performance
Dramatically improved build times and smaller CSS output:

```bash
# v3: 450ms build time, 150KB CSS
# v4: 125ms build time, 89KB CSS
```

## Installation and Setup

### 1. Install Tailwind CSS v4
```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

### 2. PostCSS Configuration
```javascript
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### 3. Import Tailwind
```css
/* styles.css */
@import "tailwindcss";
```

### 4. Next.js Integration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
}

export default nextConfig
```

## Advanced Configuration

### 1. Custom Theme Extension
```css
@import "tailwindcss";

@theme {
  /* Extend font families */
  --font-family-sans: "Inter Variable", ui-sans-serif, system-ui;
  --font-family-display: "Cal Sans", var(--font-family-sans);
  
  /* Custom spacing scale */
  --spacing-18: 4.5rem;
  --spacing-88: 22rem;
  
  /* Design tokens */
  --color-brand-50: #f0f9ff;
  --color-brand-500: #3b82f6;
  --color-brand-900: #1e3a8a;
  
  /* Custom shadows */
  --shadow-glow: 0 0 20px color-mix(in oklch, var(--color-brand-500) 50%, transparent);
  
  /* Animation timing */
  --animate-duration-slow: 1000ms;
  --animate-timing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 2. Component Patterns
```css
@import "tailwindcss";

/* Component-style utilities */
@utility btn {
  @apply inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors;
  
  &.btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700;
  }
  
  &.btn-secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
  }
}

/* Usage in HTML */
/* <button class="btn btn-primary">Click me</button> */
```

### 3. Responsive Design Enhancements
```css
@theme {
  /* Custom breakpoints */
  --breakpoint-xs: 475px;
  --breakpoint-3xl: 1920px;
  --breakpoint-4xl: 2560px;
}

/* Usage */
.responsive-grid {
  @apply grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4;
}
```

## Modern CSS Features

### 1. CSS Grid Enhancements
```html
<!-- Subgrid support -->
<div class="grid grid-cols-3 grid-rows-subgrid">
  <div class="contents">
    <h2>Title</h2>
    <p>Content</p>
    <button>Action</button>
  </div>
</div>

<!-- Grid template areas -->
<div class="grid grid-areas-[header_header][sidebar_main][footer_footer]">
  <header class="grid-area-[header]">Header</header>
  <aside class="grid-area-[sidebar]">Sidebar</aside>
  <main class="grid-area-[main]">Main</main>
  <footer class="grid-area-[footer]">Footer</footer>
</div>
```

### 2. Container Queries in Practice
```html
<!-- Card that adapts to its container -->
<div class="@container">
  <div class="p-4 @md:p-6 @lg:flex @lg:items-center @lg:gap-6">
    <img class="w-full @lg:w-48 @lg:flex-shrink-0" src="..." alt="...">
    <div>
      <h3 class="text-lg @lg:text-xl font-semibold">Title</h3>
      <p class="text-sm @lg:text-base text-gray-600">Description</p>
    </div>
  </div>
</div>
```

### 3. Advanced Color Mixing
```css
@theme {
  /* Color mixing utilities */
  --color-surface-mixed: color-mix(in oklch, var(--color-primary) 10%, white);
  --color-border-subtle: color-mix(in oklch, var(--color-gray-200) 50%, transparent);
}

/* Dynamic color variations */
.card {
  background: color-mix(in oklch, theme(colors.blue.500) 5%, white);
  border: 1px solid color-mix(in oklch, theme(colors.blue.500) 20%, transparent);
}
```

## Performance Optimizations

### 1. Purging and Tree Shaking
```javascript
// Automatic in v4 - no configuration needed
// Unused styles are automatically removed
```

### 2. CSS Layer Management
```css
@import "tailwindcss";

/* Custom layers for better cascade control */
@layer base {
  html {
    font-family: theme(fontFamily.sans);
    color: theme(colors.gray.900);
  }
}

@layer components {
  .card {
    @apply rounded-lg border border-gray-200 p-6 shadow-sm;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### 3. Critical CSS Extraction
```css
/* Automatic critical CSS extraction */
@import "tailwindcss" layer(base, components);
@import "tailwindcss" layer(utilities) (preload);
```

## Component Library Integration

### 1. Design System Tokens
```css
@theme {
  /* Typography scale */
  --font-size-2xs: 0.625rem;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  
  /* Semantic colors */
  --color-success: oklch(65% 0.15 142);
  --color-warning: oklch(75% 0.15 85);
  --color-error: oklch(55% 0.20 29);
  --color-info: oklch(65% 0.15 252);
  
  /* Component-specific tokens */
  --color-button-primary: var(--color-brand-600);
  --color-button-primary-hover: var(--color-brand-700);
  --color-input-border: var(--color-gray-300);
  --color-input-border-focus: var(--color-brand-500);
}
```

### 2. Component Utilities
```css
/* Button component styles */
@utility btn {
  @apply inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2;
  
  /* Size variants */
  &.btn-sm {
    @apply px-3 py-1.5 text-sm;
  }
  
  &.btn-md {
    @apply px-4 py-2 text-base;
  }
  
  &.btn-lg {
    @apply px-6 py-3 text-lg;
  }
  
  /* Color variants */
  &.btn-primary {
    @apply bg-brand-600 border-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500;
  }
  
  &.btn-outline {
    @apply border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500;
  }
}
```

## Animation and Transitions

### 1. Enhanced Animation Utilities
```css
@theme {
  /* Custom animation durations */
  --animate-duration-75: 75ms;
  --animate-duration-200: 200ms;
  --animate-duration-400: 400ms;
  --animate-duration-slow: 1000ms;
  
  /* Custom easing functions */
  --animate-timing-ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --animate-timing-ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --animate-timing-ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Smooth scroll utilities */
.scroll-smooth {
  scroll-behavior: smooth;
  scroll-padding-top: theme(spacing.20);
}

/* View transitions */
.page-transition {
  view-transition-name: page;
}
```

### 2. Modern Animation Features
```html
<!-- Scroll-triggered animations -->
<div class="animate-on-scroll animate-fade-in-up">
  Content that animates when scrolled into view
</div>

<!-- CSS @starting-style animations -->
<div class="animate-fade-in">
  Content with entrance animation
</div>
```

```css
@utility animate-fade-in {
  animation: fade-in 0.5s ease-out;
  
  @starting-style {
    opacity: 0;
    transform: translateY(1rem);
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Best Practices for v4

### 1. Migration from v3
```bash
# Install codemod for easier migration
npx @tailwindcss/upgrade

# Update configuration to CSS-first approach
```

```css
/* Before: tailwind.config.js */
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3b82f6',
//       },
//     },
//   },
// }

/* After: styles.css */
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
}
```

### 2. Organizing Custom Styles
```css
/* styles/base.css */
@import "tailwindcss";

@theme {
  /* Design tokens */
  --color-brand-50: #eff6ff;
  --color-brand-500: #3b82f6;
  --color-brand-950: #172554;
}

@layer base {
  /* Global styles */
  body {
    @apply font-sans text-gray-900 bg-white;
  }
}

@layer components {
  /* Reusable components */
  .card {
    @apply rounded-xl border border-gray-200 bg-white p-6 shadow-sm;
  }
}

@layer utilities {
  /* Custom utilities */
  .text-balance {
    text-wrap: balance;
  }
}
```

### 3. TypeScript Integration
```typescript
// types/tailwind.d.ts
declare module 'tailwindcss/theme' {
  interface CustomTheme {
    colors: {
      brand: {
        50: string
        500: string
        950: string
      }
    }
  }
}
```

### 4. Performance Monitoring
```javascript
// next.config.js
const nextConfig = {
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        '*.css': {
          loaders: ['@tailwindcss/postcss'],
          as: '*.css',
        },
      },
    },
  },
}
```

This documentation covers the essential features and migration path for Tailwind CSS v4, focusing on the new CSS-first approach and modern web platform features.