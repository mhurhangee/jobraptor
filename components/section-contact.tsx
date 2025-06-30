import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'

export function SectionContact() {
  return (
    <Section layout="center" container="md" border="top" background="neon-orange" padding="xl">
      <div className="neo-brutal bg-white p-8 text-center">
        <h2 className="font-heading mb-4 text-2xl font-bold">QUESTIONS?</h2>
        <p className="mb-4 text-lg font-bold">Contact the human who built this thing:</p>
        <Button asChild className="btn-neo">
          <Link href="/contact">CONTACT</Link>
        </Button>
      </div>
    </Section>
  )
}
