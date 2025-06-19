'use client'

import type { FC } from 'react'
import { useRef, useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { expirationDateRegex } from '@/src/utils/regex'
import { HiUpload } from 'react-icons/hi'

interface AddModalProps {
  onClose: () => void
}

const AddModal: FC<AddModalProps> = ({ onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [expirationDate, setExpirationDate] = useState<string>('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFile(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }

    const handleCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (dialog && e.target === dialog) {
        onClose()
      }
    }

    dialog.addEventListener('cancel', handleCancel)
    dialog.addEventListener('click', handleClickOutside)

    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      dialog.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className="fixed flex min-h-screen min-w-screen items-center justify-center bg-black/70 px-5 text-white"
    >
      <form className="bg-dark-800 flex w-96 flex-col items-center justify-center space-y-5 rounded-lg p-5">
        <h2 className="text-xl font-bold">Adicionar documento</h2>
        {file && (
          <div className="border-dark-100 flex w-full justify-center rounded-md border border-dashed p-5">
            <iframe src={URL.createObjectURL(file)} width={140} height={200} />
          </div>
        )}
        {!file && (
          <div
            className={`${isDragActive ? 'border-green-500' : 'border-dark-100'} flex w-full cursor-pointer justify-center rounded-md border border-dashed p-3`}
            {...getRootProps()}
          >
            <input
              type="file"
              required
              {...getInputProps({
                accept: '.pdf'
              })}
            />
            {isDragActive ? (
              <p>Solte o arquivo aqui*</p>
            ) : (
              <p>Clique ou arraste o arquivo aqui*</p>
            )}
          </div>
        )}
        <input
          className="border-dark-100 w-full rounded-md border p-3"
          type="text"
          placeholder="Nome*"
          value={name}
          onChange={event => {
            setName(event.target.value)
          }}
          required
        />
        <input
          className="border-dark-100 w-full rounded-md border p-3"
          type="text"
          placeholder="Senha*"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
          required
        />
        <input
          className="border-dark-100 w-full rounded-md border p-3"
          type="date"
          value={expirationDate}
          onChange={event => {
            setExpirationDate(event.target.value)
          }}
          pattern={expirationDateRegex.source}
        />
        <button
          type="submit"
          className="disabled:bg-dark-100 flex w-full cursor-pointer items-center justify-center space-x-5 rounded-md bg-green-500 p-3 text-lg font-bold text-black duration-150 hover:bg-green-400 disabled:cursor-default disabled:text-white/25"
          disabled={false}
        >
          <span>Adicionar</span>
          <HiUpload size={20} />
        </button>
      </form>
    </dialog>
  )
}

export default AddModal
