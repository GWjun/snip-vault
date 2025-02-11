<template>
  <div>
    <div>
      {{ data?.user?.name }}
    </div>
    <Button
      class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-lg"
      size="lg"
      @click="signOut"
    >
      Log Out
    </Button>
  </div>
</template>

<script setup lang="ts">
  const { data, signOut } = useAuth()
</script>

<style></style>
