// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],

  // SSG config
  nitro: {
    prerender: {
      routes: [],
    },
  },

  // disable auto import
  imports: {
    scan: false,
  },
  components: {
    dirs: [],
  },

  shadcn: {
    prefix: '',
    componentDir: './components/_common',
  },
})
