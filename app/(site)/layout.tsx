import Link from 'next/link'
import type { ReactNode } from 'react'
import { FiBookmark, FiBookOpen, FiShoppingCart, FiUser } from 'react-icons/fi'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="tracking-wide flex items-center gap-2">
          <FiBookOpen className="w-5 h-5" />
          {'BookStore'.toUpperCase()}
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/wishlist" className="hover:underline">
            <FiBookmark className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="hover:underline">
            <FiShoppingCart className="w-5 h-5" />
          </Link>
          <Link href="/logout" className="hover:underline">
            <FiUser className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm text-gray-600">
        <span>BookStore Project</span>
        <div className="flex gap-3">
          <a className="hover:underline" href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a className="hover:underline" href="#" aria-label="GitHub">
            GitHub
          </a>
          <a className="hover:underline" href="#" aria-label="Docs">
            Docs
          </a>
        </div>
        <span>by mingtmt</span>
      </div>
    </footer>
  )
}
