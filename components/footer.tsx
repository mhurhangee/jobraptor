import Link from 'next/link'

import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Column - Personal Story */}
          <div className="space-y-6">
            <Logo />
            <p className="mt-4 text-sm font-bold">
              Built by a frustrated developer who was tired of losing track of job applications in
              messy spreadsheets.
            </p>
          </div>

          {/* Hunt Column */}
          <div>
            <h3 className="font-heading relative mb-6 text-xl font-bold">
              HUNT
              <div className="bg-neon-pink absolute -top-2 -right-4 h-4 w-4 rotate-45 transform border-2 border-black"></div>
            </h3>
            <ul className="space-y-3 font-bold">
              <li>
                <Link href="/dashboard" className="decoration-4 underline-offset-4 hover:underline">
                  Start Tracking
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="decoration-4 underline-offset-4 hover:underline">
                  Job Board
                </Link>
              </li>
              <li>
                <Link
                  href="/cover-letter"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  Cover Letter Tool
                </Link>
              </li>
              <li>
                <Link href="/profile" className="decoration-4 underline-offset-4 hover:underline">
                  Profile Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="font-heading relative mb-6 text-xl font-bold">
              LEARN
              <div className="bg-neon-blue absolute -top-2 -right-4 h-4 w-4 rotate-45 transform border-2 border-black"></div>
            </h3>
            <ul className="space-y-3 font-bold">
              <li>
                <Link
                  href="/knowledge-base"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base/guides"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  How-To Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base/faq"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base/resources"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-heading relative mb-6 text-xl font-bold">
              CONNECT
              <div className="bg-neon-green absolute -top-2 -right-4 h-4 w-4 rotate-45 transform border-2 border-black"></div>
            </h3>
            <ul className="space-y-3 font-bold">
              <li>
                <Link href="/about" className="decoration-4 underline-offset-4 hover:underline">
                  My Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="decoration-4 underline-offset-4 hover:underline">
                  Email the Human
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/jobraptor"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  GitHub Repo
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base/blog"
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Anti-Corporate */}
        <div className="mt-12 flex flex-col items-center justify-between border-t-2 border-black pt-8 md:flex-row">
          <div className="mb-4 flex space-x-8 md:mb-0">
            <Link
              href="/privacy"
              className="font-bold decoration-4 underline-offset-4 hover:underline"
            >
              PRIVACY (We don&apos;t sell your data)
            </Link>
            <Link
              href="/terms"
              className="font-bold decoration-4 underline-offset-4 hover:underline"
            >
              TERMS (Keep it simple)
            </Link>
          </div>
          <div className="text-center">
            <p className="font-bold">© 2024 JOBRAPTOR. BUILT OUT OF FRUSTRATION.</p>
            <p className="mt-1 text-sm font-bold text-gray-600">
              No venture capital was harmed in the making of this app.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
