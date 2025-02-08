import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/lib/prisma'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().auth.secret,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: useRuntimeConfig().auth.provider.github.id,
      clientSecret: useRuntimeConfig().auth.provider.github.secret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
})
