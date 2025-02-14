import { toast } from '~/components/_common/toast'

export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: '/api',

    async onResponseError({ response }) {
      toast({
        variant: 'destructive',
        title: response.statusText,
      })
    },
  })

  return {
    provide: {
      api,
    },
  }
})
