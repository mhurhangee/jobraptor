"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { createJob } from "@/lib/actions/jobs"
import { createCompany } from "@/lib/actions/companies"
import type { Company } from "@/lib/db/schema"
import { Plus } from "lucide-react"

interface AddJobModalProps {
  companies: Company[]
  trigger?: React.ReactNode
}

export function AddJobModal({ companies, trigger }: AddJobModalProps) {
  const [open, setOpen] = useState(false)
  const [selectedCompanyId, setSelectedCompanyId] = useState("")
  const [showNewCompanyDialog, setShowNewCompanyDialog] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    await createJob(formData)
    setOpen(false)
  }

  const handleNewCompany = async (formData: FormData) => {
    const newCompany = await createCompany(formData)
    setSelectedCompanyId(newCompany.id)
    setShowNewCompanyDialog(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button className="btn-neo">ADD NEW JOB</Button>}</DialogTrigger>
      <DialogContent className="neo-brutal bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="bg-neon-yellow p-6 -m-6 mb-6 border-b-4 border-black">
          <DialogTitle className="font-heading text-3xl font-bold">ADD NEW JOB</DialogTitle>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-6 p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-companyId" className="font-heading font-bold">
                COMPANY *
              </Label>
              <div className="flex gap-2">
                <Select name="companyId" value={selectedCompanyId} onValueChange={setSelectedCompanyId} required>
                  <SelectTrigger className="neo-select">
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                  <SelectContent className="neo-brutal bg-white">
                    {companies.map((company) => (
                      <SelectItem key={company.id} value={company.id} className="font-bold">
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Dialog open={showNewCompanyDialog} onOpenChange={setShowNewCompanyDialog}>
                  <DialogTrigger asChild>
                    <Button type="button" className="neo-brutal bg-neon-green hover:bg-green-400 p-3">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="neo-brutal bg-white">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-xl font-bold">ADD COMPANY</DialogTitle>
                    </DialogHeader>
                    <form action={handleNewCompany} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="modal-company-name" className="font-heading font-bold">
                          COMPANY NAME *
                        </Label>
                        <Input id="modal-company-name" name="name" required className="neo-input" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="modal-company-website" className="font-heading font-bold">
                          WEBSITE
                        </Label>
                        <Input id="modal-company-website" name="website" type="url" className="neo-input" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-salary" className="font-heading font-bold">
                SALARY (MIN)
              </Label>
              <Input id="modal-salary" name="salary" type="number" placeholder="120000" className="neo-input" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-salaryMax" className="font-heading font-bold">
                SALARY (MAX)
              </Label>
              <Input id="modal-salaryMax" name="salaryMax" type="number" placeholder="150000" className="neo-input" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="modal-location" className="font-heading font-bold">
                LOCATION
              </Label>
              <Input id="modal-location" name="location" placeholder="San Francisco, CA" className="neo-input" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-remote" className="font-heading font-bold">
                WORK TYPE
              </Label>
              <Select name="remote">
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
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="btn-neo flex-1">
              ADD JOB
            </Button>
            <Button type="button" className="btn-neo-secondary px-6" onClick={() => setOpen(false)}>
              CANCEL
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
