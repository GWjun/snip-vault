<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-6 pt-48"
  >
    <div class="relative mb-8">
      <div class="absolute h-full w-full bg-green-400 blur-3xl opacity-20" />

      <h2
        class="text-5xl font-bold flex flex-col items-center leading-tight mb-4"
      >
        <span class="text-4xl">The code</span>
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500"
        >
          Snippet Hub
        </span>
      </h2>
      <p class="text-gray-400 text-center">
        Snipub allows you to save, view, and easily copy code snippets for
        reuse.
      </p>
      <p class="text-gray-400 text-center">
        Organize and manage your code snippets seamlessly across your projects.
      </p>
    </div>

    <div class="mt-6">
      <Button
        class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-lg"
        size="lg"
        :disabled="isPending"
        @click="handleSignIn"
      >
        Get Started
      </Button>
    </div>

    <LandingFeatures />
  </div>
</template>

<script setup lang="ts">
  import LandingFeatures from '~/components/LandingFeatures.vue'
  import { useSignIn } from '~/composables/useSignIn'

  definePageMeta({
    auth: false,
  })

  const { isPending, handleSignIn } = useSignIn()
</script>
