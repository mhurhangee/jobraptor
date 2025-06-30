'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { AlertTriangle, Home, RefreshCw, Skull } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Application Error:', error)
  }, [error])

  return (
    <html>
      <body>
        <PageContainer>
          <Section layout="center" pattern="dots" container="sm" padding="xl">
            {/* Critical Error Visual */}
            <div className="mb-8">
              <div className="mb-4 text-8xl">💀</div>
              <div className="neo-brutal-warning inline-block -rotate-3 transform">
                <span className="flex items-center gap-2 text-2xl font-bold">
                  <Skull className="h-6 w-6" />
                  CRITICAL ERROR!
                </span>
              </div>
            </div>

            {/* Error Message */}
            <div className="neo-brutal mb-8 rotate-2 transform bg-white p-8">
              <h1 className="mb-4 text-4xl font-black text-gray-900">SYSTEM MELTDOWN! 🔥</h1>
              <p className="mb-6 text-xl font-bold text-gray-700">
                JobRaptor encountered a critical error that even our best debugging skills
                can&apos;t handle right now. This is serious business!
              </p>

              {/* Error Details */}
              <div className="mb-6 -rotate-1 transform border-4 border-red-500 bg-red-100 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="font-bold text-red-800">SYSTEM ERROR:</span>
                </div>
                <p className="rounded border-2 border-red-400 bg-red-50 p-2 font-mono text-sm text-red-700">
                  {error.message || 'A critical system error occurred'}
                </p>
                {error.digest && (
                  <p className="mt-2 text-xs text-red-600">Error Digest: {error.digest}</p>
                )}
              </div>

              <div className="mb-6 rotate-1 transform border-4 border-orange-400 bg-orange-100 p-4">
                <p className="font-bold text-orange-800">
                  🚨 <strong>EMERGENCY PROTOCOL:</strong> Try refreshing the page. If this
                  doesn&apos;t work, our entire tech team is probably crying right now.
                </p>
              </div>
            </div>

            {/* Emergency Actions */}
            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={reset}
                size="lg"
                className="btn-neo border-4 border-black bg-red-500 px-8 py-4 font-bold text-white shadow-[6px_6px_0px_0px_#000000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-red-600 hover:shadow-[4px_4px_0px_0px_#000000]"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                EMERGENCY RESTART
              </Button>

              <Button
                onClick={() => (window.location.href = '/')}
                size="lg"
                className="btn-neo-secondary border-4 border-black bg-orange-500 px-8 py-4 font-bold text-white shadow-[6px_6px_0px_0px_#000000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-orange-600 hover:shadow-[4px_4px_0px_0px_#000000]"
              >
                <Home className="mr-2 h-5 w-5" />
                EVACUATE TO HOMEPAGE
              </Button>
            </div>

            {/* Critical Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="-rotate-2 transform border-4 border-red-500 bg-red-200 p-4">
                <div className="text-2xl font-black text-red-700">💥</div>
                <div className="text-sm font-bold text-red-800">System Crashed</div>
              </div>
              <div className="rotate-2 transform border-4 border-orange-500 bg-orange-200 p-4">
                <div className="text-2xl font-black text-orange-700">🚨</div>
                <div className="text-sm font-bold text-orange-800">Alert Level: MAX</div>
              </div>
              <div className="-rotate-1 transform border-4 border-yellow-500 bg-yellow-200 p-4">
                <div className="text-2xl font-black text-yellow-700">⚡</div>
                <div className="text-sm font-bold text-yellow-800">Recovery Mode</div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 text-sm text-gray-700">
              <p className="font-bold">
                🆘 If this error persists, please contact our emergency response team immediately!
              </p>
            </div>
          </Section>
        </PageContainer>
      </body>
    </html>
  )
}
