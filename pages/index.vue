<template>
  <div>
    <h2 class="text-2xl font-semibold">Main Page</h2>
    <div>Count: {{ counter.count }}</div>
    <Button @click="counter.increment">add count</Button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '~/stores/counter'

  const counter = useCounterStore()
</script>
