'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import type { StepProps } from '@/components/stepper/stepper-context'
import { useStepper } from '@/components/stepper/stepper-context'

import { NEXT_ACTION_OPTIONS, STATUS_OPTIONS } from '@/lib/config/job-status'

import type { JobSchema, StepperData } from './schemas'

// Next action options for the job application

// Helper function to format date to YYYY-MM-DD
const formatDateForInput = (date: Date | undefined): string => {
  if (!date) return ''
  return date.toISOString().split('T')[0]
}

// Helper function to parse date from YYYY-MM-DD
const parseInputDate = (dateString: string): Date | undefined => {
  if (!dateString) return undefined
  const date = new Date(dateString)
  return isNaN(date.getTime()) ? undefined : date
}

export function AdditionalInfoForm({ data, isLoading }: StepProps) {
  const { updateData } = useStepper()

  // Type-safe access to job data
  const typedData = data as StepperData

  // Initialize form with extracted data or existing data
  const [formData, setFormData] = useState<Partial<JobSchema>>({
    // Preserve existing job data
    ...typedData.job,
    // Focus on fields specific to this form
    status: typedData.job?.status || '',
    notes: typedData.job?.notes || '',
    nextAction: typedData.job?.nextAction || '',
    appliedAt: typedData.job?.appliedAt,
    nextActionDeadline: typedData.job?.nextActionDeadline,
  })

  // We need to update the stepper data when the form changes
  // But we need to be careful not to cause infinite loops
  useEffect(() => {
    // Only update if formData has actually changed from typedData.job
    const hasChanges = Object.keys(formData).some(key => {
      const k = key as keyof typeof formData
      return formData[k] !== typedData.job?.[k]
    })

    if (hasChanges) {
      // Create a new object to avoid reference issues
      updateData({
        job: {
          ...typedData.job,
          status: formData.status,
          notes: formData.notes,
          nextAction: formData.nextAction,
          appliedAt: formData.appliedAt,
          nextActionDeadline: formData.nextActionDeadline,
        },
      })
    }
  }, [formData])

  // Handle text input changes
  const handleInputChange = (field: keyof JobSchema, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Handle date changes
  const handleDateChange = (field: 'appliedAt' | 'nextActionDeadline', dateString: string) => {
    const date = parseInputDate(dateString)
    setFormData(prev => ({ ...prev, [field]: date }))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="job-status">Application Status</Label>
          <Select
            value={formData.status || ''}
            onValueChange={value => handleInputChange('status', value)}
            disabled={isLoading}
          >
            <SelectTrigger id="job-status" className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="applied-at">Applied Date</Label>
          <Input
            id="applied-at"
            type="date"
            value={formatDateForInput(formData.appliedAt)}
            onChange={e => handleDateChange('appliedAt', e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="next-action">Next Action</Label>
          <Select
            value={formData.nextAction || ''}
            onValueChange={value => handleInputChange('nextAction', value)}
            disabled={isLoading}
          >
            <SelectTrigger id="next-action" className="w-full">
              <SelectValue placeholder="Select next action" />
            </SelectTrigger>
            <SelectContent>
              {NEXT_ACTION_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="next-action-deadline">Next Action Deadline</Label>
          <Input
            id="next-action-deadline"
            type="date"
            value={formatDateForInput(formData.nextActionDeadline)}
            onChange={e => handleDateChange('nextActionDeadline', e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="job-notes">Notes</Label>
        <Textarea
          id="job-notes"
          value={formData.notes || ''}
          onChange={e => handleInputChange('notes', e.target.value)}
          placeholder="Any additional notes about the job application..."
          disabled={isLoading}
          rows={5}
        />
      </div>
    </div>
  )
}
