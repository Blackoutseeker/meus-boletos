'use client'

import type { FC } from 'react'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/src/hooks/redux'
import { loginSlice } from '@/src/store/reducers/login'
import { FaUser } from 'react-icons/fa6'
import { MdLogout } from 'react-icons/md'

const LoginButton: FC = () => {
  const [isTryingToLogin, setIsTryingToLogin] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const { isLoggedIn } = useAppSelector(state => state.loginReducer)
  const dispatch = useAppDispatch()
  const { changeState } = loginSlice.actions

  const changeIsTryingToLoginState = () => {
    setIsTryingToLogin(!isTryingToLogin)
  }

  const logIn = () => {
    if (password === process.env.AUTH_PASSWORD) {
      dispatch(changeState())
      setPassword('')
      setError(false)
      changeIsTryingToLoginState()
      return
    }
    setError(true)
  }

  const logOut = () => {
    dispatch(changeState())
  }

  const onClick = () => {
    if (!isTryingToLogin && !isLoggedIn) {
      changeIsTryingToLoginState()
      return
    }
    logOut()
  }

  if (isTryingToLogin) {
    return (
      <div className="flex flex-col space-y-3">
        <input
          autoFocus
          type="password"
          placeholder="Senha"
          className="border-dark-100 rounded border p-3 text-white placeholder:text-white/50"
          value={password}
          onChange={event => setPassword(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              logIn()
            }
          }}
        />
        {error && (
          <span className="text-sm text-red-500">
            Senha incorreta. Tente novamente.
          </span>
        )}
      </div>
    )
  }

  return (
    <button
      className="bg-dark-800 hover:bg-dark-300 flex cursor-pointer items-center space-x-5 rounded-full px-5 py-3 duration-150"
      onClick={onClick}
    >
      {!isLoggedIn && (
        <>
          <span className="font-bold">Entrar</span>
          <FaUser color="white" size={14} />
        </>
      )}
      {isLoggedIn && (
        <>
          <span className="font-bold">Sair</span>
          <MdLogout color="white" size={18} />
        </>
      )}
    </button>
  )
}

export default LoginButton
