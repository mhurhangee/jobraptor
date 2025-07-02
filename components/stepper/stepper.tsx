'use client'

import { useEffect, useState } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'

import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RefreshCw,
  RotateCcw,
} from 'lucide-react'

import { type StepConfig, useStepper } from './stepper-context'
import { StepperProgress } from './stepper-progress'

interface StepperProps {
  steps: StepConfig[]
  variant?: 'panel' | 'collapsible'
  className?: string
}

export function Stepper({ steps, variant = 'panel', className }: StepperProps) {
  const {
    currentStep,
    data,
    isLoading,
    error,
    canGoBack,
    canSkip,
    nextStep,
    previousStep,
    skipStep,
    reset,
    retry,
  } = useStepper()

  if (variant === 'collapsible') {
    return <CollapsibleStepper steps={steps} className={className} />
  }

  if (!currentStep) return null

  const StepComponent = currentStep.component

  // Check if we should show default buttons
  const showNextButton = !currentStep.hideNextButton
  const showBackButton = !currentStep.hideBackButton
  const showSkipButton = !currentStep.hideSkipButton && canSkip

  return (
    <div className={cn('mx-auto w-full max-w-4xl px-4', className)}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex-1">
          <StepperProgress variant={variant} steps={steps} />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={reset}
          className="text-muted-foreground hover:text-foreground ml-4"
          title="Reset form"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl">{currentStep.title}</CardTitle>
          {currentStep.description && (
            <CardDescription className="text-sm sm:text-base">
              {currentStep.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{error.message}</span>
                {error.retry && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={retry}
                    className="ml-2 bg-transparent"
                  >
                    <RefreshCw className="mr-1 h-3 w-3" />
                    Retry
                  </Button>
                )}
              </AlertDescription>
            </Alert>
          )}

          <StepComponent
            data={data}
            allData={data}
            onNext={nextStep}
            onBack={previousStep}
            onSkip={skipStep}
            canSkip={canSkip}
            isLoading={isLoading}
            error={error}
            retry={retry}
          />

          {/* Only show default buttons if not hidden */}
          {(showBackButton || showSkipButton || showNextButton) && (
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-0">
              {showBackButton && (
                <Button
                  variant="outline"
                  onClick={previousStep}
                  disabled={!canGoBack || isLoading}
                  className="order-2 flex items-center justify-center gap-2 bg-transparent sm:order-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}

              <div className="order-1 flex gap-2 sm:order-2">
                {showSkipButton && (
                  <Button
                    variant="ghost"
                    onClick={skipStep}
                    disabled={isLoading}
                    className="flex-1 sm:flex-none"
                  >
                    Skip
                  </Button>
                )}
                {showNextButton && (
                  <Button
                    onClick={() => nextStep(data)}
                    disabled={isLoading}
                    className="flex flex-1 items-center justify-center gap-2 sm:flex-none"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function CollapsibleStepper({ steps, className }: { steps: StepConfig[]; className?: string }) {
  const {
    currentStepIndex,
    data,
    nextStep,
    previousStep,
    skipStep,
    isLoading,
    error,
    canGoBack,
    canSkip,
    goToStep,
    reset,
    retry,
  } = useStepper()
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([0]))

  // Auto-scroll to active step
  useEffect(() => {
    const activeElement = document.getElementById(`step-${currentStepIndex}`)
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentStepIndex])

  const handleStepClick = (index: number) => {
    // Only allow clicking on completed steps (to go back) or current step
    if (index < currentStepIndex) {
      // Going back to a completed step
      goToStep(steps[index].id)
      setOpenSteps(new Set([index]))
    } else if (index === currentStepIndex) {
      // Toggle current step
      const newOpenSteps = new Set(openSteps)
      if (newOpenSteps.has(index)) {
        newOpenSteps.delete(index)
      } else {
        newOpenSteps.add(index)
      }
      setOpenSteps(newOpenSteps)
    }
    // Don't allow clicking on future steps
  }

  // Ensure current step is always open
  useEffect(() => {
    setOpenSteps(prev => new Set([...prev, currentStepIndex]))
  }, [currentStepIndex])

  return (
    <div className={cn('mx-auto w-full max-w-4xl space-y-4 px-4', className)}>
      <div className="mb-4 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={reset}
          className="text-muted-foreground hover:text-foreground"
          title="Reset form"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {steps.map((step, index) => {
        const StepComponent = step.component
        const isActive = index === currentStepIndex
        const isCompleted = index < currentStepIndex
        const isFuture = index > currentStepIndex
        const isOpen = openSteps.has(index)
        const canClick = isCompleted || isActive

        // Check if we should show default buttons for this step
        const showNextButton = !step.hideNextButton
        const showBackButton = !step.hideBackButton
        const showSkipButton = !step.hideSkipButton && canSkip

        return (
          <Card
            key={step.id}
            id={`step-${index}`}
            className={cn(
              'transition-all',
              isActive && 'ring-primary ring-2',
              isCompleted && 'bg-muted/50',
              isFuture && 'opacity-60'
            )}
          >
            <CardHeader
              className={cn(
                'p-4 transition-colors sm:p-6',
                canClick ? 'hover:bg-muted/50 cursor-pointer' : 'cursor-not-allowed'
              )}
              onClick={() => handleStepClick(index)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors',
                    isCompleted
                      ? 'bg-primary text-primary-foreground'
                      : isActive
                        ? 'bg-primary/10 text-primary border-primary border-2'
                        : 'bg-muted text-muted-foreground'
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-left text-base sm:text-lg">{step.title}</CardTitle>
                  {step.description && (
                    <CardDescription className="text-left text-sm sm:text-base">
                      {step.description}
                    </CardDescription>
                  )}
                </div>
                {isFuture && (
                  <div className="text-muted-foreground bg-muted hidden rounded px-2 py-1 text-xs sm:block">
                    Complete previous steps
                  </div>
                )}
              </div>
            </CardHeader>
            {isOpen && isActive && (
              <CardContent className="p-4 pt-0 sm:p-6">
                <div className="space-y-6">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription className="flex items-center justify-between">
                        <span>{error.message}</span>
                        {error.retry && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={retry}
                            className="ml-2 bg-transparent"
                          >
                            <RefreshCw className="mr-1 h-3 w-3" />
                            Retry
                          </Button>
                        )}
                      </AlertDescription>
                    </Alert>
                  )}

                  <StepComponent
                    data={data}
                    allData={data}
                    onNext={nextStep}
                    onBack={previousStep}
                    onSkip={skipStep}
                    canSkip={canSkip}
                    isLoading={isLoading}
                    error={error}
                    retry={retry}
                  />

                  {/* Only show default buttons if not hidden */}
                  {(showBackButton || showSkipButton || showNextButton) && (
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-0">
                      {showBackButton && (
                        <Button
                          variant="outline"
                          onClick={previousStep}
                          disabled={!canGoBack || isLoading}
                          className="order-2 flex items-center justify-center gap-2 bg-transparent sm:order-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Back
                        </Button>
                      )}

                      <div className="order-1 flex gap-2 sm:order-2">
                        {showSkipButton && (
                          <Button
                            variant="ghost"
                            onClick={skipStep}
                            disabled={isLoading}
                            className="flex-1 sm:flex-none"
                          >
                            Skip
                          </Button>
                        )}
                        {showNextButton && (
                          <Button
                            onClick={() => nextStep(data)}
                            disabled={isLoading}
                            className="flex flex-1 items-center justify-center gap-2 sm:flex-none"
                          >
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <>
                                Next
                                <ChevronRight className="h-4 w-4" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        )
      })}
    </div>
  )
}
