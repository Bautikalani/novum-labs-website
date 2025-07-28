'use client'

import { motion } from 'motion/react'

export function FloatingGradientOrbs() {
  // Define orb configurations with different colors, sizes, and positions
  const orbs = [
    {
      id: 'orb-1',
      size: 400,
      color: 'lch(67.9% 53.5 239)', // gradient-blue
      initialX: '10%',
      initialY: '20%',
      duration: 25,
    },
    {
      id: 'orb-2', 
      size: 350,
      color: 'lch(86.7% 70.9 153)', // gradient-green
      initialX: '80%',
      initialY: '60%',
      duration: 30,
    },
    {
      id: 'orb-3',
      size: 300,
      color: 'lch(95.2% 29.1 192)', // gradient-cyan
      initialX: '60%',
      initialY: '10%',
      duration: 35,
    },
    {
      id: 'orb-4',
      size: 280,
      color: 'lch(65.5% 79.3 338)', // gradient-pink
      initialX: '20%',
      initialY: '80%',
      duration: 28,
    },
    {
      id: 'orb-5',
      size: 320,
      color: 'lch(41% 35.7 262)', // primary
      initialX: '90%',
      initialY: '30%',
      duration: 32,
    }
  ]

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity: 0.08,
            filter: 'blur(1px)',
            left: orb.initialX,
            top: orb.initialY,
            transform: 'translate3d(-50%, -50%, 0)',
            willChange: 'transform',
          }}
          animate={{
            x: [-50, 50, -30, 30, -50],
            y: [-30, 40, -50, 20, -30],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
            times: [0, 0.25, 0.5, 0.75, 1], // Evenly distributed keyframes
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
          }}
        />
      ))}
    </div>
  )
}