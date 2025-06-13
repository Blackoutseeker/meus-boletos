import type { FC } from 'react'
import { IoAddSharp } from 'react-icons/io5'

const Footer: FC = () => {
  return (
    <footer className="bg-dark-900 sticky bottom-0 flex w-full items-center justify-end p-10">
      <button className="cursor-pointer rounded-full bg-green-500 p-5 duration-150 hover:bg-green-400">
        <IoAddSharp color="black" size={20} />
      </button>
    </footer>
  )
}

export default Footer
