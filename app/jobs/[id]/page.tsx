import { getJob } from "@/lib/actions/jobs"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Edit, Trash2 } from "lucide-react"
import { deleteJob } from "@/lib/actions/jobs"

interface JobDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJob((await params).id)

  if (!job) {
    notFound()
  }

  const formatSalary = (salary: string | null, salaryMax: string | null) => {
    if (!salary) return "Not specified"

    const amount = Number.parseFloat(salary)
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)

    if (salaryMax) {
      const maxAmount = Number.parseFloat(salaryMax)
      const formattedMax = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(maxAmount)
      return `${formatted} - ${formattedMax}`
    }

    return formatted
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/jobs">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-xl text-muted-foreground">{job.company?.name}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/jobs/${job.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            <form action={deleteJob.bind(null, job.id)}>
              <Button variant="destructive" type="submit">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Status</h3>
                    <Badge
                      variant={
                        {
                          applied: "default",
                          interviewing: "secondary",
                          offer: "outline",
                          rejected: "destructive",
                          withdrawn: "outline",
                        }[job.status] as any
                      }
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Priority</h3>
                    <p>{job.priority}/5</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Salary</h3>
                    <p>{formatSalary(job.salary, job.salaryMax)}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Applied Date</h3>
                    <p>{job.appliedAt ? new Date(job.appliedAt).toLocaleDateString() : "N/A"}</p>
                  </div>
                </div>

                {job.location && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Location</h3>
                    <p>
                      {job.location} {job.remote && `(${job.remote})`}
                    </p>
                  </div>
                )}

                {job.url && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Job Posting</h3>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      View Original Posting <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {job.description && (
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-wrap text-sm">{job.description}</div>
                </CardContent>
              </Card>
            )}

            {job.notes && (
              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-wrap text-sm">{job.notes}</div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">Name</h3>
                  <p>{job.company?.name}</p>
                </div>
                {job.company?.industry && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Industry</h3>
                    <p>{job.company.industry}</p>
                  </div>
                )}
                {job.company?.size && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Company Size</h3>
                    <p>{job.company.size} employees</p>
                  </div>
                )}
                {job.company?.location && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Location</h3>
                    <p>{job.company.location}</p>
                  </div>
                )}
                {job.company?.website && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">Website</h3>
                    <a
                      href={job.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Visit Website <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                {job.company?.description && (
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">About</h3>
                    <p className="text-sm">{job.company.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
