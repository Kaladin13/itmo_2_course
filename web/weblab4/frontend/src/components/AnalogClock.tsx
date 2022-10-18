import 'moment/locale/ru'
import 'react-clock/dist/Clock.css'

import { Box, Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

import Clock from 'react-clock'
import moment from 'moment'

const AnalogClock: FC = () => {
  const [value, setValue] = useState(new Date())
  moment.locale('ru')
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Clock value={value} />
      <Box textAlign={'center'}>
        <Text>{moment(value).format('hh:mm:ss')}</Text>
        <Text>{moment(value).format('LL')}</Text>
      </Box>
    </>
  )
}

export default AnalogClock
