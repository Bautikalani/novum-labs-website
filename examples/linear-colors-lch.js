/**
 * Linear-inspired color system for Novum Labs
 * Using LCH color space as defined in DESIGN.md
 */

export const colors = {
  // Linear's Exact Values
  background: 'lch(4.7% 0.6 265)',     // Midnight Black
  foreground: 'lch(94.4% 1.3 265)',    // Near White
  
  // Surface Elevation Hierarchy
  surface: {
    1: 'lch(4.7% 0.6 265)',  // Base
    2: 'lch(7.5% 0.6 265)',  // Dark Charcoal
    3: 'lch(10% 0.8 265)',   // Elevated
    4: 'lch(12.5% 1.0 265)', // Higher
    5: 'lch(15% 1.2 265)',   // Highest
  },
  
  // Linear's Signature Colors
  accent: {
    blue: 'lch(41% 35.7 262)',    // Signature Blue
    coral: 'lch(53.7% 51.7 15)',  // Coral Red
    rose: 'lch(45.2% 45.8 348)',  // Rose Purple
    green: 'lch(67.9% 53.5 153)', // Success Green
  },
  
  // Text Opacity System
  text: {
    high: 'lch(94.4% 1.3 265)',         // 100%
    medium: 'lch(94.4% 1.3 265 / 0.85)', // 85%
    low: 'lch(94.4% 1.3 265 / 0.60)',    // 60%
    subtle: 'lch(94.4% 1.3 265 / 0.40)', // 40%
    ghost: 'lch(94.4% 1.3 265 / 0.30)',  // 30%
  },
  
  // Linear's Gradient System
  gradients: {
    linear: 'linear-gradient(135deg, lch(67.9% 53.5 239), lch(86.7% 70.9 153), lch(95.2% 29.1 192), lch(65.5% 79.3 338))',
    mesh: `radial-gradient(at 40% 20%, lch(67.9% 53.5 239) 0px, transparent 50%),
           radial-gradient(at 80% 0%, lch(86.7% 70.9 153) 0px, transparent 50%),
           radial-gradient(at 0% 50%, lch(95.2% 29.1 192) 0px, transparent 50%),
           radial-gradient(at 60% 80%, lch(65.5% 79.3 338) 0px, transparent 50%)`,
  },
  
  // UI elements with Linear's hierarchy
  border: 'lch(7.5% 0.6 265 / 0.3)',     // Subtle border
  card: 'lch(7.5% 0.6 265)',             // Card background
  hover: 'lch(12.5% 1.0 265)',           // Hover state
}

// CSS custom properties for runtime theming (LCH values)
export const cssVariables = `
  :root[data-theme='dark'] {
    --bg-main: 18% 0 0;
    --fg-high: 95% 0 0;
    --fg-muted: 70% 0 0 / 0.7;
    --accent-1: 70% 90 230;
    --accent-2: 65% 80 280;
    --border: 25% 0 0;
    --card: 20% 0 0;
  }
  
  :root[data-theme='light'] {
    --bg-main: 98% 0 0;
    --fg-high: 10% 0 0;
    --fg-muted: 35% 0 0 / 0.8;
    --accent-1: 70% 90 230;
    --accent-2: 65% 80 280;
    --border: 90% 0 0;
    --card: 95% 0 0;
  }
`

// Tailwind config extension (using LCH with CSS variables)
export const tailwindColors = {
  bg: 'lch(var(--bg-main) / <alpha-value>)',
  fg: 'lch(var(--fg-high) / <alpha-value>)',
  muted: 'lch(var(--fg-muted) / <alpha-value>)',
  accent: 'lch(var(--accent-1) / <alpha-value>)',
  accent2: 'lch(var(--accent-2) / <alpha-value>)',
  border: 'lch(var(--border) / <alpha-value>)',
  card: 'lch(var(--card) / <alpha-value>)',
}