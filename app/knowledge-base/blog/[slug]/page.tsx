import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Section } from '@/components/ui/section'

import { KnowledgeBaseNavButtons } from '@/components/knowledge-base-nav-buttons'

import { getMdxBySlug } from '@/lib/mdx'

import { Calendar, PenTool, Tag, User } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await Promise.resolve(params)
  const { slug } = resolvedParams
  const blogPost = await getMdxBySlug('content/blog', slug)

  if (!blogPost) {
    notFound()
  }

  return (
    <>
      {/* Header */}
      <Section layout="center" container="md" border="bottom" pattern="hatch" padding="sm">
        <KnowledgeBaseNavButtons
          previous={blogPost.frontmatter.previous}
          home="/knowledge-base/blog"
          next={blogPost.frontmatter.next}
          color="pink"
        />

        <article className="neo-brutal mb-6 bg-white p-8 text-left">
          {/* Featured Image */}
          {blogPost.frontmatter.image && (
            <div className="neo-brutal-sm mb-8">
              <Image
                src={blogPost.frontmatter.image}
                alt={blogPost.frontmatter.title}
                fill
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          <div className="neo-brutal bg-neon-pink mb-8 p-6">
            <div className="mb-4 flex items-center gap-4">
              <PenTool className="h-6 w-6" />
              <h1 className="font-heading text-3xl font-bold">{blogPost.frontmatter.title}</h1>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {blogPost.frontmatter.date && (
                <div className="flex items-center text-sm font-bold">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(blogPost.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              )}

              {blogPost.frontmatter.author && (
                <div className="flex items-center text-sm font-bold">
                  <User className="mr-2 h-4 w-4" />
                  By {blogPost.frontmatter.author}
                </div>
              )}

              {blogPost.frontmatter.tags && (
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {Array.isArray(blogPost.frontmatter.tags) &&
                    blogPost.frontmatter.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="neo-brutal-sm bg-neon-yellow px-2 py-1 text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </div>
          <p className="neo-brutal-sm mx-auto mb-6 max-w-xl bg-green-300 text-center text-xl font-bold">
            {blogPost.frontmatter.description}
          </p>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm text-black">
            {blogPost.content}
          </div>
        </article>

        <KnowledgeBaseNavButtons
          previous={blogPost.frontmatter.previous}
          home="/knowledge-base/blog"
          next={blogPost.frontmatter.next}
          color="pink"
        />
      </Section>
    </>
  )
}
