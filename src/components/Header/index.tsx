import type { FC } from 'react'
import LoginButton from './LoginButton'

const Header: FC = () => {
  return (
    <header className="bg-dark-900 sticky top-0 flex w-full items-center justify-center py-10 md:justify-end md:px-10">
      <LoginButton />
    </header>
  )
}

export default Header
