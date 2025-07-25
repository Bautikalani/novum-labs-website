'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { smoothScrollTo } from '@/lib/smooth-scroll'

const navigationItems = [
  { name: 'Demos', id: 'demos' },
  { name: 'Process', id: 'process' },
  { name: 'Team', id: 'team' },
]

export function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">
            <button 
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('hero')
              }}
              className="hover:text-primary transition-colors"
            >
              Novum Labs
            </button>
          </h1>
        </div>
        
        <nav className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <Button 
            variant="default" 
            size="sm"
            onClick={() => smoothScrollTo('book-call')}
          >
            Book Call
          </Button>
        </nav>
      </div>
    </header>
  )
}