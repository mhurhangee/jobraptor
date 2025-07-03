'use client'

import type React from 'react'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'

import { cn } from '@/lib/utils'

import { AlertCircle, Check, Edit3, Loader2, X } from 'lucide-react'

interface EditableTextareaProps {
  value: string
  onSave?: (value: string) => void | Promise<void>
  placeholder?: string
  className?: string
  maxLength?: number
  minRows?: number
  maxRows?: number
  debounceMs?: number
  showSaveStatus?: boolean
  showEditIcon?: boolean
  truncateLength?: number
}

export function EditableTextarea({
  value,
  onSave,
  placeholder = 'Click to add content...',
  className,
  maxLength,
  minRows = 3,
  maxRows = 10,
  debounceMs = 1500,
  showSaveStatus = true,
  showEditIcon = true,
  truncateLength = 150,
}: EditableTextareaProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [isPending, startTransition] = useTransition()

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setEditValue(value)
  }, [value])

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      const length = textareaRef.current.value.length
      textareaRef.current.setSelectionRange(length, length)
      autoResize()
    }
  }, [isEditing])

  const autoResize = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    const scrollHeight = textarea.scrollHeight
    const lineHeight = Number.parseInt(getComputedStyle(textarea).lineHeight)
    const minHeight = lineHeight * minRows
    const maxHeight = lineHeight * maxRows

    textarea.style.height = `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`
  }

  const debouncedSave = useCallback(
    async (newValue: string) => {
      if (!onSave || newValue === value) return

      setSaveStatus('saving')

      try {
        startTransition(async () => {
          await onSave(newValue)
          setSaveStatus('saved')

          saveTimeoutRef.current = setTimeout(() => {
            setSaveStatus('idle')
          }, 2000)
        })
      } catch (error) {
        console.error('Save failed:', error)
        setSaveStatus('error')

        saveTimeoutRef.current = setTimeout(() => {
          setSaveStatus('idle')
        }, 3000)
      }
    },
    [onSave, value]
  )

  const handleInputChange = (newValue: string) => {
    setEditValue(newValue)
    autoResize()

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      debouncedSave(newValue)
    }, debounceMs)
  }

  const handleSave = async () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (editValue !== value) {
      await debouncedSave(editValue)
    }

    setIsEditing(false)
  }

  const handleCancel = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    setEditValue(value)
    setIsEditing(false)
    setSaveStatus('idle')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel()
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSave()
    }
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  const getSaveStatusIcon = () => {
    if (!showSaveStatus || saveStatus === 'idle') return null

    switch (saveStatus) {
      case 'saving':
        return <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
      case 'saved':
        return <Check className="h-4 w-4 text-green-500" />
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const shouldTruncate = !isEditing && value && value.length > truncateLength
  const truncatedValue = shouldTruncate ? `${value.slice(0, truncateLength)}...` : value

  if (isEditing) {
    return (
      <div className={cn('space-y-2', className)}>
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={editValue}
            onChange={e => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            maxLength={maxLength}
            className={cn(
              'w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm',
              'focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none',
              'transition-colors duration-200',
              (isPending || saveStatus === 'saving') && 'opacity-75'
            )}
            style={{ minHeight: `${minRows * 1.5}rem` }}
          />
          {maxLength && (
            <div className="absolute right-2 bottom-2 text-xs text-gray-400">
              {editValue.length}/{maxLength}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={isPending}
              className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              <Check className="h-3 w-3" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="inline-flex items-center gap-1 rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
            >
              <X className="h-3 w-3" />
              Cancel
            </button>
            {getSaveStatusIcon()}
          </div>

          <div className="text-xs text-gray-500">
            <kbd className="rounded bg-gray-100 px-1 py-0.5 text-xs">Ctrl+Enter</kbd> to save
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={cn(
        'group relative cursor-pointer rounded-md border border-transparent p-3 transition-colors',
        'hover:border-gray-200 hover:bg-gray-50',
        !value && 'text-gray-500',
        className
      )}
    >
      <div className="text-sm leading-relaxed whitespace-pre-wrap">
        {truncatedValue || placeholder}
      </div>

      {shouldTruncate && (
        <button
          onClick={e => {
            e.stopPropagation()
            setIsEditing(true)
          }}
          className="mt-2 text-xs text-blue-600 hover:text-blue-800"
        >
          Show more
        </button>
      )}

      {showEditIcon && (
        <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Edit3 className="h-4 w-4 text-gray-400" />
        </div>
      )}

      {getSaveStatusIcon() && <div className="absolute top-2 right-8">{getSaveStatusIcon()}</div>}
    </div>
  )
}
