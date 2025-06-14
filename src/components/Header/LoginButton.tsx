'use client'

import type { FC } from 'react'
import { FaUser } from 'react-icons/fa6'

const LoginButton: FC = () => {
  return (
    <button className="bg-dark-800 hover:bg-dark-300 flex cursor-pointer items-center space-x-5 rounded-full px-5 py-3 duration-150">
      <span className="font-bold">Entrar</span>
      <FaUser color="white" size={16} />
    </button>
  )
}

export default LoginButton
