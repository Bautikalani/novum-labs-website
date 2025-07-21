# Instructions for Populating Research Directory

## How to Research Documentation Using Claude Code

To fully populate this research directory, use Claude Code's built-in web search capabilities to research and document each technology.

### Using Claude Code's Web Search

You can ask Claude to research documentation directly:

```
Please use web_search to research Next.js 15.4.1 App Router documentation and create a comprehensive guide. Save it as research/nextjs/app-router.md
```

### Technologies to Research

Based on DESIGN.md requirements, research these specific topics:

#### Next.js 15.4.1
- [ ] App Router fundamentals
- [ ] Server Components
- [ ] Client Components  
- [ ] Route Handlers (API)
- [ ] Metadata API
- [ ] Image optimization
- [ ] Font optimization
- [ ] Performance features
- [ ] Deployment guides

#### React 19.1
- [ ] New features in React 19
- [ ] Server Components
- [ ] Actions
- [ ] use() hook
- [ ] Form handling
- [ ] Suspense improvements
- [ ] Performance optimizations

#### Tailwind CSS v4.1
- [ ] Installation and setup
- [ ] New v4 features
- [ ] LCH color support
- [ ] Container queries
- [ ] Animation utilities
- [ ] Dark mode
- [ ] Performance improvements
- [ ] Migration guide

#### Motion 12.23.6 (Framer Motion)
- [ ] Basic animations
- [ ] Gestures
- [ ] Scroll animations
- [ ] Layout animations
- [ ] SVG animations
- [ ] Performance tips
- [ ] AnimatePresence
- [ ] Variants system

#### shadcn/ui
- [ ] Installation process
- [ ] Component usage
- [ ] Theming system
- [ ] Customization
- [ ] Common patterns
- [ ] Accessibility features

#### Vercel Deployment
- [ ] Next.js deployment
- [ ] Environment variables
- [ ] Edge functions
- [ ] Analytics
- [ ] Performance monitoring

### Directory Structure

Create files following this pattern:
```
research/
├── nextjs/
│   ├── app-router.md
│   ├── server-components.md
│   ├── routing.md
│   ├── api-routes.md
│   └── ...
├── react/
│   ├── react-19-features.md
│   ├── server-components.md
│   └── ...
├── tailwind/
│   ├── tailwind-v4.md
│   ├── installation.md
│   └── ...
├── motion/
│   ├── motion-basics.md
│   ├── animations.md
│   └── ...
├── shadcn/
│   ├── components.md
│   ├── installation.md
│   └── ...
└── vercel/
    ├── deployment.md
    └── configuration.md
```

### Important Notes

1. **Always use official documentation** - No third-party tutorials
2. **Include code examples** - Real, working code from the docs
3. **Version specific** - Ensure docs match versions in DESIGN.md
4. **Comprehensive coverage** - Multiple pages per technology
5. **Markdown format** - Clean, well-formatted markdown

### Research Commands for Claude Code

```bash
# Example commands to give Claude:

# For Next.js
"Please research the official Next.js 15.4.1 documentation at https://nextjs.org/docs 
and create comprehensive documentation for App Router. Include concepts, code examples, 
and best practices. Save as research/nextjs/app-router.md"

# For React 19
"Research React 19.1 features from https://react.dev/blog/2024/12/05/react-19 
and create detailed documentation covering new hooks, server components, and actions. 
Save as research/react/react-19-features.md"

# For Tailwind CSS v4
"Research Tailwind CSS v4.1 from https://tailwindcss.com/docs and create guides 
for new features, LCH colors, and performance improvements. 
Save as research/tailwind/tailwind-v4.md"
```

## Why This Matters

The hook system will automatically use these docs when Claude writes code. More comprehensive documentation = better code generation. Aim for 10-20 pages per technology for best results.

## Progressive Research Strategy

Start with the most critical documentation:

### Phase 1: Core Framework (Priority)
1. Next.js App Router basics
2. React 19 essential features
3. Tailwind v4 setup and configuration

### Phase 2: UI and Animation
1. Motion/Framer Motion basics
2. shadcn/ui component system
3. Animation patterns

### Phase 3: Advanced Topics
1. Performance optimization
2. Deployment configuration
3. Integration patterns