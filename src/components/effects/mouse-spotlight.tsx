'use client'

import { useRef, useEffect, useState, type RefObject } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { durations, easings } from '@/lib/motion-config'

/**
 * Hook to detect user's motion preference
 */
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReducedMotion
}

interface MouseSpotlightProps {
  children: React.ReactNode
  className?: string
  tiltIntensity?: number
  maxTilt?: number
  enableSpotlight?: boolean
  spotlightRadius?: number
  disabled?: boolean
}

/**
 * Mouse Spotlight 3D Component
 * 
 * Creates a physics-based 3D tilt effect where cards rotate toward the mouse
 * as if the cursor has gravitational weight. Includes optional spotlight effect.
 * 
 * Design Specifications:
 * - Tilt range: -15deg to +15deg (configurable)
 * - Smooth spring animations for realistic physics
 * - Performance optimized with GPU acceleration
 * - Respects reduced motion preferences
 * - Works with existing glass morphism effects
 */
export function MouseSpotlight({
  children,
  className = '',
  tiltIntensity = 1,
  maxTilt = 15,
  enableSpotlight = false,
  spotlightRadius = 200,
  disabled = false
}: MouseSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring configurations for smooth, water-like physics
  // Lower stiffness and higher damping for natural, fluid movement
  const springConfig = {
    stiffness: 80,  // Reduced for smoother, more fluid motion
    damping: 30,    // Increased for better control and less overshoot
    mass: 0.3,      // Increased mass for more weight/inertia
    restDelta: 0.001,
    restSpeed: 0.001
  }
  
  // Smooth spring values for rotations
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  
  // Transform mouse position to rotation values with bounds checking
  const tiltX = useTransform(mouseY, [-1, 1], [
    Math.min(maxTilt * tiltIntensity, 20), 
    -Math.min(maxTilt * tiltIntensity, 20)
  ])
  const tiltY = useTransform(mouseX, [-1, 1], [
    -Math.min(maxTilt * tiltIntensity, 20), 
    Math.min(maxTilt * tiltIntensity, 20)
  ])
  
  // Spotlight effect transforms
  const spotlightX = useSpring(0, springConfig)
  const spotlightY = useSpring(0, springConfig)
  const spotlightOpacity = useSpring(0, springConfig)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container || disabled) return
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (event.clientX - centerX) / (rect.width / 2)
      const normalizedY = (event.clientY - centerY) / (rect.height / 2)
      
      // Update mouse position for rotations
      mouseX.set(Math.max(-1, Math.min(1, normalizedX)))
      mouseY.set(Math.max(-1, Math.min(1, normalizedY)))
      
      // Update spotlight position (absolute coordinates)
      if (enableSpotlight) {
        spotlightX.set(event.clientX - rect.left)
        spotlightY.set(event.clientY - rect.top)
      }
    }
    
    const handleMouseEnter = () => {
      setIsHovered(true)
      if (enableSpotlight) {
        spotlightOpacity.set(1)
      }
    }
    
    const handleMouseLeave = () => {
      setIsHovered(false)
      
      // Reset all values smoothly
      mouseX.set(0)
      mouseY.set(0)
      
      if (enableSpotlight) {
        spotlightOpacity.set(0)
      }
    }
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, spotlightX, spotlightY, spotlightOpacity, enableSpotlight, disabled])
  
  // Connect transforms to spring values
  useEffect(() => {
    const unsubscribeX = tiltX.on('change', (value) => rotateX.set(value))
    const unsubscribeY = tiltY.on('change', (value) => rotateY.set(value))
    
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [tiltX, tiltY, rotateX, rotateY])
  
  // Disable effect if user prefers reduced motion or explicitly disabled
  const isEffectDisabled = disabled || prefersReducedMotion
  
  if (isEffectDisabled) {
    return <div className={className}>{children}</div>
  }
  
  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      data-mouse-spotlight
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        // Allow effects to extend beyond boundaries
        overflow: 'visible',
        // Ensure proper border radius inheritance
        borderRadius: '1rem' // 16px
      }}
    >
      {/* Spotlight effect overlay */}
      {enableSpotlight && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useTransform(
              [spotlightX, spotlightY, spotlightOpacity],
              ([x, y, opacity]: number[]) => 
                `radial-gradient(circle ${spotlightRadius}px at ${x}px ${y}px, 
                  lch(41% 35.7 262 / ${opacity * 0.08}) 0%, 
                  transparent 70%)`
            ),
            borderRadius: '1rem', // Ensure 16px radius
            overflow: 'hidden' // Contain spotlight effect within rounded corners
          }}
        />
      )}
      
      {/* 3D tilting container */}
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          willChange: 'transform',
          contain: 'layout style paint',
          backfaceVisibility: 'hidden',
          transformOrigin: 'center center',
          borderRadius: '1rem', // Ensure 16px radius maintained
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
        transition={{
          type: 'spring',
          ...springConfig
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * Hook for getting mouse spotlight effect values
 * Useful for custom implementations or debugging
 */
export function useMouseSpotlight(containerRef: RefObject<HTMLElement>, options: {
  tiltIntensity?: number
  maxTilt?: number
  disabled?: boolean
} = {}) {
  const { tiltIntensity = 1, maxTilt = 15, disabled = false } = options
  const prefersReducedMotion = useReducedMotion()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const springConfig = {
    stiffness: 150,
    damping: 20,
    mass: 0.1
  }
  
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [maxTilt * tiltIntensity, -maxTilt * tiltIntensity]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-maxTilt * tiltIntensity, maxTilt * tiltIntensity]), springConfig)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container || disabled || prefersReducedMotion) return
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const normalizedX = (event.clientX - centerX) / (rect.width / 2)
      const normalizedY = (event.clientY - centerY) / (rect.height / 2)
      
      mouseX.set(Math.max(-1, Math.min(1, normalizedX)))
      mouseY.set(Math.max(-1, Math.min(1, normalizedY)))
    }
    
    const handleMouseEnter = () => {
      setIsHovered(true)
    }
    
    const handleMouseLeave = () => {
      setIsHovered(false)
      mouseX.set(0)
      mouseY.set(0)
    }
    
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, disabled, prefersReducedMotion])
  
  return {
    rotateX: isHovered && !prefersReducedMotion ? rotateX : 0,
    rotateY: isHovered && !prefersReducedMotion ? rotateY : 0,
    isHovered,
    mousePosition: { x: mouseX, y: mouseY }
  }
}