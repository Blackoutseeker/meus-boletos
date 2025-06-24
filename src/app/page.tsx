import type { NextPage } from 'next'
import type { Document } from '@/src/models/document'
import { getDocuments } from '@/src/database/document'
import StoreProvider from './StoreProvider'
import Header from '../components/Header'
import DocumentList from '../components/DocumentList'
import Footer from '../components/Footer'

const Home: NextPage = async () => {
  const initialDocuments: Document[] = await getDocuments()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <StoreProvider>
        <Header />
        <div className="flex w-full items-center justify-center px-5">
          {initialDocuments.length > 0 && (
            <DocumentList initialDocuments={initialDocuments} />
          )}
          {initialDocuments.length === 0 && (
            <h2 className="text-xl font-bold">Nenhum documento encontrado.</h2>
          )}
        </div>
        <Footer />
      </StoreProvider>
    </main>
  )
}

export default Home
