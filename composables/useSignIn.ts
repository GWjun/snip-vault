import { PATH } from '~/routes'
import { toast } from '~/components/_common/toast'
import { getErrorMessage } from '#shared/ErrorStatus'

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
      void error
      toast({
        variant: 'destructive',
        title: getErrorMessage('INTERNAL_SERVER_ERROR'),
      })
    } finally {
      isPending.value = false
    }
  }

  return {
    isPending,
    handleSignIn,
  }
}
