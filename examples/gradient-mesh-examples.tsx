import { GradientMeshBackground } from '@/components/backgrounds/gradient-mesh-background'
import { useState } from 'react'

/**
 * Example implementations of the Linear-style gradient mesh background
 * Shows various configurations and usage patterns
 */

// Example 1: Hero Section with Parallax
export function HeroWithGradientMesh() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full hero gradient with default settings */}
      <GradientMeshBackground 
        variant="hero"
        opacity={0.4}
        blur={120}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-foreground">
          Transform with AI
        </h1>
      </div>
    </section>
  )
}

// Example 2: Content Section with Subtle Background
export function ContentWithSubtleGradient() {
  return (
    <section className="relative py-[var(--space-20)]">
      {/* Subtle gradient for content areas */}
      <GradientMeshBackground 
        variant="subtle"
        opacity={0.25}
        blur={150}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-[var(--space-6)]">
        <h2 className="text-3xl font-semibold mb-[var(--space-8)]">Our Process</h2>
        <p className="text-lg text-muted-foreground">
          We partner with forward-thinking companies to implement custom AI solutions.
        </p>
      </div>
    </section>
  )
}

// Example 3: Interactive CTA with Vibrant Gradient
export function InteractiveCTASection() {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <section 
      className="relative py-[var(--space-16)]"  
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vibrant gradient that responds to hover */}
      <GradientMeshBackground 
        variant="vibrant"
        opacity={isHovered ? 0.4 : 0.3}
        blur={isHovered ? 60 : 80}
        animate={true}
      />
      
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold mb-[var(--space-4)]">Ready to Transform?</h3>
        <button className="px-[var(--space-8)] py-[var(--space-3)] bg-primary text-primary-foreground rounded-lg">
          Book Discovery Call
        </button>
      </div>
    </section>
  )
}

// Example 4: Card with Gradient Background
export function GradientCard() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-border">
      {/* Subtle gradient for card backgrounds */}
      <GradientMeshBackground 
        variant="subtle"
        opacity={0.15}
        blur={100}
        className="rounded-lg"
      />
      
      <div className="relative z-10 p-[var(--space-6)]">
        <h4 className="text-xl font-semibold mb-[var(--space-2)]">AI Strategy</h4>
        <p className="text-muted-foreground">
          Develop a comprehensive AI roadmap aligned with your business goals.
        </p>
      </div>
    </div>
  )
}

// Example 5: Reduced Motion Preference
export function AccessibleGradientSection() {
  return (
    <section className="relative py-[var(--space-20)]">
      {/* Gradient respects prefers-reduced-motion */}
      <GradientMeshBackground 
        variant="hero"
        opacity={0.3}
        blur={120}
        animate={true} // Will be disabled if user prefers reduced motion
      />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center">
          Accessible by Design
        </h2>
      </div>
    </section>
  )
}

// Example 6: Performance-Optimized Mobile Version
export function MobileOptimizedGradient() {
  return (
    <section className="relative">
      {/* Reduced layers and blur for mobile performance */}
      <div className="block lg:hidden">
        <GradientMeshBackground 
          variant="subtle" // Only 2 layers
          opacity={0.3}
          blur={80} // Less blur for performance
        />
      </div>
      
      {/* Full gradient for desktop */}
      <div className="hidden lg:block">
        <GradientMeshBackground 
          variant="hero"
          opacity={0.4}
          blur={120}
        />
      </div>
      
      <div className="relative z-10 p-[var(--space-8)]">
        {/* Content */}
      </div>
    </section>
  )
}

// Example 7: Custom Gradient Configuration
export function CustomGradientImplementation() {
  return (
    <section className="relative min-h-[25rem] flex items-center justify-center">
      {/* Base gradient */}
      <GradientMeshBackground 
        variant="hero"
        opacity={0.35}
        blur={100}
      />
      
      {/* Additional overlay for extra depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, var(--color-background) 70%)',
          opacity: 0.6,
        }}
      />
      
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-[var(--space-4)]">
          Custom Gradient Composition
        </h2>
      </div>
    </section>
  )
}

/**
 * Usage Guidelines:
 * 
 * 1. Hero Sections:
 *    - Use "hero" variant with 0.4 opacity
 *    - 7.5rem blur for soft, dreamy effect (120px)
 *    - Enable animations for visual interest
 * 
 * 2. Content Sections:
 *    - Use "subtle" variant with 0.2-0.3 opacity
 *    - 9.375rem blur for maximum subtlety (150px)
 *    - Consider disabling animations for readability
 * 
 * 3. CTA/Interactive Elements:
 *    - Use "vibrant" variant
 *    - Adjust opacity on interaction (0.3 → 0.4)
 *    - Reduce blur on hover for emphasis
 * 
 * 4. Performance Considerations:
 *    - Mobile: Use "subtle" variant (2 layers max)
 *    - Reduce blur values by 30-40% on mobile
 *    - Test on real devices for 60fps target
 * 
 * 5. Accessibility:
 *    - Always include relative z-10 on content
 *    - Ensure text contrast remains WCAG compliant
 *    - Gradients are decorative - use aria-hidden
 */