"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, AlertTriangle, Skull, Home } from "lucide-react"
import { PageContainer } from "@/components/ui/page-container"
import { Section } from "@/components/ui/section"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Application Error:", error)
  }, [error])

  return (
    <html>
      <body>
        <PageContainer>
          <Section layout="center" pattern="dots" container="sm" padding="xl">
            {/* Critical Error Visual */}
            <div className="mb-8">
              <div className="text-8xl mb-4">💀</div>
              <div className="neo-brutal-warning transform -rotate-3 inline-block">
                <span className="text-2xl font-bold flex items-center gap-2">
                  <Skull className="h-6 w-6" />
                  CRITICAL ERROR!
                </span>
              </div>
            </div>

            {/* Error Message */}
            <div className="bg-white neo-brutal p-8 mb-8 transform rotate-2">
              <h1 className="text-4xl font-black mb-4 text-gray-900">SYSTEM MELTDOWN! 🔥</h1>
              <p className="text-xl text-gray-700 mb-6 font-bold">
                JobRaptor encountered a critical error that even our best debugging skills can't handle right now. This
                is serious business!
              </p>

              {/* Error Details */}
              <div className="bg-red-100 border-4 border-red-500 p-4 mb-6 transform -rotate-1">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span className="font-bold text-red-800">SYSTEM ERROR:</span>
                </div>
                <p className="text-sm text-red-700 font-mono bg-red-50 p-2 border-2 border-red-400 rounded">
                  {error.message || "A critical system error occurred"}
                </p>
                {error.digest && <p className="text-xs text-red-600 mt-2">Error Digest: {error.digest}</p>}
              </div>

              <div className="bg-orange-100 border-4 border-orange-400 p-4 mb-6 transform rotate-1">
                <p className="font-bold text-orange-800">
                  🚨 <strong>EMERGENCY PROTOCOL:</strong> Try refreshing the page. If this doesn't work, our entire tech
                  team is probably crying right now.
                </p>
              </div>
            </div>

            {/* Emergency Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={reset}
                size="lg"
                className="btn-neo bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                EMERGENCY RESTART
              </Button>

              <Button
                onClick={() => (window.location.href = "/")}
                size="lg"
                className="btn-neo-secondary bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Home className="mr-2 h-5 w-5" />
                EVACUATE TO HOMEPAGE
              </Button>
            </div>

            {/* Critical Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-200 border-4 border-red-500 p-4 transform -rotate-2">
                <div className="text-2xl font-black text-red-700">💥</div>
                <div className="text-sm font-bold text-red-800">System Crashed</div>
              </div>
              <div className="bg-orange-200 border-4 border-orange-500 p-4 transform rotate-2">
                <div className="text-2xl font-black text-orange-700">🚨</div>
                <div className="text-sm font-bold text-orange-800">Alert Level: MAX</div>
              </div>
              <div className="bg-yellow-200 border-4 border-yellow-500 p-4 transform -rotate-1">
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