'use client'

import type { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Eye, EyeOff, Settings } from 'lucide-react'

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
  const hiddenColumnsCount = table
    .getAllColumns()
    .filter(column => !column.getIsVisible() && column.getCanHide()).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="neo-toolbar-button flex h-10">
          <Settings className="mr-2 h-4 w-4" />
          COLUMNS
          {hiddenColumnsCount > 0 && (
            <span className="font-heading ml-2 rounded-full bg-black px-2 py-0.5 text-xs text-white">
              {hiddenColumnsCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="neo-brutal w-[200px] bg-white">
        <DropdownMenuLabel className="font-heading flex items-center justify-between font-bold">
          TOGGLE COLUMNS
          <Button
            variant="ghost"
            size="sm"
            className="font-heading h-6 px-2 text-xs font-bold"
            onClick={() => {
              table.getAllColumns().forEach(column => {
                if (column.getCanHide()) {
                  column.toggleVisibility(true)
                }
              })
            }}
          >
            SHOW ALL
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(column => typeof column.accessorFn !== 'undefined' && column.getCanHide())
          .map(column => {
            const isVisible = column.getIsVisible()
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="flex items-center justify-between font-bold"
                checked={isVisible}
                onCheckedChange={value => column.toggleVisibility(!!value)}
              >
                <span className="flex items-center">
                  {isVisible ? (
                    <Eye className="mr-2 h-3 w-3" />
                  ) : (
                    <EyeOff className="mr-2 h-3 w-3" />
                  )}
                  {column.id
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                    .toUpperCase()}
                </span>
              </DropdownMenuCheckboxItem>
            )
          })}
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-bold text-gray-600">
          {
            table.getAllColumns().filter(column => column.getIsVisible() && column.getCanHide())
              .length
          }{' '}
          OF {table.getAllColumns().filter(column => column.getCanHide()).length} COLUMNS VISIBLE
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
