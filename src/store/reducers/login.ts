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
      localStorage.setItem('isLogged', 'true')
      return true
    case 'LOGOUT':
      localStorage.removeItem('isLogged')
      return false
    default:
      return state
  }
}

export default LoginReducer
