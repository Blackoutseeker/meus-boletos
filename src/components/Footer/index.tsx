'use client'

import type { FC } from 'react'
import { useState } from 'react'
import { useAppSelector } from '@/src/hooks/redux'
import { IoAddSharp } from 'react-icons/io5'
import AddModal from './AddModal'

const Footer: FC = () => {
  const { isLoggedIn } = useAppSelector(state => state.loginReducer)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const changeIsOpenState = () => {
    setIsOpen(!isOpen)
  }

  if (isLoggedIn) {
    return (
      <>
        <div className="flex flex-grow" />
        <footer className="bg-dark-900 sticky bottom-0 flex w-full items-center justify-end p-10">
          <button
            className="cursor-pointer rounded-full bg-green-500 p-5 duration-150 hover:bg-green-400"
            onClick={changeIsOpenState}
          >
            <IoAddSharp color="black" size={20} />
          </button>
        </footer>

        {isOpen && <AddModal onClose={changeIsOpenState} />}
      </>
    )
  }

  return <div className="py-5" />
}

export default Footer
