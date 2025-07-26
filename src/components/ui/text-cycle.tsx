'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

interface TextCycleProps {
  words: string[]
  interval?: number
  className?: string
}

export function TextCycle({ words, interval = 3000, className = '' }: TextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxWidth, setMaxWidth] = useState(0)
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Measure the width of the longest word
    if (measureRef.current) {
      let max = 0
      words.forEach((word) => {
        measureRef.current!.textContent = word
        const width = measureRef.current!.offsetWidth
        if (width > max) max = width
      })
      setMaxWidth(max)
    }
  }, [words])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <>
      <span 
        ref={measureRef}
        className={`invisible absolute ${className}`}
        aria-hidden="true"
      />
      <span 
        className="relative inline-block"
        style={{ minWidth: maxWidth ? `${maxWidth}px` : 'auto' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            transition={{
              y: { type: "spring", stiffness: 200, damping: 20 },
              opacity: { duration: 0.15 }
            }}
            className={`absolute inset-0 ${className}`}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  )
}