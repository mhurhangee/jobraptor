'use client'

import { useEffect, useState } from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { StepProps } from '@/components/stepper/stepper-context'
import { useStepper } from '@/components/stepper/stepper-context'

import type { JobSchema, StepperData } from './schemas'
import { STATUS_OPTIONS } from '@/lib/config/job-status'

export function JobForm({ data, allData, isLoading }: StepProps) {
  const { updateData } = useStepper()

  // Type-safe access to job data
  const typedData = data as StepperData
  const typedAllData = allData as StepperData

  // Initialize form with extracted data or existing data
  const [formData, setFormData] = useState<Partial<JobSchema>>({
    title: typedData.job?.title || '',
    company: typedData.job?.company || '',
    description: typedData.job?.description || '',
    salary: typedData.job?.salary || '',
    location: typedData.job?.location || '',
    contact: typedData.job?.contact || '',
    status: typedData.job?.status,
    notes: typedData.job?.notes,

    // Preserve other fields if they exist
    postingUrl: typedData.job?.postingUrl,
    aiMetadata: typedData.job?.aiMetadata
  })

  // Update stepper context whenever form data changes
  useEffect(() => {
    updateData({ job: formData as JobSchema })
  }, [formData, updateData])

  // Type-safe input change handler
  const handleInputChange = (field: keyof JobSchema, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Show if data was extracted from AI */}
      {typedAllData.job?.title && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            ✨ Job information has been pre-filled from the job URL. You can edit any details below.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="job-title">Job Title *</Label>
          <Input
            id="job-title"
            value={formData.title || ''}
            onChange={e => handleInputChange('title', e.target.value)}
            placeholder="e.g. Senior Software Engineer"
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="job-company">Company *</Label>
          <Input
            id="job-company"
            value={formData.company || ''}
            onChange={e => handleInputChange('company', e.target.value)}
            placeholder="e.g. Acme Inc."
            disabled={isLoading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="job-salary">Salary</Label>
          <Input
            id="job-salary"
            value={formData.salary || ''}
            onChange={e => handleInputChange('salary', e.target.value)}
            placeholder="e.g. £50,000 - £60,000"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="job-location">Location</Label>
          <Input
            id="job-location"
            value={formData.location || ''}
            onChange={e => handleInputChange('location', e.target.value)}
            placeholder="e.g. London, UK, Remote, Hybrid"
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="job-contact">Contact</Label>
          <Input
            id="job-contact"
            value={formData.contact || ''}
            onChange={e => handleInputChange('contact', e.target.value)}
            placeholder="e.g. hr@company.com"
            disabled={isLoading}
          />
        </div>
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="job-description">Description</Label>
        <Textarea
          id="job-description"
          value={formData.description || ''}
          onChange={e => handleInputChange('description', e.target.value)}
          placeholder="Job description..."
          disabled={isLoading}
          rows={5}
        />
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
