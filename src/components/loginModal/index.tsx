import { FC, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ILoginAction } from '../../store/reducers/login'
import OutsideClickHandler from 'react-outside-click-handler'
import ModalHolder from '../modalHolder'
import {
  LoginModalContent,
  LoginText,
  TextInput,
  ButtonContent,
  LoginButton,
  LoginButtonText,
  ErrorMessage
} from './style'
import firebase from '../../services/firebase'

interface IProps {
  loginModal: boolean
  setLoginModal: (setValue: boolean) => void
}

const LoginModal: FC<IProps> = props => {
  const { loginModal, setLoginModal } = props
  const dispatch = useDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const dismissModal = useCallback((): void => {
    setLoginModal(false)
    setError(false)
    setEmail('')
    setPassword('')
  }, [setLoginModal])

  const handleLogin = useCallback(async (): Promise<void> => {
    if (email.length > 0 && password.length > 0) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch<ILoginAction>({ type: 'LOGIN' })
          dismissModal()
        })
        .catch(() => {
          setError(true)
        })
    }
  }, [email, password, dismissModal, dispatch])

  const handleTextChange = useCallback((value: string, type: string): void => {
    if (type === 'email') {
      setEmail(value)
    } else if (type === 'password') {
      setPassword(value)
    }
  }, [])

  const handleOnKeyDown = useCallback(
    (key: string): void => {
      if (key === 'Enter') {
        handleLogin()
      }
    },
    [handleLogin]
  )

  if (loginModal) {
    return (
      <ModalHolder>
        <OutsideClickHandler onOutsideClick={dismissModal}>
          <LoginModalContent>
            <LoginText>Login</LoginText>
            <TextInput
              placeholder={'Email'}
              type={'email'}
              onKeyDown={({ key }) => {
                handleOnKeyDown(key)
              }}
              onChange={({ target }) => {
                handleTextChange(target.value, 'email')
              }}
            />
            <TextInput
              placeholder={'Password'}
              type={'password'}
              onKeyDown={({ key }) => {
                handleOnKeyDown(key)
              }}
              onChange={({ target }) => {
                handleTextChange(target.value, 'password')
              }}
            />
            {error ? (
              <ErrorMessage>* Você não deve usar este site...</ErrorMessage>
            ) : null}
            <ButtonContent>
              <LoginButton onClick={handleLogin}>
                <LoginButtonText>Logar</LoginButtonText>
              </LoginButton>
            </ButtonContent>
          </LoginModalContent>
        </OutsideClickHandler>
      </ModalHolder>
    )
  } else {
    return <></>
  }
}

export default LoginModal
