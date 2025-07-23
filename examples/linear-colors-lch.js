/**
 * Linear-inspired color system for Novum Labs
 * Using LCH color space as defined in DESIGN.md
 */

export const colors = {
  // Base colors (LCH format matching DESIGN.md)
  background: 'lch(18% 0 0)',        // Dark background
  foreground: 'lch(95% 0 0)',        // High contrast text
  
  // Text variations
  text: {
    primary: 'lch(95% 0 0)',         // Same as foreground
    secondary: 'lch(70% 0 0 / 0.7)', // Muted text
    muted: 'lch(60% 0 0 / 0.5)',     // Even more muted
  },
  
  // Accent colors (LCH for vibrant, consistent colors)
  accent: {
    primary: 'lch(70% 90 230)',      // Vibrant blue (accent-1)
    secondary: 'lch(65% 80 280)',    // Purple (accent-2)
    green: 'lch(65% 85 142)',        // Success green
    orange: 'lch(70% 75 70)',        // Warning orange
    red: 'lch(60% 85 25)',           // Error red
  },
  
  // Gradient combinations (using LCH for smooth transitions)
  gradients: {
    blurple: 'linear-gradient(135deg, lch(70% 90 230), lch(65% 80 280))',
    greenBlue: 'linear-gradient(135deg, lch(65% 85 142), lch(70% 90 230))',
    orangePurple: 'linear-gradient(135deg, lch(70% 75 70), lch(65% 80 280))',
    mesh: `radial-gradient(at 40% 20%, lch(70% 90 230) 0px, transparent 50%),
           radial-gradient(at 80% 0%, lch(65% 80 280) 0px, transparent 50%),
           radial-gradient(at 0% 50%, lch(65% 85 142) 0px, transparent 50%)`,
  },
  
  // UI elements (neutral grays in LCH)
  border: 'lch(25% 0 0)',            // Subtle border
  card: 'lch(20% 0 0)',              // Card background
  hover: 'lch(30% 0 0)',             // Hover state
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