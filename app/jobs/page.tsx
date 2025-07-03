import { Suspense } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { PageContainer } from '@/components/ui/page-container'

import { DataTable } from '@/components/data-table'
import { columns } from '@/components/data-table/columns'

import { getJobs } from '@/lib/actions/jobs'

async function JobsTable() {
  try {
    const [jobs] = await Promise.all([getJobs()])
    return (
      <>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="bg-neon-green neo-brutal inline-block -rotate-2 transform px-4 py-2">
              <h1 className="font-heading mb-2 text-4xl font-bold">TRACKER TABLE</h1>
              Manage and track all your job applications
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="btn-neo-accent" asChild>
              <Link href="/jobs/add">TRACK NEW JOB</Link>
            </Button>
          </div>
        </div>
        <div className="neo-table">
          <DataTable columns={columns} data={jobs || []} />
        </div>
      </>
    )
  } catch (error) {
    console.error('Error loading jobs:', error)
    return (
      <div className="py-8 text-center">
        <p className="mb-4 font-bold text-gray-600">Unable to load job applications</p>
        <Button asChild className="btn-neo">
          <Link href="/jobs/add">ADD NEW JOB</Link>
        </Button>
      </div>
    )
  }
}

function JobsTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-8 w-64 animate-pulse rounded border-2 border-black bg-gray-300" />
        <div className="h-8 w-32 animate-pulse rounded border-2 border-black bg-gray-300" />
      </div>
      <div className="neo-table">
        <div className="h-12 animate-pulse border-b-2 border-black bg-gray-100" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 animate-pulse border-b border-gray-300 bg-white" />
        ))}
      </div>
    </div>
  )
}

export default function JobsPage() {
  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-10">
        <Suspense fallback={<JobsTableSkeleton />}>
          <JobsTable />
        </Suspense>
      </div>
    </PageContainer>
  )
}
