# React 19.1 - New Features and Patterns

**Source**: https://react.dev/blog/2024/12/05/react-19
**Scraped**: [Current Date]

## React 19 Overview

React 19 includes new features for better performance, improved developer experience, and enhanced capabilities.

## Actions

Actions are async functions that handle form submissions and mutations:

```jsx
function UpdateName() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get("name");
      const result = await updateName(name);
      if (result.error) {
        return result.error;
      }
      redirect("/profile");
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

## useFormStatus

Get status information about the parent form:

```jsx
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
```

## useOptimistic

Optimistically update UI while async request is in progress:

```jsx
function Thread({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  const submitAction = async (formData) => {
    const message = formData.get("message");
    addOptimisticMessage(message);
    await sendMessage(message);
  };

  return (
    <>
      {optimisticMessages.map((m) => (
        <div key={m.id}>
          {m.text}
          {m.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={submitAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
```

## use() API

Read resources in render:

```jsx
import { use } from 'react';

function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return comments.map(comment => <p key={comment.id}>{comment.text}</p>);
}

function Page({ commentsPromise }) {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

## Server Components

Write components that run on the server:

```jsx
// This async component runs on the server
async function BlogPost({ slug }) {
  const post = await db.posts.get(slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```

## Server Actions

Define server-side mutations:

```jsx
async function createPost(formData) {
  'use server';
  
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.posts.create({ title, content });
  revalidatePath('/posts');
}

function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

## Ref as Props

Pass refs as regular props:

```jsx
function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Usage
<MyInput ref={inputRef} />
```

## Improved Hydration Errors

React 19 provides better error messages for hydration mismatches:

```jsx
// Better error reporting
Error: Hydration failed because the server rendered:
  <div className="dark">
But the client rendered:
  <div className="light">
```

## Context as Provider

Use Context directly as provider:

```jsx
const ThemeContext = createContext('');

function App({ children }) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );
}
```

## Document Metadata

Support for rendering `<title>`, `<meta>`, and `<link>` in components:

```jsx
function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```

## Stylesheet Support

Better support for stylesheets:

```jsx
function Component() {
  return (
    <>
      <link rel="stylesheet" href="styles.css" precedence="default" />
      <div className="my-component">Hello</div>
    </>
  );
}
```

## Performance Improvements

- **Improved Suspense**: Better handling of suspended components
- **Automatic Batching**: Updates are batched automatically
- **Concurrent Features**: Built-in by default
- **Better Memory Usage**: Optimized internal structures