'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { fadeInUp, cardHover } from '@/lib/motion-config'

interface DemoData {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  position: 'left' | 'right';
  status: string;
}

const demos: DemoData[] = [
  {
    id: 1,
    title: "Invoice to Excel Converter",
    description: "Transform invoices into structured data with AI-powered extraction",
    instructions: [
      "Upload invoice PDF or image",
      "AI extracts key data points",
      "Download structured Excel file"
    ],
    position: 'left',
    status: 'Coming Soon'
  },
  {
    id: 2, 
    title: "Voice Navigation Assistant",
    description: "Navigate complex interfaces using natural voice commands",
    instructions: [
      "Speak your request naturally",
      "AI processes and understands intent",
      "Action executed automatically"
    ],
    position: 'right',
    status: 'Coming Soon'
  },
  {
    id: 3,
    title: "Smart Document Analyzer",
    description: "Advanced AI analysis for complex document processing",
    instructions: [
      "Upload documents in any format",
      "AI analyzes and categorizes content",
      "Get insights and actionable data"
    ],
    position: 'left',
    status: 'Coming Soon'
  }
];

export function DemosSection() {
  return (
    <SectionWrapper className="py-20 bg-background" id="demos" stagger>
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our AI Solutions in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of custom AI through interactive demonstrations
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                demo.position === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={fadeInUp}
              custom={index}
            >
              {/* Demo Preview */}
              <motion.div 
                className={demo.position === 'right' ? 'lg:col-start-2' : ''}
                variants={cardHover}
                whileHover="hover"
              >
                <Card className="aspect-video bg-surface border-border/50 hover:border-accent-blue/30 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl font-bold text-accent-blue">
                        {demo.id}
                      </span>
                    </motion.div>
                    <Badge variant="secondary" className="px-4 py-2">
                      {demo.status}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Demo Explanation */}
              <motion.div 
                className={demo.position === 'right' ? 'lg:col-start-1' : ''}
                variants={cardHover}
                whileHover="hover"
              >
                <Card className="border-border/50 bg-surface/50 hover:bg-surface/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl">{demo.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">
                        How to use this demo:
                      </h4>
                      <ul className="space-y-2">
                        {demo.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-medium flex items-center justify-center mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-muted-foreground">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}