<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-2 border-b border-border bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md"
  >
    <NuxtLink :to="linkUrl" class="flex items-center gap-2">
      <CodeXml />
      <div class="text-xl font-bold">Snipub</div>
    </NuxtLink>

    <div class="flex items-center gap-3">
      <Button
        v-if="status === 'authenticated'"
        @click="signOut({ callbackUrl: '/' })"
        >Sign Out</Button
      >
      <button
        class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        @click="toggleColorMode"
      >
        <component :is="currentIcon" class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Moon, Sun, CodeXml } from 'lucide-vue-next'
  import { PATH } from '~/routes'

  const colorMode = useColorMode()
  const { status, signOut } = useAuth()

  const linkUrl = computed(() =>
    status.value === 'authenticated' ? PATH.SNIPPETS : '/',
  )

  const currentIcon = computed(() =>
    colorMode.preference === 'dark' ? Moon : Sun,
  )

  function toggleColorMode() {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
</script>
