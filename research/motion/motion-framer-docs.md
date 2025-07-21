# Motion 12.23.6 (Framer Motion) Documentation

**Source**: https://motion.dev/docs/react
**Scraped**: [Current Date]

## Overview

Motion for React (formerly Framer Motion) is a production-ready animation library. Version 12 includes a hybrid animation engine combining JavaScript animations with the Web Animations API.

## Installation

```bash
npm install motion
```

## Basic Animation

```jsx
import { motion } from "motion/react"

export function Box() {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ duration: 0.5 }}
    />
  )
}
```

## Animation Properties

### animate
Define the animation state:

```jsx
<motion.div
  animate={{
    x: 100,
    y: 50,
    scale: 1.2,
    rotate: 45,
    opacity: 0.8
  }}
/>
```

### initial
Set the initial state:

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
/>
```

### transition
Control animation behavior:

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{
    duration: 0.5,
    delay: 0.2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse"
  }}
/>
```

## Gestures

### whileHover
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Drag
```jsx
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100 }}
  dragElastic={0.2}
/>
```

## Variants

Orchestrate complex animations:

```jsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>
```

### Parent-Child Animations
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map(id => (
    <motion.li key={id} variants={item} />
  ))}
</motion.ul>
```

## Scroll Animations

### useScroll
```jsx
import { useScroll, useTransform } from "motion/react"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  
  return <motion.div style={{ scale }} />
}
```

### Scroll-Triggered Animations
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
/>
```

## Layout Animations

### layout
Animate layout changes:

```jsx
<motion.div layout>
  {isOpen && <p>Content</p>}
</motion.div>
```

### layoutId
Animate between different components:

```jsx
{items.map(item => (
  <motion.div layoutId={item.id} />
))}
```

## AnimatePresence

Animate components as they're removed:

```jsx
import { AnimatePresence } from "motion/react"

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

## Advanced Features

### Path Drawing
```jsx
<motion.path
  d="M 0 0 L 100 100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
/>
```

### useMotionValue
```jsx
import { useMotionValue, useTransform } from "motion/react"

function Component() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  
  return <motion.div style={{ x, opacity }} drag="x" />
}
```

### useAnimation
```jsx
import { useAnimation } from "motion/react"

function Component() {
  const controls = useAnimation()
  
  const sequence = async () => {
    await controls.start({ x: 100 })
    await controls.start({ y: 100 })
    await controls.start({ x: 0, y: 0 })
  }
  
  return <motion.div animate={controls} />
}
```

## Performance Tips

### 1. Use CSS Properties
Prefer animating transform and opacity:
```jsx
// Good
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// Avoid when possible
<motion.div animate={{ left: 100 }} />
```

### 2. will-change
Motion automatically applies will-change, but you can control it:
```jsx
<motion.div
  style={{ willChange: "transform" }}
  animate={{ x: 100 }}
/>
```

### 3. GPU Acceleration
Use transform3d for GPU acceleration:
```jsx
<motion.div
  animate={{ x: 100, z: 0 }}
/>
```

## Accessibility

### Reduced Motion
Automatically respects prefers-reduced-motion:
```jsx
// Motion handles this automatically, but you can override
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0 }} // Instant for reduced motion
/>
```

### Focus Management
```jsx
<motion.button
  whileFocus={{ scale: 1.05 }}
  whileHover={{ scale: 1.1 }}
/>
```

## Common Patterns

### Stagger Children
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}
```

### Shared Layout
```jsx
<motion.div layoutId="shared-element">
  Content that transitions between views
</motion.div>
```

### Exit Animations
```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={selectedTab}
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
  />
</AnimatePresence>
```