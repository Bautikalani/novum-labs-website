# PRP: [Feature Name] - [Project Name]

**Generated**: [Date]  
**Phase**: [Current Phase from PHASES.md]  
**Confidence Score**: [X]/10

## 📋 Executive Summary

[Brief description of what this PRP will implement and its alignment with project goals]

## 🎯 Goal

[Specific, measurable goal for this implementation]

### Success Criteria
- [ ] All validation checks pass
- [ ] Performance budgets maintained
- [ ] No regressions from previous phases
- [ ] [Add specific criteria based on feature requirements]

## 📚 Context & Documentation

### Core Project Files (Required Reading)
- **CLAUDE.md** - Project principles and technical constants
- **PHASES.md** - Current phase: [X] and constraints  
- **DESIGN.md** - Visual specifications and wireframes
- **INITIAL.md** - Feature requirements and content
- **validation/phase[X]-checks.md** - Success criteria for this phase

### Technical Documentation
Request via Context7 when implementing:
- [Framework documentation relevant to this feature]
- [Library documentation needed]
- [API references required]
- [Best practices guides]

### Design Patterns
- `/examples/` - Component patterns and established conventions
- `/research/design-inspiration/` - Design references and analysis

## 🏗️ Implementation Blueprint

### Prerequisites
```bash
# Verify previous phases still pass (if applicable)
npm run validate:phase[X-1]  # If not Phase 1

# Verify development environment
- Node.js 18+
- Project properly initialized
- All dependencies installed
```

### Project Structure
```
[Show the specific file structure for this feature]
src/
├── app/                    # [Framework-specific structure]
├── components/
│   ├── [component-folders]
│   └── [organizational-structure]
├── lib/                   # Utilities and helpers
└── types/                # TypeScript definitions
```

### Implementation Tasks

#### Task 1: [Major Task Description]
**File**: `src/[path/to/file]`
**Purpose**: [What this accomplishes and why it matters]

```typescript
// Pseudocode showing approach
// [Key implementation patterns to follow]
// [Important decisions to make]
// [Constraints to respect]
```

**Validation**: 
- [ ] TypeScript compiles without errors
- [ ] Component renders correctly
- [ ] [Specific validation for this task]

#### Task 2: [Next Major Task]
[Continue pattern for all major implementation tasks]

### Phase-Specific Constraints

**Allowed in Current Phase**:
- [List everything permitted in this phase]
- [Be specific about what can be implemented]
- [Reference PHASES.md constraints]

**Not Allowed (Save for Later Phases)**:
- [List everything that must be deferred]
- [Be explicit about phase boundaries]
- [Common mistakes to avoid]

## ✅ Validation Loop

### Level 1: Continuous (During Development)
```bash
# TypeScript checking
npm run type-check          # Must pass continuously

# Linting
npm run lint               # 0 errors, 0 warnings

# [Other continuous checks]
```

### Level 2: Component/Feature Testing
```bash
# Test individual components
npm run test:[component-type]

# Expected outcomes:
- All tests pass
- Coverage meets requirements
- No console errors
```

### Level 3: Phase Validation
```bash
# Run complete phase validation
npm run validate:phase[X]

# This runs all checks from validation/phase[X]-checks.md:
- [List key validation points]
- [Expected results]
```

### Level 4: Integration Testing
```bash
# Full application testing
npm run dev

# Manual verification checklist:
- [ ] Feature works end-to-end
- [ ] No visual regressions
- [ ] Performance acceptable
- [ ] Accessibility maintained
```

## 🚫 Anti-Patterns to Avoid

### From CLAUDE.md (Always Apply)
- ❌ Skip validation between phases
- ❌ Use `any` without comment justification  
- ❌ Web scrape when Context7 can provide
- ❌ Hardcode values that should be tokens
- ❌ Create files over 300 lines
- ❌ Mix concerns in single component
- ❌ Ignore performance budgets

### Phase-Specific Anti-Patterns
- ❌ [Common mistakes for this phase]
- ❌ [Implementation approaches that break phase rules]
- ❌ [Optimizations that are premature]

## 📊 Performance Monitoring

### Budgets (from CLAUDE.md)
| Metric | Target | Current | Status |
|--------|--------|---------|---------|
| Lighthouse | 90+ (95+ Phase 3) | [Measure] | [Pass/Fail] |
| FCP | < 1.5s | [Measure] | [Pass/Fail] |
| LCP | < 2.5s | [Measure] | [Pass/Fail] |
| CLS | < 0.1 | [Measure] | [Pass/Fail] |
| Bundle Size | < 150KB JS | [Measure] | [Pass/Fail] |

### Monitoring Strategy
- Run performance checks after each major change
- Use [specific tools] for measurement
- Document any performance impacts

## 🎬 Completion Checklist

### Code Quality
- [ ] All validation checks pass
- [ ] TypeScript strict mode clean
- [ ] Code follows project conventions
- [ ] Documentation updated

### Feature Completeness
- [ ] All acceptance criteria met
- [ ] Edge cases handled
- [ ] Error states implemented
- [ ] Accessibility verified

### Phase Compliance
- [ ] Only phase-allowed features implemented
- [ ] No future phase features included
- [ ] Phase validation passes

### Performance
- [ ] Meets all performance budgets
- [ ] No degradation from baseline
- [ ] Optimizations documented

## 📝 Implementation Notes

[Space for specific notes, gotchas, or clarifications that arise during implementation]

### Discovered Complexity
[Document any unexpected complexity or decisions made]

### Future Considerations
[Note anything that should be addressed in later phases]

---

**Confidence Score Reasoning**: [Explain the confidence score based on:
- Clarity of requirements
- Availability of patterns
- Technical complexity
- Dependencies
- Unknown factors]