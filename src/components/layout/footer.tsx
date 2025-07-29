'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/layout/Container'

/**
 * Sophisticated footer component designed for premium positioning
 * Appeals to high-net-worth business owners through controlled elegance
 * and systematic minimalism inspired by Linear's design philosophy
 */
export function Footer() {
  return (
    <footer className="relative bg-background border-t border-surface-2/15">
      <Container>
        <div className="py-12">
          {/* Primary Copyright Statement - Premium Legal Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center space-y-8"
          >
            {/* Main Copyright */}
            <p className="text-sm font-medium text-foreground tracking-tight leading-relaxed max-w-2xl mx-auto">
              © 2025 Novum Labs. All rights reserved. Exclusive methodologies and intellectual property secured under comprehensive legal protection.
            </p>
            
            {/* Sophisticated Supporting Elements */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xs text-muted-foreground/60">
              {/* Premium Positioning Statement */}
              <span className="tracking-wide">
                Exclusive AI Solutions for Forward-Thinking Leaders
              </span>
              
              {/* Subtle Visual Separator */}
              <div className="hidden md:block w-px h-4 bg-surface-3/30" />
              
              {/* Technical Excellence Badge */}
              <span className="tracking-wide">
                Engineered with Precision
              </span>
            </div>
            
            {/* Ultra-subtle Brand Reinforcement */}
            <div className="pt-6 border-t border-surface-2/10">
              <p className="text-xs text-muted-foreground/40 tracking-wide">
                Where Innovation Meets Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Subtle Gradient Accent - Reinforces Premium Aesthetic */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
    </footer>
  )
}