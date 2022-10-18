import {
  Center,
  Container,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

import AnalogClock from '../components/AnalogClock'
import { AuthContext } from './_app'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import { useContext } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const user = useContext(AuthContext)
  const router = useRouter()
  if (typeof window !== 'undefined' && user.login != undefined) {
    router.push('/app')
  }
  return (
    <Container maxW='container.lg'>
      <Grid templateColumns={'1fr 1fr'} gap={6}>
        <GridItem w='100%'>
          <Center h={'100%'} flexDirection={'column'} gap={4}>
            <AnalogClock />
          </Center>
        </GridItem>
        <GridItem w='100%'>
          <Tabs isFitted variant='enclosed' isLazy>
            <TabList>
              <Tab>Логин</Tab>
              <Tab>Регистрация</Tab>
            </TabList>
            <TabPanels>
              <TabPanel as={Center}>
                <LoginForm />
              </TabPanel>
              <TabPanel as={Center}>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Index
