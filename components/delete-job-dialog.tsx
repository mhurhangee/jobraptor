'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import { deleteJob } from '@/lib/actions/jobs'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface DeleteJobDialogProps {
  jobId: string
  jobTitle: string
  company: string
  isOpen: boolean
  onClose: () => void
}

export function DeleteJobDialog({
  jobId,
  jobTitle,
  company,
  isOpen,
  onClose,
}: DeleteJobDialogProps) {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    try {
      setIsPending(true)
      await deleteJob(jobId)
      toast.success('Job deleted successfully!')
      router.push('/jobs')
      onClose()
    } catch (error) {
      console.error('Error deleting job:', error)
      toast.error('Failed to delete job')
      setIsPending(false)
      onClose()
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="neo-brutal">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            DELETE JOB
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            Are you sure you want to delete <strong>{jobTitle}</strong> at{' '}
            <strong>{company}</strong>?
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" className="btn-neo-secondary" disabled={isPending}>
              CANCEL
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="btn-neo-destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  DELETING...
                </>
              ) : (
                'DELETE'
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
