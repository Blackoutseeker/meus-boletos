const INITIAL_STATE: boolean = false

export interface ILoginReducer {
  isLogged: boolean
}

export interface ILoginAction {
  type: 'LOGIN' | 'LOGOUT'
}

const LoginReducer = (state: boolean = INITIAL_STATE, action: ILoginAction) => {
  switch (action.type) {
    case 'LOGIN':
      return true
    case 'LOGOUT':
      return false
    default:
      return state
  }
}

export default LoginReducer
