import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">
            <Link href="/" className="hover:text-primary transition-colors">
              Novum Labs
            </Link>
          </h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Button asChild variant="default" size="sm">
            <Link href="#book-call">Book Call</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}