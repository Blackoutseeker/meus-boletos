import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '500', '700']
})

export const metadata: Metadata = {
  title: 'Meus Boletos',
  description: 'Um site para gerenciar meus boletos de forma simples e rápida.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
