import type { FC } from 'react'
import type { Document } from '@/src/models/document'
import { HiDownload } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'

interface DocumentCardProps {
  document: Document
}

const DocumentCard: FC<DocumentCardProps> = ({ document }) => {
  const isAuthenticated: boolean = true

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
        <button className="bg-dark-500 hover:bg-dark-100 flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md p-3 duration-150">
          <span className="uppercase">Download</span>
          <HiDownload size={24} />
        </button>
        {isAuthenticated && (
          <button className="flex w-full cursor-pointer items-center justify-center space-x-5 rounded-md bg-red-800 px-4 py-3 duration-150 hover:bg-red-700">
            <FaTrash size={16} />
          </button>
        )}
      </div>
    </li>
  )
}

export default DocumentCard
