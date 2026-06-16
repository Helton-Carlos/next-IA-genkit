import Header from './components/Header'
import './globals.css'
import StoreProvider from './StoreProvider';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className='bg-primary h-screen'>
          <StoreProvider>{children}</StoreProvider>
        </main>
      </body>
    </html>
  )
}