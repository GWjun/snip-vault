import { PATH } from '~/routes'

export function useSignIn() {
  const { status, signIn } = useAuth()
  const router = useRouter()
  const isPending = useState('@useSignIn:isPending', () => false)

  async function handleSignIn() {
    if (status.value === 'authenticated') {
      await router.push(PATH.SNIPPETS)
      return
    }

    try {
      isPending.value = true
      await signIn('github', { callbackUrl: PATH.SNIPPETS })
    } catch (error) {
      // todo: error handling
      console.error('Authentication failed:', error)
    } finally {
      isPending.value = false
    }
  }

  return {
    isPending,
    handleSignIn,
  }
}
