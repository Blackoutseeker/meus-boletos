import type { Document } from '@/src/models/document'
import { database } from '@/src/utils/firebase'
import { ref, get } from 'firebase/database'

export const getDocuments = async (): Promise<Document[]> => {
  const documents: Document[] = []
  const documentsRef = ref(database, 'documents')
  const snapshot = (await get(documentsRef)).val()

  if (snapshot) {
    Object.keys(snapshot).forEach(key => {
      const document = snapshot[key] as Document
      document.id = key
      delete document.password
      documents.push(document)
    })
  }

  return documents
}
