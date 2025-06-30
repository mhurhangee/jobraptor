import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

// Types for MDX content
export type Frontmatter = {
  title: string
  description: string
  date?: string
  author?: string
  tags?: string[]
  slug: string
  [key: string]: any
}

export type MDXContent = {
  frontmatter: Frontmatter
  content: React.ReactNode
  slug: string
}

// Get all MDX files from a directory
export async function getMdxFiles(directory: string): Promise<string[]> {
  const fullPath = path.join(process.cwd(), directory)
  
  // Check if directory exists
  if (!fs.existsSync(fullPath)) {
    return []
  }
  
  const filenames = fs.readdirSync(fullPath)
  return filenames.filter(filename => filename.endsWith('.mdx'))
}

// Parse MDX file content
export async function parseMdx(directory: string, filename: string): Promise<MDXContent> {
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
      }
    },
  })
  
  // Generate slug from filename (remove .mdx extension)
  const slug = filename.replace(/\.mdx$/, '')
  
  return {
    frontmatter: {
      ...data,
      slug,
    } as Frontmatter,
    content: mdxContent,
    slug,
  }
}

// Get all MDX content from a directory
export async function getAllMdxContent(directory: string): Promise<MDXContent[]> {
  const files = await getMdxFiles(directory)
  
  const content = await Promise.all(
    files.map(async (filename) => {
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
}

// Get a specific MDX file by slug
export async function getMdxBySlug(directory: string, slug: string): Promise<MDXContent | null> {
  const files = await getMdxFiles(directory)
  const filename = files.find(file => file.replace(/\.mdx$/, '') === slug)
  
  if (!filename) {
    return null
  }
  
  return await parseMdx(directory, filename)
}
