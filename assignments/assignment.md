# Assignment: Subtle Lava Lamp Background Effect
Generated from: INIT-ASSIGNMENT.md
Date: 2025-01-25T00:00:00Z
Task ID: POLISH-2025-01-24-001

## Execution Summary
Add a sophisticated lava lamp-style ambient effect to the global background using CSS-only animations with radial gradients. The effect will create subtle floating blobs that slowly morph and drift across the dark background, enhancing the premium aesthetic without distracting from content.

## Detailed Implementation

### 1. Create Lava Lamp Background Component
- **File**: `src/components/effects/LavaLampBackground.tsx` (NEW)
- **Changes**: Create new component with CSS-only animated gradients
- **Code**:
```typescript
export function LavaLampBackground() {
  return (
    <div className="lava-lamp-container" aria-hidden="true">
      <div className="lava-blob lava-blob-1" />
      <div className="lava-blob lava-blob-2" />
      <div className="lava-blob lava-blob-3" />
    </div>
  )
}
```

### 2. Update Global Styles for Lava Effect
- **File**: `src/styles/globals.css`
- **Changes**: Add lava lamp CSS animation classes after line 142
- **Code**:
```css
/* Lava Lamp Background Effect */
@layer components {
  .lava-lamp-container {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }
  
  .lava-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.05;
    animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    will-change: transform;
  }
  
  .lava-blob-1 {
    width: 40vw;
    height: 40vw;
    background: radial-gradient(circle, var(--color-accent-blue) 0%, transparent 70%);
    top: -20%;
    left: -10%;
    animation: blob-float-1 25s infinite;
  }
  
  .lava-blob-2 {
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, var(--color-accent-purple) 0%, transparent 70%);
    top: 50%;
    right: -20%;
    animation: blob-float-2 30s infinite;
  }
  
  .lava-blob-3 {
    width: 50vw;
    height: 50vw;
    background: radial-gradient(circle, var(--color-accent-green) 0%, transparent 70%);
    bottom: -30%;
    left: 20%;
    animation: blob-float-3 20s infinite;
  }
  
  @keyframes blob-float-1 {
    0%, 100% {
      transform: translate(0, 0) scale(1) rotate(0deg);
    }
    25% {
      transform: translate(10vw, 15vh) scale(1.1) rotate(90deg);
    }
    50% {
      transform: translate(-5vw, 20vh) scale(0.9) rotate(180deg);
    }
    75% {
      transform: translate(15vw, -10vh) scale(1.05) rotate(270deg);
    }
  }
  
  @keyframes blob-float-2 {
    0%, 100% {
      transform: translate(0, 0) scale(1) rotate(0deg);
    }
    33% {
      transform: translate(-20vw, -15vh) scale(0.95) rotate(120deg);
    }
    66% {
      transform: translate(-10vw, 10vh) scale(1.08) rotate(240deg);
    }
  }
  
  @keyframes blob-float-3 {
    0%, 100% {
      transform: translate(0, 0) scale(1) rotate(0deg);
    }
    20% {
      transform: translate(15vw, -20vh) scale(1.15) rotate(72deg);
    }
    40% {
      transform: translate(-10vw, -5vh) scale(0.85) rotate(144deg);
    }
    60% {
      transform: translate(5vw, 15vh) scale(1.1) rotate(216deg);
    }
    80% {
      transform: translate(-15vw, 5vh) scale(0.95) rotate(288deg);
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .lava-blob {
      animation: none;
      opacity: 0.03;
    }
  }
  
  /* Performance optimization for mobile */
  @media (max-width: 768px) {
    .lava-blob {
      filter: blur(60px);
    }
    
    .lava-blob-1 {
      animation-duration: 35s;
    }
    
    .lava-blob-2 {
      animation-duration: 40s;
    }
    
    .lava-blob-3 {
      display: none; /* Remove third blob on mobile for performance */
    }
  }
}
```

### 3. Add Component to Root Layout
- **File**: `src/app/layout.tsx`
- **Changes**: Import and add LavaLampBackground component after line 5, then add component after body tag
- **Code**:
```typescript
// After line 5, add:
import { LavaLampBackground } from '@/components/effects/LavaLampBackground'

// After line 25 (inside body tag, before skip link):
        <LavaLampBackground />
```

### 4. Export Component from Index
- **File**: `src/components/effects/index.ts` (NEW if doesn't exist)
- **Changes**: Create barrel export for effects components
- **Code**:
```typescript
export { LavaLampBackground } from './LavaLampBackground'
```

### 5. Update Background Color for Better Contrast
- **File**: `src/styles/globals.css`
- **Changes**: Update line 5 to use the darker background from DESIGN.md
- **Code**:
```css
  --color-background: lch(5% 0 0);  /* Changed from 18% to 5% for deeper black */
```

## Validation Protocol

### Performance Metrics
- [ ] **FPS Check**: Open Chrome DevTools > Performance > Record while scrolling
  - Target: 60fps maintained
  - Actual: _________
- [ ] **Paint Time**: Check frame rendering time
  - Target: < 16ms per frame
  - Actual: _________
- [ ] **GPU Memory**: Chrome Task Manager > GPU Process
  - Target: < 50MB increase
  - Actual: _________

### Visual Verification
- [ ] **Opacity Levels**: Blobs barely visible (5% opacity)
- [ ] **Blur Quality**: Soft edges with 80px blur
- [ ] **Animation Smoothness**: No stuttering or jumping
- [ ] **Color Accuracy**: Uses exact LCH values from design tokens
- [ ] **Mobile Appearance**: Two blobs only, smooth animation

### Cross-Browser Testing
- [ ] **Chrome 120+**: Full effect working
- [ ] **Safari 17+**: GPU acceleration enabled
- [ ] **Firefox 120+**: No visual artifacts
- [ ] **Edge**: Consistent with Chrome

### Accessibility
- [ ] **Text Contrast**: WCAG AA maintained over effect
- [ ] **Motion Preference**: Effect disabled when `prefers-reduced-motion`
- [ ] **Screen Reader**: aria-hidden="true" prevents announcement
- [ ] **Keyboard Navigation**: No interference with focus states

### Performance Budget
- [ ] **Lighthouse Score**: Remains 90+
- [ ] **CSS Size**: < 3KB additional
- [ ] **CPU Usage**: < 5% increase during animation
- [ ] **Bundle Impact**: No JavaScript added

## Rollback Plan
If issues arise:

1. **Remove component from layout**:
   ```typescript
   // Comment out in src/app/layout.tsx:
   // <LavaLampBackground />
   ```

2. **Disable animations via CSS**:
   ```css
   .lava-blob {
     animation: none !important;
     opacity: 0.03;
   }
   ```

3. **Full removal**:
   - Delete `src/components/effects/LavaLampBackground.tsx`
   - Remove CSS from `globals.css`
   - Remove import from `layout.tsx`

## Expected Outcome

### Visual Changes
- Subtle floating orbs drift across the background
- Very low opacity maintains professional aesthetic
- Slow, organic movement creates ambient life
- Colors from accent palette add brand consistency

### Technical Impact
- Pure CSS implementation (no JS overhead)
- GPU-accelerated transforms for smooth performance
- Responsive adjustments for optimal mobile experience
- Graceful degradation for reduced motion preference

### Success Metrics
- User feedback: "Sophisticated, not distracting"
- Performance: No measurable impact on Core Web Vitals
- Engagement: Subtle enhancement to premium perception
- Accessibility: Full compliance maintained

## Additional Notes

### Alternative Implementations Considered
1. **Canvas 2D**: More control but heavier performance impact
2. **WebGL**: Overkill for simple gradient blobs
3. **SVG Filters**: Good option but more complex setup
4. **CSS-only**: ✅ Chosen for simplicity and performance

### Future Enhancements
- Add subtle opacity pulsing to blobs
- Implement mouse-aware drift (Phase 4)
- Create preset themes for different moods
- Add configuration panel for client customization

### Testing Commands
```bash
# Run performance tests
npm run lighthouse

# Check bundle size
npm run analyze

# Validate accessibility
npm run test:a11y
```

---
*This assignment provides surgical implementation details for adding a premium lava lamp effect while maintaining Novum Labs' high-performance standards.*