import { type Variants } from 'motion/react'

// Animation timing functions from DESIGN.md Section 6
export const easings = {
  smooth: [0.65, 0, 0.35, 1],
  out: [0.16, 1, 0.3, 1],
  in: [0.87, 0, 0.13, 1],
} as const

// Duration constants from DESIGN.md
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
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

// Staggered children animation
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

// Performance optimization settings
export const optimizedMotionConfig = {
  // Use GPU acceleration
  style: { willChange: 'transform, opacity' },
  // Enable hardware acceleration
  transformTemplate: ({ x, y, scale }: any) => 
    `translate3d(${x}, ${y}, 0) scale(${scale})`,
}