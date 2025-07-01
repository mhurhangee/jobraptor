"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Bot, LinkIcon, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableColumnHeader } from "./column-header"

// Define the job type based on what we're actually getting from the database
type JobWithCompany = {
  id: string
  title: string
  description: string | null
  salary: string | null
  salaryMax: string | null
  location: string | null
  remote: string | null
  status: string
  priority: number | null
  url: string | null
  notes: string | null
  appliedAt: Date | null
  createdAt: Date
  updatedAt: Date
  companyId: string
  company: {
    id: string
    name: string
    website: string | null
    industry: string | null
    size: string | null
    location: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
  } | null
}

const statusOptions = [
  { value: "applied", label: "APPLIED" },
  { value: "interviewing", label: "INTERVIEWING" },
  { value: "offer", label: "OFFER" },
  { value: "rejected", label: "REJECTED" },
  { value: "withdrawn", label: "WITHDRAWN" },
]

export const columns: ColumnDef<JobWithCompany>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-2 border-black"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-2 border-black"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "company.name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="COMPANY" />,
    cell: ({ row }) => {
      const company = row.original.company
      return (
        <div className="flex flex-col">
          <span className="font-heading font-bold">{company?.name || "Unknown Company"}</span>
          {company?.industry && <span className="text-xs font-bold text-gray-600 uppercase">{company.industry}</span>}
        </div>
      )
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="POSITION" />,
    cell: ({ row }) => row.getValue("title"),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const statusLabel = statusOptions.find((opt) => opt.value === status)?.label || status.toUpperCase()

      return statusLabel
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "salary",
    header: ({ column }) => <DataTableColumnHeader column={column} title="SALARY" />,
    cell: ({ row }) => {
      const salary = row.getValue("salary") as string | null
      const salaryMax = row.original.salaryMax

      const formatSalary = (sal: string | null, max: string | null) => {
        if (!sal) return null
        const amount = Number.parseFloat(sal)
        if (isNaN(amount)) return null

        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount)

        if (max) {
          const maxAmount = Number.parseFloat(max)
          if (!isNaN(maxAmount)) {
            const formattedMax = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(maxAmount)
            return `${formatted} - ${formattedMax}`
          }
        }
        return formatted
      }

      return formatSalary(salary, salaryMax)
    },
  },
  {
    accessorKey: "location",
    header: "LOCATION",
    cell: ({ row }) => {
      const location = row.getValue("location") as string | null
      const remote = row.original.remote

      return (
        <div className="space-y-1">
          {location}
          {remote && <span className="ml-2">{remote}</span>}
        </div>
      )
    },
  },
  {
    accessorKey: "appliedAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="APPLIED" />,
    cell: ({ row }) => {
      const date = row.getValue("appliedAt") as Date | null
      return <span className="font-bold">{date?.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) || "N/A"}</span>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const job = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 border-2 border-black hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="neo-brutal bg-white">
            <DropdownMenuLabel className="font-heading font-bold">ACTIONS</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/jobs/${job.id}`} className="font-bold">
                <Eye className="mr-2 h-4 w-4" />
                VIEW DETAILS
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/jobs/${job.id}/edit`} className="font-bold">
                EDIT FORM
              </Link>
            </DropdownMenuItem>
            {job.url && (
              <DropdownMenuItem asChild>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="font-bold">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  VIEW POSTING
                </a>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-bold">
              <Bot className="mr-2 h-4 w-4" />
              AI ENRICH...
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
