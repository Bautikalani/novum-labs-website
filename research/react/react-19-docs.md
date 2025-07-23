# React 19.1 Documentation

## What's New in React 19

React 19 introduces significant improvements for modern web applications, including new hooks, server components enhancements, and performance optimizations.

## Key Features

### 1. Actions
Actions are functions that manage state transitions and handle async operations:

```typescript
import { useActionState } from 'react'

function UpdateName({}) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"))
      if (error) {
        return error
      }
      redirect("/path")
    },
    null,
  )

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  )
}
```

### 2. New Hooks

#### useActionState
Manage form state and async operations:

```typescript
function MyForm() {
  const [state, formAction] = useActionState(async (currentState, formData) => {
    // Handle form submission
    return newState
  }, initialState)

  return (
    <form action={formAction}>
      {/* form content */}
    </form>
  )
}
```

#### useOptimistic
Handle optimistic updates:

```typescript
function Thread({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  )

  const formAction = async (formData) => {
    const message = formData.get("message")
    addOptimisticMessage(message)
    await sendMessage(message)
  }

  return (
    <div>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text} {message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
```

#### use
Handle promises and context in components:

```typescript
function MessageThread({ messagesPromise }) {
  const messages = use(messagesPromise)
  return (
    <div>
      {messages.map(message => 
        <div key={message.id}>{message.text}</div>
      )}
    </div>
  )
}

// Usage with Suspense
function App() {
  const messagesPromise = fetchMessages()
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MessageThread messagesPromise={messagesPromise} />
    </Suspense>
  )
}
```

### 3. React Compiler
React 19 includes an experimental compiler that automatically optimizes components:

```typescript
// Before: Manual memoization
const ExpensiveComponent = memo(({ items, filter }) => {
  const filteredItems = useMemo(() => 
    items.filter(item => item.includes(filter)), 
    [items, filter]
  )
  
  return (
    <div>
      {filteredItems.map(item => <div key={item}>{item}</div>)}
    </div>
  )
})

// After: Compiler handles optimization automatically
function ExpensiveComponent({ items, filter }) {
  const filteredItems = items.filter(item => item.includes(filter))
  
  return (
    <div>
      {filteredItems.map(item => <div key={item}>{item}</div>)}
    </div>
  )
}
```

### 4. Server Components Enhancements

#### Async Server Components
```typescript
// Server Component
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetchUser(userId)
  const posts = await fetchUserPosts(userId)
  
  return (
    <div>
      <h1>{user.name}</h1>
      <UserPosts posts={posts} />
    </div>
  )
}

// Client Component
'use client'
function UserPosts({ posts }: { posts: Post[] }) {
  const [showAll, setShowAll] = useState(false)
  
  return (
    <div>
      {posts.slice(0, showAll ? posts.length : 3).map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show All'}
      </button>
    </div>
  )
}
```

### 5. Improved Error Handling

#### Error Boundaries with Error Info
```typescript
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <pre>{this.state.error?.stack}</pre>
        </div>
      )
    }

    return this.props.children
  }
}
```

### 6. Form Enhancements

#### Built-in Form Validation
```typescript
function ContactForm() {
  const [state, formAction] = useActionState(async (prevState, formData) => {
    const email = formData.get('email')
    const message = formData.get('message')
    
    // Validation
    if (!email || !email.includes('@')) {
      return { error: 'Valid email required' }
    }
    
    if (!message || message.length < 10) {
      return { error: 'Message must be at least 10 characters' }
    }
    
    // Submit form
    await submitContact({ email, message })
    return { success: true }
  }, {})

  return (
    <form action={formAction}>
      <input 
        type="email" 
        name="email" 
        required 
        placeholder="your@email.com"
      />
      <textarea 
        name="message" 
        required 
        minLength={10}
        placeholder="Your message..."
      />
      <button type="submit">Send Message</button>
      
      {state?.error && <div className="error">{state.error}</div>}
      {state?.success && <div className="success">Message sent!</div>}
    </form>
  )
}
```

## Performance Improvements

### 1. Automatic Batching
React 19 automatically batches all state updates:

```typescript
function AutoBatchingExample() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    // These are automatically batched in React 19
    setCount(c => c + 1)
    setFlag(f => !f)
    // Only one re-render occurs
  }

  return (
    <div>
      <button onClick={handleClick}>
        Count: {count}, Flag: {flag.toString()}
      </button>
    </div>
  )
}
```

### 2. Improved Hydration
```typescript
// Root API for better hydration
import { createRoot, hydrateRoot } from 'react-dom/client'

// Client-side rendering
const root = createRoot(document.getElementById('root'))
root.render(<App />)

// Hydration
const root = hydrateRoot(document.getElementById('root'), <App />)
```

### 3. Concurrent Features
```typescript
import { startTransition, useDeferredValue } from 'react'

function SearchApp() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const results = useSearch(deferredQuery)

  function handleChange(event) {
    // Mark search as non-urgent
    startTransition(() => {
      setQuery(event.target.value)
    })
  }

  return (
    <div>
      <input 
        value={query} 
        onChange={handleChange} 
        placeholder="Search..."
      />
      <SearchResults query={deferredQuery} results={results} />
    </div>
  )
}
```

## TypeScript Integration

### 1. Improved Type Inference
```typescript
// Better inference for refs
function MyComponent() {
  const ref = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    // TypeScript knows ref.current is HTMLInputElement | null
    ref.current?.focus()
  }, [])

  return <input ref={ref} />
}
```

### 2. Enhanced Hook Types
```typescript
// useActionState with proper typing
const [state, dispatch] = useActionState<
  { message: string; error?: string },
  FormData
>(
  async (prevState, formData) => {
    // Implementation with proper types
    return { message: 'Success' }
  },
  { message: '' }
)

// useOptimistic with types
const [optimisticTodos, addOptimisticTodo] = useOptimistic<
  Todo[],
  string
>(
  todos,
  (state, newTodo) => [...state, { id: Date.now(), text: newTodo, completed: false }]
)
```

## Migration Guide

### From React 18 to React 19

#### 1. Update Dependencies
```bash
npm install react@19 react-dom@19
npm install @types/react@19 @types/react-dom@19  # for TypeScript
```

#### 2. Replace Legacy Hooks
```typescript
// Old: useFormState
import { useFormState } from 'react-dom'

// New: useActionState
import { useActionState } from 'react'
```

#### 3. Update Error Boundaries
```typescript
// Enhanced error boundary for React 19
function ErrorBoundary({ children, fallback }) {
  return (
    <ErrorBoundaryComponent fallback={fallback}>
      {children}
    </ErrorBoundaryComponent>
  )
}
```

## Best Practices

### 1. Use Server Components When Possible
```typescript
// Server Component (default)
async function ProductList() {
  const products = await fetchProducts()
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Client Component (when interactivity needed)
'use client'
function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)
  
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}
```

### 2. Optimize with Compiler
```typescript
// Let the compiler handle optimizations
function ProductList({ products, category }) {
  // No need for useMemo - compiler optimizes automatically
  const filteredProducts = products.filter(p => p.category === category)
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### 3. Use Actions for Forms
```typescript
function CreateProduct() {
  const [state, formAction] = useActionState(createProduct, null)
  
  return (
    <form action={formAction}>
      <input name="name" placeholder="Product name" required />
      <input name="price" type="number" placeholder="Price" required />
      <button type="submit">Create Product</button>
      {state?.error && <div className="error">{state.error}</div>}
    </form>
  )
}

async function createProduct(prevState, formData) {
  try {
    const product = await api.createProduct({
      name: formData.get('name'),
      price: parseFloat(formData.get('price'))
    })
    redirect(`/products/${product.id}`)
  } catch (error) {
    return { error: error.message }
  }
}
```

This documentation covers the major features and improvements in React 19, providing practical examples for implementation in modern web applications.