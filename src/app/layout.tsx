import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { Suspense, type ReactNode } from 'react'
import Header from '@/components/Header/Header.component'

const montserrat = Montserrat({ preload: false, weight: ['300', '400', '500', '600', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'NextLink',
  description: 'NextLink - здесь есть только лучшие люди',
  openGraph: {
    title: 'NextLink',
    description: 'NextLink - здесь есть только лучшие люди',
  }
}

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="main">
          <Suspense fallback={<>fdss</>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  )
}

export default Layout
