<template>
  <div>
    <h2 class="text-2xl font-semibold">Main Page</h2>
    <div>Count: {{ counter.count }}</div>
    <Button @click="counter.increment">add count</Button>

    <div>
      <div>{{ data?.user?.name }}</div>
      <div>{{ data?.user?.email }}</div>
      <Button @click="signIn('github')">SignIn</Button>
      <Button @click="signOut">SignOut</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '~/stores/counter'
  const { signIn, signOut, data } = useAuth()

  const counter = useCounterStore()
</script>
