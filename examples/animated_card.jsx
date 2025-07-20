'use client'

import { motion } from 'framer-motion'
import { scaleIn, hoverScale, hoverGlow } from '@/examples/lib/animations'
import { cn } from '@/lib/utils'

/**
 * Linear-style card with CoLab animations
 * Features gradient borders and smooth hover effects
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
      {/* Gradient border effect */}
      {gradient && (
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Glow effect */}
      {glow && (
        <motion.div
          className="absolute -inset-4 rounded-xl bg-accent-blue/20 blur-xl opacity-0 group-hover:opacity-100"
          whileHover={hoverGlow}
        />
      )}
      
      {/* Card content */}
      <div className={cn(
        'relative h-full rounded-xl border border-[#27272a] bg-[#18181b] p-6 transition-colors duration-300',
        'group-hover:border-[#39393b] group-hover:bg-[#1e1e20]'
      )}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Corner accent (CoLab style) */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg width="100%" height="100%" viewBox="0 0 64 64">
            <path
              d="M 64 0 L 64 16 Q 64 0 48 0 Z"
              fill="url(#corner-gradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="corner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(94 106 210)" />
                <stop offset="100%" stopColor="rgb(176 123 236)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  )
} 