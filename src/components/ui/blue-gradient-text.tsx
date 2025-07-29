import { cn } from '@/lib/utils'

interface BlueGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function BlueGradientText({ children, className }: BlueGradientTextProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        background: `
          radial-gradient(at 30% 20%, var(--gradient-blue) 0px, transparent 40%),
          radial-gradient(at 70% 40%, lch(75% 45 245) 0px, transparent 35%),
          radial-gradient(at 20% 70%, var(--gradient-cyan) 0px, transparent 45%),
          radial-gradient(at 80% 80%, lch(60% 50 235) 0px, transparent 30%),
          radial-gradient(at 50% 10%, lch(80% 40 250) 0px, transparent 40%)
        `,
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