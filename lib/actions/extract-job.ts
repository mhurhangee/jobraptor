"use server"

import {exa } from "@exa"
import { generateObject } from "ai"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { companies } from "@/lib/db/schema"
import { eq, and } from "drizzle-orm"

// Define the schema for job extraction
const jobSchema = z.object({
  job: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    salary: z.string().optional(),
    salaryMax: z.string().optional(),
    location: z.string().optional(),
    remote: z.string().optional().nullable(),
    tags: z.array(z.string()).optional(),
  }),
  company: z.object({
    name: z.string().optional(),
    website: z.string().url().optional(),
    industry: z.string().optional(),
    size: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
  }),
})

// Extract content from URL using Exa
export async function extractContentFromUrl(url: string) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }

    // Validate URL format
    try {
      new URL(url)
    } catch (error) {
      console.error("Invalid URL format:", error)
      throw new Error("Invalid URL format")
    }

    // Get content from the URL using Exa API
    const exaApiKey = process.env.EXA_API_KEY
    if (!exaApiKey) {
      throw new Error("EXA_API_KEY environment variable is not set")
    }
    
    const response = await fetch("https://api.exa.ai/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": exaApiKey
      },
      body: JSON.stringify({
        urls: [url],
        context: true
      })
    })

    if (!response.ok) {
      throw new Error(`Failed to extract content: ${response.statusText}`)
    }

    const result = await response.json()
    
    if (!result?.data?.context) {
      throw new Error("Failed to extract content from URL")
    }

    return {
      context: result.data.context,
      url
    }
  } catch (error) {
    console.error("Error extracting content from URL:", error)
    throw error
  }
}

// Extract job information from content using AI
export async function extractJobInfo(context: string, url: string) {
  try {
    const { userId } = await auth()
    if (!userId) {
      throw new Error("Unauthorized")
    }

    // Use AI to extract job information
    const { object } = await generateObject({
      model: "gpt-4o-mini",
      schema: jobSchema,
      prompt: `Extract job and company information from the following job posting. Be as detailed as possible.
      
      Job posting content:
      ${context}
      
      URL: ${url}`,
    })

    // Check if company exists, if not create a placeholder
    let companyId = null
    if (object.company.name) {
      // Try to find existing company
      const existingCompanies = await db
        .select()
        .from(companies)
        .where(
          and(
            eq(companies.name, object.company.name),
            eq(companies.userId, userId)
          )
        )
        .limit(1)

      if (existingCompanies.length > 0) {
        companyId = existingCompanies[0].id
      } else {
        // Create new company
        const newCompany = await db
          .insert(companies)
          .values({
            userId,
            name: object.company.name,
            website: object.company.website || url,
            industry: object.company.industry || null,
            size: object.company.size || null,
            location: object.company.location || null,
            description: object.company.description || null,
            aiMetadata: { extractedFrom: url, context }
          })
          .returning()
        
        companyId = newCompany[0].id
      }
    }

    return {
      job: {
        title: object.job.title || "",
        description: object.job.description || "",
        salary: object.job.salary || "",
        salaryMax: object.job.salaryMax || "",
        location: object.job.location || "",
        remote: object.job.remote || "",
        url,
        tags: object.job.tags || [],
      },
      company: {
        id: companyId,
        name: object.company.name || "",
      },
      aiMetadata: {
        extractedFrom: url,
        context
      }
    }
  } catch (error) {
    console.error("Error extracting job info:", error)
    throw error
  }
}
