import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        background: 'linear-gradient(135deg, lch(67.9% 53.5 239), lch(86.7% 70.9 153), lch(95.2% 29.1 192), lch(65.5% 79.3 338))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}
    >
      {children}
    </span>
  )
}