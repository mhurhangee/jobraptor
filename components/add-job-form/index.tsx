import { Stepper } from '@/components/stepper/stepper'
import { type StepConfig, StepperProvider } from '@/components/stepper/stepper-context'

import { createJob } from '@/lib/actions/jobs'
import { fetchAPI } from '@/lib/utils/fetch'
import { validateUrl } from '@/lib/utils/validate-url'

import { JobForm } from './job-form'
import { type StepperData, jobSchema } from './schemas'
import { SuccessStep } from './success-step'
import { URLStep } from './url-step'

const steps: StepConfig[] = [
  {
    id: 'posting-url',
    title: 'Job Posting URL',
    description: 'Enter the URL of the job posting (or skip to add manually)',
    component: URLStep,
    validation: (data: StepperData) =>
      Promise.resolve({
        isValid: validateUrl(data.job?.postingUrl?.trim()),
        message: 'Please enter a valid URL',
      }),
    canSkip: true,
    onNext: async (stepData: StepperData) => {
      const diffBotUrlExtractionResult = await fetchAPI(
        '/api/diff-bot-extract-job',
        { url: stepData.job?.postingUrl },
        'Failed to get content from URL. The website owner might have disabled the extraction.'
      )

      const exaUrlExtractionResult = await fetchAPI(
        '/api/exa-extract-url',
        { url: stepData.job?.postingUrl },
        'Failed to get content from URL. The website owner might have disabled the extraction.'
      )

      const AIJobInfoResponse = await fetchAPI(
        '/api/extract-job-info',
        { diffBotUrlExtractionResult, exaUrlExtractionResult },
        'Failed to extract job info from the content.'
      )

      return {
        job: {
          ...AIJobInfoResponse.aiExtractedJobInfo,
          postingUrl: stepData.job?.postingUrl,
          aiMetadata: { diffBotUrlExtractionResult, exaUrlExtractionResult },
        },
      }
    },
  },
  {
    id: 'job-form',
    title: 'Job Form',
    description: 'Fill in the job form',
    component: JobForm,
    validation: (data: StepperData) =>
      Promise.resolve({
        isValid: data.job?.title?.trim() !== '' && data.job?.company?.trim() !== '',
        message: 'Please enter a job title and company',
      }),
    canSkip: true,
    onNext: async (stepData: StepperData) => {
      const job = stepData.job

      const jobToSave = jobSchema.parse(job)

      const { id } = await createJob(jobToSave)

      return {
        job: { ...jobToSave, id },
      }
    },
    hideSkipButton: true,
  },
  {
    id: 'success',
    title: 'All Done!',
    description: 'Your setup is complete',
    component: SuccessStep,
    hideNextButton: true,
    hideBackButton: true,
    hideSkipButton: true,
  },
]

export function AddJobForm() {
  const handleComplete = async (data: StepperData) => {
    console.log('Form completed with data:', data)
    // Here you would typically send the data to your backend
  }

  const initialData: StepperData = {
    job: jobSchema.parse({
      title: '',
      company: '',
    }),
  }

  return (
    <StepperProvider steps={steps} onComplete={handleComplete} initialData={initialData}>
      <Stepper steps={steps} variant="collapsible" />
    </StepperProvider>
  )
}
