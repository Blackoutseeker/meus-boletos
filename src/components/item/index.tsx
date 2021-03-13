import { FC, memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from '../../store'
import { IItemsAction } from '../../store/reducers/items'
import { IItem } from '../../database/interfaces'
import {
  ItemContent,
  InfoContent,
  TitleContent,
  ValidityContent,
  TitleText,
  ValidityText,
  DownloadContent,
  DeleteButton
} from './style'
import FileDownload from '../../assets/images/file-download.svg'
import Trash from '../../assets/images/trash.svg'
import firebase from '../../services/firebase'

interface IProps extends IItem {
  setLoginModal: (setValue: boolean) => void
}

const Item: FC<IProps> = props => {
  const { title, validity, downloadUrl, fileName, id, setLoginModal } = props
  const dispatch = useDispatch()
  const isLogged = useSelector((state: IStore) => state.isLogged)

  const deleteItem = useCallback(async (): Promise<void> => {
    isLogged
      ? await firebase
          .storage()
          .ref(`files/${fileName}`)
          .delete()
          .then(async () => {
            await firebase
              .database()
              .ref(`/${id}`)
              .remove()
              .then(() => {
                dispatch<IItemsAction>({ type: 'REMOVE', payload: { id: id } })
              })
          })
      : setLoginModal(true)
  }, [id, fileName, isLogged, setLoginModal, dispatch])

  return (
    <>
      <ItemContent>
        <InfoContent>
          <TitleContent>
            <TitleText>{title}</TitleText>
          </TitleContent>
          <ValidityContent>
            <ValidityText>Validade: {validity}</ValidityText>
          </ValidityContent>
        </InfoContent>
        <a href={downloadUrl} target={'_blank'} rel={'noreferrer'}>
          <DownloadContent>
            <img src={FileDownload} height={25} />
          </DownloadContent>
        </a>
        <DeleteButton onClick={deleteItem}>
          <img src={Trash} height={25} />
        </DeleteButton>
      </ItemContent>
    </>
  )
}

export default memo(Item)
