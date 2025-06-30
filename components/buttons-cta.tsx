
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ButtonsCTA() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="btn-neo px-12 py-6 text-2xl">
                <Link href="/dashboard">
                    START HUNTING <ArrowRight strokeWidth="3" strokeLinecap="butt" className="ml-2 h-6 w-6" />
                </Link>
            </Button>
            <Button asChild className="btn-neo-accent px-8 py-4 text-xl">
                <Link href="#waitlist">JOIN WAITLIST</Link>
            </Button>
        </div>
    )
}
