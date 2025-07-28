'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'motion/react'

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedNumber({
  value,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 25, 
    stiffness: 100,
    mass: 0.5
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      motionValue.set(value)
    }
  }, [isInView, hasAnimated, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest)
    })
    
    return unsubscribe
  }, [springValue])

  const formatNumber = (num: number) => {
    return Number(num.toFixed(decimals)).toLocaleString()
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {prefix}{formatNumber(displayValue)}{suffix}
    </motion.span>
  )
}

// Hook for creating multiple animated numbers with staggered delays
export function useAnimatedNumbers(values: number[], options?: {
  duration?: number
  staggerDelay?: number
}) {
  const { duration = 2, staggerDelay = 0.1 } = options || {}
  
  return values.map((value, index) => ({
    value,
    duration,
    delay: index * staggerDelay
  }))
}