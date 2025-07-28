import { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={`
        w-full max-w-[var(--container-max)] mx-auto
        px-[var(--container-padding-mobile)] sm:px-[var(--container-padding-tablet)] lg:px-[var(--container-padding-desktop)]
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  )
}