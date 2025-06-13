import { createSlice } from '@reduxjs/toolkit'

export type LoginState = {
  isLoggedIn: boolean
}

const initialState: LoginState = {
  isLoggedIn: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeState: state => {
      state.isLoggedIn = !state.isLoggedIn
    }
  }
})

export const { changeState } = loginSlice.actions
export const loginReducer = loginSlice.reducer
