import { compileMDX } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import path from 'path'

// Import fs only in node environment and during build time
import { cache } from 'react'

// Types for MDX content
export type Frontmatter = {
  title: string
  description: string
  date?: string
  author?: string
  tags?: string[]
  slug: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type MDXContent = {
  frontmatter: Frontmatter
  content: React.ReactNode
  slug: string
}

// Cache for MDX content to avoid redundant processing
const mdxContentCache = new Map<string, MDXContent>()
const slugsCache = new Map<string, string[]>()

// Helper to safely use fs only during build time
const safelyUseFs = () => {
  // Only import fs dynamically when needed
  if (process.env.NODE_ENV === 'development' || process.env.NEXT_PHASE === 'phase-production-build') {
    return require('fs')
  }
  return null
}

// Get all MDX files from a directory - only used during build time
export const getMdxFiles = cache(async (directory: string): Promise<string[]> => {
  // Check if we have cached results
  if (slugsCache.has(directory)) {
    return slugsCache.get(directory) || []
  }

  // This should only run during build time
  const fs = safelyUseFs()
  if (!fs) return []

  const fullPath = path.join(process.cwd(), directory)

  // Check if directory exists
  if (!fs.existsSync(fullPath)) {
    slugsCache.set(directory, [])
    return []
  }

  const filenames = fs.readdirSync(fullPath)
  const mdxFiles = filenames.filter((filename: string) => filename.endsWith('.mdx'))
  
  // Cache the results
  slugsCache.set(directory, mdxFiles)
  return mdxFiles
})

// Parse MDX file content - only used during build time
export const parseMdx = cache(async (directory: string, filename: string): Promise<MDXContent> => {
  const cacheKey = `${directory}/${filename}`
  
  // Check if we have cached results
  if (mdxContentCache.has(cacheKey)) {
    return mdxContentCache.get(cacheKey)!
  }

  // This should only run during build time
  const fs = safelyUseFs()
  if (!fs) {
    throw new Error('Cannot access filesystem in production runtime')
  }

  const fullPath = path.join(process.cwd(), directory, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  // Use next-mdx-remote to parse MDX content
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  // Generate slug from filename (remove .mdx extension)
  const slug = filename.replace(/\.mdx$/, '')

  const result = {
    frontmatter: {
      ...data,
      slug,
    } as Frontmatter,
    content: mdxContent,
    slug,
  }

  // Cache the result
  mdxContentCache.set(cacheKey, result)
  return result
})

// Get all MDX content from a directory
export const getAllMdxContent = cache(async (directory: string): Promise<MDXContent[]> => {
  const files = await getMdxFiles(directory)

  const content = await Promise.all(
    files.map(async (filename: string) => {
      return await parseMdx(directory, filename)
    })
  )

  // Sort by date if available
  return content.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    }
    return 0
  })
})

// Get a specific MDX file by slug
export const getMdxBySlug = cache(async (directory: string, slug: string): Promise<MDXContent | null> => {
  const files = await getMdxFiles(directory)
  const filename = files.find((file: string) => file.replace(/\.mdx$/, '') === slug)

  if (!filename) {
    return null
  }

  return await parseMdx(directory, filename)
})
