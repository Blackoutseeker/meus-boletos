import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer, WebStorage } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import LoginReducer from './reducers/login'
import ItemsReducer from './reducers/items'
import { IItem } from '../database/interfaces'

export interface IStore {
  isLogged: boolean
  items: IItem[]
}

interface IPersistConfig {
  key: string
  storage: WebStorage
  whitelist: string[]
  blacklist?: string[]
}

const rootReducer = combineReducers<IStore>({
  isLogged: LoginReducer,
  items: ItemsReducer
})

const persistConfig: IPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['isLogged'],
  blacklist: ['items']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
