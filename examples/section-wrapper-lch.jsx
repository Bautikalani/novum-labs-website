'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scrollReveal } from '@/examples/lib/animations'
import { cn } from '@/lib/utils'

/**
 * Section wrapper with CoLab-style scroll animations
 * Provides consistent spacing and reveal animations
 * Updated to use LCH color space as per DESIGN.md
 * 
 * @example
 * <SectionWrapper id="demos" gradient>
 *   <h2>Live Demos</h2>
 *   <DemoGrid />
 * </SectionWrapper>
 */
export function SectionWrapper({
  children,
  className,
  id,
  fullHeight = false,
  gradient = false,
}) {
  return (
    <motion.section
      id={id}
      className={cn(
        'relative overflow-hidden',
        fullHeight ? 'min-h-screen' : 'py-20 md:py-32',
        className
      )}
      variants={fadeInUp}
      {...scrollReveal}
    >
      {/* Linear-style gradient background using LCH colors */}
      {gradient && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent2/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        </div>
      )}
      
      {/* Grid pattern overlay (subtle) with LCH border color */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,lch(25%_0_0)_1px,transparent_1px),linear-gradient(to_bottom,lch(25%_0_0)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      <div className="container relative mx-auto px-6 md:px-8">
        {children}
      </div>
    </motion.section>
  )
}