<template>
  <div>
    <aside class="fixed hidden sm:flex w-64 min-h-[calc(100vh-57px)] border-r">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Tag</h2>
        <TagList />
      </div>
    </aside>

    <Sheet>
      <SheetTrigger class="sm:hidden fixed right-4 bottom-4" as-child>
        <Button class="rounded-full w-12 h-12">
          <Tag />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle class="hidden" />
        <SheetDescription class="hidden" />

        <div class="p-2">
          <h2 class="text-lg font-semibold mb-4">Tag</h2>
          <TagList />
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
  import TagList from '~/components/TagList.vue'
  import { Tag } from 'lucide-vue-next'
</script>
