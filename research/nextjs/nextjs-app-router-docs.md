# Next.js 15.4.1 App Router Documentation

## Core App Router Concepts

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── lib/                # Utilities and helpers
├── styles/             # Global styles
└── types/              # TypeScript definitions
```

### Root Layout Component
Every App Router application needs a root layout that wraps all pages:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Page Components
Create pages using `page.tsx` files in the app directory:

```typescript
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

## Navigation and Routing

### Link Component
Use Next.js Link for client-side navigation:

```typescript
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}
```

### Navigation Hooks
Access router information in client components:

```typescript
'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function ClientComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div>
      <p>Current path: {pathname}</p>
      <button onClick={() => router.push('/about')}>
        Go to About
      </button>
    </div>
  )
}
```

## Dynamic Routes

### Creating Dynamic Segments
Use square brackets for dynamic routes:

```typescript
// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

### Static Generation
Generate static params for dynamic routes:

```typescript
export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' }
  ]
}
```

## Data Fetching

### Server Components (Default)
Fetch data directly in server components:

```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

### Caching Strategies
Control caching behavior with fetch options:

```typescript
export default async function Page() {
  // Static data (cached until manually invalidated)
  const staticData = await fetch('https://api.example.com/static', { 
    cache: 'force-cache' 
  })

  // Dynamic data (fetched on every request)
  const dynamicData = await fetch('https://api.example.com/dynamic', { 
    cache: 'no-store' 
  })

  // Revalidated data (cached with time limit)
  const revalidatedData = await fetch('https://api.example.com/timed', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  })

  return <div>...</div>
}
```

## Client Components

### Using Client Components
Add 'use client' directive for interactive components:

```typescript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

## Layouts

### Nested Layouts
Create layouts for specific route segments:

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  )
}
```

## Route Handlers (API Routes)

### Creating API Endpoints
Use route.ts files for API endpoints:

```typescript
// app/api/users/route.ts
export async function GET(request: Request) {
  const users = await getUsers()
  return Response.json(users)
}

export async function POST(request: Request) {
  const data = await request.json()
  const user = await createUser(data)
  return Response.json(user)
}
```

## File Conventions

### Special Files
- `page.tsx` - Page UI
- `layout.tsx` - Shared UI for route segment
- `loading.tsx` - Loading UI
- `error.tsx` - Error UI
- `not-found.tsx` - Not found UI
- `route.ts` - API endpoint

### Dynamic Routing Conventions
- `[folder]` - Dynamic segment
- `[...folder]` - Catch-all segment
- `[[...folder]]` - Optional catch-all segment
- `(folder)` - Route group (doesn't affect URL)
- `@folder` - Parallel route

## Performance Optimization

### Link Prefetching
Control link prefetching behavior:

```typescript
import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      {/* Prefetch enabled (default) */}
      <Link href="/about">About</Link>
      
      {/* Prefetch disabled */}
      <Link href="/contact" prefetch={false}>
        Contact
      </Link>
    </div>
  )
}
```

### Web Vitals Monitoring
Monitor Core Web Vitals:

```typescript
// app/_components/web-vitals.tsx
'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log('Web Vital:', metric)
  })

  return null
}
```

## Migration from Pages Router

### Key Differences
1. **File-based routing**: Folder structure defines routes
2. **Server Components**: Default to server-side rendering
3. **Layouts**: Built-in layout support
4. **Data Fetching**: New async/await pattern in components
5. **API Routes**: Now called Route Handlers

### Common Migration Patterns
- `pages/_app.js` → `app/layout.tsx`
- `pages/index.js` → `app/page.tsx`
- `pages/api/*` → `app/api/*/route.ts`
- `getServerSideProps` → Server Component with fetch
- `getStaticProps` → Server Component with cached fetch
- `getStaticPaths` → `generateStaticParams`

## Best Practices

1. **Use Server Components by default** - Only add 'use client' when needed
2. **Minimize Client Components** - Keep interactivity at the leaf level
3. **Co-locate components** - Place related files near their usage
4. **Implement proper error boundaries** - Use error.tsx files
5. **Optimize data fetching** - Use appropriate caching strategies
6. **Follow TypeScript patterns** - Leverage type safety throughout

## TypeScript Integration

### Typed Params
Use proper TypeScript types for route parameters:

```typescript
interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const search = await searchParams
  
  return <div>Page {id}</div>
}
```

This documentation covers the essential App Router concepts and patterns needed for building modern Next.js applications.