import type React from 'react'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'

import { appConfig } from '@/lib/config/app'
import { fontBody, fontHeading } from '@/lib/config/fonts'

import '@/styles/globals.css'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: process.env.NODE_ENV === 'development' ? ` (dev) ${appConfig.appName}` : appConfig.appName,
  description: appConfig.appDescription,
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${appConfig.emojiFavicon}</text></svg>`,
      },
    ],
    shortcut: [
      {
        url: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${appConfig.emojiFavicon}</text></svg>`,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontBody.variable} ${fontHeading.variable} font-body antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              border: '2px solid #000',
              boxShadow: '4px 4px 0px 0px #000',
              fontWeight: 'bold',
              fontFamily: 'var(--font-body)',
            },
          }}
        />
      </body>
    </html>
  )
}
