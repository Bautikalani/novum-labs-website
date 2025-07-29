// src/app/page.tsx
import { Header } from '@/components/layout/header'
import { HeroSection } from '@/components/sections/hero-section'
import { DemosSection } from '@/components/sections/demos-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <>
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - "Smarter Ops. Leaner Teams. Faster Growth." */}
        <HeroSection />
        
        {/* Interactive Demos Section */}
        <DemosSection />
        
        {/* Why Choose Novum Labs */}
        <WhyUsSection />
        
        {/* Our Process */}
        <ProcessSection />
        
        {/* Meet the Team */}
        <TeamSection />
        
        {/* Call to Action */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Phase 3: Scroll Progress Indicator */}
      {/* <ScrollProgress /> */}
    </>
  )
}