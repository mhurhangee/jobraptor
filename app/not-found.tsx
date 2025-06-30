'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { PageContainer } from "@/components/ui/page-container"
import { Section } from "@/components/ui/section"

export default function NotFound() {
    const router = useRouter()
    return (
        <PageContainer>
            <Section layout="center" pattern="dots" container="sm" padding="xl">
                {/* 404 Visual */}
                <div className="mb-8">
                    <div className="text-9xl font-black text-red-500 mb-4 transform -rotate-2">404</div>
                    <div className="neo-brutal-warning transform rotate-2 inline-block">
                        <span className="text-2xl font-bold">PAGE NOT FOUND</span>
                    </div>
                </div>

                {/* Error Message */}
                <div className="bg-white neo-brutal p-16 transform -rotate-1">
                    <h1 className="text-4xl font-black mb-4 text-black">OOPS! YOU'RE LOST! 🤦‍♂️</h1>
                    <p className="text-xl text-black mb-6 font-bold">
                        This page doesn't exist, just like your dream job before you found JobRaptor! But don't worry - we'll get
                        you back on track.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="btn-neo"
                        >
                            <Link href="" onClick={() => router.back()}>
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="btn-neo-secondary"
                        >
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
