import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Image
              src="/logo-image.svg"
              alt="Logo Next IA-genkit"
              width={32}
              height={32}
            />
            <span>Next <span className="text-primary uppercase">IA-genkit</span></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-primary text-white px-8 py-2 rounded-md text-sm font-bold cursor-pointer hover:bg-primary-700 transition shadow-sm hover:shadow-md">
            Começar
          </button>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}