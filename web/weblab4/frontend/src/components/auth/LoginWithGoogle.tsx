import { Button, ButtonProps, Img, Text, useToast } from '@chakra-ui/react'
import { FC, useContext } from 'react'

import AuthApi from '../../http/authApi'
import { AuthContext } from '../../pages/_app'
import { useRouter } from 'next/router'

const LoginWithGoogle: FC<ButtonProps> = ({ ...props }) => {
  const user = useContext(AuthContext)
  const router = useRouter()
  const toast = useToast()
  const handleAuth = async () => {
    try {
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
