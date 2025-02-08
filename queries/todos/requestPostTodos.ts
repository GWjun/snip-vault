import type { Todo } from '~/queries/types/todos'

export async function requestPostTodos(newTodo: Omit<Todo, 'id'>) {
  const { $api } = useNuxtApp()

  return $api<Todo>('/todos', {
    method: 'POST',
    body: newTodo,
  })
}
