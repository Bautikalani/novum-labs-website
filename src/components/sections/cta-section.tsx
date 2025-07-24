'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { BookingModal } from '@/components/booking/booking-modal'
import { fadeInUp, buttonMagnetic } from '@/lib/motion-config'

export function CTASection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <SectionWrapper className="py-20 bg-background" id="book-call">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <Card className="border-border/50 bg-gradient-to-r from-surface/50 to-surface/30 hover:from-surface/60 hover:to-surface/40 transition-all duration-300">
              <CardContent className="text-center py-16 px-8 relative">
                <motion.div className="space-y-8" variants={fadeInUp}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Let's discuss how AI can solve your specific challenges and drive real results for your company
                    </p>
                  </div>
                  
                  <motion.div
                    variants={buttonMagnetic}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6 min-w-[220px]"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Book Discovery Call
                    </Button>
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground">
                    Free 30-minute consultation • No commitment required
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
      
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}