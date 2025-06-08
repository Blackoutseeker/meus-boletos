import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
    </main>
  )
}

export default Home
