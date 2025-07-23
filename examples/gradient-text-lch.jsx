import { cn } from '@/lib/utils'

/**
 * Linear-style gradient text component
 * Creates smooth text gradients with optional animation
 * Updated to use LCH color space as per DESIGN.md
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
    blurple: 'from-accent to-accent2',           // lch(70% 90 230) to lch(65% 80 280)
    greenBlue: 'from-accent-green to-accent',    // lch(65% 85 142) to lch(70% 90 230)
    orangePurple: 'from-accent-orange to-accent2', // lch(70% 75 70) to lch(65% 80 280)
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