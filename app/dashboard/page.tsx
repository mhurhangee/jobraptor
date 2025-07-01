import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

export default function Dashboard() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="bottom" padding="xl">
        <h1 className="neo-heading">
          Hunt{' '}
          <span className="bg-neon-pink neo-brutal inline-block rotate-2 transform px-2 py-2">
            STATUS
          </span>
        </h1>
        <p className="neo-subtitle">Tracking your job hunt progress</p>
      </Section>
    </PageContainer>
  )
}
