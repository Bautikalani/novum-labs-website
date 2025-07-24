import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-background" id="book-call">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-border/50 bg-gradient-to-r from-surface/50 to-surface/30">
          <CardContent className="text-center py-16 px-8 relative">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss how AI can solve your specific challenges and drive real results for your company
                </p>
              </div>
              
              <Button asChild size="lg" className="text-lg px-8 py-6 min-w-[220px]">
                <Link href="#book-call">
                  Book Discovery Call
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Free 30-minute consultation • No commitment required
              </p>
            </div>
            
            {/* Journey Line End */}
            <div className="absolute bottom-8 left-16 w-2 h-8 bg-gradient-primary rounded-full opacity-60" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}