'use client'

import type { FC } from 'react'
import type { Document } from '@/src/models/document'
import { useAppSelector, useAppDispatch } from '@/src/hooks/redux'
import { useEffect } from 'react'
import { setDocuments } from '@/src/store/reducers/document'
import DocumentCard from '../Document'

interface DocumentListProps {
  initialDocuments: Document[]
}

const DocumentList: FC<DocumentListProps> = ({ initialDocuments }) => {
  const documents = useAppSelector(state => state.documentReducer.documents)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setDocuments(initialDocuments))
  }, [dispatch, initialDocuments])

  const renderDocuments = documents.map(document => (
    <DocumentCard key={document.id} document={document} />
  ))

  const getGridColumns = (): string => {
    if (documents.length === 1) {
      return ''
    } else if (documents.length === 2) {
      return 'sm:grid-cols-2'
    }

    return 'sm:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <ul className={`grid grid-flow-row grid-cols-1 gap-5 ${getGridColumns()}`}>
      {renderDocuments}
    </ul>
  )
}

export default DocumentList
