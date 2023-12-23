import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css'
import SideNav from '../components/sidenav'
import TopBar from '../components/topbar'
import { useSearchParams } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CanvasOnCloud',
  description: '',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >
        <SideNav />
        {children}
      </body>
    </html>
  )
}
