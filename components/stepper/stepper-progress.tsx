'use client'

import { cn } from '@/lib/utils'

import { Check } from 'lucide-react'

import { useStepper } from './stepper-context'

interface StepperProgressProps {
  className?: string
  variant?: 'panel' | 'collapsible'
  steps: Array<{ id: string; title: string; description?: string }>
}

export function StepperProgress({ className, variant = 'panel', steps }: StepperProgressProps) {
  const { currentStepIndex } = useStepper()

  if (variant === 'collapsible') {
    return null
  }

  return (
    <div className={cn('mb-8 w-full', className)}>
      <div className="flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-1 flex-col items-center">
            {/* Background line - only show between steps */}
            {index < steps.length - 1 && (
              <div className="bg-muted-foreground/25 absolute top-5 left-1/2 hidden h-0.5 w-full sm:block" />
            )}

            {/* Progress line - only show for completed segments */}
            {index < steps.length - 1 && index < currentStepIndex && (
              <div className="bg-primary absolute top-5 left-1/2 hidden h-0.5 w-full sm:block" />
            )}

            {/* Step circle */}
            <div
              className={cn(
                'bg-background relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors',
                index <= currentStepIndex
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-muted-foreground/25 text-muted-foreground'
              )}
            >
              {index < currentStepIndex ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>

            {/* Step title */}
            <div className="max-w-[120px] text-center sm:max-w-none">
              <div
                className={cn(
                  'text-xs leading-tight font-medium sm:text-sm',
                  index <= currentStepIndex ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {step.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
