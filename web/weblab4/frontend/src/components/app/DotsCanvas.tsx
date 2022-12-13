import { Center, Img, Text, useColorMode } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

interface DotsCanvasProps {
  r?: number
}

const DotsCanvas: FC<DotsCanvasProps> = () => {
  const { colorMode } = useColorMode()

  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: MouseEvent) => {
    setCoords({
      // @ts-ignore
      x: e.clientX - e.target.offsetLeft,
      // @ts-ignore
      y: e.clientY - e.target.offsetTop,
    })
  }
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (e: MouseEvent) => {
      setGlobalCoords({
        x: e.screenX,
        y: e.screenY,
      })
    }
    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  const handleCanvasClick = () => {}

  return (
    <>
      <Center
        // @ts-ignore
        onMouseMove={handleMouseMove}
        w={'100%'}
        h={'100%'}
        bg={'blue.500'}
        backgroundColor={'rgba(100,100,230, 0.2)'}
        border={'solid 1px rgba(100,100,230, 0.7)'}
        rounded={'xl'}
        onClick={handleCanvasClick}
      >
        {/* <canvas width={'100%'} height={'100%'}> */}
        <Img
          src={colorMode == 'dark' ? 'graph_light.svg' : 'graph_dark.svg'}
          width={300}
          height={'auto'}
        />
        {/* </canvas> */}
      </Center>
      <Text>
        Coords: {coords.x} {coords.y}
      </Text>
      <Text>
        Global coords: {globalCoords.x} {globalCoords.y}
      </Text>
    </>
  )
}

DotsCanvas.defaultProps = {
  r: 1,
}

export default DotsCanvas
