export default defineEventHandler(async (event) => {
  const sessionToken = getCookie(event, 'next-auth.session-token')
  event.context.auth = { sessionToken }
})
