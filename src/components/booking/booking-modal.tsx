'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Calendar, ExternalLink } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [bookingMethod, setBookingMethod] = useState<'embedded' | 'external'>('embedded')
  
  // Fallback booking URL
  const fallbackBookingUrl = 'https://calendly.com/novumlabs/discovery-call'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-2xl mx-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Card className="border-border/50 bg-background">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-2xl">Book Discovery Call</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Schedule a free 30-minute consultation to discuss your AI transformation goals
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>30 minutes</span>
                    </div>
                    <div>•</div>
                    <div>No commitment required</div>
                  </div>
                </div>
                
                {/* Embedded booking widget would go here */}
                <div className="aspect-video bg-surface/50 rounded-lg border-2 border-dashed border-border/50 flex flex-col items-center justify-center space-y-4">
                  <Calendar className="w-12 h-12 text-muted-foreground" />
                  <div className="text-center space-y-2">
                    <p className="font-medium">Booking Widget</p>
                    <p className="text-sm text-muted-foreground">
                      Integration with Google Calendar or Calendly
                    </p>
                  </div>
                </div>
                
                {/* Fallback external link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Having trouble with the booking widget?
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href={fallbackBookingUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Book via External Calendar</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}