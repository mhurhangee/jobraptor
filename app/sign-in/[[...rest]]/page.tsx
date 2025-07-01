import { SignIn } from '@clerk/nextjs'

import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { Timer } from 'lucide-react'

export default function SignInPage() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="bottom" background="neon-green" padding="xl">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-yellow-300 p-3">
            <Timer className="h-8 w-8 text-black" />
          </div>
          <h1 className="neo-heading mt-4">GO HUNTING!</h1>
        </div>
        <p className="neo-subtitle">Sign in to get started with JobRaptor!</p>
        <section className="flex items-center justify-center">
          <SignIn />
        </section>
      </Section>
    </PageContainer>
  )
}
