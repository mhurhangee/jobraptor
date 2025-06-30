import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SectionContact() {
    return (
        <Section layout="center" container="md" border="top" background="neon-orange" padding="xl">
            <div className="text-center neo-brutal bg-white p-8">
                <h2 className="font-heading text-2xl font-bold mb-4">QUESTIONS?</h2>
                <p className="text-lg font-bold mb-4">Contact the human who built this thing:</p>
                <Button asChild className="btn-neo">
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </Button>
            </div>
        </Section>
    )
}