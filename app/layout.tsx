import './app.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Synergia',
  description: 'Connecting Innovation, Empowering Transformation',
}

export default Layout
