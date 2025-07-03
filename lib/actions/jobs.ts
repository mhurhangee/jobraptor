'use server'

import { auth } from '@clerk/nextjs/server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { JobSchema } from '@/components/add-job-form/schemas'

import { db } from '@/lib/db'
import { jobs } from '@/lib/db/schema'

import { and, desc, eq } from 'drizzle-orm'

export async function getJobs() {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const result = await db
      .select()
      .from(jobs)
      .where(eq(jobs.userId, userId))
      .orderBy(desc(jobs.createdAt))

    return result
  } catch (error) {
    console.error('Database error in getJobs:', error)
    return null
  }
}

export async function getJob(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')
    if (!id) return null

    const result = await db
      .select()
      .from(jobs)
      .where(and(eq(jobs.id, id), eq(jobs.userId, userId)))
      .limit(1)

    return result[0] || null
  } catch (error) {
    console.error('Database error in getJob:', error)
    return null
  }
}

export async function updateJobField(id: string, field: string, value: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const allowedFields = [
      'title',
      'status',
      'salary',
      'location',
      'notes',
      'description',
      'postingUrl',
      'contact',
      'company',
    ]
    if (!allowedFields.includes(field)) {
      throw new Error(`Field ${field} is not allowed to be updated`)
    }

    const updateData = {
      [field]: value || null,
      updatedAt: new Date(),
    }

    await db
      .update(jobs)
      .set(updateData)
      .where(and(eq(jobs.id, id), eq(jobs.userId, userId)))

    revalidatePath('/jobs')
    return { success: true, message: 'Job updated successfully' }
  } catch (error) {
    console.error('Error updating job field:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update job',
    }
  }
}

export async function createJob(job: JobSchema) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const result = await db
      .insert(jobs)
      .values({
        userId,
        title: job.title,
        company: job.company,
        status: job.status || 'Interested',
        location: job.location || '',
        postingUrl: job.postingUrl || null,
        description: job.description || null,
        salary: job.salary || null,
        contact: job.contact || null,
        notes: job.notes || null,
        aiMetadata: job.aiMetadata || null,
      })
      .returning({ id: jobs.id })

    revalidatePath('/jobs')
    return { id: result[0].id }
  } catch (error) {
    console.error('Error creating job:', error)
    throw error
  }
}

export async function updateJob(id: string, formData: FormData) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const updateData = {
      title: formData.get('title') as string,
      company: formData.get('company') as string,
      status: formData.get('status') as string,
      location: formData.get('location') as string,
      postingUrl: (formData.get('postingUrl') as string) || null,

      appliedAt: formData.get('appliedAt') ? new Date(formData.get('appliedAt') as string) : null,
      nextAction: (formData.get('nextAction') as string) || null,
      nextActionDeadline: formData.get('nextActionDeadline')
        ? new Date(formData.get('nextActionDeadline') as string)
        : null,

      description: (formData.get('description') as string) || null,
      salary: (formData.get('salary') as string) || null,
      contact: (formData.get('contact') as string) || null,
      notes: (formData.get('notes') as string) || null,

      updatedAt: new Date(),
    }

    await db
      .update(jobs)
      .set(updateData)
      .where(and(eq(jobs.id, id), eq(jobs.userId, userId)))

    revalidatePath('/jobs')
    revalidatePath(`/jobs/${id}`)
    redirect('/jobs')
  } catch (error) {
    console.error('Error updating job:', error)
    throw error
  }
}

export async function deleteJob(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    await db.delete(jobs).where(and(eq(jobs.id, id), eq(jobs.userId, userId)))

    revalidatePath('/jobs')
  } catch (error) {
    console.error('Error deleting job:', error)
    throw error
  }
}
