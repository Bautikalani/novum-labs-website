# validation/phase3-checks.md — Phase 3 Interactive Polish Validation

## 🎯 Phase 3 Goal
Validate that CoLab-inspired animations are implemented performantly, booking integration works, and the site is production-ready while respecting user preferences.

## ✅ Prerequisites
```bash
# Both previous phases must pass
npm run validate:phase1
npm run validate:phase2

# Expected: All Phase 1 & 2 checks still passing
```

## ✅ Automated Checks

### 1. Animation Performance Testing
```bash
# Test 60fps requirement
npm run test:animation-performance

# Expected: All animations run at 60fps
```

**Test Script (tests/animation-performance.test.ts)**:
```typescript
test('Phase 3: Journey line animation performance', async ({ page }) => {
  await page.goto('/');
  
  // Start performance measurement
  await page.evaluate(() => {
    window.frameCount = 0;
    const startTime = performance.now();
    
    function countFrames() {
      window.frameCount++;
      if (performance.now() - startTime < 1000) {
        requestAnimationFrame(countFrames);
      }
    }
    requestAnimationFrame(countFrames);
  });
  
  // Scroll to trigger animations
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  
  // Check FPS
  const fps = await page.evaluate(() => window.frameCount);
  expect(fps).toBeGreaterThanOrEqual(58); // Allow small variance
});
```

### 2. Bundle Size Validation
```bash
# Check production bundle
npm run build
npm run analyze:bundle

# Expected from CLAUDE.md:
# - Total JS < 150KB gzipped
# - Motion library < 50KB
```

### 3. Reduced Motion Support
```bash
# Test with prefers-reduced-motion
npm run test:reduced-motion

# Expected: All animations disabled when preference set
```

**Test Cases**:
```typescript
test('Phase 3: Respects reduced motion', async ({ page }) => {
  // Enable reduced motion
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  
  // Check journey line has no animation
  const journeyLine = await page.$('.journey-line');
  const animationStyle = await journeyLine.evaluate(el => 
    window.getComputedStyle(el).animation
  );
  expect(animationStyle).toBe('none');
});
```

### 4. Journey Line Scroll Progress
```bash
# Test scroll-based animation
npm run test:journey-line

# Expected: Line fills proportionally to scroll
```

**Validation Points**:
- At 0% scroll: Line unfilled (opacity 0.2)
- At 50% scroll: Line 50% filled
- At 100% scroll: Line fully filled (opacity 0.8)
- Current position glows

### 5. Lighthouse Performance (Production)
```bash
# Run Lighthouse CI
npm run lighthouse:ci

# Expected from CLAUDE.md Phase 3:
# - Performance: 95+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 95+
```

### 6. Motion Library Integration
```bash
# Verify Motion (Framer Motion) setup
npm run test:motion-integration

# Expected: Motion 12.23.6 properly integrated
```

## 📋 Manual Checklist

### Animation Implementation

#### Journey Line Animation
- [ ] Fills progressively as user scrolls
- [ ] Calculation: `(scrollY / (docHeight - viewHeight)) * 100`
- [ ] Smooth easing (no jumps or stutters)
- [ ] Glowing effect at current viewport position
- [ ] Already-scrolled: opacity 0.8
- [ ] Not-yet-scrolled: opacity 0.2
- [ ] Current position: opacity 1 + glow

#### Scroll-Triggered Animations
- [ ] Elements fade in + slide up 20px
- [ ] Stagger delay: 100ms between children
- [ ] Intersection Observer threshold: 10%
- [ ] Animation happens once only (`viewport={{ once: true }}`)

#### Hero Section
- [ ] Mesh gradient rotates slowly (20s)
- [ ] Subtle scale breathing (10s alternate)
- [ ] No performance impact

#### Demo Section  
- [ ] Cards scale to 1.02 on hover
- [ ] Alternating fade-in (left/right)
- [ ] Preview areas pulse gently
- [ ] Smooth transitions (200ms)

#### Micro-interactions
- [ ] Buttons brighten on hover (1.1)
- [ ] All hovers use 200ms ease-smooth
- [ ] Focus states animate smoothly
- [ ] No layout shift from interactions

### Booking Integration
- [ ] Booking modal/widget loads properly
- [ ] Fallback to external link if needed
- [ ] No JavaScript errors
- [ ] Mobile-friendly booking flow
- [ ] Calendar integration working

### Performance Validation
- [ ] No jank during scroll
- [ ] Smooth 60fps throughout
- [ ] No layout shifts (CLS < 0.1)
- [ ] GPU acceleration working
- [ ] Mobile performance acceptable

### Accessibility Features
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Focus indicators enhanced (not just browser default)
- [ ] Keyboard navigation smooth
- [ ] Screen reader announces dynamic changes
- [ ] Motion doesn't interfere with content access

### Cross-Browser Testing
- [ ] Chrome 90+: All features working
- [ ] Firefox 88+: All features working
- [ ] Safari 14+: All features working
- [ ] Edge 90+: All features working
- [ ] Mobile Safari: Smooth performance
- [ ] Chrome Android: Smooth performance

## 🚫 Must NOT Include

### Over-Engineering
- [ ] NO complex 3D animations
- [ ] NO WebGL unless required
- [ ] NO animations that break 60fps
- [ ] NO features not in INITIAL.md
- [ ] NO light theme (still dark only)

### Performance Killers
- [ ] NO scroll-jacking
- [ ] NO auto-playing videos
- [ ] NO synchronous animations
- [ ] NO blocking scripts
- [ ] NO unoptimized images

## 🏃 Run All Checks

```bash
# Add to package.json
"scripts": {
  "validate:phase3": "npm run validate:phase2 && npm run test:animation-performance && npm run test:reduced-motion && npm run test:journey-line && npm run test:bundle-size && npm run lighthouse:ci"
}

# Run all Phase 3 validation
npm run validate:phase3

# Expected: All checks pass
```

## 📊 Success Criteria Summary

| Check | Target | Source |
|-------|--------|---------|
| Previous Phases | Still passing | phase1/2-checks.md |
| FPS | 60fps all animations | DESIGN.md |
| JS Bundle | < 150KB gzipped | CLAUDE.md |
| Lighthouse | 95+ all metrics | CLAUDE.md |
| Journey Line | Scroll-progressive | DESIGN.md |
| Reduced Motion | Fully supported | PHASES.md |
| Booking | Integrated & working | INITIAL.md |
| Motion Version | 12.23.6 | CLAUDE.md |

## 🎬 Animation Checklist

From DESIGN.md specifications:

| Animation | Duration | Easing | Notes |
|-----------|----------|---------|--------|
| Journey Line | Scroll-based | Smooth | Fills like loading bar |
| Fade In Up | 300-500ms | cubic-bezier(0.65, 0, 0.35, 1) | 20px slide |
| Hover Scale | 200ms | ease-smooth | 1.02 scale |
| Mesh Gradient | 20s | Linear | Continuous rotation |
| Button Hover | 200ms | ease-smooth | 1.1 brightness |

## 🚀 Production Checklist

Before deployment:
- [ ] All three phase validations pass
- [ ] Tested on real devices (not just browser tools)
- [ ] Performance tested on 3G connection
- [ ] SEO meta tags verified
- [ ] Analytics ready (if needed)
- [ ] Error tracking configured
- [ ] Deployment pipeline tested

## 🎉 Phase 3 Complete When

1. **All Phase 1 & 2 checks still pass**
2. **All automated tests pass** (`npm run validate:phase3`)
3. **All animations at 60fps**
4. **Journey line animates smoothly** with scroll
5. **Booking integration functional**
6. **Reduced motion supported**
7. **Lighthouse 95+ scores**
8. **Production deployment ready**

## 📝 Notes for Implementer

- Use Motion (Framer Motion) 12.23.6 specifically
- Test animations on actual devices, not just desktop
- GPU acceleration is crucial for 60fps
- The journey line is the signature animation - make it perfect
- Always provide `prefers-reduced-motion` alternatives
- Bundle size matters - tree-shake unused Motion features

## 🎊 Final Verification

```bash
# Run all phases sequentially
npm run validate:phase1 && npm run validate:phase2 && npm run validate:phase3

# Expected: All pass = Ready for production! 🚀
```

---

*Once all checks pass, update PHASES.md to mark Phase 3 complete. The Novum Labs website is ready for deployment!*