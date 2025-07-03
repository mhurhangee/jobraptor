import { openai } from '@ai-sdk/openai'

import { NextRequest, NextResponse } from 'next/server'

import { jobExtractionSchema } from '@/components/add-job-form/schemas'

import { generateObject } from 'ai'

export const runtime = 'edge'
export const maxDuration = 300

export async function POST(request: NextRequest) {
  const { diffBotUrlExtractionResult, exaUrlExtractionResult } = await request.json()

  const jobInfo = await generateObject({
    model: openai('gpt-4.1-mini'),
    prompt:
      'Extract job information from the following text extracted from the job listing. Please extract as much information as possible and ensure it is accurate. Do not include any additional information that is not present in the original job listing. ' +
      diffBotUrlExtractionResult.content +
      '\n\n' +
      exaUrlExtractionResult.content,
    schema: jobExtractionSchema,
  })

  return NextResponse.json({
    success: true,
    aiExtractedJobInfo: jobInfo.object,
  })
}
