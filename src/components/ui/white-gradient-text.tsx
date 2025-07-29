import { cn } from '@/lib/utils'

interface WhiteGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function WhiteGradientText({ children, className }: WhiteGradientTextProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        background: 'linear-gradient(135deg, lch(100% 0 0), lch(92% 8 0), lch(100% 0 0))',
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