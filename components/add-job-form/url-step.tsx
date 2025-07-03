'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { StepProps } from '@/components/stepper/stepper-context'
import { useStepper } from '@/components/stepper/stepper-context'

export function URLStep({ data, isLoading }: StepProps) {
  const [postingUrl, setPostingUrl] = useState(data.postingUrl || '')
  const { updateData } = useStepper()

  // Sync local state with stepper context whenever URL changes
  useEffect(() => {
    updateData({ job: { postingUrl } })
  }, [postingUrl, updateData])

  return (
    <div className="space-y-2">
      <Label htmlFor="postingUrl">Enter the job URL</Label>
      <Input
        id="postingUrl"
        value={postingUrl}
        onChange={e => setPostingUrl(e.target.value)}
        placeholder="e.g. https://example.com/job"
        disabled={isLoading}
      />
    </div>
  )
}
