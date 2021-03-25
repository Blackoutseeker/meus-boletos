import { FC, memo, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ILoginAction } from '../../store/reducers/login'
import { IStore } from '../../store'
import { LoginContent, LoginText, LoggedContent, Icon } from './style'
import User from '../../assets/images/user.svg'
import firebase from '../../services/firebase'

interface IProps {
  setLoginModal: (setValue: boolean) => void
}

const LoginButton: FC<IProps> = props => {
  const { setLoginModal } = props
  const dispatch = useDispatch()
  const isLogged: boolean = useSelector((state: IStore) => state.isLogged)

  const loadUser = useCallback((): string | null => {
    const logged = localStorage.getItem('isLogged')
    return logged
  }, [])

  useEffect(() => {
    const logged = loadUser()
    if (logged) {
      dispatch<ILoginAction>({ type: 'LOGIN' })
    }
  }, [loadUser, dispatch])

  const handleLogout = useCallback(async (): Promise<void> => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch<ILoginAction>({ type: 'LOGOUT' })
      })
  }, [dispatch])

  const handleLogin = useCallback(() => {
    setLoginModal(true)
  }, [setLoginModal])

  if (isLogged) {
    return (
      <LoggedContent onClick={handleLogout}>
        <Icon src={User} alt={'User'} />
      </LoggedContent>
    )
  } else {
    return (
      <LoginContent onClick={handleLogin}>
        <LoginText>Entrar</LoginText>
        <Icon src={User} alt={'User'} />
      </LoginContent>
    )
  }
}

export default memo(LoginButton)
