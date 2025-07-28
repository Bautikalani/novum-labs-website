'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

interface CursorState {
  scale: number
  opacity: number
  blend: 'normal' | 'difference'
}

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<CursorState>({
    scale: 1,
    opacity: 0,
    blend: 'normal'
  })
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 150, mass: 0.1 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, opacity: 1 }))
    }

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, opacity: 0 }))
    }

    // Enhanced hover detection for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement
      
      if (target.matches('button, a, [role="button"], input, textarea')) {
        setCursorState({
          scale: 1.5,
          opacity: 1,
          blend: 'difference'
        })
      } else if (target.matches('h1, h2, h3, h4, h5, h6')) {
        setCursorState({
          scale: 0.5,
          opacity: 1,
          blend: 'normal'
        })
      } else {
        setCursorState({
          scale: 1,
          opacity: 1,
          blend: 'normal'
        })
      }
    }

    const handleElementLeave = () => {
      setCursorState({
        scale: 1,
        opacity: 1,
        blend: 'normal'
      })
    }

    // Mouse events
    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Element hover events
    document.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseout', handleElementLeave)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseout', handleElementLeave)
    }
  }, [cursorX, cursorY])

  // Hide on mobile devices
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setCursorState(prev => ({ ...prev, opacity: 0 }))
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-accent-blue/50"
        style={{
          x,
          y,
          scale: cursorState.scale,
          opacity: cursorState.opacity,
          mixBlendMode: cursorState.blend,
          width: 20,
          height: 20,
          marginLeft: -10,
          marginTop: -10,
          backgroundColor: 'transparent',
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          opacity: { duration: 0.2 },
        }}
      />
      
      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-accent-blue/30"
        style={{
          x,
          y,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          opacity: cursorState.opacity * 0.6,
        }}
        transition={{
          x: { damping: 30, stiffness: 100, mass: 0.2 },
          y: { damping: 30, stiffness: 100, mass: 0.2 },
          opacity: { duration: 0.3 },
        }}
      />
      
      {/* Global cursor styles */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}