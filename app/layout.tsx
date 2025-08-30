import type { ReactNode } from 'react'
import './globals.css'
import { Syne, Unica_One } from 'next/font/google'

const unicaOne = Unica_One({
  subsets: ['latin'],
  variable: '--font-unica-one',
  weight: '400',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: '400',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${unicaOne.variable} ${syne.variable} antialiased`}>{children}</body>
    </html>
  )
}
