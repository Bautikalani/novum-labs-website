# Research Population Script for Claude Code

## Instructions for Claude Code

Execute this research plan using web_search to populate the /research directory with official documentation.

### Phase 1: Next.js 15.4.1 Documentation

```
Task: Research and document Next.js 15.4.1 features

1. Use web_search to research https://nextjs.org/docs
2. Create the following files with comprehensive content:
   - research/nextjs/app-router-complete.md
   - research/nextjs/server-components-guide.md
   - research/nextjs/client-components.md
   - research/nextjs/route-handlers.md
   - research/nextjs/metadata-seo.md
   - research/nextjs/image-optimization.md
   - research/nextjs/performance.md

Include: concepts, code examples, patterns, best practices
```

### Phase 2: React 19.1 Documentation

```
Task: Research React 19.1 new features

1. Use web_search for https://react.dev/blog/2024/12/05/react-19
2. Use web_search for https://react.dev/reference/react
3. Create files:
   - research/react/react-19-complete-guide.md
   - research/react/server-components-deep-dive.md
   - research/react/actions-and-forms.md
   - research/react/use-hook.md
   - research/react/suspense-improvements.md

Focus on: New features, migration guide, patterns
```

### Phase 3: Tailwind CSS v4.1

```
Task: Document Tailwind CSS v4.1

1. Use web_search for https://tailwindcss.com/docs
2. Use web_search for https://tailwindcss.com/blog/tailwindcss-v4
3. Create files:
   - research/tailwind/v4-complete-guide.md
   - research/tailwind/performance-improvements.md
   - research/tailwind/new-utilities.md
   - research/tailwind/lch-colors.md
   - research/tailwind/container-queries.md

Include: New features, migration, examples
```

### Phase 4: Motion (Framer Motion) 12.23.6

```
Task: Document Motion animation library

1. Use web_search for https://motion.dev/docs
2. Create files:
   - research/motion/complete-api-reference.md
   - research/motion/animations-guide.md
   - research/motion/gestures.md
   - research/motion/scroll-animations.md
   - research/motion/performance-guide.md

Focus on: React integration, performance, patterns
```

### Phase 5: shadcn/ui Components

```
Task: Document shadcn/ui system

1. Use web_search for https://ui.shadcn.com/docs
2. Create files:
   - research/shadcn/installation-setup.md
   - research/shadcn/all-components.md
   - research/shadcn/theming-system.md
   - research/shadcn/patterns-recipes.md
   - research/shadcn/customization-guide.md

Include: Component APIs, examples, customization
```

### Phase 6: Integration Documentation

```
Task: Research how technologies work together

Create files:
- research/integration/nextjs-with-tailwind-v4.md
- research/integration/motion-with-nextjs.md
- research/integration/shadcn-with-tailwind-v4.md
- research/integration/react-19-server-components.md
```

## Example Claude Code Commands

Here are specific commands you can use:

```
"Please use web_search to research Next.js 15.4.1 App Router documentation from https://nextjs.org/docs/app. Create a comprehensive guide including routing, layouts, loading states, error handling, and best practices. Save as research/nextjs/app-router-complete.md"

"Use web_search to find React 19.1 documentation about Server Components, Actions, and the new use() hook. Create detailed documentation with code examples. Save as research/react/react-19-complete-guide.md"

"Research Tailwind CSS v4.1's new features including 5x faster builds, automatic content detection, and native text shadows. Use web_search on https://tailwindcss.com/docs and save comprehensive documentation as research/tailwind/v4-complete-guide.md"
```

## Execution Instructions

1. Start with Phase 1 and work through each phase
2. For each documentation page, include:
   - Overview/Introduction
   - Core concepts
   - Multiple code examples
   - Best practices
   - Common patterns
   - Troubleshooting tips
3. Ensure all code examples are from official docs
4. Make files comprehensive (aim for 500+ lines per file)
5. Use consistent markdown formatting

## Quality Checklist

- [ ] Each file has official source URL at top
- [ ] Code examples are complete and runnable
- [ ] Version numbers match DESIGN.md specs
- [ ] Examples show real-world usage
- [ ] Files are comprehensive enough for AI to learn from