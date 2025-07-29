'use client'

import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  enable3D?: boolean
  enableHover?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, enable3D = true, enableHover = true, style, ...props }, ref) => {
    const combinedStyle = {
      willChange: 'transform, opacity',
      contain: 'layout style paint',
      ...style
    }

    if (enableHover) {
      return (
        <div className={enable3D ? 'glass-card-3d' : ''} style={enable3D ? { perspective: '1000px', transformStyle: 'preserve-3d' } : undefined}>
          <motion.div
            ref={ref}
            className={cn('glass-card', className)}
            whileHover={enable3D ? {
              y: -8,
              scale: 1.02,
              rotateX: 5,
              rotateY: 3,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            } : {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            style={combinedStyle}
          >
            {children}
          </motion.div>
        </div>
      )
    }

    return (
      <div className={enable3D ? 'glass-card-3d' : ''} style={enable3D ? { perspective: '1000px', transformStyle: 'preserve-3d' } : undefined}>
        <div
          ref={ref}
          className={cn('glass-card', className)}
          style={combinedStyle}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

interface GlassBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  variant?: 'number' | 'status'
}

export const GlassBadge = forwardRef<HTMLDivElement, GlassBadgeProps>(
  ({ children, className, variant = 'number', ...props }, ref) => {
    const baseClasses = 'glass-badge rounded-full flex items-center justify-center font-semibold'
    const variantClasses = {
      number: 'w-8 h-8 text-sm text-accent-blue',
      status: 'px-4 py-2 text-sm text-foreground'
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassBadge.displayName = 'GlassBadge'

interface ShimmerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
}

export const ShimmerText = forwardRef<HTMLSpanElement, ShimmerTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('shimmer', className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

ShimmerText.displayName = 'ShimmerText'