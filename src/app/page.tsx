import type { NextPage } from 'next'
import StoreProvider from './StoreProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <StoreProvider>
        <Header />
        <Footer />
      </StoreProvider>
    </main>
  )
}

export default Home
