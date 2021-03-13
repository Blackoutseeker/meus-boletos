import { IItem } from '../../database/interfaces'
const INITAL_STATE: IItem[] = []

export interface IItemReducer {
  items: IItem[]
}

export interface IItemsAction {
  type: 'ADD_SINGLE' | 'ADD_MULTI' | 'REMOVE'
  payload: {
    item?: IItem
    itemsList?: IItem[]
    id?: string
  }
}

const ItemsReducer = (state: IItem[] = INITAL_STATE, action: IItemsAction) => {
  switch (action.type) {
    case 'ADD_SINGLE':
      return state.concat(action.payload.item!)
    case 'ADD_MULTI':
      return action.payload.itemsList!
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

export default ItemsReducer
