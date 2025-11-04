import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Next Bank — Landing',
  description: 'Pixel-accurate landing page in Next.js + Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 bg-white text-ink px-3 py-2 rounded-lg shadow-card">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  )
}


