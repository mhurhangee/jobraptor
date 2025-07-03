'use client'

import type React from 'react'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'

import { cn } from '@/lib/utils'

import { AlertCircle, Check, ChevronDown, Loader2, X } from 'lucide-react'

interface InlineEditableProps {
  value: string
  onSave?: (value: string) => void | Promise<void>
  onRemove?: () => void
  options?: { value: string; label: string }[]
  placeholder?: string
  className?: string
  variant?: 'default' | 'blue' | 'orange' | 'green' | 'purple'
  debounceMs?: number
  showSaveStatus?: boolean
}

export function InlineEditable({
  value,
  onSave,
  onRemove,
  options = [],
  placeholder = 'Enter value',
  className,
  variant = 'default',
  debounceMs = 1000,
  showSaveStatus = true,
}: InlineEditableProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [isPending, startTransition] = useTransition()

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setEditValue(value)
  }, [value])

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

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
    setIsOpen(false)
  }

  const handleCancel = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    setEditValue(value)
    setIsEditing(false)
    setIsOpen(false)
    setSaveStatus('idle')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const handleOptionSelect = async (optionValue: string) => {
    setEditValue(optionValue)
    await debouncedSave(optionValue)
    setIsEditing(false)
    setIsOpen(false)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'orange':
        return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'green':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const getSaveStatusIcon = () => {
    if (!showSaveStatus || saveStatus === 'idle') return null

    switch (saveStatus) {
      case 'saving':
        return <Loader2 className="h-3 w-3 animate-spin text-gray-400" />
      case 'saved':
        return <Check className="h-3 w-3 text-green-500" />
      case 'error':
        return <AlertCircle className="h-3 w-3 text-red-500" />
      default:
        return null
    }
  }

  const displayValue = value || placeholder
  const isSelect = options.length > 0

  return (
    <div className="relative inline-block">
      <div
        ref={containerRef}
        className={cn(
          'hover:bg-opacity-80 inline-flex cursor-pointer items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
          getVariantStyles(),
          (isPending || saveStatus === 'saving') && 'opacity-75',
          className
        )}
        onClick={() => {
          if (isSelect) {
            setIsOpen(!isOpen)
          } else {
            setIsEditing(true)
          }
        }}
      >
        {isEditing && !isSelect ? (
          <input
            ref={inputRef}
            value={editValue}
            onChange={e => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className="font-inherit w-full min-w-0 border-none bg-transparent text-inherit outline-none"
            style={{ width: `${Math.max(displayValue.length * 0.6, 4)}em` }}
          />
        ) : (
          <span className="whitespace-nowrap">{displayValue}</span>
        )}

        {getSaveStatusIcon()}

        {isSelect && (
          <ChevronDown className={cn('h-3 w-3 transition-transform', isOpen && 'rotate-180')} />
        )}

        {onRemove && (
          <button
            onClick={e => {
              e.stopPropagation()
              onRemove()
            }}
            className="ml-1 rounded-full p-0.5 transition-colors hover:bg-black/10"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {isSelect && isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 z-20 mt-1 min-w-full rounded-md border border-gray-200 bg-white shadow-lg">
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className="block w-full px-3 py-2 text-left text-sm first:rounded-t-md last:rounded-b-md hover:bg-gray-50"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
