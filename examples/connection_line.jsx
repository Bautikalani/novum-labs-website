'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { connectionLine } from '@/examples/lib/animations'

/**
 * CoLab-style animated connection line
 * Draws on scroll with optional progress dots
 * 
 * @example
 * <ConnectionLine 
 *   orientation="vertical" 
 *   color="gradient"
 *   dotPositions={[0, 33, 66, 100]}
 * />
 */
export function ConnectionLine({
  orientation = 'vertical',
  color = 'gradient',
  animated = true,
  dotPositions = [],
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  
  const getPath = () => {
    switch (orientation) {
      case 'horizontal':
        return 'M 0 50 L 100 50'
      case 'diagonal':
        return 'M 0 0 L 100 100'
      default:
        return 'M 50 0 L 50 100'
    }
  }
  
  const getGradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id={getGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(94 106 210)" />
            <stop offset="100%" stopColor="rgb(176 123 236)" />
          </linearGradient>
        </defs>
        
        {/* Background line (subtle) */}
        <path
          d={getPath()}
          stroke="rgb(39 39 42)"
          strokeWidth="0.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Animated line */}
        <motion.path
          d={getPath()}
          stroke={
            color === 'gradient' 
              ? `url(#${getGradientId})`
              : color === 'blue' 
              ? 'rgb(94 106 210)'
              : 'rgb(176 123 236)'
          }
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          style={animated ? { pathLength, opacity } : { pathLength: 1, opacity: 1 }}
        />
        
        {/* Progress dots */}
        {dotPositions.map((position, index) => (
          <motion.circle
            key={position}
            cx={orientation === 'horizontal' ? position : 50}
            cy={orientation === 'vertical' ? position : 50}
            r="4"
            fill="rgb(14 14 16)"
            stroke={color === 'blue' ? 'rgb(94 106 210)' : 'rgb(176 123 236)'}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={animated ? { scale: 1, opacity: 1 } : {}}
            transition={{
              delay: (position / 100) * 0.8,
              duration: 0.3,
              ease: [0.65, 0, 0.35, 1],
            }}
          />
        ))}
      </svg>
    </div>
  )
} 