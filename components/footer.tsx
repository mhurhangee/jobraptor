import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
    return (
        <footer className="bg-white border-t-4 border-black">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column - Personal Story */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="font-bold text-sm mt-4">
                            Built by a frustrated developer who was tired of losing track of job applications in messy
                            spreadsheets.
                        </p>
                    </div>

                    {/* Hunt Column */}
                    <div>
                        <h3 className="font-heading text-xl font-bold mb-6 relative">
                            HUNT
                            <div className="absolute -top-2 -right-4 w-4 h-4 bg-neon-pink border-2 border-black transform rotate-45"></div>
                        </h3>
                        <ul className="space-y-3 font-bold">
                            <li>
                                <Link href="/dashboard" className="hover:underline decoration-4 underline-offset-4">
                                    Start Tracking
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="hover:underline decoration-4 underline-offset-4">
                                    Job Board
                                </Link>
                            </li>
                            <li>
                                <Link href="/cover-letter" className="hover:underline decoration-4 underline-offset-4">
                                    Cover Letter Tool
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="hover:underline decoration-4 underline-offset-4">
                                    Profile Builder
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Learn Column */}
                    <div>
                        <h3 className="font-heading text-xl font-bold mb-6 relative">
                            LEARN
                            <div className="absolute -top-2 -right-4 w-4 h-4 bg-neon-blue border-2 border-black transform rotate-45"></div>
                        </h3>
                        <ul className="space-y-3 font-bold">
                            <li>
                                <Link href="/blog" className="hover:underline decoration-4 underline-offset-4">
                                    Job Hunt Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="hover:underline decoration-4 underline-offset-4">
                                    How-To Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/quick-start" className="hover:underline decoration-4 underline-offset-4">
                                    Quick Start
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/first-job" className="hover:underline decoration-4 underline-offset-4">
                                    First Job Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="font-heading text-xl font-bold mb-6 relative">
                            CONNECT
                            <div className="absolute -top-2 -right-4 w-4 h-4 bg-neon-green border-2 border-black transform rotate-45"></div>
                        </h3>
                        <ul className="space-y-3 font-bold">
                            <li>
                                <Link href="/about" className="hover:underline decoration-4 underline-offset-4">
                                    My Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline decoration-4 underline-offset-4">
                                    Email the Human
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/jobraptor" className="hover:underline decoration-4 underline-offset-4">
                                    Twitter Rants
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/jobraptor" className="hover:underline decoration-4 underline-offset-4">
                                    GitHub Repo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Anti-Corporate */}
                <div className="mt-12 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-8 mb-4 md:mb-0">
                        <Link href="/privacy" className="font-bold hover:underline decoration-4 underline-offset-4">
                            PRIVACY (We don't sell your data)
                        </Link>
                        <Link href="/terms" className="font-bold hover:underline decoration-4 underline-offset-4">
                            TERMS (Keep it simple)
                        </Link>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">© 2024 JOBRAPTOR. BUILT OUT OF FRUSTRATION.</p>
                        <p className="font-bold text-sm text-gray-600 mt-1">
                            No venture capital was harmed in the making of this app.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
