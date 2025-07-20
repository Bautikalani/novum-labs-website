import { cn } from '@/lib/utils'

/**
 * Linear-style gradient text component
 * Creates smooth text gradients with optional animation
 * 
 * @example
 * <GradientText gradient="blurple" animate>
 *   Build AI solutions that transform your business
 * </GradientText>
 */
export function GradientText({
  children,
  className,
  gradient = 'blurple',
  animate = false,
}) {
  const gradients = {
    blurple: 'from-[#5e6ad2] to-[#b07bec]',
    greenBlue: 'from-[#26b082] to-[#5e6ad2]',
    orangePurple: 'from-[#f2994a] to-[#b07bec]',
  }
  
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        gradients[gradient],
        animate && 'animate-gradient-shift bg-[length:200%_auto]',
        className
      )}
    >
      {children}
    </span>
  )
} 