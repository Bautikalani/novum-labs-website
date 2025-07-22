## FEATURE:

Build a premium marketing website for Novum Labs AI consultancy using Next.js 15.4.1, React 19.1, Tailwind CSS v4.1, and Motion 12.23.6. The website should showcase AI expertise through sophisticated design and interactive demos. Implement in two phases: Phase 1 for static foundation (quick launch), Phase 2 for animations and interactivity (wow factor).

Key requirements:
- Dark theme with Linear.app color palette (#0e0e10 background, #5e6ad2 accent blue)
- CoLab-style scroll-triggered animations and SVG connection lines
- Hero section with mesh gradient background
- Alternating left/right demo cards with "Coming Soon" placeholders
- Team section with professional layout
- Mobile-first responsive design
- Performance: Lighthouse 90+ scores, <1.5s FCP, <2.5s LCP

## EXAMPLES:

In the `examples/` folder, there are complete patterns for the website implementation:

- `examples/components/section-wrapper.jsx` - Base section component with scroll animations
- `examples/components/animated-card.jsx` - Card component with gradient borders and hover effects
- `examples/components/connection-line.jsx` - SVG path animations that draw on scroll
- `examples/components/gradient-text.jsx` - Linear-style gradient text component
- `examples/hooks/use-scroll-progress.js` - Hook for scroll-based animations
- `examples/lib/colors.js` - Linear.app inspired color system
- `examples/lib/animations.js` - CoLab-style animation configurations
- `examples/demo-section-implementation.jsx` - Complete demo section showing how to combine patterns

Use these examples as the foundation for consistent implementation. All components should follow these established patterns.

## DOCUMENTATION:

Primary specifications:
- **DESIGN.md** - Complete website specifications, wireframes, and requirements

Technology documentation (research from official sources):
- **Next.js 15.4.1**: https://nextjs.org/docs (App Router, Server Components, Performance)
- **React 19.1**: https://react.dev/ (New features, Server Components, Actions)
- **Tailwind CSS v4.1**: https://tailwindcss.com/docs (5x faster builds, LCH colors, native text shadows)
- **Motion 12.23.6**: https://motion.dev/docs (Animations, gestures, scroll triggers)
- **shadcn/ui**: https://ui.shadcn.com/docs (Component system, theming)
- **Vercel**: https://vercel.com/docs (Deployment, optimization)

Research directory structure:
- `/research/nextjs/` - Next.js documentation
- `/research/react/` - React 19 features
- `/research/tailwind/` - Tailwind v4 documentation
- `/research/motion/` - Motion/Framer Motion docs
- `/research/shadcn/` - Component library docs

## OTHER CONSIDERATIONS:

### Architecture Requirements:
- **File structure**: Follow Next.js 15 App Router conventions under `src/` directory
- **Component organization**: Separate UI components, sections, and layouts
- **Type safety**: Use JavaScript with comprehensive JSDoc comments (no TypeScript as per project requirement)
- **Performance budget**: Bundle size monitoring, code splitting, lazy loading for animations

### Design Implementation:
- **LCH color space**: Use CSS custom properties for theme flexibility
- **Dark theme primary**: Build dark first, prepare for future light theme
- **Animation performance**: One complex animation per viewport, respect prefers-reduced-motion
- **Responsive breakpoints**: Mobile → sm (640px) → md (768px) → lg (1024px) → xl (1280px)

### Phase-specific Requirements:
**Phase 1 (Static Foundation)**:
- Semantic HTML structure
- CSS styling with Tailwind v4
- Basic interactivity (navigation, buttons)
- "Coming Soon" placeholders for demos
- Must work without JavaScript

**Phase 2 (Interactive Enhancement)**:
- Scroll-triggered animations
- Mesh gradient canvas in hero
- SVG connection lines between sections
- Micro-interactions and hover states
- Demo component integration

### Common Pitfalls to Avoid:
- Don't use localStorage/sessionStorage (not supported in artifacts)
- Avoid arbitrary Tailwind values - use design system scales
- Don't create files over 500 lines - split into modules
- Ensure all animations use GPU-accelerated properties (transform, opacity)
- Test on mobile devices early and often

### Integration Points:
- **Scheduler CTA**: Prepare for third-party booking system integration
- **Demo components**: Modular structure for easy Phase 2 additions
- **Analytics**: Consider tracking implementation from the start
- **SEO**: Implement proper meta tags, structured data, sitemap

### Success Criteria:
- Visitors understand Novum Labs value within 5 seconds
- Live demo interaction within 10 seconds of landing
- Clear path to booking discovery call (< 3 clicks)
- Premium, AI-forward visual impression
- Flawless mobile experience