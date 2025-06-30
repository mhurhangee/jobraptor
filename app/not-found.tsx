'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  return (
    <PageContainer>
      <Section layout="center" pattern="dots" container="sm" padding="xl">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="mb-4 -rotate-2 transform text-9xl font-black text-red-500">404</div>
          <div className="neo-brutal-warning inline-block rotate-2 transform">
            <span className="text-2xl font-bold">PAGE NOT FOUND</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="neo-brutal -rotate-1 transform bg-white p-16">
          <h1 className="mb-4 text-4xl font-black text-black">OOPS! YOU&apos;RE LOST! 🤦‍♂️</h1>
          <p className="mb-6 text-xl font-bold text-black">
            This page doesn&apos;t exist, just like your dream job before you found JobRaptor! But
            don&apos;t worry - we&apos;ll get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="btn-neo">
              <Link href="" onClick={() => router.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
              </Link>
            </Button>
            <Button asChild size="lg" className="btn-neo-secondary">
              <Link href="/dashboard">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
