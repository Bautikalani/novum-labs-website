# Improved /plan Command

The `/plan` command is the primary entry point for all development work. It orchestrates a complete workflow from request to validated implementation.

## Command Structure

```
/plan [description]
```

## Execution Flow

### 1. **Parse and Analyze Request**
```javascript
function executePlan(description) {
  // Extract key requirements
  const requirements = analyzeRequest(description);
  
  // Determine if we need Context7 or shadcn documentation
  if (requiresAPIInfo(requirements)) {
    await searchContext7(requirements.apis);
  }
  
  if (requiresComponentInfo(requirements)) {
    await searchShadcnComponents(requirements.uiElements);
  }
}
```

### 2. **Invoke Project Orchestrator**
The project-orchestrator agent is invoked with:
- Clear requirements
- Available documentation
- Context from research

```javascript
await Task.invoke("project-orchestrator", {
  action: "Create development plan",
  requirements: parsedRequirements,
  context: {
    shadcnComponents: availableComponents,
    apiDocs: context7Results,
    currentProjectState: projectStatus
  }
});
```

### 3. **Project Orchestrator Creates Task Plan**
The orchestrator MUST:
1. Break down into atomic tasks
2. Explicitly assign each task to an agent
3. Set clear dependencies
4. Define success criteria

Example output:
```yaml
Task Plan: Add Testimonials Section

Phase 1: Research & Design
  Task 1.1:
    title: "Research testimonial best practices"
    assigned_to: "ui-design-authority"
    tools_needed: ["shadcn-card", "shadcn-carousel"]
    deliverables: ["Design mockup", "Animation specs"]
    
Phase 2: Implementation  
  Task 2.1:
    title: "Implement TestimonialCard component"
    assigned_to: "frontend-developer"
    dependencies: ["Task 1.1"]
    validation_criteria: 
      - TypeScript types defined
      - Responsive design
      - Keyboard accessible
      
Phase 3: Quality Assurance
  Task 3.1:
    title: "Validate testimonials implementation"
    assigned_to: "quality-guardian"
    auto_triggered: true
    dependencies: ["Task 2.1"]
    blocking: true
```

### 4. **Execute Tasks in Sequence**

Each task execution follows this pattern:

```javascript
async function executeTask(task) {
  // 1. Agent does the work
  const result = await Task.invoke(task.assigned_to, {
    action: task.title,
    requirements: task.requirements,
    dependencies: await resolveDependencies(task.dependencies)
  });
  
  // 2. Automatic quality check (if implementation task)
  if (task.type === 'implementation') {
    const qaResult = await Task.invoke("quality-guardian", {
      action: "Validate changes",
      scope: task.deliverables,
      silent: true // Only speak if issues found
    });
    
    // 3. Handle QA results
    if (qaResult.issues) {
      // Block and request fixes
      await Task.invoke(task.assigned_to, {
        action: "Fix issues",
        issues: qaResult.issues,
        suggestions: qaResult.fixes
      });
      
      // Re-validate after fixes
      return executeTask(task);
    }
  }
  
  // 4. Update task status
  await updateTaskStatus(task.id, 'completed');
  
  // 5. Trigger dependent tasks
  await triggerDependentTasks(task.id);
}
```

### 5. **Quality Guardian Integration**

The quality-guardian runs automatically:
- After EVERY implementation task
- Before moving to next phase
- Silently when all passes
- Blocks workflow only on issues

```javascript
const qaProtocol = {
  afterImplementation: {
    checks: [
      "TypeScript compilation",
      "ESLint critical errors",
      "Build verification",
      "Basic functionality"
    ],
    timeLimit: "15 seconds",
    output: "minimal"
  },
  
  beforeDeployment: {
    checks: [
      "Full test suite",
      "Lighthouse scores",
      "Accessibility audit",
      "Cross-browser testing"
    ],
    timeLimit: "2 minutes",
    output: "detailed if issues"
  }
};
```

### 6. **Progress Tracking & Communication**

During execution, provide clear status updates:

```
📋 Executing Plan: Testimonials Section

Phase 1: Design ✅
├─ Task 1.1: Research complete
└─ Task 1.2: Mockup approved

Phase 2: Implementation 🔄
├─ Task 2.1: Component built ✅
├─ Task 2.2: Data structure ✅
└─ Task 2.3: Animations ⏳ (in progress)
   └─ Frontend Dev working...

Phase 3: Quality ⏸️ (waiting)

Time elapsed: 45 minutes
Estimated remaining: 30 minutes
```

## Complete Example Flow

User: `/plan add testimonials with rotating quotes and gradient borders`

```yaml
System Response:

🔍 Researching components...
- Found: shadcn Card component
- Found: shadcn Carousel pattern
- Context7: No API needed

📋 Creating Development Plan...

=== TESTIMONIALS IMPLEMENTATION PLAN ===

Phase 1: Design (20 min)
→ ui-design-authority
  • Create testimonial card design
  • Define gradient system
  • Specify rotation timing

Phase 2: Implementation (45 min)  
→ frontend-developer
  • Build TestimonialCard component
  • Implement rotation logic
  • Add gradient borders
  
Phase 3: Validation (10 min)
→ quality-guardian (automatic)
  • Check all systems
  • Verify accessibility
  • Test performance

Starting Phase 1...

---

[20 minutes later]

✅ Phase 1 Complete
- Design system updated
- Mockups created
- Tokens defined

Starting Phase 2...

---

[45 minutes later]

✅ Phase 2 Complete
- Component implemented
- TypeScript types added
- Animations smooth

🔍 Running Quality Checks...

✅ All checks passed
- No TypeScript errors
- Accessibility compliant
- 60fps animations

=== PLAN COMPLETE ===

Ready to commit changes.
Use /commit to save your work.
```

## Error Handling

### When Agents Report Issues
```javascript
if (agentResult.status === 'blocked') {
  console.log(`❌ ${agent} encountered issues:`);
  console.log(agentResult.issues);
  
  // Orchestrator decides next action
  const resolution = await Task.invoke("project-orchestrator", {
    action: "resolve-blockage",
    issue: agentResult,
    options: [
      "Assign to different agent",
      "Break down task further",
      "Request user clarification"
    ]
  });
}
```

### When QA Fails
```javascript
if (qaResult.criticalIssues) {
  // Stop everything
  workflow.pause();
  
  // Report to user
  console.log("🛑 Critical issues found:");
  qaResult.criticalIssues.forEach(issue => {
    console.log(`- ${issue.description}`);
    console.log(`  Fix: ${issue.suggestion}`);
  });
  
  // Wait for fixes before continuing
  workflow.blockUntilResolved();
}
```

## Best Practices

1. **Always Research First**
   - Check shadcn for UI components
   - Search Context7 for API needs
   - Review existing codebase

2. **Clear Task Assignment**
   - Every task explicitly names the agent
   - Dependencies clearly stated
   - Success criteria defined

3. **Automatic Quality Gates**
   - QA runs without being asked
   - Blocks bad code automatically
   - Fixes suggested immediately

4. **Progressive Enhancement**
   - Start with basic functionality
   - Add enhancements incrementally
   - Validate at each step

5. **Communication**
   - Show progress in real-time
   - Explain what's happening
   - Estimate time remaining

