import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { magiqContent } from '@/data/content-magiq'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: magiqContent.meta.title,
  description: magiqContent.meta.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

