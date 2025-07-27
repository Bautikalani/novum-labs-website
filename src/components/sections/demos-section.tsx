'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { fadeInUp, cardHover } from '@/lib/motion-config'
import { Container } from '@/components/layout/Container'

interface DemoData {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  status: string;
}

const demos: DemoData[] = [
  {
    id: 1,
    title: "Invoice to Excel Converter",
    description: "Transform invoices into structured data with AI-powered extraction that understands complex document layouts and extracts key information with 99% accuracy.",
    instructions: [
      "Upload invoice PDF or image",
      "AI extracts key data points",
      "Download structured Excel file"
    ],
    status: 'Coming Soon'
  },
  {
    id: 2, 
    title: "Voice Navigation Assistant",
    description: "Navigate complex interfaces using natural voice commands powered by advanced speech recognition and intent understanding.",
    instructions: [
      "Speak your request naturally",
      "AI processes and understands intent",
      "Action executed automatically"
    ],
    status: 'Coming Soon'
  },
  {
    id: 3,
    title: "Smart Document Analyzer",
    description: "Advanced AI analysis for complex document processing that categorizes, extracts insights, and provides actionable intelligence.",
    instructions: [
      "Upload documents in any format",
      "AI analyzes and categorizes content",
      "Get insights and actionable data"
    ],
    status: 'Coming Soon'
  }
];

export function DemosSection() {
  return (
    <SectionWrapper className="py-12 sm:py-20 lg:py-[7.5rem] bg-background" id="demos" stagger>
      <Container>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our AI Solutions in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of custom AI through interactive demonstrations
          </p>
        </motion.div>
        
        {/* Desktop: Stripe-Style Split Layout */}
        <div className="hidden lg:block">
          {demos.map((demo, index) => (
            <motion.div 
              key={demo.id}
              className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20 mb-16 last:mb-0 items-start"
              variants={fadeInUp}
              custom={index}
            >
              {/* Left: Clean Text Description */}
              <div className="relative">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-accent-blue">{demo.id}</span>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold">{demo.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {demo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <h4 className="font-semibold mb-4 text-foreground">
                      How it works
                    </h4>
                    <ul className="space-y-3">
                      {demo.instructions.map((instruction, instrIndex) => (
                        <li key={instrIndex} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium flex items-center justify-center mt-0.5">
                            {instrIndex + 1}
                          </span>
                          <span className="text-muted-foreground">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Demo Preview */}
              <motion.div
                className="relative mt-2"
                variants={cardHover}
                whileHover="hover"
              >
                <Card className="aspect-video bg-surface border-border/50 hover:border-accent-blue/30 transition-colors overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center h-full space-y-4 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-blue/5" />
                    
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-gradient-primary/20 flex items-center justify-center relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl font-bold text-accent-blue">
                        {demo.id}
                      </span>
                    </motion.div>
                    <Badge variant="secondary" className="px-4 py-2 relative z-10">
                      {demo.status}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Clean Stripe-Style Layout */}
        <div className="lg:hidden space-y-12">
          {demos.map((demo, index) => (
            <motion.div 
              key={demo.id} 
              className="space-y-6" 
              variants={fadeInUp} 
              custom={index}
            >
              {/* Header with Number */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-accent-blue">{demo.id}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{demo.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{demo.description}</p>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="pl-11">
                <h4 className="font-semibold mb-3 text-foreground">How it works</h4>
                <ul className="space-y-2">
                  {demo.instructions.map((instruction, instrIndex) => (
                    <li key={instrIndex} className="flex items-start space-x-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium flex items-center justify-center mt-0.5">
                        {instrIndex + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Preview Card */}
              <Card className="aspect-video bg-surface border-border/50 overflow-hidden">
                <CardContent className="flex flex-col items-center justify-center h-full space-y-3 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-blue/5" />
                  <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-accent-blue">{demo.id}</span>
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 text-sm relative z-10">{demo.status}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}