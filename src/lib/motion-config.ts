import { type Variants } from 'motion/react'

// Animation timing functions from DESIGN.md Section 6
export const easings = {
  smooth: [0.65, 0, 0.35, 1],
  out: [0.16, 1, 0.3, 1],
  in: [0.87, 0, 0.13, 1],
} as const

// Duration constants from DESIGN.md - Balanced for performance and premium feel
export const durations = {
  fast: 0.2,      // Keep fast for micro-interactions
  normal: 0.4,    // Balanced for deliberate feel with good performance
  slow: 0.6,      // Premium transitions without blocking
  slower: 0.9,    // Very relaxed animations
  relaxed: 1.1,   // Extremely slow, premium animations
} as const

// Scroll-triggered reveal animation (CoLab-inspired)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: durations.fast,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.out,
    },
  },
}

// Staggered children animation - Slower for more premium feel
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,  // Increased from 0.1s for more deliberate reveals
      delayChildren: 0.3,     // Increased from 0.2s for more anticipation
    },
  },
}

// Card hover animation (subtle scale)
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
}

// Button magnetic effect
export const buttonMagnetic: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.out,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: easings.in,
    },
  },
}

// Transform-based focus animation for hero heading (performance optimized)
export const blurToFocus: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,      // Subtle scale instead of blur for better performance
    y: 10,            // Small vertical movement for focus effect
    transition: {
      duration: durations.fast,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1, // Keep 1 second as requested
      ease: easings.out,
    },
  },
}

// Performance optimization settings
export const optimizedMotionConfig = {
  // Use GPU acceleration with containment
  style: { 
    willChange: 'transform, opacity',
    contain: 'layout style paint'  // Add containment for better performance
  },
  // Enable hardware acceleration
  transformTemplate: ({ x, y, scale }: any) => 
    `translate3d(${x || 0}px, ${y || 0}px, 0) scale(${scale || 1})`,
}

// Performance optimization for transform animations (replaces filter config)
export const transformMotionConfig = {
  // Use GPU acceleration for transform effects
  style: { 
    willChange: 'transform, opacity',
    contain: 'layout style paint'
  },
}