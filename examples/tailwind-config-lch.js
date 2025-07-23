/**
 * Tailwind configuration extensions
 * Updated to use LCH color space as per DESIGN.md
 */

export const tailwindExtensions = {
  colors: {
    // Using CSS variables with LCH color space
    bg: 'lch(var(--bg-main) / <alpha-value>)',
    fg: 'lch(var(--fg-high) / <alpha-value>)',
    muted: 'lch(var(--fg-muted) / <alpha-value>)',
    accent: 'lch(var(--accent-1) / <alpha-value>)',
    accent2: 'lch(var(--accent-2) / <alpha-value>)',
    
    // UI element colors in LCH
    border: 'lch(25% 0 0 / <alpha-value>)',
    card: 'lch(20% 0 0 / <alpha-value>)',
    
    // Direct LCH accent colors for specific uses
    'accent-blue': 'lch(70% 90 230 / <alpha-value>)',
    'accent-purple': 'lch(65% 80 280 / <alpha-value>)',
    'accent-green': 'lch(65% 85 142 / <alpha-value>)',
    'accent-orange': 'lch(70% 75 70 / <alpha-value>)',
  },
  
  animation: {
    'gradient-shift': 'gradient-shift 3s ease infinite',
    'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'float': 'float 6s ease-in-out infinite',
    'draw-line': 'draw-line 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards',
  },
  
  keyframes: {
    'gradient-shift': {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
    'pulse-glow': {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    'float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    'draw-line': {
      '0%': { strokeDashoffset: '1000' },
      '100%': { strokeDashoffset: '0' },
    },
  },
  
  backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    'mesh-gradient': `
      radial-gradient(at 40% 20%, lch(70% 90 230) 0px, transparent 50%),
      radial-gradient(at 80% 0%, lch(65% 80 280) 0px, transparent 50%),
      radial-gradient(at 0% 50%, lch(65% 85 142) 0px, transparent 50%)`,
  },
}