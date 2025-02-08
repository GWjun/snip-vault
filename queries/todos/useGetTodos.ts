import { useAPI } from '~/composables/useAPI'
import type { Todo } from '~/queries/types/todos'

export async function useGetTodos() {
  const { data, ...rest } = await useAPI<Todo[]>('/todos')

  if (rest.status.value === 'error') throw new Error()

  return { data, ...rest }
}
