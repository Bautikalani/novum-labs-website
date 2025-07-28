# Gradient Mesh Background Design Specification

## Overview
A Linear-inspired animated gradient mesh background system that creates sophisticated depth through multiple layers of slowly animated gradients. The design emphasizes subtlety and performance while maintaining visual interest.

## Design Philosophy

### Core Principles
1. **Subtlety Over Statement**: Animations should enhance, not distract
2. **Depth Through Layers**: Multiple gradient layers create dimensionality
3. **Organic Movement**: Natural, breathing animations that feel alive
4. **Performance First**: 60fps maintained across all devices
5. **Systematic Approach**: Reusable variants for consistency

## Technical Specifications

### Animation Timing
```
Primary Cycle Durations:
- Hero Variant: 40-55 seconds per layer
- Subtle Variant: 55-60 seconds per layer  
- Vibrant Variant: 30-40 seconds per layer

Stagger Delays:
- Layer 1: 0s (immediate)
- Layer 2: 5-8s offset
- Layer 3: 10-15s offset
- Layer 4: 15-20s offset

Easing Function:
cubic-bezier(0.45, 0.05, 0.55, 0.95) - Organic feel
```

### Color Implementation
All gradients use Linear's LCH color variables for perceptual uniformity:

```css
--gradient-blue: lch(67.9% 53.5 239);   /* Primary depth */
--gradient-green: lch(86.7% 70.9 153);  /* Natural accent */
--gradient-cyan: lch(95.2% 29.1 192);   /* Bright highlight */
--gradient-pink: lch(65.5% 79.3 338);   /* Warm contrast */
```

### Layer Composition

#### Hero Variant (4 layers)
1. **Blue Foundation** (25% 20%)
   - Largest gradient ellipse (50rem x 37.5rem)
   - Subtle horizontal drift: ±10%
   - Scale breathing: 1.0 → 1.1
   - Creates primary color base

2. **Green Accent** (75% 10%)
   - Vertical ellipse (37.5rem x 50rem)
   - Counter-movement to Layer 1
   - Provides top-right balance

3. **Cyan Depth** (15% 70%)
   - Square gradient (43.75rem x 43.75rem)
   - Larger movement range: ±12%
   - Inverse scale: 1.05 → 0.95
   - Adds bottom visual weight

4. **Pink Highlight** (85% 80%)
   - Smallest gradient (31.25rem x 37.5rem)
   - Most dynamic scaling: 0.9 → 1.15
   - Fastest animation (40s)
   - Creates visual interest point

#### Subtle Variant (2 layers)
- Larger gradients with higher transparency
- Slower animations (55-60s cycles)
- Minimal scale changes (±2%)
- Ideal for content sections

#### Vibrant Variant (3 layers)
- Smaller, more concentrated gradients
- Includes rotation animations
- Faster cycles (30-40s)
- For CTA sections and emphasis areas

### Blend Mode Strategy

```
Layer Index | Blend Mode | Purpose
------------|------------|----------
0, 2        | normal     | Base color definition
1, 3        | screen     | Brightening and glow
Texture     | multiply   | Depth and grounding
```

### Opacity Guidelines

```
Component State         | Opacity | Blur
------------------------|---------|--------
Hero Section           | 0.4     | 7.5rem
Content Background     | 0.2-0.3 | 6.25rem
Card Backgrounds       | 0.1-0.2 | 5rem
Hover States          | +0.1    | -1.25rem
Disabled States       | -0.2    | +2.5rem
```

## Implementation Guidelines

### Performance Optimization
1. **GPU Acceleration**
   - Use `will-change: transform` on animated layers
   - Transform-only animations (no layout shifts)
   - Composite layers for smooth rendering

2. **Responsive Behavior**
   - Desktop: Full 4-layer implementation
   - Tablet: Reduce to 3 layers
   - Mobile: Maximum 2 layers
   - Always maintain 60fps target

3. **Accessibility**
   - Respect `prefers-reduced-motion`
   - Provide static fallback
   - Ensure sufficient contrast over gradients
   - Mark as decorative with `aria-hidden="true"`

### Usage Patterns

#### Hero Section Integration
```tsx
<section className="relative">
  <GradientMeshBackground 
    variant="hero"
    opacity={0.4}
    blur={120} // 7.5rem
    animate={true}
  />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</section>
```

#### Content Section Usage
```tsx
<GradientMeshBackground 
  variant="subtle"
  opacity={0.25}
  blur={150} // 9.375rem
  className="absolute inset-0"
/>
```

#### CTA Enhancement
```tsx
<GradientMeshBackground 
  variant="vibrant"
  opacity={0.3}
  blur={80} // 5rem
  animate={hovering}
/>
```

## Visual Rhythm

### Movement Patterns
- **Horizontal Drift**: Primary x-axis movement creates reading flow
- **Vertical Float**: Secondary y-axis adds dimensionality  
- **Scale Breathing**: Organic expansion/contraction
- **Rotation (Vibrant)**: Dynamic energy for CTAs

### Timing Relationships
- Each layer's animation is prime-numbered duration to avoid synchronization
- Staggered delays create cascading effect
- Reverse repeat creates seamless loops

## Color Psychology

### Gradient Positioning
- **Top-Left (Blue)**: Trust, stability, entry point
- **Top-Right (Green)**: Growth, progress, positive flow
- **Bottom-Left (Cyan)**: Innovation, technology, depth
- **Bottom-Right (Pink)**: Warmth, human touch, conclusion

## Edge Cases

### Dark Mode Considerations
- Gradients designed for dark backgrounds
- No adjustments needed for current dark-first approach
- Future light mode: Reduce opacity by 50%

### High Contrast Mode
- Gradients automatically disabled
- Solid background fallback
- Maintains WCAG compliance

### Print Styles
- All gradients removed
- Clean white background
- No performance impact

## Maintenance Notes

### Adding New Variants
1. Define gradient positions and sizes
2. Set animation parameters (30-60s range)
3. Test blend mode combinations
4. Verify performance metrics
5. Document usage guidelines

### Performance Monitoring
- Target: < 3ms paint time
- Maximum 2 composite layers
- No layout thrashing
- Consistent 60fps

## Future Enhancements

### Planned Features
1. **Interactive Response**: Gradients react to mouse position
2. **Scroll Parallax**: Layers move at different scroll speeds
3. **Time-Based Shifts**: Color temperature changes by time of day
4. **WebGL Version**: For even richer effects on high-end devices

### Experimental Ideas
- Noise texture overlays for grain
- SVG filter effects for distortion
- CSS Houdini paint worklets
- Variable blur based on scroll

---

This gradient mesh system creates the sophisticated, premium feel that positions Novum Labs as a cutting-edge AI consultancy while maintaining the performance and accessibility standards expected of a Linear-inspired design.