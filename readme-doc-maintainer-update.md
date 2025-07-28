# Addition to README.md - Documentation Maintainer

## Add to "The AI Team - Detailed Profiles" section (after Tech Lead):

### 📄 **Documentation Maintainer**

**Role**: Your documentation accuracy guardian

**Capabilities**:
- Automatically syncs documentation with code changes
- Makes surgical updates to specific values
- Updates design tokens, features, and specifications
- Maintains wireframes and technical constants
- Preserves document structure and style
- Ensures docs are included in same commit as code

**Documentation Scope**:
- **CLAUDE.md**: Technical constants, performance budgets
- **DESIGN.md**: Colors, typography, layouts, wireframes
- **PRD.md**: Features, scope, requirements
- **LAYERS.md**: Validation rules, layer ownership

**When Activated**:
- AUTOMATICALLY during validation phase
- Before any commit (as part of QA process)
- When using `/sync-docs` manually
- Before production deployments

**Example Interaction**:
```
Documentation Maintainer: Syncing documentation...

Detected changes:
- New component: TestimonialSection
- Color token modified: --color-primary
- Team layout changed: 1x4 → 2x2

Updating documentation:
✓ PRD.md: Added testimonials to feature list
✓ DESIGN.md: Updated primary color value
✓ DESIGN.md: Modified team section wireframe

Documentation synchronized!
```

**Surgical Updates Only**:
- Never rewrites entire documents
- Only updates specific changed values
- Maintains original formatting
- Preserves writing style
- Minimal, focused changes

---

## Add to "Commands - Complete Reference" section (after `/deploy`):

### `/sync-docs` - Documentation Sync

**Purpose**: Manually sync documentation or check sync status

**Syntax**:
```bash
/sync-docs [--flags]
```

**Flags**:
- `--check`: See what needs updating without making changes
- `--verbose`: Show detailed updates being made
- `--report`: Get documentation health metrics
- `--force`: Force sync even if no changes detected

**When to Use Manually**:
- After git reset or rollback
- Before major deployments (verification)
- After merging branches
- When you suspect documentation drift
- If automatic sync was previously skipped

**Example Usage**:
```bash
# Check what's out of sync
/sync-docs --check

# Get documentation health report
/sync-docs --report

# See detailed updates
/sync-docs --verbose

# Force sync after rollback
git reset --hard HEAD~1
/sync-docs
```

**Output Example**:
```
📝 Documentation Status
━━━━━━━━━━━━━━━━━━━━━

⚠️ 2 files need updates:

DESIGN.md:
- Color token: --color-primary outdated
- Team layout: Shows 1x4, code has 2x2

PRD.md:
- Missing feature: Testimonials section

Run without --check to apply updates
```

**Note**: Documentation sync runs automatically during validation, so manual use is rarely needed. This command is primarily for verification and special cases.

---

## Update "How Information Flows" section:

### Replace the existing workflow diagram with:

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
    DOC MAINTAINER (Auto-sync)
           ↓
    Validation Results
           ↓
YOU → /commit → /deploy
```

### Update the "Agent Collaboration Example" to include doc sync:

After the existing example, add:

```
7. DOC MAINTAINER: "Updating documentation..."
   - Updates PRD.md with testimonials feature
   - Updates DESIGN.md with new design tokens
   
8. YOU: "/commit" → Changes saved INCLUDING doc updates
```

---

## Update "Quick Reference Card" section:

**Essential Commands**:
- `/plan` - Start anything new
- `/status` - See what's happening
- `/validate` - Check quality
- `/commit` - Save work
- `/deploy` - Go live
- `/sync-docs` - Verify documentation (rarely needed)

**Agent Specialties**:
- **PM**: Planning and coordination
- **Frontend**: Building features
- **Designer**: Making it beautiful
- **QA**: Ensuring quality
- **Tech Lead**: Architecture decisions
- **Performance**: Making it fast
- **Doc Maintainer**: Keeping docs accurate