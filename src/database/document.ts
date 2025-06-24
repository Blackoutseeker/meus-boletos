import type { Document } from '@/src/models/document'
import { database } from '@/src/utils/firebase'
import { ref, get, push } from 'firebase/database'

export const getDocuments = async (): Promise<Document[]> => {
  const documents: Document[] = []
  const documentsRef = ref(database, 'documents')
  const snapshot = (await get(documentsRef)).val()

  if (snapshot) {
    Object.keys(snapshot).forEach(key => {
      const document = snapshot[key] as Document
      document.id = key
      delete document.password
      delete document.downloadUrl
      documents.push(document)
    })
  }

  return documents
}

export const pushDocument = async (
  title: string,
  password: string,
  downloadUrl: string,
  expirationDate?: string
): Promise<string> => {
  const documentsRef = ref(database, 'documents')
  const document = {
    title,
    password,
    downloadUrl,
    expirationDate
  }

  if (!expirationDate) {
    delete document.expirationDate
  }

  return push(documentsRef, document).key
}
