# Next.js 15.4.1 - App Router

**Source**: https://nextjs.org/docs/app
**Scraped**: [Current Date]

## Overview

The App Router is a new paradigm for building applications using React's latest features. It's the recommended way to build new Next.js applications starting from version 13.

## File Conventions

### layout.js
A layout is UI that is shared between routes.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### page.js
A page is UI that is unique to a route.

```jsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

### loading.js
Creates instant loading states built on Suspense.

```jsx
export default function Loading() {
  return <div>Loading...</div>
}
```

### error.js
Error boundaries for handling errors in nested routes.

```jsx
'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### not-found.js
Show a custom UI when the `notFound` function is invoked.

```jsx
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}
```

## Route Groups

Organize routes without affecting the URL structure:

```
app/
├── (marketing)/
│   ├── about/
│   │   └── page.js
│   └── blog/
│       └── page.js
└── (shop)/
    ├── products/
    │   └── page.js
    └── cart/
        └── page.js
```

## Dynamic Routes

### Single Dynamic Segment
`app/blog/[slug]/page.js`

```jsx
export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}
```

### Catch-all Segments
`app/shop/[...categories]/page.js`

```jsx
export default function Page({ params }) {
  // URL: /shop/clothes/tops/t-shirts
  // params.categories: ['clothes', 'tops', 't-shirts']
  return <div>Categories: {params.categories.join(' > ')}</div>
}
```

## Metadata

### Static Metadata
```jsx
export const metadata = {
  title: 'Novum Labs - AI Consulting',
  description: 'Transform your business with AI',
}
```

### Dynamic Metadata
```jsx
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id)
  
  return {
    title: product.title,
    openGraph: {
      images: [product.image],
    },
  }
}
```

## Server Components (Default)

Components are Server Components by default:

```jsx
// This component runs on the server
async function BlogPosts() {
  const posts = await getPosts() // Direct database access
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

## Client Components

Use the `'use client'` directive for interactivity:

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

## Route Handlers

API routes in the App Router:

```jsx
// app/api/hello/route.js
export async function GET(request) {
  return Response.json({ hello: 'world' })
}

export async function POST(request) {
  const body = await request.json()
  return Response.json({ received: body })
}
```

## Middleware

```jsx
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: '/about/:path*',
}
```

## Best Practices for App Router

1. **Use Server Components by default** - Only use Client Components when needed
2. **Colocate data fetching** - Fetch data where it's used
3. **Use loading.js** - For better UX during navigation
4. **Implement error.js** - For graceful error handling
5. **Static where possible** - Use `generateStaticParams` for known dynamic routes