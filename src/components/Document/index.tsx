import type { FC } from 'react'
import type { Document } from '@/src/models/document'
import InputContainer from './InputContainer'

interface DocumentCardProps {
  document: Document
}

const DocumentCard: FC<DocumentCardProps> = ({ document }) => {
  return (
    <li className="border-dark-100 flex min-h-[240px] w-full max-w-[360px] min-w-[240px] flex-col space-y-5 rounded-lg border p-5">
      <h2 className="text-xl">{document.title}</h2>
      <div className="flex-grow" />
      {document.expirationDate && (
        <p className="text-sm text-white/70">
          Vencimento: {document.expirationDate}
        </p>
      )}
      <div className="flex space-x-2">
        <InputContainer document={document} />
      </div>
    </li>
  )
}

export default DocumentCard
