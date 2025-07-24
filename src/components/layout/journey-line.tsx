'use client'

import { motion, useTransform } from 'motion/react'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { useReducedMotion } from 'motion/react'

export function JourneyLine() {
  const scrollProgress = useScrollProgress()
  const respectsReducedMotion = useReducedMotion()
  
  // Transform scroll progress to path length
  const pathLength = useTransform(scrollProgress, [0, 1], [0, 1])
  
  // Glow effect based on scroll position
  const glowOpacity = useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0.3, 0.8, 0.8, 0.3])

  if (respectsReducedMotion) {
    // Static version for reduced motion users
    return (
      <div 
        className="fixed left-0 top-0 w-24 h-full pointer-events-none z-0" 
        aria-hidden="true"
      >
        <svg 
          className="w-full h-full opacity-60"
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="journeyGradientStatic" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="lch(65% 90 260)" />
              <stop offset="50%" stopColor="lch(70% 85 300)" />
              <stop offset="100%" stopColor="lch(75% 80 150)" />
            </linearGradient>
          </defs>
          
          <path
            d="M60 10 Q60 20 20 25 Q60 30 20 35 Q60 40 50 45 L50 55 L50 65 L50 75 L50 85 L50 95"
            stroke="url(#journeyGradientStatic)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    )
  }

  return (
    <div 
      className="fixed left-0 top-0 w-24 h-full pointer-events-none z-0" 
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="lch(65% 90 260)" />
            <stop offset="50%" stopColor="lch(70% 85 300)" />
            <stop offset="100%" stopColor="lch(75% 80 150)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background path (faint) */}
        <path
          d="M60 10 Q60 20 20 25 Q60 30 20 35 Q60 40 50 45 L50 55 L50 65 L50 75 L50 85 L50 95"
          stroke="lch(45% 0 0 / 0.2)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Animated progress path */}
        <motion.path
          d="M60 10 Q60 20 20 25 Q60 30 20 35 Q60 40 50 45 L50 55 L50 65 L50 75 L50 85 L50 95"
          stroke="url(#journeyGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          style={{
            pathLength,
            opacity: glowOpacity,
          }}
          initial={{ pathLength: 0 }}
        />
      </svg>
    </div>
  )
}