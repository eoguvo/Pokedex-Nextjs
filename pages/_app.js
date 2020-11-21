import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'

const theme = {
  colors: {
    primary: '#fff',
  },
}

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f5fe;
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
