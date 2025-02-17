import prisma from '~/lib/prisma'
import { createSnippetSchema } from '#shared/dto/snippets'

export default defineAuthHandler(async (event) => {
  const user = event.context.user
  const body = await readValidatedBody(event, (body) =>
    createSnippetSchema.parse(body),
  )

  const tags =
    body.tags?.map((name: string) => ({
      tag: {
        connectOrCreate: {
          where: { userId_name: { userId: user.id, name } },
          create: { name, userId: user.id },
        },
      },
    })) || []

  const snippet = await prisma.snippet.create({
    data: {
      title: body.title,
      content: body.content,
      language: body.language,
      description: body.description,
      userId: user.id,
      tags: { create: tags },
    },
  })

  return { id: snippet.id }
})
