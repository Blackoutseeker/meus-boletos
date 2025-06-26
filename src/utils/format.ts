import { downloadIdRegex } from './regex'

export const extractDocumentIdFromUrl = (
  downloadUrl: string
): string | null => {
  const match = downloadUrl.match(downloadIdRegex)
  const id: string | null = match ? match[1] : null
  return id
}
