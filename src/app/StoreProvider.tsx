'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import type { AppStore } from '@/src/store'
import { store } from '@/src/store'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }: { children: ReactNode[] }) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = store
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
