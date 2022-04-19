import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'
import AppLayout from '../components/AppLayout'
import { GlobalProvider } from 'provider/GlobalProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MyApp
