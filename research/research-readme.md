# Research Directory

This directory contains scraped documentation for all technologies used in the Novum Labs website project. The documentation hook will automatically reference these files when Claude writes code.

## Structure

```
research/
├── nextjs/           # Next.js 15.4.1 documentation
├── react/            # React 19.1 documentation
├── tailwind/         # Tailwind CSS v4.1 documentation
├── motion/           # Motion 12.23.6 (Framer Motion) documentation
├── shadcn/           # shadcn/ui component documentation
└── vercel/           # Vercel deployment documentation
```

## Documentation Sources

All documentation should be researched from official sources using Claude Code's web search:
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Motion**: https://motion.dev/docs
- **shadcn/ui**: https://ui.shadcn.com/docs
- **Vercel**: https://vercel.com/docs

## Usage

When Claude imports or uses any of these technologies, the hook will automatically search this directory and provide relevant documentation before writing code.

For example:
- Writing `import { motion } from 'framer-motion'` → Shows Motion docs
- Writing `import Image from 'next/image'` → Shows Next.js Image docs
- Using Tailwind classes → Shows Tailwind documentation

## Important Notes

1. **Version Specific**: Documentation should match the exact versions specified in DESIGN.md
2. **Official Sources Only**: Only scrape from official documentation
3. **Comprehensive Coverage**: Include API references, examples, and best practices
4. **Regular Updates**: Keep documentation current with latest releases