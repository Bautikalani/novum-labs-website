'use client'

import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

export function useScrollProgress() {
  const scrollYProgress = useMotionValue(0)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, scrollTop / docHeight))
      scrollYProgress.set(progress)
    }

    // Throttled scroll handler for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollYProgress])

  return smoothProgress
}