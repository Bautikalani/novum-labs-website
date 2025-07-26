'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionWrapper } from '@/components/animated/section-wrapper'
import { fadeInUp } from '@/lib/motion-config'
import { Container } from '@/components/layout/Container'

const teamMembers = [
  {
    id: 1,
    name: "Bautista Kalani Giesenow",
    role: "Chief Executive Officer", 
    linkedin: "",
    image: "/images/kala-headshot-square.JPG"
  },
  {
    id: 2,
    name: "Alessandro Donato Pascali",
    role: "Chief Growth Officer",
    linkedin: "",
    image: "/images/ale-headshot-square.jpeg"
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
    <SectionWrapper className="py-12 sm:py-20 lg:py-[7.5rem] bg-background" id="team" stagger>
      <Container>
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals driving AI innovation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              custom={index}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-border/50 bg-surface/30 hover:bg-surface/50 transition-colors group">
                  <CardContent className="pt-6">
                    <motion.div 
                      className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-gradient-primary/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </motion.div>
                    
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
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button asChild variant="ghost" size="sm">
                            <Link href={member.linkedin} className="text-accent-blue hover:text-accent-blue/80">
                              <Linkedin className="w-4 h-4 mr-2" />
                              LinkedIn
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}