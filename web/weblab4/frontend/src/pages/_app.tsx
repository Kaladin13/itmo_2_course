import { ChakraProvider, Text } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import { createContext } from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import theme from '../theme'
import { UserAuth } from '../store'

const user = new UserAuth()

export const AuthContext = createContext<UserAuth>(user)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header user={user} />
      <Component {...pageProps} />
      <Footer>
        <Text>Максим ❤️ TypeScript</Text>
      </Footer>
    </ChakraProvider>
  )
}

export default MyApp
