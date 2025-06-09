import type { FC } from 'react'
import { FaUser } from 'react-icons/fa6'

const Header: FC = () => {
  return (
    <header className="bg-dark-900 sticky top-0 flex w-full items-center justify-center py-10 md:justify-end md:px-10">
      <button className="bg-dark-800 hover:bg-dark-300 flex cursor-pointer space-x-5 rounded-full px-5 py-3 duration-150">
        <span className="font-bold">Entrar</span>
        <FaUser color="white" size={16} />
      </button>
    </header>
  )
}

export default Header
