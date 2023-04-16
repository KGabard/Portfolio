import './globals.css'
import React from 'react'
import Providers from './provider/Providers'
import Header from './layouts/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
} // les Metadatas sont ajoutés ainsi depuis NextJS 13

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-neutral-bg dark:bg-neutral-dark-bg flex flex-col items-center">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
