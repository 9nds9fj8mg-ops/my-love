import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Моя кохана',
  description: 'Кожна мить з тобою - скарб',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

