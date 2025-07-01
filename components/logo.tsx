'use client'

import { useAuth } from '@clerk/nextjs'

import Link from 'next/link'

import { appConfig } from '@/lib/config/app'

export function Logo({ heading = false }: { heading?: boolean }) {
  const { isSignedIn, isLoaded } = useAuth()

  let href = '/'
  let title = appConfig.appName

  if (isLoaded) {
    href = isSignedIn ? '/dashboard' : '/'
    title = isSignedIn && heading ? 'Dashboard' : appConfig.appName
  }

  return (
    <Link href={href}>
      <div className="flex items-center space-x-2">
        <div className="neo-brutal-logo bg-white text-2xl text-black">{appConfig.emojiFavicon}</div>
        <h1 className="font-heading text-2xl font-extrabold uppercase">{title}</h1>
      </div>
    </Link>
  )
}
