<template>
  <div
    class="flex flex-col items-center justify-center gap-5 min-h-screen text-center"
  >
    <h2 class="text-2xl">Something went wrong.</h2>

    <Button @click="handleError"> Go Home </Button>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app'

  defineProps({
    error: Object as () => NuxtError,
  })

  function handleError() {
    clearError({ redirect: '/' })
  }
</script>
