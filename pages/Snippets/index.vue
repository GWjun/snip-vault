<template>
  <div>
    <TagSideBar />

    <div class="sm:ml-64 p-4">
      <div class="flex gap-3 max-w-lg">
        <Button size="sm" as-child
          ><NuxtLink :to="PATH.SNIPPETS_CREATE">Create</NuxtLink>
        </Button>
        <Input class="h-8" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TagSideBar from '~/components/TagSideBar.vue'
  import { PATH } from '~/routes'
</script>
