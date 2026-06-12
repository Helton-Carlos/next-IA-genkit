import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
            Next <span className="text-blue-600">IA-genkit</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/english" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            English
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md">
            Começar
          </button>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}