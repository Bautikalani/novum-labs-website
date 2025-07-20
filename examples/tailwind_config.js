/**
 * Tailwind configuration extensions
 * Add these to your tailwind.config.js
 */

export const tailwindExtensions = {
  colors: {
    // Linear-inspired colors
    background: 'rgb(14 14 16)',
    foreground: 'rgb(255 255 255)',
    muted: 'rgb(139 139 141)',
    border: 'rgb(39 39 42)',
    card: 'rgb(24 24 27)',
    
    // Accent colors
    'accent-blue': 'rgb(94 106 210)',
    'accent-purple': 'rgb(176 123 236)',
    'accent-green': 'rgb(38 176 130)',
    'accent-orange': 'rgb(242 153 74)',
  },
  
  animation: {
    'gradient-shift': 'gradient-shift 3s ease infinite',
    'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'float': 'float 6s ease-in-out infinite',
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
  },
  
  backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    'mesh-gradient': `
      radial-gradient(at 40% 20%, rgb(94 106 210) 0px, transparent 50%),
      radial-gradient(at 80% 0%, rgb(176 123 236) 0px, transparent 50%),
      radial-gradient(at 0% 50%, rgb(38 176 130) 0px, transparent 50%)`,
  },
} 