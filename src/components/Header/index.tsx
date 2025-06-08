import type { FC } from 'react'
import { FaUser } from 'react-icons/fa6'
import './styles.css'

const Header: FC = () => {
  return (
    <header className="header">
      <button className="login-button">
        <span className="font-bold">Entrar</span>
        <FaUser color="white" size={16} />
      </button>
    </header>
  )
}

export default Header
