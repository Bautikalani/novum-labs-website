# Examples Directory

This directory contains reusable patterns and components that demonstrate the Novum Labs website design system, incorporating Linear's color palette and CoLab's animation style.

## Structure

```
examples/
├── components/
│   ├── section-wrapper.jsx      # Base section with scroll animations
│   ├── animated-card.jsx        # Card with hover/reveal animations
│   ├── gradient-text.jsx        # Linear-style gradient text
│   └── connection-line.jsx      # SVG path animation component
├── hooks/
│   ├── hook-scroll-progress.js  # Track scroll position for animations
│   └── use-intersection.js      # Trigger animations on viewport entry
├── lib/
│   ├── linear-colors.js        # Linear-inspired color system
│   ├── colab-animations.js     # CoLab-style animation configs
│   └── utils.js                # Utility functions
└── styles/
    └── gradients.css           # Reusable gradient classes
```

## Color System (Linear-inspired)

Our color palette uses CSS custom properties for easy theming:

```css
--background: 14 14 16        /* #0e0e10 - Almost black */
--foreground: 255 255 255     /* #ffffff - Pure white */
--muted: 139 139 141          /* #8b8b8d - Muted gray */
--accent-blue: 94 106 210     /* #5e6ad2 - Linear blue */
--accent-purple: 176 123 236  /* #b07bec - Linear purple */
--accent-green: 38 176 130    /* #26b082 - Success green */
--accent-orange: 242 153 74   /* #f2994a - Warning orange */
```

## Animation Patterns (CoLab-inspired)

### 1. Scroll-triggered Reveals
- Elements fade in and slide up as they enter viewport
- Stagger animations for multiple elements
- Once-only triggers for performance

### 2. SVG Path Animations
- Connection lines that draw on scroll
- Progress-based animation timing
- Smooth cubic-bezier easing

### 3. Gradient Animations
- Subtle gradient shifts on hover
- Animated mesh gradients for backgrounds
- Color transitions using CSS custom properties

### 4. Micro-interactions
- Smooth hover states with scale and glow
- Magnetic button effects
- Parallax scrolling for depth

## Usage

Import these examples as starting points for components:

```javascript
// Use the section wrapper for consistent spacing and animations
import { SectionWrapper } from '@/examples/components/section-wrapper'

// Apply Linear's color system
import { colors } from '@/examples/lib/linear-colors'

// Use animation configurations
import { fadeInUp, staggerChildren } from '@/examples/lib/colab-animations'
```

## Key Principles

1. **Performance First** - All animations use CSS transforms and opacity
2. **Accessibility** - Respect prefers-reduced-motion
3. **Consistency** - Use the same timing functions throughout
4. **Subtlety** - Animations enhance, not distract