"use server"

import { db } from "@/lib/db"
import { companies } from "@/lib/db/schema"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"
import { auth } from "@clerk/nextjs/server"

export async function getCompanies() {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    return await db.select().from(companies).orderBy(companies.name).where(eq(companies.userId, userId))
  } catch (error) {
    console.error("Error fetching companies:", error)
    return []
  }
}

export async function createCompany(formData: FormData) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }
    
    const name = formData.get("name") as string
    const website = formData.get("website") as string
    const industry = formData.get("industry") as string
    const size = formData.get("size") as string
    const location = formData.get("location") as string
    const description = formData.get("description") as string

    if (!name) {
      throw new Error("Company name is required")
    }

    const result = await db
      .insert(companies)
      .values({
        name,
        website: website || null,
        industry: industry || null,
        size: size || null,
        location: location || null,
        description: description || null,
        userId,
      })
      .returning()

    revalidatePath("/jobs/add")
    return result[0]
  } catch (error) {
    console.error("Error creating company:", error)
    throw error
  }
}
