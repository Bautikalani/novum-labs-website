/**
 * CoLab-inspired animation configurations
 * Smooth, professional animations with scroll triggers
 * Updated to use LCH color space where colors are referenced
 */

// Timing functions
export const easings = {
  smooth: [0.65, 0, 0.35, 1],        // CoLab's signature easing
  smoothOut: [0.16, 1, 0.3, 1],      // Deceleration
  smoothIn: [0.87, 0, 0.13, 1],      // Acceleration
  spring: { type: 'spring', damping: 20, stiffness: 100 },
}

// Durations
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
}

// Fade and slide animations
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
}

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
}

// Stagger animations for lists
export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scale animations for cards
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
}

// SVG path drawing animation
export const drawPath = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: durations.verySlow,
        ease: easings.smooth,
      },
      opacity: {
        duration: durations.fast,
      },
    },
  },
}

// Gradient shift animation
export const gradientShift = {
  initial: {
    backgroundPosition: '0% 50%',
  },
  animate: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 5,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

// Hover animations
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: durations.fast,
    ease: easings.smooth,
  },
}

// Updated hover glow to use LCH color
export const hoverGlow = {
  boxShadow: '0 0 30px lch(70% 90 230 / 0.3)',
  transition: {
    duration: durations.fast,
    ease: easings.smooth,
  },
}

// Scroll-based animations
export const scrollReveal = {
  viewport: { 
    once: true, 
    margin: '-100px',
  },
  initial: 'hidden',
  whileInView: 'visible',
}

// Parallax configuration
export const parallaxConfig = {
  slow: { y: [0, -50] },
  medium: { y: [0, -100] },
  fast: { y: [0, -150] },
}

// Connection line animation (CoLab style)
export const connectionLine = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.3,
        duration: durations.slow,
        ease: easings.smooth,
      },
      opacity: {
        delay: i * 0.3,
        duration: durations.fast,
      },
    },
  }),
}