<template>
  <main class="relative min-h-screen">
    <HeaderLayout />
    <slot />
    <Toaster />
  </main>
</template>

<script setup lang="ts">
  import HeaderLayout from '~/components/HeaderLayout.vue'
  import Toaster from '~/components/_common/toast/Toaster.vue'
</script>
