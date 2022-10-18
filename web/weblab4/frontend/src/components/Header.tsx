import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Img,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import { Avatar } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { FC } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { UserAuth } from '../store'
import { useRouter } from 'next/router'

interface HeaderProps {
  user: UserAuth
}

const Header: FC<HeaderProps> = observer(({ user }) => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  return (
    <Flex p={4} justifyContent={'space-between'}>
      <Link href={'/'}>
        <Img
          cursor={'pointer'}
          _hover={{ opacity: 0.65 }}
          transition={'opacity 0.3s ease'}
          h={54}
          src={colorMode == 'dark' ? 'logo_light.png' : 'logo_dark.png'}
        />
      </Link>
      <Box textAlign={'center'}>
        <Text>Выполнил студент группы</Text>
        <Text>
          Лагус Максим <Badge colorScheme={'blue'}>P32081</Badge>
        </Text>
      </Box>
      {user.login && (
        <Center textAlign={'center'}>
          <Avatar name={user.login} />
          <Box pl={4}>
            <Text>{user.login}</Text>
            {user.sessionId && <Badge>{user.sessionId}</Badge>}
            <Button
              variant={'link'}
              color={'red'}
              onClick={() => {
                user.login = undefined
                user.sessionId = undefined
                router.push('/')
              }}
            >
              Выход
            </Button>
          </Box>
        </Center>
      )}
      <DarkModeSwitch />
    </Flex>
  )
})

export default Header
