<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-6 mt-48"
  >
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
      Snipub allows you to save, view, and easily copy code snippets for reuse.
    </p>
    <p class="text-gray-400 text-center mb-8">
      Organize and manage your code snippets seamlessly across your projects.
    </p>

    <div class="mt-6">
      <Button
        class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-lg"
        size="lg"
        @click="getStart"
      >
        Get Started
      </Button>
    </div>

    <div
      class="flex items-center justify-between max-w-5xl mx-auto py-12 px-6 mt-28"
    >
      <div class="flex flex-col w-1/2 pr-10">
        <h3 class="text-3xl font-semibold mb-8">
          <span class="text-primary">Copy</span>
          With Ease
        </h3>
        <p class="text-gray-400 mb-12">
          Quick and easy access to copy and paste your favorite code snippets
          whenever needed.
        </p>
      </div>

      <div class="w-1/2 pl-10">
        <NuxtImg
          class="rounded-lg shadow-lg"
          src="/images/sample.webp"
          alt="Code Snippet"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PATH } from '~/routes'

  definePageMeta({
    auth: false,
  })

  const { status, signIn } = useAuth()
  const router = useRouter()

  function getStart() {
    if (status.value === 'authenticated') {
      router.push(PATH.DASHBOARD)
      return
    }

    signIn('github')
  }
</script>
