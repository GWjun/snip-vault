import prisma from '~/lib/prisma'
import { defineAuthHandler } from '~/server/utils/defineAuthHandler'
import { getSnippetsQuerySchema } from '#shared/dto/snippets'

export default defineAuthHandler(async (event) => {
  const user = event.context.user
  const query = await getValidatedQuery(event, (body) =>
    getSnippetsQuerySchema.parse(body),
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {
    userId: user.id,
    OR: [],
  }

  // set where condition
  if (query.search) {
    where.OR.push(
      { title: { contains: query.search } },
      { content: { contains: query.search } },
      { tags: { some: { tag: { name: { contains: query.search } } } } },
    )
  }

  // tag filtering
  if (query.tags) {
    const tags = Array.isArray(query.tags) ? query.tags : [query.tags]
    where.tags = {
      some: { tag: { name: { in: tags } } },
    }
  }

  // pagination
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const skip = (page - 1) * limit

  const [snippets, total] = await Promise.all([
    prisma.snippet.findMany({
      where,
      include: { tags: { include: { tag: true } } },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.snippet.count({ where }),
  ])

  return {
    data: snippets.map((s) => ({
      ...s,
      tags: s.tags.map((t) => t.tag.name),
    })),
    hasMore: skip + limit < total,
  }
})
