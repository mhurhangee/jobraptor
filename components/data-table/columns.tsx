'use client'

import type { ColumnDef } from '@tanstack/react-table'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { DeleteJobAction } from '@/components/delete-job-action'

import { STATUS_OPTIONS } from '@/lib/config/job-status'
import { DbJob } from '@/lib/db/schema'

import { Eye, LinkIcon, MoreHorizontal, Pencil } from 'lucide-react'

import { DataTableColumnHeader } from './column-header'

export const columns: ColumnDef<DbJob>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-2 border-black"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-2 border-black"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'company',
    header: ({ column }) => <DataTableColumnHeader column={column} title="COMPANY" />,
    cell: ({ row }) => {
      const company = row.original.company
      return (
        <div className="flex items-center">
          <span className="max-w-[150px] truncate font-bold" title={company || 'Unknown'}>
            {' '}
            <Link href={`/jobs/${row.original.id}`}>{company || 'Unknown'}</Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title="TITLE" />,
    cell: ({ row }) => {
      const title = row.getValue('title') as string
      return (
        <span className="block max-w-[200px] truncate" title={title}>
          <Link href={`/jobs/${row.original.id}`}>{title}</Link>
        </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const statusLabel =
        STATUS_OPTIONS.find(opt => opt.value === status)?.label || status.toUpperCase()

      return <Link href={`/jobs/${row.original.id}`}>{statusLabel}</Link>
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'salary',
    header: ({ column }) => <DataTableColumnHeader column={column} title="SALARY" />,
    cell: ({ row }) => {
      const salary = row.original.salary

      if (!salary) return <span className="text-gray-500">Not specified</span>
      return (
        <span className="block max-w-[150px] truncate" title={salary}>
          <Link href={`/jobs/${row.original.id}`}>{salary}</Link>
        </span>
      )
    },
  },
  {
    accessorKey: 'location',
    header: 'LOCATION',
    cell: ({ row }) => {
      const location = row.original.location

      if (!location) return <span className="text-gray-500">Not specified</span>
      return (
        <span className="block max-w-[100px] truncate" title={location}>
          <Link href={`/jobs/${row.original.id}`}>{location}</Link>
        </span>
      )
    },
  },
  {
    accessorKey: 'appliedAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title="APPLIED" />,
    cell: ({ row }) => {
      const date = row.getValue('appliedAt') as Date | null
      return (
        <span className="font-bold">
          <Link href={`/jobs/${row.original.id}`}>
            {date?.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }) || 'N/A'}
          </Link>
        </span>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const job = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 border-2 border-black p-0 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="neo-brutal bg-white">
            <DropdownMenuLabel className="font-heading font-bold">ACTIONS</DropdownMenuLabel>
            {job.postingUrl && (
              <DropdownMenuItem asChild>
                <a
                  href={job.postingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  LINK
                </a>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem asChild>
              <Link href={`/jobs/${job.id}`} className="font-bold">
                <Eye className="mr-2 h-4 w-4" />
                VIEW
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/jobs/${job.id}/edit`} className="font-bold">
                <Pencil className="mr-2 h-4 w-4" />
                EDIT
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteJobAction jobId={job.id} jobTitle={job.title} company={job.company} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
