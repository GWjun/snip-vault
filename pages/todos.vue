<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div>
        {{ todo.title }}
      </div>
    </div>

    <div>{{ data?.user?.name }}</div>
    <div>{{ data?.user?.email }}</div>

    <input v-model="newTodo.title" placeholder="new todo item" />
    <button @click="addTodo">add</button>
  </div>
</template>

<script setup lang="ts">
  import { useGetTodos } from '~/queries/todos/useGetTodos'
  import { requestPostTodos } from '~/queries/todos/requestPostTodos'

  const { data: todos, refresh } = await useGetTodos()
  const { data } = useAuth()

  const newTodo = ref({
    title: '',
    completed: false,
  })

  const addTodo = async () => {
    if (!newTodo.value.title.trim()) return

    await requestPostTodos(newTodo.value)

    await refresh()
    newTodo.value.title = ''
  }
</script>
