"use client"

import { X } from "lucide-react"
import type { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./view-options"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter companies..."
          value={(table.getColumn("company_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("company_name")?.setFilterValue(event.target.value)}
          className="neo-input h-10 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="neo-toolbar-button h-10 px-3">
            RESET
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
