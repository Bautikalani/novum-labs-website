'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { ReactNode } from 'react'

interface MagneticElementProps {
  children: ReactNode
  className?: string
  strength?: number
  disabled?: boolean
}

export function MagneticElement({
  children,
  className = '',
  strength = 0.4,
  disabled = false
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        scale: { duration: 0.2, ease: "easeOut" }
      }}
    >
      {children}
    </motion.div>
  )
}

// Enhanced button with magnetic effect and micro-interactions
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'default' | 'ghost' | 'outline'
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  disabled = false,
  variant = 'default'
}: MagneticButtonProps) {
  
  return (
    <MagneticElement className={className} disabled={disabled}>
      <motion.button
        className={`
          relative overflow-hidden px-6 py-3 rounded-lg font-medium
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary
          ${variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
          ${variant === 'outline' ? 'border border-input bg-background hover:bg-accent hover:text-accent-foreground' : ''}
          ${variant === 'ghost' ? 'hover:bg-accent hover:text-accent-foreground' : ''}
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
        `}
        onClick={onClick}
        disabled={disabled}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ripple effect background */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    </MagneticElement>
  )
}