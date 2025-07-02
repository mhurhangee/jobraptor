import { z } from 'zod'

export const jobExtractionSchema = z.object({
  title: z.string().describe('Job/position title'),
  company: z.string().describe('Company name'),

  location: z
    .string()
    .describe(
      'The location of the job, hybrid, remote, onsite, e.g. London, UK, Remote, Hybrid, Onsite'
    )
    .optional(),

  description: z
    .string()
    .describe(
      'A summary of the job role in markdown format as plain, readable English. Use headings, subheadings, lists, bold, italic, etc. to make the text more readable. Avoid jargon and buzzwords. Focusing on specific requirements, role, benefits, and any other relevant information not already captured in the other fields'
    )
    .optional(),
  salary: z
    .string()
    .describe(
      'The salary of the job, e.g. "£50,000 - £60,000 per year\, "Competitive", "Not disclosed"'
    )
    .optional(),
  contact: z.string().describe('The contact information for the job').optional(),
})

export type JobExtractionSchema = z.infer<typeof jobExtractionSchema>

export const jobSchema = jobExtractionSchema.extend({
  status: z.string().describe('The status of the job, e.g. Applied, Interview, etc.').optional(),

  appliedAt: z.date().optional(),
  nextAction: z.string().optional(),
  nextActionDeadline: z.date().optional(),

  notes: z.string().optional(),

  postingUrl: z.string().optional(),

  aiMetadata: z
    .object({
      diffBotUrlExtractionResult: z.any(),
      exaUrlExtractionResult: z.any(),
    })
    .optional(),
})

export type JobSchema = z.infer<typeof jobSchema>

export const dbJobSchema = jobSchema.extend({
  id: z.string().describe('The unique identifier of the job'),
  userId: z.string().describe('The unique identifier of the user'),
  createdAt: z.date().describe('The date the job was created'),
  updatedAt: z.date().describe('The date the job was last updated'),
})

export type DbJobSchema = z.infer<typeof dbJobSchema>

export interface StepperData {
  job?: JobSchema & { id?: string }
}
