import type { Metadata } from 'next'
import '../styles/globals.css'

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
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}