import { Waitlist } from '@clerk/nextjs'

import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { Timer } from 'lucide-react'

export default function WaitlistPage() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="bottom" background="neon-blue" padding="xl">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-yellow-300 p-3">
            <Timer className="h-8 w-8 text-black" />
          </div>
          <h1 className="neo-heading mt-4">WAITLIST</h1>
        </div>
        <p className="neo-subtitle">
          Hyped up to try JobRaptor? Sign up for the waitlist to be notified when JobRaptor is ready
          to use!
        </p>
        <section className="flex items-center justify-center">
          <Waitlist />
        </section>
      </Section>
    </PageContainer>
  )
}
