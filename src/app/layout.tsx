import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { type ReactElement, type ReactNode } from 'react'
import Header from '@/components/Header/Header.component'

const montserrat = Montserrat({ preload: false, weight: ['300', '400', '500', '600', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'NextLink',
  description: 'NextLink - здесь есть только лучшие люди',
  openGraph: {
    title: 'NextLink',
    description: 'NextLink - здесь есть только лучшие люди'
  }
}

const Layout = async ({ children }: { children: ReactNode }): Promise<ReactElement> => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
