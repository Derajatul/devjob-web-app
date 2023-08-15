import './globals.css'
import Header from './components/Header'
import { Providers } from './contexts/ThemeContext'

export const metadata = {
  title: 'devjobs',
  description: 'find your dev job here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      
        <body>
          <Providers>
          <Header />
          <main>
          {children}
          </main>
          </Providers>
        </body>
    </html>
    
  )
}
