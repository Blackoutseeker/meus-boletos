'use client'

import type { FC, FormEvent } from 'react'
import { useRef, useState, useCallback, useEffect, memo, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useAppDispatch } from '@/src/hooks/redux'
import { addDocument } from '@/src/store/reducers/document'
import { expirationDateRegex } from '@/src/utils/regex'
import { HiUpload } from 'react-icons/hi'
import type { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone'

interface AddModalProps {
  onClose: () => void
}

const AddModal: FC<AddModalProps> = ({ onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [expirationDate, setExpirationDate] = useState<string>('')
  const [uploading, setUploading] = useState<boolean>(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFile(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const dispatch = useAppDispatch()

  const submit = async (event: FormEvent) => {
    event.preventDefault()

    setUploading(true)
    let expirationDateFormatted: string = expirationDate
    if (expirationDate) {
      expirationDateFormatted = expirationDate.replace(/-/g, '/')
      const [year, month, day] = expirationDateFormatted.split('/')
      expirationDateFormatted = `${day}/${month}/${year}`
    }

    const formData: FormData = new FormData()
    formData.append('title', name)
    formData.append('password', password)
    formData.append('expirationDate', expirationDateFormatted)
    if (file) {
      formData.append('file', file)
    }

    const response = await fetch('/api/documents', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })

    if (response.status === 200) {
      const { document } = await response.json()
      dispatch(addDocument(document))
      onClose()
    }
  }

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

  const isDisabled: boolean =
    !file || name.length <= 0 || password.length < 4 || uploading

  return (
    <dialog
      ref={dialogRef}
      className="fixed flex min-h-screen min-w-screen items-center justify-center bg-black/70 px-5 text-white"
    >
      <form
        className="bg-dark-800 flex w-96 flex-col items-center justify-center space-y-5 rounded-lg p-5"
        onSubmit={submit}
      >
        <h2 className="text-xl font-bold">Adicionar documento</h2>
        {file && (
          <DocumentPreview
            file={file}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
          />
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
                accept: '.pdf',
                multiple: false
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
          minLength={4}
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
          className={`disabled:bg-dark-100 flex w-full cursor-pointer items-center justify-center space-x-5 rounded-md bg-green-500 p-3 text-lg font-bold text-black duration-150 hover:bg-green-400 disabled:cursor-default disabled:text-white/25 ${uploading ? 'animate-pulse' : ''}`}
          disabled={isDisabled}
        >
          {uploading && <span>Enviando...</span>}
          {!uploading && (
            <>
              <span>Adicionar</span>
              <HiUpload size={20} />
            </>
          )}
        </button>
      </form>
    </dialog>
  )
}

const DocumentPreview = memo(
  ({
    file,
    getRootProps,
    getInputProps
  }: {
    file: File
    getRootProps: <T extends DropzoneRootProps>(props?: T) => T
    getInputProps: <T extends DropzoneInputProps>(props?: T) => T
  }) => {
    const fileUrl: string = useMemo(() => URL.createObjectURL(file), [file])

    return (
      <div
        className="border-dark-100 relative flex w-full cursor-pointer justify-center rounded-md border border-dashed p-5"
        {...getRootProps()}
      >
        <input
          type="file"
          {...getInputProps({
            accept: '.pdf',
            multiple: false
          })}
        />
        <iframe
          className="pointer-events-none overflow-hidden"
          src={fileUrl}
          width={140}
          height={200}
          tabIndex={-1}
        />
        <div className="absolute inset-0 z-10" aria-hidden="true" />
      </div>
    )
  }
)

export default AddModal
