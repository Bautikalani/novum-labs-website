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
        w-full max-w-[1200px] mx-auto
        px-5 sm:px-6 lg:px-8
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  )
}