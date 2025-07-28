'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  velocity: { x: number; y: number }
  color: string
}

interface FloatingParticlesProps {
  count?: number
  colors?: string[]
  className?: string
}

export function FloatingParticles({
  count = 20,
  colors = ['rgba(71, 91, 161, 0.1)', 'rgba(71, 91, 161, 0.05)', 'rgba(255, 255, 255, 0.02)'],
  className = ''
}: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number | null>(null)

  // Initialize particles
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      },
      color: colors[Math.floor(Math.random() * colors.length)]
    }))

    setParticles(newParticles)
  }, [dimensions, count, colors])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles(currentParticles =>
        currentParticles.map(particle => {
          let newX = particle.x + particle.velocity.x
          let newY = particle.y + particle.velocity.y

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            particle.velocity.x *= -1
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.velocity.y *= -1
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY
          }
        })
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    if (particles.length > 0) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles.length, dimensions])

  // Pause animation on reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion && animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// Cursor-reactive particles that respond to mouse movement
export function InteractiveParticles({
  count = 15,
  className = ''
}: {
  count?: number
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      velocity: { x: 0, y: 0 },
      color: 'rgba(71, 91, 161, 0.15)'
    }))

    setParticles(newParticles)
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map(particle => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + 
          Math.pow(mousePosition.y - particle.y, 2)
        )
        const maxDistance = 150
        const attraction = Math.max(0, 1 - distance / maxDistance)

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              x: particle.x + (mousePosition.x - particle.x) * attraction * 0.1,
              y: particle.y + (mousePosition.y - particle.y) * attraction * 0.1,
              opacity: particle.opacity + attraction * 0.3,
              scale: 1 + attraction * 0.5
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 50
            }}
          />
        )
      })}
    </div>
  )
}