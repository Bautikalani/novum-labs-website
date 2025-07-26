'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { durations, easings } from '@/lib/motion-config'

interface CyclingWordsProps {
  words: string[]
  interval?: number
  className?: string
}

export function CyclingWords({ 
  words, 
  interval = 2000, 
  className = '' 
}: CyclingWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleMotionPreference)

    // Handle page visibility to prevent overlapping text
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    const intervalId = setInterval(() => {
      if (!isPaused && !prefersReducedMotion) {
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }
    }, interval)

    return () => {
      clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      mediaQuery.removeEventListener('change', handleMotionPreference)
    }
  }, [words.length, interval, isPaused, prefersReducedMotion])

  return (
    <span className={`relative inline-flex items-center ${className}`} style={{ height: '1.2em', overflow: 'hidden' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[currentIndex]}
          initial={{ 
            opacity: prefersReducedMotion ? 1 : 0, 
            y: prefersReducedMotion ? 0 : '-100%' 
          }}
          animate={{ 
            opacity: 1, 
            y: 0 
          }}
          exit={{ 
            opacity: prefersReducedMotion ? 1 : 0, 
            y: prefersReducedMotion ? 0 : '100%' 
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: easings.smooth,
          }}
          className="absolute inset-0 flex items-center"
          style={{ willChange: 'transform, opacity' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}