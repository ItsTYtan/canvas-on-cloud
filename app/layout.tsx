import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css'
import SideNav from './sidenav'
import TopBar from './topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CanvasOnCloud',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >
        <TopBar />
        <SideNav />
        {children}
      </body>
    </html>
  )
}
