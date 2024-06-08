import './app.css'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html className={`${GeistSans.variable} scroll-smooth font-sans text-[white] antialiased`} lang="en">
      <body className="bg-[black] [background-image:linear-gradient(to_right,darkslategray_1px,transparent_1px),linear-gradient(to_bottom,darkslategray_1px,transparent_1px)] bg-[size:32px_32px] bg-center lg:bg-[size:48px_48px] lg:bg-fixed">
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Synergia',
  description: 'Connecting Innovation, Empowering Transformation',
}

export default Layout
