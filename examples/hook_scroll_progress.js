import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Track scroll progress for animations
 * Returns progress values for scroll-based animations
 * 
 * @example
 * const { ref, scrollYProgress } = useScrollProgress()
 * const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
 */
export function useScrollProgress() {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const scrollPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )
  
  const isInView = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [false, true, true, false]
  )
  
  return {
    ref,
    scrollYProgress,
    scrollPercentage,
    isInView,
  }
} 