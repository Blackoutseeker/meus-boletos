import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducers/login'
import { documentReducer } from './reducers/document'

export const store = configureStore({
  reducer: {
    loginReducer,
    documentReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
