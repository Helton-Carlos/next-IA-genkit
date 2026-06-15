import Header from './components/Header'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className='bg-primary h-screen'>{children}</main>
      </body>
    </html>
  )
}