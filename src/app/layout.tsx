import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

// Local font configurations
const inter = localFont({
  src: '../fonts/inter-var.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '400 700',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

const satoshi = localFont({
  src: '../fonts/satoshi-var.woff2',
  variable: '--font-satoshi',
  display: 'swap',
  weight: '400 700',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

const jetbrainsMono = localFont({
  src: '../fonts/jetbrains-mono-var.woff2',
  variable: '--font-mono',
  display: 'swap',
  weight: '400 700',
  fallback: ['ui-monospace', 'monospace'],
})

export const metadata: Metadata = {
  title: 'Novum Labs - Custom AI Solutions for Business Transformation',
  description: 'Transform your business with custom AI solutions. Smarter Ops. Leaner Teams. Faster Growth. Book a discovery call today.',
  keywords: 'AI consulting, custom AI solutions, business transformation, AI implementation, machine learning, enterprise AI',
  authors: [{ name: 'Novum Labs' }],
  creator: 'Novum Labs',
  publisher: 'Novum Labs',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novumlabs.ai',
    siteName: 'Novum Labs',
    title: 'Novum Labs - Custom AI Solutions for Business',
    description: 'Transform your business with custom AI solutions that deliver real ROI. Smarter Ops. Leaner Teams. Faster Growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Novum Labs - AI Solutions',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Novum Labs - Custom AI Solutions',
    description: 'Transform your business with custom AI solutions. Smarter Ops. Leaner Teams. Faster Growth.',
    images: ['/twitter-image.png'],
    creator: '@novumlabs',
  },
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Theme color
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      
      <body 
        className={`
          min-h-screen bg-background font-sans antialiased
          selection:bg-primary/20 selection:text-foreground
        `}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="
            sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
            z-50 px-4 py-2 bg-primary text-white rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          "
        >
          Skip to main content
        </a>
        
        {/* Noise texture overlay - Phase 2 */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Main content */}
        {children}
        
        {/* Portal root for modals */}
        <div id="portal-root" />
      </body>
    </html>
  )
}