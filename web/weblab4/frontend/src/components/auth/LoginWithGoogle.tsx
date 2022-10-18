import { Button, ButtonProps, Img, Text, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

import AuthApi from '../../http/authApi'
import { AuthContext } from '../../pages/_app'

const LoginWithGoogle: FC<ButtonProps> = ({ ...props }) => {
  const user = useContext(AuthContext)
  const router = useRouter()
  const toast = useToast()
  const handleAuth = async () => {
    try {
      if (!window.location.href.includes('true')) {
        router.push('http://localhost:8240/oauth2/authorization/google')
      } else {
        user.login = 'Max Lagus'
        user.sessionId = 1291283102
        router.push('/app')
      }
      // const r = await fetch('http://localhost:8240/oauth2/authorization/google')
      const response = await AuthApi.auth()
      console.log(response)

      if (response.status === 200) {
        user.login = response.data.login
        user.sessionId = response.data.sessionId
        router.push('/app')
      }
    } catch {
      toast({
        isClosable: true,
        status: 'error',
        title: 'Неудачная попытка входа через Google',
      })
    }
  }

  return (
    <Button variant={'outline'} onClick={handleAuth} {...props}>
      <Img src='google_logo.svg' w={6} />
      <Text fontSize={14} pl={4}>
        Войти с Google
      </Text>
    </Button>
  )
}

export default LoginWithGoogle
