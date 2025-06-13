export type Document = {
  id: string
  title: string
  expirationDate?: string
  downloadUrl?: string
  password?: string
}

export type LocalDocument = Document & {
  fileName: string
}
