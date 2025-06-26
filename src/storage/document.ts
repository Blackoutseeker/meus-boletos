import { storage } from '@/src/utils/firebase'
import type { StorageReference } from 'firebase/storage'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'

export const uploadDocument = async (
  id: string,
  document: File
): Promise<string> => {
  const documentReference: StorageReference = ref(
    storage,
    `documents/${id}.pdf`
  )
  await uploadBytes(documentReference, document, {
    contentType: 'application/pdf'
  })
  const downloadUrl: string = await getDownloadURL(documentReference)
  return downloadUrl
}

export const deleteDocument = async (id: string): Promise<void> => {
  const documentReference: StorageReference = ref(
    storage,
    `documents/${id}.pdf`
  )
  await deleteObject(documentReference)
}
