import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Linear's Core System
        background: 'lch(var(--color-background) / <alpha-value>)',
        foreground: 'lch(var(--color-foreground) / <alpha-value>)',
        
        // Linear's Surface Elevation
        surface: {
          1: 'lch(4.7% 0.6 265 / <alpha-value>)',
          2: 'lch(7.5% 0.6 265 / <alpha-value>)',
          3: 'lch(10% 0.8 265 / <alpha-value>)',
          4: 'lch(12.5% 1.0 265 / <alpha-value>)',
          5: 'lch(15% 1.2 265 / <alpha-value>)',
        },
        
        // Linear's Accent Colors
        accent: {
          blue: 'lch(41% 35.7 262 / <alpha-value>)',
          coral: 'lch(53.7% 51.7 15 / <alpha-value>)',
          rose: 'lch(45.2% 45.8 348 / <alpha-value>)',
          green: 'lch(67.9% 53.5 153 / <alpha-value>)',
        },
        
        // Linear's Text Variations
        text: {
          high: 'lch(94.4% 1.3 265 / <alpha-value>)',
          medium: 'lch(94.4% 1.3 265 / 0.85)',
          low: 'lch(94.4% 1.3 265 / 0.60)',
          subtle: 'lch(94.4% 1.3 265 / 0.40)',
          ghost: 'lch(94.4% 1.3 265 / 0.30)',
        },
        
        // Linear's Interactive States (L+5, C+10 formula)
        hover: {
          blue: 'lch(46% 45.7 262 / <alpha-value>)',
          coral: 'lch(58.7% 61.7 15 / <alpha-value>)',
          surface: 'lch(12.5% 1.0 265 / <alpha-value>)',
        },
        
        // Backward compatibility with shadcn/ui
        primary: 'lch(var(--color-primary) / <alpha-value>)',
        secondary: 'lch(var(--color-secondary) / <alpha-value>)',
        muted: 'lch(var(--color-muted) / <alpha-value>)',
        border: 'lch(var(--color-border) / <alpha-value>)',
        card: 'lch(var(--color-card) / <alpha-value>)',
      },
      
      // Linear's Gradient System
      backgroundImage: {
        'gradient-linear': 'linear-gradient(135deg, lch(67.9% 53.5 239), lch(86.7% 70.9 153), lch(95.2% 29.1 192), lch(65.5% 79.3 338))',
        'gradient-mesh': `
          radial-gradient(at 40% 20%, lch(67.9% 53.5 239) 0px, transparent 50%),
          radial-gradient(at 80% 0%, lch(86.7% 70.9 153) 0px, transparent 50%),
          radial-gradient(at 0% 50%, lch(95.2% 29.1 192) 0px, transparent 50%),
          radial-gradient(at 60% 80%, lch(65.5% 79.3 338) 0px, transparent 50%)
        `,
      }
    },
  },
  plugins: [],
}
export default config