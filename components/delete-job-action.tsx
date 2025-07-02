'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { DeleteJobDialog } from '@/components/delete-job-dialog'

import { Trash2 } from 'lucide-react'

interface DeleteJobActionProps {
  jobId: string
  jobTitle: string
  company: string
}

export function DeleteJobAction({ jobId, jobTitle, company }: DeleteJobActionProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  return (
    <>
      <Button
        variant="destructive"
        className="w-full justify-start text-left font-bold"
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          setShowDeleteDialog(true)
        }}
      >
        <Trash2 className="mr-2 h-4 w-4" />
        DELETE
      </Button>

      {showDeleteDialog && (
        <DeleteJobDialog
          jobId={jobId}
          jobTitle={jobTitle}
          company={company}
          isOpen={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
        />
      )}
    </>
  )
}
