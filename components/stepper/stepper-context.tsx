'use client'

import type React from 'react'
import { createContext, useCallback, useContext, useState } from 'react'

import { toast } from 'sonner'

export interface StepData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface StepError {
  message: string
  code?: string
  retry?: boolean
}

export interface StepConfig {
  id: string
  title: string
  description?: string
  component: React.ComponentType<StepProps>
  validation?: (
    data: StepData
  ) =>
    | Promise<boolean | { isValid: boolean; message?: string }>
    | boolean
    | { isValid: boolean; message?: string }
  onNext?: (data: StepData, allData: StepData) => Promise<StepData | void> | StepData | void
  onBack?: (data: StepData, allData: StepData) => Promise<void> | void
  canSkip?: boolean
  getNextStep?: (data: StepData, allData: StepData) => string | null
  onError?: (error: StepError, data: StepData) => Promise<void> | void
  hideNextButton?: boolean // New property to hide the default Next button
  hideBackButton?: boolean // New property to hide the default Back button
  hideSkipButton?: boolean // New property to hide the default Skip button
}

export interface StepProps {
  data: StepData
  allData: StepData
  onNext: (data: StepData) => void
  onBack: () => void
  onSkip: () => void
  canSkip: boolean
  isLoading: boolean
  error?: StepError | null
  retry: () => void
}

interface StepperContextType {
  currentStepIndex: number
  currentStep: StepConfig | null
  data: StepData
  isLoading: boolean
  error: StepError | null
  canGoBack: boolean
  canSkip: boolean
  nextStep: (stepData?: StepData) => Promise<void>
  previousStep: () => void
  skipStep: () => void
  goToStep: (stepId: string) => void
  updateData: (newData: StepData) => void
  reset: () => void
  retry: () => void
  clearError: () => void
  resetStepData: (keys: string[]) => void // New method to reset specific data
}

const StepperContext = createContext<StepperContextType | null>(null)

export const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider')
  }
  return context
}

interface StepperProviderProps {
  children: React.ReactNode
  steps: StepConfig[]
  onComplete?: (data: StepData) => Promise<void> | void
  initialData?: StepData
}

export function StepperProvider({
  children,
  steps,
  onComplete,
  initialData = {},
}: StepperProviderProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [data, setData] = useState<StepData>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<StepError | null>(null)
  const [lastStepData, setLastStepData] = useState<StepData>({})

  const currentStep = steps[currentStepIndex] || null

  const updateData = useCallback((newData: StepData) => {
    setData(prev => ({ ...prev, ...newData }))
  }, [])

  const resetStepData = useCallback((keys: string[]) => {
    setData(prev => {
      const newData = { ...prev }
      keys.forEach(key => {
        delete newData[key]
      })
      return newData
    })
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const goToStep = useCallback(
    (stepId: string) => {
      const stepIndex = steps.findIndex(step => step.id === stepId)
      if (stepIndex !== -1) {
        setCurrentStepIndex(stepIndex)
        clearError()
      }
    },
    [steps, clearError]
  )

  const handleError = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any, stepData: StepData) => {
      let stepError: StepError

      // Handle different error types
      if (error?.response) {
        // API response error
        stepError = {
          message:
            error.response.data?.message || error.response.statusText || 'API request failed',
          code: error.response.status?.toString(),
          retry: true,
        }
      } else if (error?.message) {
        // Standard Error object
        stepError = {
          message: error.message,
          retry: true,
        }
      } else if (typeof error === 'string') {
        // String error
        stepError = {
          message: error,
          retry: true,
        }
      } else {
        // Unknown error
        stepError = {
          message: 'An unexpected error occurred',
          retry: true,
        }
      }

      setError(stepError)

      // Call custom error handler if provided
      if (currentStep?.onError) {
        currentStep.onError(stepError, stepData)
      }

      // Show toast notification
      toast.error(stepError.message, {
        action: stepError.retry
          ? {
              label: 'Retry',
              onClick: () => retry(),
            }
          : undefined,
      })
    },
    [currentStep]
  )

  const nextStep = useCallback(
    async (stepData: StepData = {}) => {
      if (!currentStep) return

      setIsLoading(true)
      clearError()
      setLastStepData(stepData)

      try {
        // Update data with current step data
        const updatedData = { ...data, ...stepData }
        setData(updatedData)

        // Validate if validation function exists
        if (currentStep.validation) {
          const validationResult = await currentStep.validation(updatedData)

          // Handle both boolean and {isValid, message} formats
          let isValid = false
          let message = 'Please check your input and try again'

          if (typeof validationResult === 'boolean') {
            isValid = validationResult
          } else if (validationResult && typeof validationResult === 'object') {
            isValid = validationResult.isValid
            message = validationResult.message || message
          }

          if (!isValid) {
            toast.error(message)
            return
          }
        }

        // Execute onNext callback if it exists
        if (currentStep.onNext) {
          const result = await currentStep.onNext(stepData, updatedData)
          if (result) {
            const finalData = { ...updatedData, ...result }
            setData(finalData)
          }
        }

        // Determine next step
        let nextStepId: string | null = null

        if (currentStep.getNextStep) {
          nextStepId = currentStep.getNextStep(stepData, updatedData)
        }

        if (nextStepId) {
          goToStep(nextStepId)
        } else if (currentStepIndex < steps.length - 1) {
          setCurrentStepIndex(prev => prev + 1)
        } else {
          // We're at the last step, complete the flow
          if (onComplete) {
            await onComplete(updatedData)
          }
          toast.success('Form completed successfully!')
        }
      } catch (error) {
        console.error('Error in nextStep:', error)
        handleError(error, stepData)
      } finally {
        setIsLoading(false)
      }
    },
    [currentStep, currentStepIndex, data, steps, onComplete, goToStep, clearError, handleError]
  )

  const retry = useCallback(() => {
    if (error && lastStepData) {
      nextStep(lastStepData)
    }
  }, [error, lastStepData, nextStep])

  const previousStep = useCallback(async () => {
    if (currentStepIndex > 0) {
      setIsLoading(true)
      clearError()

      try {
        if (currentStep?.onBack) {
          await currentStep.onBack(data, data)
        }
        setCurrentStepIndex(prev => prev - 1)
      } catch (error) {
        console.error('Error in previousStep:', error)
        handleError(error, data)
      } finally {
        setIsLoading(false)
      }
    }
  }, [currentStepIndex, currentStep, data, clearError, handleError])

  const skipStep = useCallback(() => {
    if (currentStep?.canSkip && currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1)
      clearError()
      toast.info('Step skipped')
    }
  }, [currentStep, currentStepIndex, steps.length, clearError])

  const reset = useCallback(() => {
    setCurrentStepIndex(0)
    setData(initialData)
    setIsLoading(false)
    setError(null)
    setLastStepData({})
    toast.info('Form reset')
  }, [initialData])

  const value: StepperContextType = {
    currentStepIndex,
    currentStep,
    data,
    isLoading,
    error,
    canGoBack: currentStepIndex > 0,
    canSkip: currentStep?.canSkip || false,
    nextStep,
    previousStep,
    skipStep,
    goToStep,
    updateData,
    reset,
    retry,
    clearError,
    resetStepData,
  }

  return <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
}
