import type { Document } from '@/src/models/document'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type DocumentState = {
  documents: Document[]
}

const initialState: DocumentState = {
  documents: []
}

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setDocuments: (state, action: PayloadAction<Document[]>) => {
      state.documents = action.payload
    },
    addDocument: (state, action: PayloadAction<Document>) => {
      state.documents.push(action.payload)
    },
    removeDocument: (state, action: PayloadAction<Document>) => {
      state.documents = state.documents.filter(
        document => document.id !== action.payload.id
      )
    }
  }
})

export const { setDocuments, addDocument, removeDocument } =
  documentSlice.actions
export const documentReducer = documentSlice.reducer
