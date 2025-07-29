'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassCard, GlassBadge, ShimmerText } from '@/components/ui/glass-card'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { fadeInUp, glassCard3D, glassMotionConfig } from '@/lib/motion-config'
import { Container } from '@/components/layout/Container'

interface DemoData {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  status: string;
  metrics: {
    accuracy?: string;
    speed?: string;
    efficiency?: string;
  };
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
    status: 'Coming Soon',
    metrics: {
      accuracy: '99% accuracy',
      speed: 'processes in 3 seconds',
      efficiency: '10x faster than manual'
    }
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
    status: 'Coming Soon',
    metrics: {
      accuracy: '97% speech recognition',
      speed: 'responds in 0.8 seconds',
      efficiency: '5x faster navigation'
    }
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
    status: 'Coming Soon',
    metrics: {
      accuracy: '95% categorization accuracy',
      speed: 'analyzes 100 pages in 30 seconds',
      efficiency: '20x faster than manual review'
    }
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
        
        {/* Desktop: 1+2 Grid Layout with Separators */}
        <div className="hidden lg:block">
          {/* Top Row: Large Horizontal Card */}
          <div className="mb-6">
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="relative"
            >
              <GlassCard 
                className="relative rounded-2xl overflow-hidden"
                enable3D={true}
                enableHover={true}
                style={{ aspectRatio: '16/7' }}
              >
                {/* Number Badge - Top Left */}
                <div className="absolute top-6 left-6 z-10">
                  <GlassBadge variant="number">
                    {demos[0].id}
                  </GlassBadge>
                </div>
                
                {/* Horizontal Layout: Split Content Left/Right */}
                <div className="p-6 pt-20 h-full flex">
                  {/* Left Side: Title, Description, Instructions */}
                  <div className="flex-1 pr-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {demos[0].title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {demos[0].description}
                      </p>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <h4 className="text-sm font-semibold text-foreground">
                        How it works
                      </h4>
                      <ul className="space-y-3">
                        {demos[0].instructions.map((instruction, instrIndex) => (
                          <li key={instrIndex} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-medium flex items-center justify-center mt-0.5">
                              {instrIndex + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right Side: Metrics & Status */}
                  <div className="flex-shrink-0 w-64 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        {demos[0].metrics.accuracy && (
                          <div className="text-sm">
                            <span className="text-accent-blue font-medium">{demos[0].metrics.accuracy}</span>
                          </div>
                        )}
                        {demos[0].metrics.speed && (
                          <div className="text-sm">
                            <span className="text-accent-green font-medium">{demos[0].metrics.speed}</span>
                          </div>
                        )}
                        {demos[0].metrics.efficiency && (
                          <div className="text-sm">
                            <span className="text-accent-coral font-medium">{demos[0].metrics.efficiency}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <GlassBadge variant="status">
                        <ShimmerText>{demos[0].status}</ShimmerText>
                      </GlassBadge>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
          
          {/* Grid Separator */}
          <div className="h-px bg-[var(--grid-separator)] mb-6"></div>
          
          {/* Bottom Row: Two Square Cards */}
          <div className="relative grid grid-cols-2 gap-6">
            {demos.slice(1).map((demo, index) => (
              <motion.div
                key={demo.id}
                variants={fadeInUp}
                custom={index + 1}
                className="relative"
              >
                <GlassCard 
                  className="relative rounded-2xl overflow-hidden"
                  enable3D={true}
                  enableHover={true}
                  style={{ aspectRatio: '1/1' }}
                >
                  {/* Number Badge - Top Left */}
                  <div className="absolute top-6 left-6 z-10">
                    <GlassBadge variant="number">
                      {demo.id}
                    </GlassBadge>
                  </div>
                  
                  {/* Square Layout: Vertical Content Flow */}
                  <div className="p-6 pt-20 h-full flex flex-col justify-between">
                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {demo.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {demo.description}
                      </p>
                    </div>
                    
                    {/* Instructions */}
                    <div className="space-y-3 my-4">
                      <h4 className="text-sm font-semibold text-foreground">
                        How it works
                      </h4>
                      <ul className="space-y-2">
                        {demo.instructions.map((instruction, instrIndex) => (
                          <li key={instrIndex} className="flex items-start space-x-2">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-medium flex items-center justify-center mt-0.5">
                              {instrIndex + 1}
                            </span>
                            <span className="text-xs text-muted-foreground leading-tight">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Metrics & Status */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-2">
                        {demo.metrics.accuracy && (
                          <div className="text-xs">
                            <span className="text-accent-blue font-medium">{demo.metrics.accuracy}</span>
                          </div>
                        )}
                        {demo.metrics.speed && (
                          <div className="text-xs">
                            <span className="text-accent-green font-medium">{demo.metrics.speed}</span>
                          </div>
                        )}
                        {demo.metrics.efficiency && (
                          <div className="text-xs">
                            <span className="text-accent-coral font-medium">{demo.metrics.efficiency}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="pt-2">
                        <GlassBadge variant="status">
                          <ShimmerText>{demo.status}</ShimmerText>
                        </GlassBadge>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            
            {/* Vertical Grid Separator between square cards */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--grid-separator)] transform -translate-x-1/2" style={{ marginLeft: '-0.75rem' }}></div>
          </div>
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="lg:hidden space-y-6">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              variants={fadeInUp}
              custom={index}
              className="relative"
            >
              <GlassCard 
                className="relative rounded-2xl overflow-hidden"
                enable3D={false}
                enableHover={true}
              >
                {/* Number Badge - Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <GlassBadge variant="number">
                    {demo.id}
                  </GlassBadge>
                </div>
                
                {/* Mobile Card Content */}
                <div className="p-4 pt-16">
                  {/* Title & Description */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-lg font-bold text-foreground">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {demo.description}
                    </p>
                  </div>
                  
                  {/* Instructions */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-foreground">
                      How it works
                    </h4>
                    <ul className="space-y-2">
                      {demo.instructions.map((instruction, instrIndex) => (
                        <li key={instrIndex} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-medium flex items-center justify-center mt-0.5">
                            {instrIndex + 1}
                          </span>
                          <span className="text-xs text-muted-foreground">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Metrics & Status */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-2">
                      {demo.metrics.accuracy && (
                        <div className="text-xs">
                          <span className="text-accent-blue font-medium">{demo.metrics.accuracy}</span>
                        </div>
                      )}
                      {demo.metrics.speed && (
                        <div className="text-xs">
                          <span className="text-accent-green font-medium">{demo.metrics.speed}</span>
                        </div>
                      )}
                      {demo.metrics.efficiency && (
                        <div className="text-xs">
                          <span className="text-accent-coral font-medium">{demo.metrics.efficiency}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Status Badge */}
                    <div>
                      <GlassBadge variant="status">
                        <ShimmerText>{demo.status}</ShimmerText>
                      </GlassBadge>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}