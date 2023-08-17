'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react' // Import the ReactNode type

interface ProvidersProps {
  children: ReactNode; // Use ReactNode type for children prop
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}