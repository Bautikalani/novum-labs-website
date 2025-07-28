# Plan Command

Breaks down any feature request, bug fix, or task into actionable items using the project-manager agent.

## Usage

```
/plan [description]
```

## Arguments

- `description` (required): Natural language description of what needs to be done

## Examples

```bash
/plan add testimonials section to the homepage with 3 rotating quotes
/plan fix mobile navigation menu not closing when clicking outside
/plan optimize bundle size - currently at 180KB need to get under 150KB
/plan implement dark mode toggle in header
```

## Execution Process

1. **Parse Request**
   - Extract the core requirement from description
   - Identify implicit needs (e.g., "testimonials" implies design + data structure + animation)
   - Determine scope and complexity

2. **Invoke Project Manager**
   - Pass full description to project-manager agent
   - Agent analyzes technical requirements
   - Creates hierarchical task breakdown

3. **Task Generation**
   - Break into atomic, actionable tasks
   - Assign each task to appropriate agent(s)
   - Set dependencies between tasks
   - Estimate complexity (S/M/L)

4. **Output Format**
   ```
   📋 Plan: Add Testimonials Section
   
   Tasks (5):
   1. [Design] Create testimonial card component design
      → ui-designer | Size: S | Deps: None
   
   2. [Frontend] Implement TestimonialCard component
      → frontend-dev | Size: M | Deps: Task 1
   
   3. [Frontend] Create testimonials data structure
      → frontend-dev | Size: S | Deps: None
   
   4. [Frontend] Add rotation animation logic
      → frontend-dev | Size: M | Deps: Task 2,3
   
   5. [QA] Test testimonials across devices
      → qa-engineer | Size: S | Deps: Task 4
   
   Estimated Time: 4-6 hours
   Suggested Order: 1 → 3 → 2 → 4 → 5
   ```

## Integration Points

- **With Agents**: Automatically assigns tasks to appropriate agents
- **With TodoWrite**: Creates trackable tasks in the system
- **With Validation**: Each task includes validation criteria
- **With Status**: Updates project status as tasks complete

## Error Handling

1. **Vague Requests**
   ```
   Error: Request too vague: "make it better"
   Solution: Please specify what aspect to improve
   ```

2. **Scope Too Large**
   ```
   Warning: Large scope detected
   Suggestion: Breaking into multiple phases...
   Phase 1: [Simplified version]
   Phase 2: [Additional features]
   ```

3. **Missing Context**
   ```
   Question: Which page/component needs this change?
   Please specify the location for: [feature]
   ```

## Best Practices

- Be specific in descriptions
- Include acceptance criteria when possible
- Mention technical constraints upfront
- Reference existing components if building similar features

## Notes

- This command replaces the old `/generate-prp` workflow
- Tasks are automatically validated as they're completed
- Project manager agent may ask clarifying questions
- All tasks follow the layer system (Foundation/Design/Experience/Quality)