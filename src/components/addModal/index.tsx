import { FC, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { IItem } from '../../database/interfaces'
import { IItemsAction } from '../../store/reducers/items'
import OutsideClickHandler from 'react-outside-click-handler'
import DropZone from 'react-dropzone'
import { CircularProgressbar } from 'react-circular-progressbar'
import ModalHolder from '../modalHolder'
import {
  AddModalContent,
  AddText,
  Input,
  HideInput,
  FileInput,
  ButtonContent,
  AddButton,
  AddButtonText
} from './style'
import firebase from '../../services/firebase'

interface IProps {
  addModal: boolean
  setAddModal: (setValue: boolean) => void
}

const AddModal: FC<IProps> = props => {
  const { addModal, setAddModal } = props
  const dispatch = useDispatch()
  const [fileText, setFileText] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [validity, setValidity] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)
  const [percentage, setPercentage] = useState<number>(0)

  const dismissModal = useCallback((): void => {
    setAddModal(false)
    setFileText('')
    setValidity('')
  }, [setAddModal])

  const setItemOnDatabase = useCallback(
    async (downloadUrl: string): Promise<void> => {
      const itemId = Math.floor(Math.random() * 7000000).toString()
      const item: IItem = {
        title: title,
        validity: validity,
        downloadUrl: downloadUrl,
        fileName: file!.name,
        id: itemId
      }
      await firebase
        .database()
        .ref(`/${itemId}`)
        .set(item)
        .then(() => {
          setUploading(false)
          dispatch<IItemsAction>({
            type: 'ADD_SINGLE',
            payload: { item: item }
          })
          dismissModal()
        })
    },
    [title, validity, file, dismissModal, dispatch]
  )

  const upload = useCallback((): void => {
    if (file !== null && title.length > 0 && validity.length > 0) {
      setUploading(true)
      const storageRef = firebase.storage().ref(`files/${file?.name}`)
      const task = storageRef.put(file!)
      task.on(
        'state_changed',
        snapshot => {
          setPercentage((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        },
        null,
        async () => {
          setItemOnDatabase(await storageRef.getDownloadURL())
        }
      )
    }
  }, [file, title, validity, setItemOnDatabase])

  const handleOnKeyDown = useCallback(
    (key: string): void => {
      if (key === 'Enter') {
        upload()
      }
    },
    [upload]
  )

  const handleTextChange = useCallback(
    (value: string, type: string, file?: File): void => {
      if (type === 'file') {
        setFileText(value)
        setFile(file!)
      } else if (type === 'title') {
        setTitle(value)
      } else if (type === 'validity') {
        setValidity(value)
      }
    },
    []
  )

  const handleOnDrop = useCallback(async (file: File): Promise<void> => {
    setFileText(file.name)
    setFile(file)
  }, [])

  if (addModal) {
    return (
      <ModalHolder>
        <OutsideClickHandler
          onOutsideClick={!uploading ? dismissModal : () => {}}
        >
          <AddModalContent>
            <AddText>Adicionar Boleto</AddText>
            <DropZone
              accept={'application/pdf'}
              onDropAccepted={files => {
                handleOnDrop(files![0])
              }}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <>
                  <FileInput
                    placeholder={`${
                      !isDragActive
                        ? 'Arraste um arquivo aqui!'
                        : 'Solte o arquivo!'
                    }`}
                    type={'text'}
                    readOnly
                    value={fileText}
                    {...getRootProps()}
                    isDragActive={isDragActive}
                  />
                  <HideInput
                    {...getInputProps()}
                    type={'file'}
                    onChange={({ target }) => {
                      handleTextChange(target.value, 'file', target.files![0])
                    }}
                  />
                </>
              )}
            </DropZone>
            <Input
              placeholder={'Título'}
              type={'text'}
              onKeyDown={({ key }) => {
                handleOnKeyDown(key)
              }}
              onChange={({ target }) => {
                handleTextChange(target.value, 'title')
              }}
            />
            <Input
              placeholder={'Validade'}
              type={'text'}
              onKeyDown={({ key }) => {
                handleOnKeyDown(key)
              }}
              onChange={({ target }) => {
                handleTextChange(target.value, 'validity')
              }}
            />
            <ButtonContent>
              <AddButton onClick={!uploading ? upload : () => {}}>
                <AddButtonText>
                  {uploading ? (
                    <CircularProgressbar
                      styles={{
                        root: { width: 25, paddingTop: 5 },
                        path: { stroke: '#fff' }
                      }}
                      strokeWidth={12}
                      value={percentage}
                    />
                  ) : (
                    'Adicionar'
                  )}
                </AddButtonText>
              </AddButton>
            </ButtonContent>
          </AddModalContent>
        </OutsideClickHandler>
      </ModalHolder>
    )
  } else {
    return <></>
  }
}

export default AddModal
