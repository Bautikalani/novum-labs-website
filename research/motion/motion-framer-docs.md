# Motion (Framer Motion) 12.23.6 Documentation

## What's New in Motion 12.x

Motion (formerly Framer Motion) 12.x introduces significant performance improvements, new animation APIs, and enhanced TypeScript support.

## Core Concepts

### 1. Motion Components
Transform any HTML or SVG element into an animatable component:

```typescript
import { motion } from 'motion/react'

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-blue-500 text-white rounded-lg"
    >
      Hello Motion!
    </motion.div>
  )
}
```

### 2. Animation Properties

#### Basic Animations
```typescript
<motion.div
  animate={{
    x: 100,           // Move 100px to the right
    y: -50,           // Move 50px up
    scale: 1.2,       // Scale to 120%
    rotate: 45,       // Rotate 45 degrees
    opacity: 0.8,     // 80% opacity
  }}
  transition={{
    duration: 2,
    ease: "easeInOut"
  }}
/>
```

#### Complex Transformations
```typescript
<motion.div
  animate={{
    x: [0, 100, 0],           // Keyframes
    backgroundColor: [
      "#ff0000", 
      "#00ff00", 
      "#0000ff"
    ],
    borderRadius: ["0%", "50%", "0%"],
  }}
  transition={{
    duration: 3,
    times: [0, 0.5, 1],       // Control keyframe timing
    repeat: Infinity,         // Loop forever
    repeatType: "reverse"     // Reverse on each repeat
  }}
/>
```

## Advanced Animation Patterns

### 1. Layout Animations
Automatic layout animations when elements change position:

```typescript
import { motion, AnimatePresence } from 'motion/react'

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      <AnimatePresence>
        {todos.map(todo => (
          <motion.div
            key={todo.id}
            layout                    // Animate layout changes
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="p-4 border rounded mb-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
```

### 2. Scroll-Triggered Animations
Animate elements based on scroll position:

```typescript
import { motion, useScroll, useTransform } from 'motion/react'

function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  
  return (
    <motion.section
      style={{ y, opacity }}
      className="h-screen bg-gradient-to-b from-blue-400 to-purple-600"
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">
          Parallax Effect
        </h1>
      </div>
    </motion.section>
  )
}
```

### 3. Gesture Animations
Handle user interactions with smooth animations:

```typescript
import { motion } from 'motion/react'

function InteractiveCard() {
  return (
    <motion.div
      className="w-64 h-40 bg-white rounded-lg shadow-lg cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ 
        left: -100, 
        right: 100, 
        top: -100, 
        bottom: 100 
      }}
      dragElastic={0.2}
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold">Draggable Card</h3>
        <p className="text-gray-600">Hover, click, and drag me!</p>
      </div>
    </motion.div>
  )
}
```

## Advanced Hooks and Utilities

### 1. useAnimate Hook
Imperative animations for complex sequences:

```typescript
import { useAnimate, stagger } from 'motion/react'
import { useEffect } from 'react'

function StaggeredList({ items }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, x: 0 },
      { 
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeOut"
      }
    )
  }, [animate])

  return (
    <ul ref={scope}>
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          className="p-2 border-b"
        >
          {item.title}
        </motion.li>
      ))}
    </ul>
  )
}
```

### 2. useMotionValue and useTransform
Create reactive animation values:

```typescript
import { motion, useMotionValue, useTransform } from 'motion/react'

function MouseFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [45, -45])
  const rotateY = useTransform(mouseX, [-300, 300], [-45, 45])

  function handleMouseMove(event) {
    const { clientX, clientY } = event
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    
    mouseX.set(clientX - left - width / 2)
    mouseY.set(clientY - top - height / 2)
  }

  return (
    <div 
      className="w-96 h-96 flex items-center justify-center bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg"
        style={{
          rotateX,
          rotateY,
        }}
      />
    </div>
  )
}
```

### 3. useInView Hook
Trigger animations when elements enter the viewport:

```typescript
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function ScrollReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px 0px"
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
```

## Performance Optimization

### 1. Transform Optimization
Use transform properties for better performance:

```typescript
// Good: Uses transforms (GPU accelerated)
<motion.div
  animate={{ x: 100, y: 50, scale: 1.2 }}
/>

// Avoid: Changes layout properties
<motion.div
  animate={{ left: 100, top: 50, width: 200 }}
/>
```

### 2. Layout Animations
Optimize layout changes with layoutId:

```typescript
function TabSelector({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative px-3 py-2 text-sm font-medium rounded-md"
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white shadow-sm rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
```

### 3. Reduced Motion Support
Respect user preferences:

```typescript
import { motion, useReducedMotion } from 'motion/react'

function AccessibleAnimation() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={{ x: shouldReduceMotion ? 0 : 100 }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 1,
        type: shouldReduceMotion ? false : "spring"
      }}
    />
  )
}
```

## Complex Animation Sequences

### 1. Timeline Animations
Create complex sequences with precise timing:

```typescript
import { motion, useAnimate } from 'motion/react'

function ComplexSequence() {
  const [scope, animate] = useAnimate()

  const runSequence = async () => {
    // Animate multiple elements in sequence
    await animate(".box1", { x: 100 }, { duration: 0.5 })
    await animate(".box2", { y: 100 }, { duration: 0.5 })
    
    // Animate multiple elements simultaneously
    animate([
      [".box1", { rotate: 360 }, { duration: 1 }],
      [".box2", { scale: 1.5 }, { duration: 1, delay: 0.2 }],
      [".box3", { opacity: 1 }, { duration: 0.8, delay: 0.4 }]
    ])
  }

  return (
    <div ref={scope}>
      <motion.div className="box1 w-16 h-16 bg-red-500" />
      <motion.div className="box2 w-16 h-16 bg-green-500" />
      <motion.div className="box3 w-16 h-16 bg-blue-500" initial={{ opacity: 0 }} />
      <button onClick={runSequence}>Start Animation</button>
    </div>
  )
}
```

### 2. Morphing Animations
Smooth transitions between different states:

```typescript
import { motion, AnimatePresence } from 'motion/react'

function MorphingButton({ isExpanded, onClick }) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className="bg-blue-500 text-white rounded-full overflow-hidden"
      initial={false}
      animate={{
        width: isExpanded ? 200 : 60,
        height: 60,
      }}
      transition={{ type: "spring", bounce: 0.1 }}
    >
      <motion.div
        className="flex items-center justify-center h-full"
        layout
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.span
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Click to collapse
            </motion.span>
          ) : (
            <motion.span
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
```

## 3D Animations and Perspective

### 1. 3D Transforms
Create depth with perspective animations:

```typescript
import { motion } from 'motion/react'

function Card3D() {
  return (
    <div className="perspective-1000">
      <motion.div
        className="w-64 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg shadow-lg"
        whileHover={{
          rotateY: 15,
          rotateX: 15,
          z: 50,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold">3D Card</h3>
          <p>Hover for 3D effect</p>
        </div>
      </motion.div>
    </div>
  )
}
```

### 2. Scroll-Based 3D Effects
```typescript
import { motion, useScroll, useTransform } from 'motion/react'

function Scroll3D() {
  const { scrollYProgress } = useScroll()
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <div className="h-[200vh]">
      <motion.div
        className="sticky top-1/2 w-32 h-32 bg-blue-500 mx-auto"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  )
}
```

## TypeScript Integration

### 1. Typed Motion Components
```typescript
import { motion, MotionProps } from 'motion/react'
import { HTMLMotionProps } from 'motion/react'

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  title: string
  description: string
  isActive?: boolean
}

function AnimatedCard({ 
  title, 
  description, 
  isActive = false, 
  ...motionProps 
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`p-6 rounded-lg ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...motionProps}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
```

### 2. Custom Animation Variants
```typescript
import { motion, type Variants } from 'motion/react'

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

function TypedVariantCard() {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <h3>Typed Variants</h3>
    </motion.div>
  )
}
```

## Best Practices

### 1. Performance Guidelines
- Use transform properties (x, y, scale, rotate) instead of layout properties
- Prefer `layoutId` for smooth transitions between components
- Use `AnimatePresence` for exit animations
- Implement reduced motion support
- Avoid animating expensive properties like `filter` or `clip-path`

### 2. Accessibility
```typescript
import { motion, useReducedMotion } from 'motion/react'

function AccessibleComponent() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      Content
    </motion.div>
  )
}
```

### 3. Bundle Size Optimization
```typescript
// Import only what you need
import { motion } from 'motion/react'           // Full package
import { m } from 'motion/react'               // Optimized runtime
import { LazyMotion, domAnimation } from 'motion/react'  // Lazy loading

// Use LazyMotion for smaller bundles
function OptimizedApp() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ x: 100 }} />
    </LazyMotion>
  )
}
```

This documentation covers the essential features and advanced patterns for creating smooth, performant animations with Motion 12.x in modern React applications.