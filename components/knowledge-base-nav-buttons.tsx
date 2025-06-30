import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { ArrowLeft, ArrowRight } from 'lucide-react'

export function KnowledgeBaseNavButtons({
  previous,
  home,
  next,
  color,
}: {
  previous: string
  home: string
  next: string
  color: string
}) {
  return (
    <div className="mb-8 flex flex-row items-center justify-between gap-4 p-4">
      {previous ? (
        <Button className={`btn-neo-${color}`} size="sm" asChild>
          <Link href={previous}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Link>
        </Button>
      ) : (
        <div className="w-24"></div>
      )}
      <Button className={`btn-neo-${color}`} size="sm" asChild>
        <Link href={home}>{home.split('/').pop()}</Link>
      </Button>
      {next ? (
        <Button className={`btn-neo-${color}`} size="sm" asChild>
          <Link href={next}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div className="w-24"></div>
      )}
    </div>
  )
}
