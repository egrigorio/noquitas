import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'gruta',
  description: 'site pra colocarmos coisas legais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
