import './globals.css'
import Header from './components/Header'

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
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
