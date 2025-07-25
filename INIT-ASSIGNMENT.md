# INIT-ASSIGNMENT-LAVA-LAMP-EFFECT.md — Subtle Ambient Background Animation

## Task Metadata
**Task ID:** POLISH-2025-01-24-001  
**Priority:** High  
**Type:** Animation  
**Estimated Impact:** Moderate  
**Target Completion:** 90 minutes

## Task Description
**One-line summary:**  
Add a subtle, premium lava lamp-style ambient effect to enhance the dark background with sophisticated movement.

**Detailed requirements:**  
- Current state: Plain black background (`lch(18% 0 0)`) feels static and lacks visual interest
- Desired outcome: Subtle floating gradient blobs that slowly morph and drift, creating gentle ambient movement
- Success criteria: 
  - Effect remains understated and professional (not distracting from content)
  - Maintains premium aesthetic suitable for high-ticket B2B clients
  - Performance-optimized with smooth 60fps animation
  - Respects user motion preferences
- Constraints: Must not interfere with text readability or existing gradient elements

## Target Component/Section
**Primary target:**  
- [x] Global: Background effect visible across all sections
- [ ] Component: `src/components/layout/RootLayout.tsx`
- [ ] Page: All pages (Landing, Playground, Book)

**Specific elements:**  
- Root layout background layer
- New component: `src/components/effects/LavaLampBackground.tsx`
- CSS custom properties for effect configuration
- Possible canvas or CSS-only implementation

## Expected Outcomes
### Visual Changes
- [x] Subtle floating orbs with soft gradient transitions (using existing accent colors)
- [x] Slow, organic movement patterns (15-30 second animation loops)
- [x] Very low opacity (5-10%) to maintain text contrast
- [x] Gaussian blur for soft edges and depth
- [x] Multiple layers for depth perception

### Behavioral Changes
- [x] Continuous ambient animation (GPU-accelerated)
- [x] Pauses when tab is not visible (performance optimization)
- [x] Respects `prefers-reduced-motion` media query
- [x] No interaction with mouse movement (purely ambient)

### Performance Impact
- [x] No performance regression
- [x] Maintains 60fps animations
- [x] Lighthouse score remains 90+
- [x] Bundle size increase < 3KB (if using CSS-only approach)

## Quality Gates
### Pre-execution Checks
- [x] Current implementation reviewed
- [x] Design tokens from DESIGN.md verified (LCH colors)
- [x] Animation patterns from examples/ referenced
- [x] Research modern lava lamp implementations (CSS vs Canvas)

### Post-execution Validation
- [x] Visual regression testing passed
- [x] Responsive behavior verified (scales appropriately)
- [x] Dark theme rendering correct
- [x] WCAG AA contrast maintained (text remains readable)
- [x] Animation performance at 60fps
- [x] No console errors or warnings
- [x] CPU usage remains low (< 5% increase)

## Files Affected Checklist
### Likely to modify:
- [x] `src/app/layout.tsx` (add background component)
- [x] `src/components/effects/LavaLampBackground.tsx` (new component)
- [x] `src/styles/globals.css` (CSS variables for configuration)
- [x] `tailwind.config.ts` (potential new animation utilities)

### Potentially impacted (verify):
- [x] Hero section (ensure mesh gradient still visible)
- [x] Demo cards (verify hover effects work correctly)
- [x] Performance metrics
- [x] Mobile rendering

## Implementation Notes
### Approach:
CSS-only implementation using multiple gradient layers with animation keyframes. This approach is lighter than canvas and maintains better performance. Fallback to static gradients for reduced motion preference.

### Animation Details:
- Duration: 15-30s per blob rotation cycle
- Easing: `cubic-bezier(0.45, 0.05, 0.55, 0.95)` (smoother than standard)
- Trigger: Auto-start on page load
- Library: Pure CSS (no JS required for basic effect)

### Design System Alignment:
- Colors: 
  - `--accent-1: lch(70% 90 230)` at 5% opacity
  - `--accent-2: lch(65% 80 280)` at 5% opacity
  - Potential third color from green accent at 3% opacity
- Blur: 80-120px gaussian blur
- Movement: Transform translate3d for GPU acceleration

## Context & References
### Design Inspiration:
- [x] Linear: Subtle gradient overlays in dashboard backgrounds
- [ ] CoLab: [N/A - focus on subtle ambience]
- [x] Stripe: Gradient orb on homepage (but more subtle)
- [x] Vercel: Geist design system's ambient backgrounds

### Related Examples:
- [x] Modern implementations: shadergradient.co (but simpler)
- [x] CSS-only approach: gradient animation with multiple layers
- [x] Performance pattern: will-change and transform3d optimization

### Documentation Links:
- [x] CSS Gradients: radial-gradient with animation
- [x] Performance: CSS containment and will-change
- [x] Accessibility: prefers-reduced-motion implementation

## Additional Context
**Key considerations for high-ticket B2B:**
- Effect must enhance credibility, not diminish it
- Subtlety is paramount - "felt but not seen"
- Should evoke innovation and sophistication
- Must not distract from content or CTAs
- Consider A/B testing opacity levels (5% vs 8% vs 10%)

**Technical approach options:**
1. **CSS-only** (recommended): Multiple animated radial gradients
2. **Canvas 2D**: More control but heavier performance
3. **WebGL**: Overkill for this use case
4. **SVG filters**: Good middle ground but more complex

**Proposed CSS structure:**
```css
.lava-lamp-bg {
  --blob-1-size: 40vw;
  --blob-2-size: 60vw;
  --blob-3-size: 50vw;
  --animation-duration: 20s;
  --opacity: 0.05;
}
```

---
*Ready for implementation. This enhancement will add sophisticated ambience while maintaining Novum Labs' premium, professional aesthetic.*