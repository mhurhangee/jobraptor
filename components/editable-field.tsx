'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { updateJobField } from '@/lib/actions/jobs'

import { Check, Loader2, Pencil, X } from 'lucide-react'

interface EditableFieldProps {
  jobId: string
  fieldName: string
  fieldValue: string | null
  fieldType?: 'text' | 'textarea' | 'date'
  label?: string
  className?: string
}

export function EditableField({
  jobId,
  fieldName,
  fieldValue,
  fieldType = 'text',
  label,
  className = '',
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(fieldValue || '')
  const [isPending, setIsPending] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setValue(fieldValue || '')
    setIsEditing(false)
  }

  const handleSave = async () => {
    try {
      setIsPending(true)
      await updateJobField(jobId, fieldName, value)
      setIsEditing(false)
    } catch (error) {
      console.error(`Error updating ${fieldName}:`, error)
    } finally {
      setIsPending(false)
    }
  }

  if (isEditing) {
    return (
      <div className={`space-y-2 ${className}`}>
        {label && <h3 className="text-muted-foreground text-sm font-semibold">{label}</h3>}
        <div className="flex gap-2">
          {fieldType === 'textarea' ? (
            <Textarea
              value={value}
              onChange={e => setValue(e.target.value)}
              className="neo-input flex-1"
              rows={4}
              disabled={isPending}
            />
          ) : fieldType === 'date' ? (
            <Input
              type="date"
              value={value ? new Date(value).toISOString().split('T')[0] : ''}
              onChange={e => setValue(e.target.value)}
              className="neo-input flex-1"
              disabled={isPending}
            />
          ) : (
            <Input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="neo-input flex-1"
              disabled={isPending}
            />
          )}
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={handleSave}
              disabled={isPending}
              className="h-8 w-8 border-2 border-green-600 hover:bg-green-100"
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCancel}
              disabled={isPending}
              className="h-8 w-8 border-2 border-gray-400 hover:bg-gray-100"
            >
              <X className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`group relative ${className}`}>
      {label && <h3 className="text-muted-foreground text-sm font-semibold">{label}</h3>}
      <div className="flex items-center gap-2">
        {fieldType === 'textarea' ? (
          <div className="whitespace-pre-wrap">{fieldValue || 'Not specified'}</div>
        ) : (
          <div>{fieldValue || 'Not specified'}</div>
        )}
        <Button
          size="icon"
          variant="ghost"
          onClick={handleEdit}
          className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Pencil className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
