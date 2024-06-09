import './app.css'
import { type ReactNode, Suspense } from 'react'
import { cookies } from 'next/headers'
import { experiments } from '~/lib'
import { FlagValues } from '@vercel/flags/react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

/**
 * A component for hooking into the flags feature of the Vercel toolbar.
 */
function RenderFlags() {
  const values = {} as { [key: string]: string }

  for (const experiment of experiments) {
    const key = `exp${experiment.id}`
    const value = cookies().get(key)?.value as string

    values[key] = value
  }

  return <FlagValues values={values} />
}

function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html className={`${GeistSans.variable} scroll-smooth font-sans text-[white] antialiased`} lang="en">
      <body className="bg-[black] [background-image:linear-gradient(to_right,darkslategray_1px,transparent_1px),linear-gradient(to_bottom,darkslategray_1px,transparent_1px)] bg-[size:32px_32px] bg-center lg:bg-[size:48px_48px] lg:bg-fixed">
        {children}
        <Suspense>
          <RenderFlags />
        </Suspense>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Synergia',
  description: 'Connecting Innovation, Empowering Transformation',
}

export default Layout
