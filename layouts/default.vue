<template>
  <main class="relative min-h-screen">
    <HeaderLayout />
    <slot />
  </main>
</template>

<script setup lang="ts">
  import HeaderLayout from '~/components/HeaderLayout.vue'
</script>
