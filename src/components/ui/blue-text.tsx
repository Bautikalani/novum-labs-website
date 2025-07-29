import { cn } from '@/lib/utils'

interface BlueTextProps {
  children: React.ReactNode
  className?: string
}

export function BlueText({ children, className }: BlueTextProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        color: 'lch(41% 35.7 262)'
      }}
    >
      {children}
    </span>
  )
}