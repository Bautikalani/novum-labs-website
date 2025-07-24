'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { buttonMagnetic, fadeInUp } from '@/lib/motion-config'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Mesh Gradient Background */}
      <motion.div 
        className="absolute inset-0 gradient-mesh opacity-20"
        style={{ y, opacity }}
      />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-blue/30"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-accent-purple/40"
        animate={{
          y: [10, -10, 10],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Build AI solutions that{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transform your business
            </span>
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
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href="#demos">See Live Demos</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonMagnetic} whileHover="hover" whileTap="tap">
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href="#book-call">Book Discovery Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}