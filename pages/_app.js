import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'

const theme = {
  colors: {
    primary: '#fdfbd2',
  },
}

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fdfbd2;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
