import { notFound } from 'next/navigation'
import { getMdxBySlug } from '@/lib/mdx'
import { PenTool, ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const blogPost = await getMdxBySlug('content/blog', slug)
  
  if (!blogPost) {
    notFound()
  }
  
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/knowledge-base/blog" 
          className="inline-flex items-center font-bold mb-6 neo-brutal-sm bg-white px-4 py-2 hover:translate-y-[-2px] transition-transform"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <div className="neo-brutal bg-neon-pink p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <PenTool className="h-6 w-6" />
            <h1 className="font-heading text-3xl font-bold">{blogPost.frontmatter.title}</h1>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            {blogPost.frontmatter.date && (
              <div className="flex items-center text-sm font-bold">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blogPost.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
            
            {blogPost.frontmatter.author && (
              <div className="flex items-center text-sm font-bold">
                <User className="h-4 w-4 mr-2" />
                By {blogPost.frontmatter.author}
              </div>
            )}
            
            {blogPost.frontmatter.tags && (
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4" />
                {Array.isArray(blogPost.frontmatter.tags) && blogPost.frontmatter.tags.map((tag, index) => (
                  <span key={index} className="neo-brutal-sm bg-neon-yellow px-2 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      {blogPost.frontmatter.image && (
        <div className="mb-8 neo-brutal-sm">
          <img 
            src={blogPost.frontmatter.image} 
            alt={blogPost.frontmatter.title} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <Section layout="center" container="md" pattern="hatch" padding="lg">
        <article className="neo-brutal bg-white p-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm">
            {blogPost.content}
          </div>
        </article>
      </Section>
    </>
  )
}
