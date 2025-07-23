'use client'

import { motion } from 'framer-motion'
import { scaleIn, hoverScale, hoverGlow } from '@/examples/lib/animations'
import { cn } from '@/lib/utils'

/**
 * Linear-style card with CoLab animations
 * Features gradient borders and smooth hover effects
 * Updated to use LCH color space as per DESIGN.md
 * 
 * @example
 * <AnimatedCard gradient glow index={0}>
 *   <h3>Demo Title</h3>
 *   <p>Demo description</p>
 * </AnimatedCard>
 */
export function AnimatedCard({
  children,
  className,
  gradient = false,
  glow = false,
  index = 0,
}) {
  return (
    <motion.div
      className={cn(
        'relative group',
        className
      )}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      whileHover={hoverScale}
    >
      {/* Gradient border effect using LCH colors */}
      {gradient && (
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Glow effect with LCH accent color */}
      {glow && (
        <motion.div
          className="absolute -inset-4 rounded-xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100"
          whileHover={hoverGlow}
        />
      )}
      
      {/* Card content with LCH-based colors */}
      <div className={cn(
        'relative h-full rounded-xl border border-border bg-card p-6 transition-colors duration-300',
        'group-hover:border-border/80 group-hover:bg-card/90'
      )}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,lch(25%_0_0)_1px,transparent_1px),linear-gradient(to_bottom,lch(25%_0_0)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Corner accent (CoLab style) with LCH gradients */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg width="100%" height="100%" viewBox="0 0 64 64">
            <path
              d="M 64 0 L 64 16 Q 64 0 48 0 Z"
              fill="url(#corner-gradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="lch(70% 90 230)" />
                <stop offset="100%" stopColor="lch(65% 80 280)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}