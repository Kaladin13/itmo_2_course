import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import LoginWithGoogle from './LoginWithGoogle'

const LoginWithForm: FC = () => {
  return (
    <Box mb={4}>
      <LoginWithGoogle w={'100%'} />
    </Box>
  )
}

export default LoginWithForm
