'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { CheckCircle } from 'lucide-react'

import { StepperData } from './schemas'

export function SuccessStep({ data }: { data: StepperData }) {
  const jobId = data.job?.id
  const jobTitle = data.job?.title || 'Job'
  const company = data.job?.company || ''

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-8 text-center">
      <div className="rounded-full bg-green-100 p-3">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Job Added Successfully!</h2>
        <p className="text-muted-foreground">
          <span className="font-medium">{jobTitle}</span> at{' '}
          <span className="font-medium">{company}</span> has been saved.
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        {jobId ? (
          <Button asChild>
            <Link href={`/jobs/${jobId}`}>View Job Details</Link>
          </Button>
        ) : null}

        <Button variant="outline" asChild>
          <Link href="/jobs">View All Jobs</Link>
        </Button>
      </div>
    </div>
  )
}
