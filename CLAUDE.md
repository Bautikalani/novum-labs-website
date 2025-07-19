### 🔄 Project Awareness & Context & Research - Novum Labs Website
- **Documentation is a source of truth** - Your knowledge is out of date, I will always give you the latest documentation before writing any files that use third party APIs - that information was freshly scraped and you should NOT use your own knowledge, but rather use the documentation as a source of absolute truth.
- **Always read DESIGN.md** at the start of a new conversation to understand Novum Labs' visual architecture, component specifications, and two-phase implementation approach.
- **Check TASK.md** before starting a new task. If the task isn't listed, add it with a brief description and today's date.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in DESIGN.md and Next.js 15 App Router conventions.
- **Performance First** - All features must meet Lighthouse 90+ scores. Implement lazy loading, code splitting, and image optimization from the start.
- **Premium Visual Experience** - Every component should reinforce Novum Labs as a cutting-edge AI consultancy. Use smooth animations, sophisticated gradients, and polished micro-interactions.
- **Dark Theme Primary** - Build with dark theme as default using LCH color space. Design all components to support future light theme without breaking changes.
- **Mobile-First Responsive** - All features must work flawlessly on mobile devices. Design for touch interactions first, enhance for desktop hover states.
- **Stick to OFFICIAL DOCUMENTATION PAGES ONLY** - For all research ONLY use official documentation pages. Use web search on the documentation page given to you and then create documentation in your memory, then choose the exact pages that make sense for this project and scrape them using web search tools.
- **Ultrathink** - Use deep thinking capabilities to decide which technologies to research, what information to put into PRPs, and how to build premium web experiences.
- **Create 2 PRP documents** - phase-1-novum-labs.md and phase-2-novum-labs.md - phase 1 implements the static foundation as defined in DESIGN.md Section 8, phase 2 adds complete production ready code with all animations and interactive features.
- **Always research extensively when doing research** - If a page 404s or does not contain correct content, try to search again and find the actual page/content. Put the output of each successful web search into a new directory with the name of the technology researched, then inside it .md files of each output.
- **Refer to /research/ directory** - Before implementing any feature that uses something that requires documentation, refer to the relevant directory inside /research/ directory and use the .md files to ensure you're coding with great accuracy for Next.js 15, React 19, Tailwind v4, and Motion.
- **Design System Accuracy** - When implementing visual components, always verify against the LCH color tokens, typography scale, and spacing system defined in DESIGN.md Section 3.
- **For Maximum efficiency, whenever you need to perform multiple independent operations, such as research, invoke all relevant tools simultaneously, rather than sequentially.**

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature responsibility under `src/`:
    - `src/components/ui/` - Reusable shadcn/ui components
    - `src/components/sections/` - Page sections (Hero, Demos, Team, Process, CTA)
    - `src/components/layout/` - Header, Footer, Navigation components
    - `src/components/demos/` - Interactive demo preview components
    - `src/lib/` - Utilities, hooks, constants, theme configuration
    - `src/app/` - Next.js 15 App Router pages and layouts
    - `src/styles/` - Global styles and CSS modules
    - `src/types/` - TypeScript type definitions
- **Use clear, consistent imports following Next.js conventions** (absolute imports with @ alias pointing to src/).
- **Use environment variables** for all API keys, external service URLs, and configuration.

### 🧪 Testing & Reliability
- **Always create unit tests** for utility functions and hooks using Jest.
- **Component testing** with React Testing Library for UI components.
- **Accessibility testing** with jest-axe to ensure WCAG AA compliance.
- **Performance testing** with Lighthouse CI to ensure 90+ scores across all metrics.
- **Bundle size monitoring** - Run `next build --profile` after adding new dependencies.
- Tests should live in component folders as `component.test.tsx` or in `__tests__` for integration tests.
    - Include at least: 1 happy path test, 1 edge case, 1 accessibility test, 1 performance benchmark

### ✅ Task Completion
- **Mark completed tasks in TASK.md** immediately after finishing them.
- **Performance validation** - Before marking any feature complete, verify it meets the performance budgets in DESIGN.md Section 8.
- Add new sub-tasks or TODOs discovered during development to TASK.md under a "Discovered During Work" section.

### 📎 Style & Conventions
- **Use TypeScript** strictly with no `any` types unless explicitly justified.
- **Follow Next.js 15 conventions** - App Router, Server Components where appropriate, proper metadata exports.
- **Tailwind CSS v4** - Use utility classes with design system constraints, avoid arbitrary values.
- **Motion library patterns** - 300-500ms durations, cubic-bezier(0.65, 0, 0.35, 1) easing, respect prefers-reduced-motion.
- Write **comprehensive JSDoc comments for every exported function** using standard format:
  ```typescript
  /**
   * Creates animated mesh gradient background for hero section
   * 
   * @param {MeshConfig} config - Gradient configuration options
   * @returns {HTMLCanvasElement} Animated canvas element
   * 
   * @example
   * const mesh = createMeshGradient({ 
   *   colors: ['--accent-1', '--accent-2'],
   *   speed: 0.5 
   * })
   */
  ```

### 📚 Documentation & Explainability
- **Update README.md** when adding new features, changing setup process, or modifying architecture.
- **Component documentation** - Each major component should have usage examples and prop descriptions.
- **Document design decisions** that deviate from standard patterns or affect performance.
- When implementing complex animations or interactions, **add inline comments** explaining the approach and performance considerations.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask clarifying questions** about design intentions, animation details, or performance trade-offs.
- **Never delete or overwrite existing components** unless explicitly instructed as part of a refactor.
- **Follow the two-phase approach strictly** - Phase 1 must work without JavaScript, Phase 2 adds enhancements.
- **Check examples/ folder first** before implementing new patterns.
- **Performance over complexity** - Choose simpler solutions that meet performance budgets over complex ones that don't.
- **Accessibility is non-negotiable** - Every interactive element must be keyboard accessible and screen reader friendly.