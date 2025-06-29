import { Archivo_Black, Space_Grotesk } from 'next/font/google'

export const fontBody = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const fontHeading = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400',
})
