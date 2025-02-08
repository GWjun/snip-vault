import { defineEventHandler, readBody } from 'h3'

const todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
  { id: 3, title: 'Todo 3', completed: false },
]

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    return todos
  }

  if (method === 'POST') {
    const newTodo = await readBody(event)
    if (!newTodo.title) {
      throw createError({ statusCode: 400, statusMessage: 'Title is required' })
    }

    const newId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1
    const createdTodo = { id: newId, ...newTodo }
    todos.push(createdTodo)

    return createdTodo
  }

  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
})
