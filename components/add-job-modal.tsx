'use client'

import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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

import { createCompany } from '@/lib/actions/companies'
import { extractContentFromUrl, extractJobInfo } from '@/lib/actions/extract-job'
import { createJob } from '@/lib/actions/jobs'
import type { Company } from '@/lib/db/schema'

import { Loader2, Plus } from 'lucide-react'
import { toast } from 'sonner'

interface AddJobModalProps {
  companies: Company[]
  trigger?: React.ReactNode
}

export function AddJobModal({ companies, trigger }: AddJobModalProps) {
  const [open, setOpen] = useState(false)
  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const [showNewCompanyDialog, setShowNewCompanyDialog] = useState(false)
  const [step, setStep] = useState<'url' | 'form'>('url')
  const [isLoading, setIsLoading] = useState(false)
  const [jobUrl, setJobUrl] = useState('')

  // Form data state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    salaryMax: '',
    location: '',
    remote: '',
    url: '',
    notes: '',
    priority: '3',
    aiMetadata: {},
  })

  const handleSubmit = async (formData: FormData) => {
    try {
      await createJob(formData)
      setOpen(false)
      toast.success('Job added successfully')
    } catch (error) {
      toast.error('Failed to add job')
      console.error(error)
    }
  }

  const handleNewCompany = async (formData: FormData) => {
    try {
      const newCompany = await createCompany(formData)
      setSelectedCompanyId(newCompany.id)
      setShowNewCompanyDialog(false)
    } catch (error) {
      toast.error('Failed to add company')
      console.error(error)
    }
  }

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!jobUrl) {
      toast.error('Please enter a URL')
      return
    }

    setIsLoading(true)
    try {
      // Extract content from URL
      const contentResult = await extractContentFromUrl(jobUrl)

      // Extract job information from content
      const jobInfo = await extractJobInfo(contentResult.context, contentResult.url)

      // Update form data with extracted information
      setFormData({
        title: jobInfo.job.title || '',
        description: jobInfo.job.description || '',
        salary: jobInfo.job.salary || '',
        salaryMax: jobInfo.job.salaryMax || '',
        location: jobInfo.job.location || '',
        remote: jobInfo.job.remote || '',
        url: jobUrl,
        notes: '',
        priority: '3',
        aiMetadata: jobInfo.aiMetadata,
      })

      // Set company if found
      if (jobInfo.company.id) {
        setSelectedCompanyId(jobInfo.company.id)
      }

      // Move to form step
      setStep('form')
      toast.success('Job information extracted successfully')
    } catch (error) {
      toast.error('Failed to extract job information')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const resetModal = () => {
    setStep('url')
    setJobUrl('')
    setFormData({
      title: '',
      description: '',
      salary: '',
      salaryMax: '',
      location: '',
      remote: '',
      url: '',
      notes: '',
      priority: '3',
      aiMetadata: {},
    })
    setSelectedCompanyId('')
  }

  // Reset the modal when it's closed
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      resetModal()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || <Button className="btn-neo">ADD NEW JOB</Button>}
      </DialogTrigger>
      <DialogContent className="neo-brutal max-h-[90vh] max-w-4xl overflow-y-auto bg-white">
        <DialogHeader className="bg-neon-yellow -m-6 mb-6 border-b-4 border-black p-6">
          <DialogTitle className="font-heading text-3xl font-bold">ADD NEW JOB</DialogTitle>
        </DialogHeader>

        {step === 'url' ? (
          <div className="space-y-6 p-2">
            <div className="space-y-4">
              <div className="text-lg font-bold">
                Enter job posting URL to auto-extract information
              </div>
              <form onSubmit={handleUrlSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-url" className="font-heading font-bold">
                    JOB POSTING URL
                  </Label>
                  <Input
                    id="job-url"
                    value={jobUrl}
                    onChange={e => setJobUrl(e.target.value)}
                    type="url"
                    placeholder="https://company.com/careers/job-id"
                    className="neo-input"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="btn-neo flex-1" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        EXTRACTING...
                      </>
                    ) : (
                      'EXTRACT JOB INFO'
                    )}
                  </Button>
                  <Button
                    type="button"
                    className="btn-neo-secondary"
                    onClick={() => setStep('form')}
                    disabled={isLoading}
                  >
                    SKIP TO FORM
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-6 p-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="modal-title" className="font-heading font-bold">
                  JOB TITLE *
                </Label>
                <Input
                  id="modal-title"
                  name="title"
                  required
                  placeholder="e.g. Senior Frontend Engineer"
                  className="neo-input"
                  defaultValue={formData.title}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-companyId" className="font-heading font-bold">
                  COMPANY *
                </Label>
                <div className="flex gap-2">
                  <Select
                    name="companyId"
                    value={selectedCompanyId}
                    onValueChange={setSelectedCompanyId}
                    required
                  >
                    <SelectTrigger className="neo-select">
                      <SelectValue placeholder="Select a company" />
                    </SelectTrigger>
                    <SelectContent className="neo-brutal bg-white">
                      {companies.map(company => (
                        <SelectItem key={company.id} value={company.id} className="font-bold">
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Dialog open={showNewCompanyDialog} onOpenChange={setShowNewCompanyDialog}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        className="neo-brutal bg-neon-green p-3 hover:bg-green-400"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="neo-brutal bg-white">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-xl font-bold">
                          ADD COMPANY
                        </DialogTitle>
                      </DialogHeader>
                      <form action={handleNewCompany} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="modal-company-name" className="font-heading font-bold">
                            COMPANY NAME *
                          </Label>
                          <Input
                            id="modal-company-name"
                            name="name"
                            required
                            className="neo-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modal-company-website" className="font-heading font-bold">
                            WEBSITE
                          </Label>
                          <Input
                            id="modal-company-website"
                            name="website"
                            type="url"
                            className="neo-input"
                          />
                        </div>
                        <Button type="submit" className="btn-neo w-full">
                          ADD COMPANY
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="modal-salary" className="font-heading font-bold">
                  SALARY (MIN)
                </Label>
                <Input
                  id="modal-salary"
                  name="salary"
                  type="number"
                  placeholder="120000"
                  className="neo-input"
                  defaultValue={formData.salary}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-salaryMax" className="font-heading font-bold">
                  SALARY (MAX)
                </Label>
                <Input
                  id="modal-salaryMax"
                  name="salaryMax"
                  type="number"
                  placeholder="150000"
                  className="neo-input"
                  defaultValue={formData.salaryMax}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-priority" className="font-heading font-bold">
                  PRIORITY
                </Label>
                <Select name="priority" defaultValue="3">
                  <SelectTrigger className="neo-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="neo-brutal bg-white">
                    <SelectItem value="1" className="font-bold">
                      1 - LOW
                    </SelectItem>
                    <SelectItem value="2" className="font-bold">
                      2
                    </SelectItem>
                    <SelectItem value="3" className="font-bold">
                      3 - MEDIUM
                    </SelectItem>
                    <SelectItem value="4" className="font-bold">
                      4
                    </SelectItem>
                    <SelectItem value="5" className="font-bold">
                      5 - HIGH
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="modal-location" className="font-heading font-bold">
                  LOCATION
                </Label>
                <Input
                  id="modal-location"
                  name="location"
                  placeholder="San Francisco, CA"
                  className="neo-input"
                  defaultValue={formData.location}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-remote" className="font-heading font-bold">
                  WORK TYPE
                </Label>
                <Select name="remote" defaultValue={formData.remote || undefined}>
                  <SelectTrigger className="neo-select">
                    <SelectValue placeholder="Select work type" />
                  </SelectTrigger>
                  <SelectContent className="neo-brutal bg-white">
                    <SelectItem value="onsite" className="font-bold">
                      ON-SITE
                    </SelectItem>
                    <SelectItem value="remote" className="font-bold">
                      REMOTE
                    </SelectItem>
                    <SelectItem value="hybrid" className="font-bold">
                      HYBRID
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-url" className="font-heading font-bold">
                JOB POSTING URL
              </Label>
              <Input
                id="modal-url"
                name="url"
                type="url"
                placeholder="https://company.com/careers/job-id"
                className="neo-input"
                defaultValue={formData.url}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-notes" className="font-heading font-bold">
                NOTES
              </Label>
              <Textarea
                id="modal-notes"
                name="notes"
                placeholder="Any additional notes..."
                rows={3}
                className="neo-textarea"
                defaultValue={formData.notes}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-description" className="font-heading font-bold">
                DESCRIPTION
              </Label>
              <Textarea
                id="modal-description"
                name="description"
                placeholder="Job description..."
                rows={5}
                className="neo-textarea"
                defaultValue={formData.description}
              />
            </div>

            {/* Hidden field for AI metadata */}
            <input type="hidden" name="aiMetadata" value={JSON.stringify(formData.aiMetadata)} />

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="btn-neo flex-1">
                ADD JOB
              </Button>
              <Button
                type="button"
                className="btn-neo-secondary px-6"
                onClick={() => (step === 'form' ? setStep('url') : setOpen(false))}
              >
                {step === 'form' ? 'BACK' : 'CANCEL'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
