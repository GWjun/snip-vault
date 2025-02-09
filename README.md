# Nuxt 3 Custom Boilerplate

Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for more information.

## Key Modules

This starter includes the following key modules:

- `pinia`
- `vueuse`
- `@nuxt/image`

<br/>

## Type Checking

Enable type-checking at build or development time,

```ts
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
})
```

<br/>

## Disable Auto Imports

Auto imports are partially disabled in this starter due to issues with tracking and refactoring.

This means you will need to import components and functions manually.

However, core Vue/Nuxt features like `ref` and `defineStore` are still auto-imported and available.

```ts
export default defineNuxtConfig({
  imports: {
    scan: false,
  },
  components: {
    dirs: [],
  },
})
```

<br/>

## Custom API function

You can use the `$api` function, which is a wrapper around `$fetch`. 

Currently, it's configured with a baseURL of '/api'.

```ts
const { $api } = useNuxtApp()

await $api<Todo>('/todos', {
  method: 'POST',
  body: newTodo,
})
```

You can also use `useAPI`, a wrapper function for useFetch that utilizes `$api`.

```ts
const { data, ...rest } = await useAPI<Todo[]>('/todos')
```

<br/>

## CDN Caching

This configuration sets 60-second ISR caching for all routes. (You can deploy on Netlify or Vercel.)

You can further extend this by adding custom settings like SSR, SPA, and SSG for specific routes.

```ts
export default defineNuxtConfig({
  routeRules: {
    '/**': { isr: 60 },
    // Custom routing rules can be applied here.
    // ex) '/dashboard': { isr: true }
  },
})
```

<br/>

## Setup

Install the dependencies:

```bash
yarn install
```

### Development Server

Start the development server at `http://localhost:3000`:

```bash
yarn dev
```

### Production

Build the application for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

See the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more info.
