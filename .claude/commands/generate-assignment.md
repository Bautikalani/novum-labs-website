# generate-assignment.md — Assignment Generation Command

## Command: `/generate-assignment`

**Purpose:** Transform high-level polish requirements from `INIT-ASSIGNMENT.md` into a comprehensive, executable assignment with detailed implementation specifications and validation criteria.

**Philosophy:** This command bridges the gap between intent and execution by enriching the initial task definition with deep context from the codebase, design system, and established patterns. It produces a surgical execution plan that maintains Novum Labs' premium quality standards.

## Usage

```bash
/generate-assignment
```

The command reads `INIT-ASSIGNMENT.md` and generates a detailed `assignment.md` ready for execution.

## Execution Flow

### Phase 1: Context Collection

1. **Load Initial Requirements**
   ```
   - Parse INIT-ASSIGNMENT.md
   - Extract task type, priority, and target components
   - Identify design patterns referenced
   ```

2. **Deep Context Loading**
   ```
   - DESIGN.md → Extract relevant design tokens, component specs
   - CLAUDE.md → Load applicable guidelines and constraints
   - examples/ → Find matching patterns for the task type
   - Current implementation → Analyze target component structure
   ```

3. **Pattern Analysis**
   ```
   - For animations: Load Motion/GSAP patterns from examples
   - For styling: Extract Linear/CoLab inspired implementations
   - For interactions: Reference established UX patterns
   - For performance: Check current metrics and optimization strategies
   ```

### Phase 2: Assignment Enrichment

1. **Implementation Strategy Development**
   ```typescript
   // Analyze current implementation
   - Map component dependencies
   - Identify exact code locations for changes
   - Determine minimal change approach
   - Calculate performance implications
   ```

2. **Specification Detailing**
   ```markdown
   // Enhance each section with specifics:
   - Convert general requirements to exact code changes
   - Add specific line numbers and file paths
   - Include code snippets for complex changes
   - Define precise CSS/Tailwind classes needed
   ```

3. **Validation Criteria Expansion**
   ```
   - Add specific performance metrics to check
   - Include exact WCAG criteria applicable
   - Define viewport-specific validations
   - List potential edge cases to verify
   ```

### Phase 3: Assignment Generation

The generated `assignment.md` includes:

1. **Enriched Metadata**
   ```markdown
   Task ID: POLISH-2025-07-25-001
   Generated: [timestamp]
   Source: INIT-ASSIGNMENT.md
   Context Version: [git commit hash]
   ```

2. **Detailed Implementation Plan**
   ```markdown
   ## Surgical Changes Required
   
   ### File: src/components/sections/HeroSection.tsx
   **Lines 45-52**: Update mesh gradient animation
   ```typescript
   // Current:
   const meshConfig = { speed: 0.5, intensity: 0.8 }
   
   // Change to:
   const meshConfig = { 
     speed: 0.3,  // Slower for premium feel
     intensity: 0.6,  // Subtler effect
     fps: 60,  // Lock frame rate
   }
   ```
   
   **Lines 78-80**: Add will-change for performance
   ```typescript
   className="will-change-transform"
   ```
   ```

3. **Expanded Validation Suite**
   ```markdown
   ## Validation Checklist
   
   ### Performance Metrics
   - [ ] Hero section FPS: Target 60, Current: [measured]
   - [ ] Paint time: < 16ms per frame
   - [ ] GPU memory usage: < 50MB increase
   
   ### Visual Verification
   - [ ] Gradient transition smoothness at 120Hz displays
   - [ ] No flashing on page load
   - [ ] Consistent rendering across Chrome/Safari/Firefox
   ```

4. **Risk Mitigation**
   ```markdown
   ## Potential Issues & Solutions
   
   1. Safari GPU acceleration
      - Test with: transform: translateZ(0)
      - Fallback: CSS-only gradient animation
   
   2. Mobile performance
      - Reduce animation on touch devices
      - Use prefers-reduced-motion
   ```

### Phase 4: Quality Assurance

Before saving `assignment.md`, verify:

1. **Completeness Check**
   - All INIT-ASSIGNMENT sections addressed
   - Implementation details specific enough
   - No ambiguous instructions

2. **Consistency Validation**
   - Design tokens match DESIGN.md
   - Animation specs align with examples/
   - Code style follows CLAUDE.md

3. **Executability Verification**
   - All file paths verified to exist
   - Dependencies available
   - No conflicting changes

## Output Structure

The generated `assignment.md` follows this structure:

```markdown
# Assignment: [Task Summary]
Generated from: INIT-ASSIGNMENT.md
Date: [timestamp]

## Execution Summary
[Brief overview of changes and expected impact]

## Detailed Implementation

### 1. [Component/Section Name]
- **File**: [exact path]
- **Changes**: [specific modifications]
- **Code**: [before/after snippets]

### 2. [Next Component]
[...]

## Validation Protocol
[Comprehensive checklist with measurable criteria]

## Rollback Plan
[Specific steps if issues arise]

## Expected Outcome
[Visual/behavioral changes with success metrics]
```

## Success Criteria

The assignment generation is successful when:
- ✅ Every change is specified to the line level
- ✅ All design system tokens are referenced correctly
- ✅ Performance implications are quantified
- ✅ Validation criteria are measurable
- ✅ Implementation is unambiguous

## Error Handling

Common issues during generation:

1. **Missing Context**
   - Error: "Target component not found"
   - Solution: Verify file paths in INIT-ASSIGNMENT.md

2. **Ambiguous Requirements**
   - Error: "Cannot determine specific implementation"
   - Solution: Request clarification in generated assignment

3. **Pattern Mismatch**
   - Error: "No matching example found"
   - Solution: Reference closest pattern with adaptations

---

*This command ensures every polish task is transformed from high-level intent into precise, executable instructions that maintain Novum Labs' premium standards.*