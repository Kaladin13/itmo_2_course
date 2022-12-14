import { Box, Center, Container, Grid, GridItem } from '@chakra-ui/react'
import { FC, useContext } from 'react'

import { AuthContext } from './_app'
import DotsCanvas from '../components/app/DotsCanvas'
import DotsForm from '../components/app/DotsForm'
import DotsTable from '../components/app/DotsTable'
import { useRouter } from 'next/router'

const App: FC = () => {
  const router = useRouter()
  const user = useContext(AuthContext)
  if (typeof window !== 'undefined' && user.login == undefined) {
    router.push('/')
  }
  if (user.login) {
    return (
      <Container maxW='container.xl'>
        <Grid
          templateColumns={'1fr 1fr'}
          templateAreas={`"canvas form"
      "table table"`}
          gap={10}
        >
          <GridItem area={'canvas'} as={Box}>
            <DotsCanvas />
          </GridItem>
          <GridItem area={'form'} as={Center}>
            <DotsForm />
          </GridItem>
          <GridItem area={'table'}>
            <DotsTable />
          </GridItem>
        </Grid>
      </Container>
    )
  }
}

export default App
