'use client'

import type { FC, FormEvent } from 'react'
import type { Document } from '@/src/models/document'
import { useAppSelector } from '@/src/hooks/redux'
import { useState, useRef, useCallback, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import DeleteModal from './DeleteModal'
import { useClickOutside } from '@/src/hooks/clickOutside'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'

interface InputContainerProps {
  document: Document
}

const InputContainer: FC<InputContainerProps> = ({ document }) => {
  const isAuthenticated = useAppSelector(state => state.loginReducer.isLoggedIn)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)

  const changeDeleteModalState = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen)
  }

  return (
    <>
      <SwitchInput document={document} />
      {isAuthenticated && (
        <>
          <button
            className="flex w-fit cursor-pointer items-center justify-center space-x-5 rounded-md bg-red-800 px-4 py-3 duration-150 hover:bg-red-700"
            onClick={changeDeleteModalState}
          >
            <FaTrash size={16} />
          </button>
          {isDeleteModalOpen && (
            <DeleteModal document={document} onClose={changeDeleteModalState} />
          )}
        </>
      )}
    </>
  )
}

interface SwitchInputProps {
  document: Document
}

const SwitchInput: FC<SwitchInputProps> = ({ document }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState<boolean>(false)

  const closeInput = useCallback(() => {
    if (!downloadUrl) {
      setIsAuthenticating(false)
      setPassword('')
      setDownloadUrl(null)
      setIsPasswordIncorrect(false)
    }
  }, [downloadUrl])

  useClickOutside(formRef, closeInput)

  const getDownloadUrl = async () => {
    const formData: FormData = new FormData()
    formData.append('password', password)
    setPassword('')

    const response = await fetch(`/api/documents/${document.id}`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })

    if (response.status === 200) {
      const { downloadUrl } = await response.json()
      setDownloadUrl(downloadUrl)
      setIsAuthenticating(false)
      return
    }

    setIsPasswordIncorrect(true)
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (downloadUrl) {
      window.open(downloadUrl, '_blank')
      return
    }

    setIsAuthenticating(true)
    if (password.length >= 4) {
      await getDownloadUrl()
    }
  }

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const handleCancel = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !downloadUrl) {
        closeInput()
      }
    }

    form.addEventListener('keydown', handleCancel)

    return () => {
      form.removeEventListener('keydown', handleCancel)
    }
  }, [closeInput, downloadUrl])

  return (
    <form ref={formRef} className="max-h-fit w-full" onSubmit={onSubmit}>
      {isAuthenticating && !downloadUrl && (
        <input
          className={`flex w-full rounded-md border p-3 ${isPasswordIncorrect ? 'border-red-500 outline-red-500 placeholder:text-red-400' : 'border-dark-100'}`}
          placeholder={isPasswordIncorrect ? 'Senha incorreta' : 'Senha'}
          minLength={4}
          autoFocus
          required
          value={password}
          onChange={({ target }) => {
            setPassword(target.value)
          }}
        />
      )}
      {!isAuthenticating && !downloadUrl && (
        <button
          className="bg-dark-500 hover:bg-dark-100 flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md p-3 duration-150"
          type="submit"
        >
          <span className="uppercase">Download</span>
          <HiDownload size={24} />
        </button>
      )}
      {downloadUrl && (
        <Link
          className="flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md bg-green-500 p-3 text-black duration-150 hover:bg-green-400"
          href={downloadUrl}
          target="_blank"
        >
          <span className="uppercase">Download</span>
          <HiDownload size={24} />
        </Link>
      )}
    </form>
  )
}

export default InputContainer
