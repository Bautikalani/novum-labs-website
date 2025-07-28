import { Header } from '@/components/layout/header'
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
        
        <HeroSection />
        <DemosSection />
        <ProcessSection />
        <TeamSection />
        <CTASection />
      </main>
    </>
  )
}