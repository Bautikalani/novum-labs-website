import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Build AI solutions that{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transform your business
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Novum Labs partners with forward-thinking companies to implement 
            custom AI solutions that drive real results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="#demos">See Live Demos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link href="#book-call">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Journey Line Start */}
      <div className="absolute bottom-20 left-16 w-2 h-8 bg-gradient-primary rounded-full opacity-60" />
    </section>
  )
}