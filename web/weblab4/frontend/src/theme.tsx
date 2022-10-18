import { extendTheme } from '@chakra-ui/react'

// eslint-disable-next-line quotes
const fonts = { mono: "'Menlo', monospace" }

const breakpoints = {
  lg: '64em',
  md: '52em',
  sm: '40em',
  xl: '80em',
}

const theme = extendTheme({
  fonts,

  semanticTokens: {
    breakpoints,
    colors: {
      black: '#16161D',
      heroGradientEnd: {
        _dark: '#fbec8f',
        default: '#FF0080',
      },
      heroGradientStart: {
        _dark: '#e3a7f9',
        default: '#7928CA',
      },
      text: {
        _dark: '#ade3b8',
        default: '#16161D',
      },
    },
    radii: {
      button: '12px',
    },
  },
})

export default theme
