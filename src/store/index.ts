import { createStore, combineReducers } from 'redux'
import LoginReducer from './reducers/login'
import ItemsReducer from './reducers/items'
import { IItem } from '../database/interfaces'

export interface IStore {
  isLogged: boolean
  items: IItem[]
}

const rootReducer = combineReducers<IStore>({
  isLogged: LoginReducer,
  items: ItemsReducer
})

export const store = createStore(rootReducer)
