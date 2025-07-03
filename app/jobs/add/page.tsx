'use client'

import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { AddJobForm } from '@/components/add-job-form'

export default function AddJobPage() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="none" pattern="dots" padding="xl">
        <h1 className="neo-heading">
          Add{' '}
          <span className="bg-neon-pink neo-brutal inline-block rotate-2 transform px-2 py-2">
            JOB
          </span>
        </h1>
        <p className="neo-subtitle">Add a new job to your job hunt</p>
      </Section>
      <Section layout="center" container="md" border="none" pattern="dots" padding="none">
        <AddJobForm />
      </Section>
    </PageContainer>
  )
}
