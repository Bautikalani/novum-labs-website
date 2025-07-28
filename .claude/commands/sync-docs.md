# Documentation Sync Integration in Workflow

## Where Documentation Sync Happens

The Documentation Maintainer runs **during validation**, ensuring documentation updates are part of your commit.

### Updated Workflow

```
YOU → /plan → PROJECT MANAGER → Breaks down tasks
                ↓
         Creates task list
                ↓
    Assigns to specialists
         ↙     ↓     ↘
UI DESIGNER  FRONTEND  PERFORMANCE
    ↓          ↓          ↓
 Design    Implement   Optimize
    ↓          ↓          ↓
    ↘         ↓         ↙
      QA ENGINEER (Validation)
           ↓
    🆕 DOCUMENTATION MAINTAINER
           ↓
    Validation Results
    (includes doc updates)
           ↓
YOU → /commit (docs already updated)
```

### Validation Phase Details

When validation runs after any change:

```
🔍 Running Validation
━━━━━━━━━━━━━━━━━━

1. Code Quality Checks
   ✅ TypeScript: Clean
   ✅ Accessibility: WCAG AA
   ✅ Performance: 60fps

2. Documentation Sync
   📝 Checking documentation...
   - Detected: New TestimonialSection component
   - Detected: Color token changes
   
   Updating documentation:
   ✓ PRD.md: Added testimonials feature
   ✓ DESIGN.md: Updated color tokens
   
3. Final Validation
   ✅ All layers passing
   ✅ Documentation synchronized

Ready to commit with updated docs!
```

### Example: Adding a New Feature

```bash
You: /plan add testimonials section

[... agents work on implementation ...]

QA Engineer: Running validation...
✅ Code validation passed

Documentation Maintainer: Syncing docs...
✓ Updated PRD.md: Added testimonials to features
✓ Updated DESIGN.md: Added testimonial layout to wireframe

You: /commit

# The commit now includes:
# - TestimonialSection.tsx (new component)
# - Updated PRD.md (with testimonials feature)
# - Updated DESIGN.md (with layout changes)
```

### Benefits of This Approach

1. **Atomic Commits**: Code and docs always committed together
2. **No Drift**: Documentation can't fall behind since it's updated before commit
3. **Validation Integration**: Doc sync is part of quality checks
4. **Automatic**: No manual step required

### Manual Override

If needed, you can control documentation sync:

```bash
# Check what would be updated
/sync-docs --check

# Force sync without validation
/sync-docs --force

# Skip doc sync for this validation
/validate --no-doc-sync
```

### Key Difference from Original Proposal

**Original**: Run after commit (docs would be in a separate commit)
**Updated**: Run during validation (docs included in the same commit)

This ensures every commit is complete and self-contained with both code and documentation changes.