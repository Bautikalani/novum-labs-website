'use client'

import { motion, useInView } from 'motion/react'
import { ReactNode, useRef } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  stagger?: boolean
  once?: boolean
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  stagger = false,
  once = true
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10%' })

  const directionVariants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.15 : 0,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directionVariants[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  }

  // For staggered animation, split text into words
  if (stagger && typeof children === 'string') {
    const words = children.split(' ')
    
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // Regular reveal animation
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

// Character-by-character reveal for dramatic effect
export function CharacterReveal({
  text,
  className = '',
  delay = 0,
  duration = 0.08
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: '1000px' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ transformOrigin: '50% 100%' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}