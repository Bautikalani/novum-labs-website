'use client'

import { motion } from 'motion/react'
import { useInView } from '@/hooks/use-in-view'
import { fadeInUp, staggerChildren } from '@/lib/motion-config'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  stagger?: boolean
  id?: string
}

export function SectionWrapper({ 
  children, 
  className = '', 
  stagger = false,
  id
}: SectionWrapperProps) {
  const { ref, isInView } = useInView()

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      variants={stagger ? staggerChildren : fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  )
}