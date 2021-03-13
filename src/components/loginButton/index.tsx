import { FC, memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ILoginAction } from '../../store/reducers/login'
import { IStore } from '../../store'
import { LoginContent, LoginText, LoggedContent } from './style'
import User from '../../assets/images/user.svg'
import firebase from '../../services/firebase'

interface IProps {
  setLoginModal: (setValue: boolean) => void
}

const LoginButton: FC<IProps> = props => {
  const { setLoginModal } = props
  const dispatch = useDispatch()
  const isLogged: boolean = useSelector((state: IStore) => state.isLogged)

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
        <img src={User} height={20} />
      </LoggedContent>
    )
  } else {
    return (
      <LoginContent onClick={handleLogin}>
        <LoginText>Entrar</LoginText>
        <img src={User} height={20} />
      </LoginContent>
    )
  }
}

export default memo(LoginButton)
