import type { UseFetchOptions } from 'nuxt/app'

// This is typically used when making a GET request from a server or client.
export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    baseURL: '/api',

    // set cookie
    onRequest({ options }) {
      const headers = useRequestHeaders(['cookie']) as Record<string, string>
      const cookie = headers['cookie']

      if (cookie) {
        options.headers.set('Cookie', cookie)
      }
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        await useNuxtApp().runWithContext(() => navigateTo('/'))
      } else {
        // todo: I want to throw an error and go to the error page
      }
    },

    ...options,
  })
}
