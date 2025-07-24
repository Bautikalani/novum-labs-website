import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understand your unique challenges and opportunities",
    icon: "🔍"
  },
  {
    id: 2, 
    title: "Strategy",
    description: "Design AI solutions tailored to your business",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Development", 
    description: "Build and test with industry best practices",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launch, monitor, and continuously improve",
    icon: "🚀"
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Transform Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful AI implementation
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="text-center border-border/50 bg-surface/30 hover:bg-surface/50 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-blue">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}