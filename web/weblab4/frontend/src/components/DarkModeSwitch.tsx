import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label='Toggle Theme'
      colorScheme='blue'
      onClick={toggleColorMode}
    />
  )
}
