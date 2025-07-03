'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { DeleteJobDialog } from '@/components/delete-job-dialog'
import { EditableField } from '@/components/editable-field'

import { getJob } from '@/lib/actions/jobs'
import { DbJob } from '@/lib/db/schema'

import { ArrowLeft, ExternalLink, Trash2 } from 'lucide-react'

interface JobDetailPageProps {
  params: Promise<{ id: string }>
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const [job, setJob] = useState<DbJob | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await getJob((await params).id)
        if (!jobData) {
          notFound()
        }
        setJob(jobData)
      } catch (error) {
        console.error('Error fetching job:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchJob()
  }, [params])

  if (isLoading) {
    return <div className="p-8 text-center">Loading...</div>
  }

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/jobs">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <EditableField
                jobId={job.id}
                fieldName="title"
                fieldValue={job.title}
                className="mb-1 text-3xl font-bold"
              />
              <EditableField
                jobId={job.id}
                fieldName="company"
                fieldValue={job.company}
                className="text-xl"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="destructive"
                className="btn-neo-destructive flex items-center gap-1"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className="h-4 w-4" />
                DELETE
              </Button>
            </div>
          </div>
          {showDeleteDialog && (
            <DeleteJobDialog
              jobId={job.id}
              jobTitle={job.title}
              company={job.company}
              isOpen={showDeleteDialog}
              onClose={() => setShowDeleteDialog(false)}
            />
          )}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-muted-foreground text-sm font-semibold">Status</h3>
                <Badge>{job.status}</Badge>
                {/* Status will need a special editor with dropdown */}
              </div>
              <div>
                <EditableField
                  jobId={job.id}
                  fieldName="salary"
                  fieldValue={job.salary}
                  label="Salary"
                />
              </div>
            </div>

            <div>
              <EditableField
                jobId={job.id}
                fieldName="location"
                fieldValue={job.location}
                label="Location"
              />
            </div>

            <div>
              <EditableField
                jobId={job.id}
                fieldName="postingUrl"
                fieldValue={job.postingUrl}
                label="Job Posting URL"
              />
              {job.postingUrl && (
                <a
                  href={job.postingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-blue-600 hover:underline"
                >
                  View Original Posting <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>

            <div>
              <EditableField
                jobId={job.id}
                fieldName="contact"
                fieldValue={job.contact}
                label="Contact"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Description</CardTitle>
          </CardHeader>
          <CardContent>
            <EditableField
              jobId={job.id}
              fieldName="description"
              fieldValue={job.description}
              fieldType="textarea"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <EditableField
              jobId={job.id}
              fieldName="notes"
              fieldValue={job.notes}
              fieldType="textarea"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
