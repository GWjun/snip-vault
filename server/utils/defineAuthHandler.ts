import type { EventHandler, EventHandlerRequest } from 'h3'
import { H3Error } from 'h3'
import prisma from '~/lib/prisma'
import { getErrorMessage } from '~/shared/ErrorStatus'

export const defineAuthHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    const sessionToken = event.context.auth.sessionToken

    if (!sessionToken) {
      throw createError({
        statusCode: 401,
        statusMessage: getErrorMessage('UNAUTHORIZED'),
      })
    }

    const session = await prisma.session.findUnique({
      where: { sessionToken },
      include: { user: true },
    })

    if (!session?.user) {
      throw createError({
        statusCode: 401,
        statusMessage: getErrorMessage('SESSION_EXPIRED'),
      })
    }

    event.context.user = session.user

    try {
      const response = await handler(event)
      return { response }
    } catch (error) {
      if (error instanceof H3Error && error.statusMessage) {
        if (error.statusMessage === 'Validation Error') {
          throw createError({
            statusCode: 400,
            statusMessage: getErrorMessage('INVALID_REQUEST'),
          })
        } else {
          throw error
        }
      } else {
        throw createError({
          statusCode: 500,
          statusMessage: getErrorMessage('INTERNAL_SERVER_ERROR'),
        })
      }
    }
  })
