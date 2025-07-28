'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  className?: string
  variant?: 'subtle' | 'prominent'
}

export function SectionDivider({ 
  className,
  variant = 'subtle' 
}: SectionDividerProps) {
  return (
    <div className={cn(
      "relative w-full overflow-hidden",
      variant === 'subtle' ? 'h-px' : 'h-32',
      className
    )}>
      {variant === 'subtle' ? (
        // Subtle gradient line
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      ) : (
        // Prominent gradient overlay
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-rose/5 to-transparent mix-blend-screen" />
        </motion.div>
      )}
    </div>
  )
}