import {
  Center,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

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
  return (
    <Center>
      {hits ? (
        <TableContainer width={'50%'}>
          <Table variant={'striped'} colorScheme={'blue'}>
            <Thead>
              <Tr>
                <Th isNumeric>X</Th>
                <Th isNumeric>Y</Th>
                <Th isNumeric>R</Th>
                <Th>Результат</Th>
              </Tr>
            </Thead>
            <Tbody>
              {hits.map((hit, ind) => {
                return (
                  <Tr key={ind}>
                    <Td isNumeric>{hit.x}</Td>
                    <Td isNumeric>{hit.y}</Td>
                    <Td isNumeric>{hit.r}</Td>
                    <Td isNumeric>{hit.result}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text>Нет данных</Text>
      )}
    </Center>
  )
}

export default DotsTable
