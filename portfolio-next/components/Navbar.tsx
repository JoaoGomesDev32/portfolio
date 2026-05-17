import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-gray-900 text-white fixed w-full z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-lg font-bold">
            <Link href="/">JS Developer</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="px-3 py-2 rounded-md text-sm hover:text-green-400">Sobre</a>
              <a href="#skills" className="px-3 py-2 rounded-md text-sm hover:text-green-400">Habilidades</a>
              <a href="#portfolio" className="px-3 py-2 rounded-md text-sm hover:text-green-400">Portfólio</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm hover:text-green-400">Contato</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-400"
              aria-expanded={open}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base hover:text-green-400">Sobre</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base hover:text-green-400">Habilidades</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base hover:text-green-400">Portfólio</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base hover:text-green-400">Contato</a>
          </div>
        </div>
      )}
    </nav>
  )
}
