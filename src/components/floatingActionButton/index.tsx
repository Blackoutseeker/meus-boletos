import { FC, useCallback, memo } from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'
import { ActionButton, Icon } from './style'
import Plus from '../../assets/images/plus.svg'

interface IProps {
  setAddModal: (setValue: boolean) => void
  setLoginModal: (setValue: boolean) => void
}

const FloatingActionButton: FC<IProps> = props => {
  const { setAddModal, setLoginModal } = props
  const isLogged: boolean = useSelector((state: IStore) => state.isLogged)

  const handleClick = useCallback((): void => {
    isLogged ? setAddModal(true) : setLoginModal(true)
  }, [isLogged, setAddModal, setLoginModal])

  return (
    <ActionButton onClick={handleClick}>
      <Icon src={Plus} alt={'Add'} />
    </ActionButton>
  )
}

export default memo(FloatingActionButton)
