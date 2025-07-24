import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Novum Labs - Custom AI Solutions for Business Transformation',
  description: 'Transform your business with custom AI solutions. Novum Labs partners with companies to implement AI that drives real results. Book a discovery call today.',
  keywords: 'AI consulting, custom AI solutions, business transformation, AI implementation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-foreground text-background rounded-md">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}