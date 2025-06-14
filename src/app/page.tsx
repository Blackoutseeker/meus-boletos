import type { NextPage } from 'next'
import StoreProvider from './StoreProvider'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <StoreProvider>
        <Header />
      </StoreProvider>
    </main>
  )
}

export default Home
