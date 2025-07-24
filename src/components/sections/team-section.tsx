import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    id: 1,
    name: "Bautista Kalani Giesenow",
    role: "Chief Executive Officer", 
    linkedin: "",
    image: "/images/team-placeholder-1.jpg"
  },
  {
    id: 2,
    name: "Alessandro Donato Pascali",
    role: "Chief Growth Officer",
    linkedin: "",
    image: "/images/team-placeholder-2.jpg"
  },
  {
    id: 3,
    name: "Sebastian Kloster", 
    role: "Chief Technology Officer",
    linkedin: "",
    image: "/images/team-placeholder-3.jpg"
  },
  {
    id: 4,
    name: "Tomas Gerbi",
    role: "Lead Engineer",
    linkedin: "",
    image: "/images/team-placeholder-4.jpg"
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals driving AI innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-border/50 bg-surface/30 hover:bg-surface/50 transition-colors">
              <CardContent className="pt-6">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-gradient-primary/10">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                <div className="text-center space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  {member.linkedin && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={member.linkedin} className="text-accent-blue hover:text-accent-blue/80">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}