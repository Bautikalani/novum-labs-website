'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/examples/components/section-wrapper'
import { AnimatedCard } from '@/examples/components/animated-card'
import { ConnectionLine } from '@/examples/components/connection-line'
import { GradientText } from '@/examples/components/gradient-text'
import { staggerChildren } from '@/examples/lib/animations'

/**
 * Example implementation of the Demos section
 * Shows how to combine all patterns together
 * Updated to use LCH color space consistently
 */
export function DemosSection() {
  const demos = [
    {
      title: 'AI Chat Integration',
      description: 'Natural language interface for your applications',
      status: 'coming-soon',
    },
    {
      title: 'Document Analysis',
      description: 'Extract insights from complex documents instantly',
      status: 'coming-soon',
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks with intelligent agents',
      status: 'coming-soon',
    },
  ]
  
  return (
    <SectionWrapper id="demos" gradient>
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GradientText gradient="blurple">
            Live AI Demos
          </GradientText>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Experience the power of our AI solutions with interactive demonstrations
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Connection lines between cards (desktop only) */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute left-1/3 top-0 bottom-0 w-px">
            <ConnectionLine orientation="vertical" color="gradient" />
          </div>
          <div className="absolute right-1/3 top-0 bottom-0 w-px">
            <ConnectionLine orientation="vertical" color="gradient" />
          </div>
        </div>
        
        {demos.map((demo, index) => (
          <AnimatedCard
            key={demo.title}
            gradient
            glow
            index={index}
            className="relative z-10"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-fg">
                {demo.title}
              </h3>
              <p className="text-muted">
                {demo.description}
              </p>
              
              {/* Coming Soon Badge with LCH colors */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20">
                <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                <span className="text-sm text-accent-orange">Coming Soon</span>
              </div>
              
              {/* Hover CTA with LCH colors */}
              <motion.button
                className="mt-4 w-full py-3 rounded-lg border border-accent/20 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ 
                  backgroundColor: 'lch(70% 90 230 / 0.1)',
                  borderColor: 'lch(70% 90 230 / 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Preview Demo
              </motion.button>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>
      
      {/* Floating elements (CoLab style) with LCH colors */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent2/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
    </SectionWrapper>
  )
}