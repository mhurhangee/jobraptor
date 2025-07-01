"use server"

import { db } from "@/lib/db"
import { jobs, companies } from "@/lib/db/schema"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

export async function getJobs() {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }

    const result = await db
      .select({
        id: jobs.id,
        title: jobs.title,
        description: jobs.description,
        salary: jobs.salary,
        salaryMax: jobs.salaryMax,
        location: jobs.location,
        remote: jobs.remote,
        status: jobs.status,
        priority: jobs.priority,
        url: jobs.url,
        notes: jobs.notes,
        appliedAt: jobs.appliedAt,
        createdAt: jobs.createdAt,
        updatedAt: jobs.updatedAt,
        companyId: jobs.companyId,
        company: {
          id: companies.id,
          name: companies.name,
          website: companies.website,
          industry: companies.industry,
          size: companies.size,
          location: companies.location,
          description: companies.description,
          createdAt: companies.createdAt,
          updatedAt: companies.updatedAt,
        },
      })
      .from(jobs)
      .where(eq(jobs.userId, userId))
      .leftJoin(companies, eq(jobs.companyId, companies.id))
      .orderBy(desc(jobs.appliedAt))

    // Transform the result to ensure proper typing
    return result.map((row) => ({
      ...row,
      company: row.company?.id ? row.company : null,
    }))
  } catch (error) {
    console.error("Database error in getJobs:", error)
    // Return empty array instead of throwing
    return []
  }
}

export async function getJob(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }

    if (!id || id === "undefined" || id === "null") {
      return null
    }

    const result = await db
      .select({
        id: jobs.id,
        title: jobs.title,
        userId: jobs.userId,
        description: jobs.description,
        salary: jobs.salary,
        salaryMax: jobs.salaryMax,
        location: jobs.location,
        remote: jobs.remote,
        status: jobs.status,
        priority: jobs.priority,
        url: jobs.url,
        notes: jobs.notes,
        appliedAt: jobs.appliedAt,
        createdAt: jobs.createdAt,
        updatedAt: jobs.updatedAt,
        companyId: jobs.companyId,
        company: {
          id: companies.id,
          name: companies.name,
          website: companies.website,
          industry: companies.industry,
          size: companies.size,
          location: companies.location,
          description: companies.description,
          createdAt: companies.createdAt,
          updatedAt: companies.updatedAt,
        },
      })
      .from(jobs)
      .leftJoin(companies, eq(jobs.companyId, companies.id))
      .where(eq(jobs.id, id) && eq(jobs.userId, userId))
      .limit(1)

    const job = result[0]
    if (!job) return null

    return {
      ...job,
      company: job.company ? job.company : null,
    }
  } catch (error) {
    console.error("Database error in getJob:", error)
    return null
  }
}

export async function updateJobField(id: string, field: string, value: string) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    console.log(`Updating job ${id}, field ${field}, value ${value}`)

    if (!id || !field) {
      throw new Error("Job ID and field are required")
    }

    // Validate the field is allowed to be updated
    const allowedFields = [
      "title",
      "status",
      "salary",
      "salaryMax",
      "location",
      "remote",
      "priority",
      "notes",
      "description",
    ]
    if (!allowedFields.includes(field)) {
      throw new Error(`Field ${field} is not allowed to be updated`)
    }

    const updateData: any = {
      [field]: value || null,
      updatedAt: new Date(),
    }

    // Handle numeric fields
    if (field === "salary" || field === "salaryMax" || field === "priority") {
      const numValue = Number.parseFloat(value)
      updateData[field] = isNaN(numValue) ? null : numValue.toString()
    }

    const result = await db.update(jobs).set(updateData).where(eq(jobs.id, id) && eq(jobs.userId, userId)).returning()

    if (result.length === 0) {
      throw new Error(`Job with ID ${id} not found`)
    }

    console.log(`Successfully updated job ${id}`)

    // Only revalidate the jobs page, not individual job pages to avoid loops
    revalidatePath("/jobs")

    return { success: true, message: "Job updated successfully" }
  } catch (error) {
    console.error("Error updating job field:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to update job",
    }
  }
}

export async function createJob(formData: FormData) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    const title = formData.get("title") as string
    const companyId = formData.get("companyId") as string
    const description = formData.get("description") as string
    const salary = formData.get("salary") as string
    const salaryMax = formData.get("salaryMax") as string
    const location = formData.get("location") as string
    const remote = formData.get("remote") as string
    const status = formData.get("status") as string
    const priority = formData.get("priority") as string
    const url = formData.get("url") as string
    const notes = formData.get("notes") as string
    const aiMetadataStr = formData.get("aiMetadata") as string

    if (!title || !companyId) {
      throw new Error("Title and company are required")
    }
    
    // Parse AI metadata if available
    let aiMetadata = null
    if (aiMetadataStr) {
      try {
        aiMetadata = JSON.parse(aiMetadataStr)
      } catch (error) {
        console.error("Error parsing AI metadata:", error)
      }
    }

    await db.insert(jobs).values({
      userId,
      title,
      companyId,
      description: description || null,
      salary: salary ? salary : null,
      salaryMax: salaryMax ? salaryMax : null,
      location: location || null,
      remote: remote || null,
      status: status || "applied",
      priority: priority ? Number.parseInt(priority) : 3,
      url: url || null,
      notes: notes || null,
      aiMetadata,
    })

    revalidatePath("/jobs")
  } catch (error) {
    console.error("Error creating job:", error)
    throw error
  }
}

export async function updateJob(id: string, formData: FormData) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    const title = formData.get("title") as string
    const companyId = formData.get("companyId") as string
    const description = formData.get("description") as string
    const salary = formData.get("salary") as string
    const salaryMax = formData.get("salaryMax") as string
    const location = formData.get("location") as string
    const remote = formData.get("remote") as string
    const status = formData.get("status") as string
    const priority = formData.get("priority") as string
    const url = formData.get("url") as string
    const notes = formData.get("notes") as string

    await db
      .update(jobs)
      .set({
        title,
        companyId,
        description: description || null,
        salary: salary ? salary : null,
        salaryMax: salaryMax ? salaryMax : null,
        location: location || null,
        remote: remote || null,
        status: status || "applied",
        priority: priority ? Number.parseInt(priority) : 3,
        url: url || null,
        notes: notes || null,
        updatedAt: new Date(),
      })
      .where(eq(jobs.id, id) && eq(jobs.userId, userId))

    revalidatePath("/jobs")
    revalidatePath(`/jobs/${id}`)
    redirect("/jobs")
  } catch (error) {
    console.error("Error updating job:", error)
    throw error
  }
}

export async function deleteJob(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    await db.delete(jobs).where(eq(jobs.id, id) && eq(jobs.userId, userId))
    revalidatePath("/jobs")
    redirect("/jobs")
  } catch (error) {
    console.error("Error deleting job:", error)
    throw error
  }
}
