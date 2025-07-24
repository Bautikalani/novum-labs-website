import { Header } from '@/components/layout/header'
import { JourneyLine } from '@/components/layout/journey-line'
import { HeroSection } from '@/components/sections/hero-section'
import { DemosSection } from '@/components/sections/demos-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TeamSection } from '@/components/sections/team-section' 
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="main-content">
        <JourneyLine />
        
        <HeroSection />
        <DemosSection />
        <ProcessSection />
        <TeamSection />
        <CTASection />
      </main>
    </>
  )
}