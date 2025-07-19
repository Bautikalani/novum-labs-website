# CLAUDE.md - Novum Labs Website Project Rules

## 🔄 Project Awareness & Context
- **Always read DESIGN.md first** - Contains complete specifications for the Novum Labs website including layout, components, tech stack, and implementation phases
- **Check TASKS.md** before starting work - Add any new tasks with date if not listed
- **Follow the two-phase approach** - Phase 1 (static foundation) → Phase 2 (animations/interactivity)
- **Use examples/ folder** - Reference existing patterns before creating new ones

## 🏗️ Code Structure & Modularity
- **Never exceed 500 lines per file** - Split into logical modules if approaching limit
- **Follow Next.js 15.4.1 App Router conventions** - Use latest patterns and best practices
- **Organize by feature** - Keep related components, hooks, and utilities together
- **TypeScript strict mode** - No 'any' types without explicit justification

## 🎯 Novum Labs Specific Rules
- **Premium positioning** - Every component should reinforce Novum Labs as a cutting-edge AI consultancy
- **Performance first** - Must meet Lighthouse 90+ scores (see DESIGN.md for specific metrics)
- **Dark theme primary** - Use LCH color system with CSS variables as specified in DESIGN.md
- **Mobile-first responsive** - Design for mobile, enhance for desktop

## 🧪 Testing & Quality
- **Write tests alongside features** - Don't defer testing to later
- **Follow existing test patterns** - Check examples/ and __tests__/ folders
- **Accessibility is non-negotiable** - WCAG AA compliance minimum
- **Performance budgets** - Monitor bundle size with `next build --profile`

## 📝 Documentation Standards
- **Comment the why, not the what** - Focus on business logic and decisions
- **Update README.md** - Keep setup instructions current
- **Document in code** - Use JSDoc for complex functions
- **Reference DESIGN.md** - Point to design specs rather than duplicating

## 🤖 AI Behavior Rules
- **Read before writing** - Always check DESIGN.md and existing code first
- **Ask for clarification** - Don't assume when requirements are ambiguous
- **Incremental progress** - Build working features step by step
- **Follow the workflow** - DESIGN.md → Research → Plan → Implement → Test

## 🚀 Development Workflow
1. **Understand** - Read DESIGN.md for full context
2. **Research** - Check /research/ for latest docs on Next.js, React 19, Tailwind v4
3. **Plan** - Create implementation approach following Phase 1/2 structure
4. **Build** - Implement incrementally with working states
5. **Test** - Ensure quality standards are met
6. **Document** - Update relevant documentation

## 📋 Quick Reference
- **Design Specs**: See DESIGN.md
- **Tech Stack**: Next.js 15.4.1, React 19.1, Tailwind v4.1, Motion 12.23.6
- **Examples**: Check examples/ folder for patterns
- **Research**: Use /research/ for third-party documentation
- **Tasks**: Track in TASKS.md

---

*For detailed specifications, always refer to DESIGN.md. This document provides the behavioral framework for development.*