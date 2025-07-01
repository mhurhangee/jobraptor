import { getJobs } from "@/lib/actions/jobs"
import { getCompanies } from "@/lib/actions/companies"
import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { AddJobModal } from "@/components/add-job-modal"
import Link from "next/link"
import { Suspense } from "react"
import { PageContainer } from "@/components/ui/page-container"

async function JobsTable() {
  try {
    const [jobs, companies] = await Promise.all([getJobs(), getCompanies()])
    return (
      <>
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="bg-neon-green neo-brutal inline-block -rotate-2 transform px-4 py-2">
              <h1 className="font-heading text-4xl font-bold mb-2">TRACKER TABLE</h1> 
              Manage and track all your job applications              
            </div>
          </div>
          <div className="flex gap-3">
            <AddJobModal companies={companies} trigger={<Button className="btn-neo-accent">TRACK NEW JOB</Button>} />
          </div>
        </div>
        <div className="neo-table">
          <DataTable columns={columns} data={jobs} />
        </div>
      </>
    )
  } catch (error) {
    console.error("Error loading jobs:", error)
    return (
      <div className="text-center py-8">
        <p className="font-bold text-gray-600 mb-4">Unable to load job applications</p>
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
        <div className="h-8 w-64 bg-gray-300 animate-pulse rounded border-2 border-black" />
        <div className="h-8 w-32 bg-gray-300 animate-pulse rounded border-2 border-black" />
      </div>
      <div className="neo-table">
        <div className="h-12 bg-gray-100 animate-pulse border-b-2 border-black" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 border-b border-gray-300 bg-white animate-pulse" />
        ))}
      </div>
    </div>
  )
}

export default function JobsPage() {
  return (
    <PageContainer>
      <div className="container mx-auto py-10 px-4">
        <Suspense fallback={<JobsTableSkeleton />}>
          <JobsTable />
        </Suspense>
      </div>
    </PageContainer>
  )
}
