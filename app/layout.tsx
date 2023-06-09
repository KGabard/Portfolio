import './globals.css'
import React from 'react'
import Providers from './providers/Providers'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export const metadata = {
  title: 'Kevin Gabard - Portfolio',
  description: 'Portfolio presenting my skills and projects as a frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='scroll-smooth'>
      <body className="flex flex-col items-center bg-neutral-bg bg-light-noise scrollbar-none scrollbar-track-white scrollbar-thumb-neutral-2 scrollbar-thumb-rounded-md scrollbar-w-2 dark:bg-neutral-dark-bg dark:bg-dark-noise dark:scrollbar-track-neutral-dark-1 dark:scrollbar-thumb-neutral-dark-3 overflow-x-hidden">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
