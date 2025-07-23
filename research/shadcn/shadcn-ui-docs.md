# shadcn/ui Component Library Documentation

## Overview
shadcn/ui is a collection of reusable components built on top of Radix UI primitives and styled with Tailwind CSS. It provides a comprehensive set of accessible, customizable components for modern React applications.

## Installation

### CLI Installation (Recommended)
```bash
npx shadcn@latest init
```

### Manual Installation
For manual installation, install required dependencies:

```bash
# Core dependencies vary by component
npm install @radix-ui/react-slot
npm install @radix-ui/react-dialog
npm install @radix-ui/react-toast
# ... other dependencies based on components used
```

## Configuration

### components.json
The `components.json` file is the heart of shadcn/ui configuration:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### Configuration Options

#### Style Options
- `"default"` - Clean, minimalist design
- `"new-york"` - Modern, sophisticated styling (recommended)

#### Base Colors
- `"gray"` | `"neutral"` | `"slate"` | `"stone"` | `"zinc"`

#### CSS Variables vs Utility Classes
```json
{
  "tailwind": {
    "cssVariables": true  // Use CSS variables for theming
  }
}
```

```json
{
  "tailwind": {
    "cssVariables": false  // Use Tailwind utility classes
  }
}
```

## Adding Components

### Via CLI (Recommended)
```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu

# Add multiple components
npx shadcn@latest add button input form
```

### Popular Components

#### Button Component
```bash
npx shadcn@latest add button
```

```typescript
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
```

#### Form Components
```bash
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add label
```

```typescript
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormExample() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

#### Navigation Components
```bash
npx shadcn@latest add menubar
npx shadcn@latest add breadcrumb
npx shadcn@latest add sidebar
```

```typescript
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

## Dark Mode Integration

### Next.js Setup
```bash
npm install next-themes
```

### Theme Provider
```typescript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### Theme Toggle Component
```typescript
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Advanced Components

### Data Display
```bash
npx shadcn@latest add table
npx shadcn@latest add chart
npx shadcn@latest add calendar
```

### Layout Components
```bash
npx shadcn@latest add card
npx shadcn@latest add sheet
npx shadcn@latest add drawer
npx shadcn@latest add resizable
npx shadcn@latest add scroll-area
```

### Interactive Components
```bash
npx shadcn@latest add dialog
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add context-menu
npx shadcn@latest add command
```

### Form Controls
```bash
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add slider
npx shadcn@latest add textarea
```

## Component Dependencies

### Common Radix UI Dependencies
- `@radix-ui/react-slot` - Button, Badge
- `@radix-ui/react-dialog` - Dialog, Sheet, Drawer
- `@radix-ui/react-toast` - Toast notifications
- `@radix-ui/react-select` - Select dropdowns
- `@radix-ui/react-accordion` - Accordion components
- `@radix-ui/react-menubar` - Menu navigation
- `@radix-ui/react-context-menu` - Right-click menus
- `@radix-ui/react-slider` - Range sliders
- `@radix-ui/react-label` - Form labels

### Specialized Dependencies
- `react-day-picker` + `date-fns` - Calendar component
- `recharts` - Chart components
- `cmdk` - Command palette
- `vaul` - Drawer component
- `sonner` - Toast notifications
- `react-resizable-panels` - Resizable layouts

## Best Practices

### 1. Component Organization
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── custom/          # Custom components
│   └── forms/           # Form-specific components
├── lib/
│   └── utils.ts         # Utility functions
└── hooks/               # Custom hooks
```

### 2. Styling Guidelines
- Use CSS variables for consistent theming
- Leverage Tailwind utility classes
- Follow the established design system
- Maintain consistent spacing and typography

### 3. Accessibility
- All components are built with accessibility in mind
- Use semantic HTML elements
- Provide proper ARIA labels
- Support keyboard navigation

### 4. TypeScript Integration
```typescript
// Type-safe component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}
```

## Customization

### Theme Customization
```css
/* globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... other CSS variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... dark mode variables */
  }
}
```

### Component Variants
```typescript
// Extend existing variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        custom: "bg-purple-500 text-white hover:bg-purple-600", // Custom variant
      },
    },
  }
)
```

## Registry Integration

For custom component registries:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "my-registry",
  "homepage": "https://myregistry.com",
  "items": [
    {
      "name": "custom-button",
      "type": "registry:component",
      "files": [
        {
          "path": "custom-button.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

This documentation covers the essential aspects of using shadcn/ui for building consistent, accessible, and beautiful user interfaces in React applications.