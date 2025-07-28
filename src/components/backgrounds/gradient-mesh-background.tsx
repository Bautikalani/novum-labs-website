'use client'

import { motion, useReducedMotion } from 'motion/react'
import { type CSSProperties, memo, useMemo } from 'react'

/**
 * Linear-style Animated Gradient Mesh Background Component
 * 
 * A sophisticated multi-layer gradient background with subtle, slow animations
 * that creates depth without distraction. Inspired by Linear's design language.
 * 
 * Design Principles:
 * - Multiple gradient layers for depth perception
 * - Slow animation cycles (30-60 seconds) for subtlety
 * - Carefully chosen blend modes for color richness
 * - Performance optimized with GPU acceleration
 * - Respects reduced motion preferences
 * 
 * @example
 * <GradientMeshBackground 
 *   variant="hero"
 *   opacity={0.4}
 *   blur={120}
 * />
 */

interface GradientMeshBackgroundProps {
  /** Predefined gradient variants */
  variant?: 'hero' | 'subtle' | 'vibrant'
  /** Overall opacity of the gradient mesh */
  opacity?: number
  /** Blur amount in pixels for softer gradients */
  blur?: number
  /** Additional CSS classes */
  className?: string
  /** Whether to enable animations */
  animate?: boolean
}

interface GradientLayer {
  gradient: string
  animationProps?: Record<string, any>
  duration: number
  delay: number
}

interface GradientConfig {
  layers: GradientLayer[]
}

// Memoized gradient layer component for performance
const GradientLayer = memo(({ 
  layer, 
  index, 
  shouldAnimate 
}: { 
  layer: GradientLayer
  index: number
  shouldAnimate: boolean 
}) => {
  const layerStyle = useMemo(() => ({
    background: layer.gradient,
    // Use different blend modes for richer color mixing
    mixBlendMode: index % 2 === 0 ? 'normal' : 'screen',
    opacity: index === 0 ? 1 : Math.max(0.4, 0.7 - (index * 0.1)), // Gradual opacity decrease with minimum
  }), [layer.gradient, index])

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={layerStyle as any}
      animate={shouldAnimate ? layer.animationProps : undefined}
      transition={{
        duration: layer.duration,
        delay: layer.delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: [0.45, 0.05, 0.55, 0.95], // Custom easing for organic movement
      }}
    />
  )
})

GradientLayer.displayName = 'GradientLayer'

export const GradientMeshBackground = memo(function GradientMeshBackground({
  variant = 'hero',
  opacity = 0.4,
  blur = 120,
  className = '',
  animate = true,
}: GradientMeshBackgroundProps) {
  // Respect user's motion preferences
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = animate && !shouldReduceMotion
  
  // Gradient configurations based on Linear's color system
  const gradientConfigs: Record<string, GradientConfig> = useMemo(() => ({
    hero: {
      // Primary hero gradient - uses all 4 Linear gradient colors
      layers: [
        {
          // Layer 1: Blue dominant (top-left)
          gradient: 'radial-gradient(ellipse 50rem 37.5rem at 25% 20%, var(--gradient-blue), transparent 40%)',
          animationProps: {
            x: ['0%', '10%', '0%'],
            y: ['0%', '-5%', '0%'],
            scale: [1, 1.1, 1],
          },
          duration: 45,
          delay: 0,
        },
        {
          // Layer 2: Green accent (top-right)
          gradient: 'radial-gradient(ellipse 37.5rem 50rem at 75% 10%, var(--gradient-green), transparent 45%)',
          animationProps: {
            x: ['0%', '-8%', '0%'],
            y: ['0%', '8%', '0%'],
            scale: [1, 1.05, 1],
          },
          duration: 50,
          delay: 5,
        },
        {
          // Layer 3: Cyan depth (bottom-left)
          gradient: 'radial-gradient(ellipse 43.75rem 43.75rem at 15% 70%, var(--gradient-cyan), transparent 50%)',
          animationProps: {
            x: ['0%', '12%', '0%'],
            y: ['0%', '-10%', '0%'],
            scale: [1.05, 0.95, 1.05],
          },
          duration: 55,
          delay: 10,
        },
        {
          // Layer 4: Pink highlight (bottom-right)
          gradient: 'radial-gradient(ellipse 31.25rem 37.5rem at 85% 80%, var(--gradient-pink), transparent 35%)',
          animationProps: {
            x: ['0%', '-15%', '0%'],
            y: ['0%', '-8%', '0%'],
            scale: [0.9, 1.15, 0.9],
          },
          duration: 40,
          delay: 15,
        },
      ],
    },
    subtle: {
      // More subdued gradient for sections
      layers: [
        {
          gradient: 'radial-gradient(ellipse 62.5rem 50rem at 30% 30%, var(--gradient-blue), transparent 60%)',
          animationProps: {
            x: ['0%', '5%', '0%'],
            y: ['0%', '-3%', '0%'],
            scale: [1, 1.02, 1],
          },
          duration: 60,
          delay: 0,
        },
        {
          gradient: 'radial-gradient(ellipse 50rem 62.5rem at 70% 70%, var(--gradient-green), transparent 65%)',
          animationProps: {
            x: ['0%', '-5%', '0%'],
            y: ['0%', '3%', '0%'],
            scale: [1.02, 0.98, 1.02],
          },
          duration: 55,
          delay: 8,
        },
      ],
    },
    vibrant: {
      // Higher contrast for CTAs
      layers: [
        {
          gradient: 'radial-gradient(ellipse 25rem 25rem at 20% 30%, var(--gradient-pink), transparent 30%)',
          animationProps: {
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1],
          },
          duration: 30,
          delay: 0,
        },
        {
          gradient: 'radial-gradient(ellipse 31.25rem 25rem at 80% 60%, var(--gradient-cyan), transparent 35%)',
          animationProps: {
            rotate: [0, -15, 0],
            scale: [1.1, 0.9, 1.1],
          },
          duration: 35,
          delay: 5,
        },
        {
          gradient: 'radial-gradient(ellipse 28.125rem 28.125rem at 50% 50%, var(--gradient-blue), transparent 40%)',
          animationProps: {
            rotate: [0, 20, 0],
            scale: [0.9, 1.1, 0.9],
          },
          duration: 40,
          delay: 10,
        },
      ],
    },
  }), [])

  const config = gradientConfigs[variant]

  // Base container styles
  const containerStyle: CSSProperties = useMemo(() => ({
    opacity,
    filter: `blur(${blur / 16}rem)`, // Convert px to rem (120px = 7.5rem)
    mixBlendMode: 'normal' as const,
    // Add transform3d for better performance
    transform: 'translateZ(0)',
  }), [opacity, blur])

  // Texture overlay style
  const textureStyle: CSSProperties = useMemo(() => ({
    backgroundImage: `
      radial-gradient(circle at 25% 25%, transparent 0%, var(--color-background) 50%),
      radial-gradient(circle at 75% 75%, transparent 0%, var(--color-background) 50%)
    `,
    opacity: 0.5,
    mixBlendMode: 'multiply' as const,
  }), [])

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={containerStyle}
      aria-hidden="true"
      role="presentation"
    >
      {config.layers.map((layer, index) => (
        <GradientLayer
          key={`${variant}-${index}`}
          layer={layer}
          index={index}
          shouldAnimate={shouldAnimate}
        />
      ))}
      
      {/* Additional texture layer for depth */}
      <div 
        className="absolute inset-0"
        style={textureStyle}
      />
    </div>
  )
})

/**
 * Design Specifications:
 * 
 * Animation Parameters:
 * - Cycle Duration: 30-60 seconds per layer
 * - Easing: Custom cubic-bezier for organic feel  
 * - Transform Types: translate (x,y), scale, rotate
 * - Staggered Delays: 5-15 second offsets between layers
 * 
 * Color System:
 * - Uses CSS variables from Linear's gradient system:
 *   --gradient-blue: lch(67.9% 53.5 239)
 *   --gradient-green: lch(86.7% 70.9 153)
 *   --gradient-cyan: lch(95.2% 29.1 192)
 *   --gradient-pink: lch(65.5% 79.3 338)
 * 
 * Blend Modes:
 * - Layer 1 & 3: normal (base colors)
 * - Layer 2 & 4: screen (brightening effect)
 * - Texture overlay: multiply (darkening for depth)
 * 
 * Performance Optimizations:
 * - GPU acceleration via will-change: transform
 * - Transform-only animations (no repaints)
 * - Respects prefers-reduced-motion
 * - Lazy rendering with pointer-events: none
 * - Memoized components and styles
 * - transform3d for layer creation
 * 
 * Opacity Guidelines:
 * - Hero sections: 0.4 (default)
 * - Content sections: 0.2-0.3
 * - Dark overlays: 0.1-0.2
 * 
 * Blur Recommendations:
 * - Large gradients: 7.5rem (default, 120px)
 * - Sharp accents: 3.75rem-5rem (60-80px)
 * - Soft backgrounds: 9.375rem-12.5rem (150-200px)
 * 
 * Responsive Behavior:
 * - Gradients scale proportionally
 * - Animation speed remains constant
 * - Consider reducing layers on mobile for performance
 * 
 * Accessibility:
 * - aria-hidden="true" to exclude from screen readers
 * - role="presentation" for semantic clarity
 * - Respects prefers-reduced-motion
 * - No interactive elements
 */