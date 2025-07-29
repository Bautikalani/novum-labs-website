'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { buttonMagnetic, fadeInUp, blurToFocus, transformMotionConfig } from '@/lib/motion-config'
import { useRef } from 'react'
import { Container } from '@/components/layout/Container'
import { GradientMeshBackground } from '@/components/backgrounds/gradient-mesh-background'
import { GradientText } from '@/components/ui/gradient-text'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax effect for background gradient
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  // Create reduced motion variant for blur animation
  const headingVariants = shouldReduceMotion ? fadeInUp : blurToFocus

  return (
    <section 
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Linear-style Animated Gradient Mesh Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <GradientMeshBackground 
          variant="hero"
          opacity={0.4}
          blur={120}
          animate={true}
        />
      </motion.div>
      
      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            variants={headingVariants}
            {...(shouldReduceMotion ? {} : transformMotionConfig)}
          >
            <GradientText className="block">
              Smarter Ops
            </GradientText>
            <GradientText className="block">
              Leaner Teams
            </GradientText>
            <GradientText className="block">
              Faster Growth
            </GradientText>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Novum Labs partners with forward-thinking companies to implement 
            custom AI solutions that drive real results
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            variants={fadeInUp}
          >
            <motion.div variants={buttonMagnetic} whileHover="hover" whileTap="tap">
              <Button asChild size="lg" className="min-w-[11.25rem]">
                <Link href="#demos">See Live Demos</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonMagnetic} whileHover="hover" whileTap="tap">
              <Button asChild variant="outline" size="lg" className="min-w-[11.25rem]">
                <Link href="#book-call">Book Discovery Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}