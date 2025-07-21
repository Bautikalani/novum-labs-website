# Tailwind CSS v4.1 Documentation

**Source**: https://tailwindcss.com/docs/v4
**Scraped**: [Current Date]

## What's New in v4

Tailwind CSS v4 is a ground-up rewrite with major performance improvements and new features.

## Key Features

### 5x Faster Builds
- New architecture with Rust-based compiler
- Instant hot reload
- Optimized for large projects

### Automatic Content Detection
No need to configure content paths:

```js
// tailwind.config.js - v4 simplified
export default {
  theme: {
    extend: {
      // your customizations
    }
  }
}
```

### Native Text Shadow Support
```html
<h1 class="text-shadow-sm">Small shadow</h1>
<h1 class="text-shadow-md">Medium shadow</h1>
<h1 class="text-shadow-lg">Large shadow</h1>
<h1 class="text-shadow-xl">Extra large shadow</h1>
```

### Container Queries
Built-in support for container queries:

```html
<div class="@container">
  <div class="@lg:grid-cols-3 grid gap-4">
    <!-- Responds to container size, not viewport -->
  </div>
</div>
```

## New Color System with LCH

Native LCH color support:

```css
/* Define colors in LCH */
:root {
  --color-primary: lch(52% 76 258);
  --color-accent: lch(70% 90 230);
}
```

```html
<div class="bg-[lch(52%_76_258)]">LCH color</div>
```

## Enhanced Dark Mode

More flexible dark mode with color-scheme support:

```html
<!-- Automatic dark mode -->
<html class="dark">
  <body class="bg-white dark:bg-black">
    <!-- Content -->
  </body>
</html>
```

## New Utilities

### Subgrid
```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 grid grid-cols-subgrid">
    <!-- Aligns with parent grid -->
  </div>
</div>
```

### Text Wrap
```html
<p class="text-balance">Balanced text wrapping</p>
<p class="text-pretty">Pretty text wrapping</p>
```

### Logical Properties
```html
<div class="ms-4 me-4">Margin start/end</div>
<div class="ps-4 pe-4">Padding start/end</div>
<div class="bs-4 be-4">Border start/end</div>
```

## Variable Support

Use CSS variables directly:

```html
<div class="bg-[var(--my-color)] text-[var(--my-text)]">
  Custom variables
</div>
```

## Animation Improvements

### New Animation Utilities
```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up">Slide up</div>
<div class="animate-scale">Scale</div>
```

### Animation Timeline
```html
<div class="animate-scroll-fade opacity-0">
  Fades in on scroll
</div>
```

## Component Patterns

### Card Component
```html
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 
            hover:shadow-xl transition-shadow duration-300">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">Card content</p>
</div>
```

### Button Component
```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-md 
               hover:bg-blue-700 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:ring-offset-2
               disabled:opacity-50 disabled:cursor-not-allowed">
  Click me
</button>
```

## Performance Optimizations

### Just-in-Time All The Time
- No purge configuration needed
- Generates only used styles
- Perfect for development and production

### Layer Control
```css
@layer base {
  h1 {
    @apply text-4xl font-bold;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded;
  }
}
```

## Migration from v3

### Breaking Changes
1. **Node 18+ required**
2. **New config format** - Simplified configuration
3. **Some utilities renamed** - Check migration guide
4. **PostCSS 8+ required**

### Config Migration
```js
// v3
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}

// v4
export default {
  theme: { extend: {} },
  // content auto-detected!
}
```

## Best Practices for v4

1. **Use native CSS features** - Variables, container queries
2. **Leverage new color system** - LCH for better colors
3. **Optimize with layers** - Better performance
4. **Use logical properties** - Better RTL support
5. **Embrace simplicity** - Less configuration needed