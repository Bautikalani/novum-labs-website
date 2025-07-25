# execute-assignment.md — Assignment Execution Command

## Command: `/execute-assignment`

**Purpose:** Execute the detailed implementation plan from `assignment.md` with surgical precision, applying all specified changes while maintaining continuous validation and quality assurance.

**Philosophy:** This command serves as the final execution phase, transforming the enriched assignment into actual code changes. It follows a strict implementation protocol that ensures every modification meets Novum Labs' premium quality standards.

## Usage

```bash
/execute-assignment
```

The command reads the generated `assignment.md` and executes all specified changes with automatic validation.

## Execution Flow

### Phase 1: Pre-flight Verification

1. **Assignment Validation**
   ```
   - Verify assignment.md exists and is complete
   - Check all referenced files exist
   - Confirm no uncommitted changes in target files
   - Validate current branch is correct
   ```

2. **Baseline Capture**
   ```
   - Record current performance metrics
   - Note existing console state
   - Document current visual state (mental model)
   - Store current bundle size
   ```

3. **Dependency Check**
   ```
   - Ensure all required packages installed
   - Verify design system tokens available
   - Confirm animation libraries loaded
   - Check TypeScript compilation status
   ```

### Phase 2: Surgical Implementation

1. **Execute Changes in Order**
   ```typescript
   // For each change in assignment.md:
   - Open target file
   - Navigate to specified lines
   - Apply exact modifications
   - Verify syntax correctness
   - Save with formatting preserved
   ```

2. **Real-time Validation**
   ```
   After each file modification:
   - ✓ TypeScript compilation check
   - ✓ Tailwind class validation
   - ✓ Import resolution
   - ✓ No new ESLint errors
   ```

3. **Change Tracking**
   ```
   Document each modification:
   - File path
   - Lines changed
   - Original vs new code
   - Validation status
   ```

### Phase 3: Quality Gate Enforcement

1. **Immediate Checks** (after each change)
   ```bash
   ✓ File saves without errors
   ✓ No TypeScript compilation errors
   ✓ Imports resolve correctly
   ✓ Tailwind classes valid
   ```

2. **Component-Level Validation** (after related changes)
   ```bash
   ✓ Component renders without errors
   ✓ Props interface maintained
   ✓ Event handlers functional
   ✓ Styling applied correctly
   ```

3. **Full Application Validation** (after all changes)
   ```bash
   ✓ Build completes successfully
   ✓ No console errors/warnings
   ✓ All routes accessible
   ✓ No visual regressions
   ```

### Phase 4: Performance Verification

1. **Animation Performance**
   ```
   - Verify 60fps maintained
   - Check for jank/stutter
   - Confirm smooth transitions
   - Validate GPU acceleration
   ```

2. **Load Performance**
   ```
   - Lighthouse score ≥ 90
   - FCP < 1.5s
   - LCP < 2.5s
   - CLS < 0.1
   - Bundle size increase < 1KB
   ```

3. **Runtime Performance**
   ```
   - No memory leaks
   - Efficient re-renders
   - Optimized event handlers
   - Proper cleanup on unmount
   ```

### Phase 5: Accessibility & Responsive Validation

1. **Accessibility Checks**
   ```
   ✓ WCAG AA contrast maintained
   ✓ Keyboard navigation functional
   ✓ Screen reader compatibility
   ✓ Focus indicators visible
   ✓ ARIA attributes correct
   ```

2. **Responsive Behavior**
   ```
   ✓ Mobile (320px - 767px)
   ✓ Tablet (768px - 1023px)  
   ✓ Desktop (1024px+)
   ✓ No horizontal scroll
   ✓ Touch interactions work
   ```

3. **Cross-browser Testing**
   ```
   ✓ Chrome/Edge (Chromium)
   ✓ Safari (WebKit)
   ✓ Firefox (Gecko)
   ✓ Consistent rendering
   ✓ No browser-specific bugs
   ```

### Phase 6: Final Verification

1. **Success Criteria Check**
   ```markdown
   Review assignment.md expected outcomes:
   - [ ] All visual changes achieved
   - [ ] All behavioral changes working
   - [ ] Performance targets met
   - [ ] No regressions introduced
   ```

2. **Edge Case Testing**
   ```
   - Fast scrolling behavior
   - Rapid interactions
   - Window resize handling
   - Navigation edge cases
   - Error state handling
   ```

## Implementation Patterns

### For Animation Changes
```typescript
// Always use GPU-accelerated properties
transform: translateX() translateY() scale()
opacity: 0-1

// Include will-change for complex animations
will-change: transform, opacity

// Respect reduced motion
@media (prefers-reduced-motion: reduce) {
  animation: none;
}
```

### For Styling Changes
```typescript
// Use design system tokens only
className="bg-background text-foreground"

// Maintain dark theme compatibility
className="border-border hover:border-accent-blue/50"

// Keep responsive utilities
className="px-4 md:px-6 lg:px-8"
```

### For Performance Optimizations
```typescript
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
})

// Memoize expensive calculations
const result = useMemo(() => expensiveOp(), [deps])

// Debounce rapid events
const debouncedHandler = debounce(handler, 300)
```

## Rollback Protocol

If any validation fails:

1. **Immediate Stop**
   - Cease all further changes
   - Document failure point

2. **Revert Changes**
   - Undo modifications in reverse order
   - Verify original state restored

3. **Report Issues**
   ```markdown
   ## Execution Failed
   
   **Failure Point**: [Component/Check]
   **Reason**: [Specific error]
   **Changes Reverted**: [List files]
   **Recommendation**: [Next steps]
   ```

## Success Output

Upon successful execution:

```markdown
## Assignment Executed Successfully ✓

### Changes Applied:
- src/components/sections/HeroSection.tsx (lines 45-52, 78-80)
- src/lib/animations/mesh-config.ts (lines 12-18)

### Validation Results:
- Performance: ✓ (Lighthouse 94, 60fps animations)
- Accessibility: ✓ (WCAG AA compliant)
- Responsive: ✓ (All breakpoints tested)
- Visual: ✓ (No regressions)

### Metrics:
- Bundle size: +0.3KB (within budget)
- Animation FPS: 60 (stable)
- Load time: No change

### Next Steps:
- Commit changes with message: "polish: [component] - [summary]"
- Test in production environment
- Monitor performance metrics
```

## Error Recovery

Common issues and solutions:

1. **TypeScript Errors**
   - Verify type imports
   - Check prop interfaces
   - Update type definitions

2. **Styling Breaks**
   - Confirm Tailwind classes valid
   - Check specificity conflicts
   - Verify dark theme tokens

3. **Performance Regression**
   - Profile with DevTools
   - Check animation complexity
   - Optimize render cycles

---

*This command ensures flawless execution of polish tasks, maintaining the premium quality that defines the Novum Labs brand.*