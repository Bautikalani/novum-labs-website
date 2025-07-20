/**
 * Linear-inspired color system for Novum Labs
 * Based on Linear.app's dark theme palette
 */

export const colors = {
  // Base colors (RGB format for Tailwind)
  background: 'rgb(14 14 16)',        // #0e0e10
  foreground: 'rgb(255 255 255)',     // #ffffff
  
  // Text variations
  text: {
    primary: 'rgb(255 255 255)',      // #ffffff
    secondary: 'rgb(139 139 141)',    // #8b8b8d
    muted: 'rgb(115 115 115)',        // #737373
  },
  
  // Linear's signature colors
  accent: {
    blue: 'rgb(94 106 210)',          // #5e6ad2
    purple: 'rgb(176 123 236)',       // #b07bec
    green: 'rgb(38 176 130)',         // #26b082
    orange: 'rgb(242 153 74)',        // #f2994a
    red: 'rgb(235 87 87)',            // #eb5757
  },
  
  // Gradient combinations (Linear style)
  gradients: {
    blurple: 'linear-gradient(135deg, rgb(94 106 210), rgb(176 123 236))',
    greenBlue: 'linear-gradient(135deg, rgb(38 176 130), rgb(94 106 210))',
    orangePurple: 'linear-gradient(135deg, rgb(242 153 74), rgb(176 123 236))',
    mesh: `radial-gradient(at 40% 20%, rgb(94 106 210) 0px, transparent 50%),
           radial-gradient(at 80% 0%, rgb(176 123 236) 0px, transparent 50%),
           radial-gradient(at 0% 50%, rgb(38 176 130) 0px, transparent 50%)`,
  },
  
  // UI elements
  border: 'rgb(39 39 42)',            // #27272a
  card: 'rgb(24 24 27)',              // #18181b
  hover: 'rgb(39 39 42)',             // #27272a
}

// CSS custom properties for runtime theming
export const cssVariables = `
  :root {
    --background: 14 14 16;
    --foreground: 255 255 255;
    --muted: 139 139 141;
    --accent-blue: 94 106 210;
    --accent-purple: 176 123 236;
    --accent-green: 38 176 130;
    --accent-orange: 242 153 74;
    --border: 39 39 42;
    --card: 24 24 27;
  }
`

// Tailwind config extension
export const tailwindColors = {
  background: 'rgb(var(--background) / <alpha-value>)',
  foreground: 'rgb(var(--foreground) / <alpha-value>)',
  muted: 'rgb(var(--muted) / <alpha-value>)',
  'accent-blue': 'rgb(var(--accent-blue) / <alpha-value>)',
  'accent-purple': 'rgb(var(--accent-purple) / <alpha-value>)',
  'accent-green': 'rgb(var(--accent-green) / <alpha-value>)',
  'accent-orange': 'rgb(var(--accent-orange) / <alpha-value>)',
} 