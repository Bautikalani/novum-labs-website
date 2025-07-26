'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { fadeInUp } from '@/lib/motion-config'
import { Container } from '@/components/layout/Container'

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understand your unique challenges and opportunities",
    icon: "🔍"
  },
  {
    id: 2, 
    title: "Strategy",
    description: "Design AI solutions tailored to your business",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Development", 
    description: "Build and test with industry best practices",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launch, monitor, and continuously improve",
    icon: "🚀"
  }
];

export function ProcessSection() {
  return (
    <SectionWrapper className="py-12 sm:py-20 lg:py-[7.5rem] bg-background" id="process" stagger>
      <Container>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Transform Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful AI implementation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative"
              variants={fadeInUp}
              custom={index}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Card className="text-center border-border/50 bg-surface/30 hover:bg-surface/50 transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <motion.div 
                      className="text-4xl mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.3, type: "spring" }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xl font-bold text-accent-blue">
                        {step.id}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Animated arrow connector */}
              {index < processSteps.length - 1 && (
                <motion.div 
                  className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  <ArrowRight className="w-6 h-6 text-accent-blue" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}