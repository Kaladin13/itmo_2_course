import { Box, Center, Spinner, Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

import Api from '../../http/api'
import { Hit } from '../../models/Hit'

const DotsTable = () => {
  const [hits, setHits] = useState<Hit[]>([])

  const fetchHits = async () => {
    try {
      const fetchedHits = await Api.getAllHits('Maksim')
      setHits(fetchedHits.data)
    } catch {
      console.log()
    }
  }

  useEffect(() => {
    fetchHits()
  }, [])

  if (!hits) {
    return (
      <Center h={100} w={'100%'}>
        <Spinner colorScheme={'blue'} />
      </Center>
    )
  }
  return <Box>{hits ? <Text></Text> : <Text>Нет данных</Text>}</Box>
}

export default DotsTable
