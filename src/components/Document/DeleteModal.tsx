import type { FC } from 'react'
import type { Document } from '@/src/models/document'
import { useRef, useCallback, useEffect, memo } from 'react'
import { useClickOutside } from '@/src/hooks/clickOutside'
import { useAppDispatch } from '@/src/hooks/redux'
import { removeDocument } from '@/src/store/reducers/document'

interface DeleteModalProps {
  document: Document
  onClose: () => void
}

const DeleteModal: FC<DeleteModalProps> = ({ document, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => {
    dialogRef.current?.close()
    onClose()
  }, [onClose])

  useClickOutside(cardRef, closeModal)

  const dispatch = useAppDispatch()

  const deleteDocument = async () => {
    const response = await fetch(`/api/documents/${document.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })

    if (response.status === 200) {
      dispatch(removeDocument(document))
      closeModal()
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()

    const handleCancel = (event: Event) => {
      event.preventDefault()
      closeModal()
    }

    dialog.addEventListener('cancel', handleCancel)

    return () => {
      dialog.removeEventListener('cancel', handleCancel)
    }
  }, [dialogRef, closeModal])

  return (
    <dialog
      ref={dialogRef}
      className="fixed flex min-h-screen min-w-screen items-center justify-center bg-black/70 px-5 text-white"
    >
      <div
        ref={cardRef}
        className="bg-dark-800 flex w-full max-w-[300px] flex-col items-center space-y-5 rounded-lg p-5"
      >
        <h2 className="text-xl font-bold">Tem certeza?</h2>
        <div className="flex space-x-5">
          <button
            className="border-dark-100 cursor-pointer rounded-md border px-10 py-3 uppercase duration-150 hover:bg-red-700"
            onClick={deleteDocument}
          >
            Sim
          </button>
          <button
            className="border-dark-100 hover:bg-dark-100 cursor-pointer rounded-md border px-10 py-3 uppercase duration-150"
            onClick={closeModal}
          >
            Não
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default memo(DeleteModal)
