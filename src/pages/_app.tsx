import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { store, persistor } from '../store/index'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
