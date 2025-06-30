import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Section } from '@/components/ui/section'

import { KnowledgeBaseNavButtons } from '@/components/knowledge-base-nav-buttons'
import { ContentCard } from '@/components/mdx/content-card'

import { getAllMdxContent, getMdxBySlug } from '@/lib/mdx'

import { ExternalLink, FileBox } from 'lucide-react'

interface ResourcePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params
  const resource = await getMdxBySlug('content/resources', slug)

  if (!resource) {
    notFound()
  }

  // Get related resources (for example, with similar tags)
  const allResources = await getAllMdxContent('content/resources')
  const relatedResources = allResources
    .filter(item => item.slug !== slug) // Exclude current resource
    .filter(item => {
      // Check for tag overlap
      if (resource.frontmatter.tags && item.frontmatter.tags) {
        const resourceTags = resource.frontmatter.tags as string[]
        const itemTags = item.frontmatter.tags as string[]
        return resourceTags.some(tag => itemTags.includes(tag))
      }
      return false
    })
    .slice(0, 3) // Limit to 3 related resources

  return (
    <>
      {/* Content */}
      <Section layout="center" container="md" border="bottom" pattern="dots" padding="sm">
        <KnowledgeBaseNavButtons
          previous={resource.frontmatter.previous}
          home="/knowledge-base/resources"
          next={resource.frontmatter.next}
          color="purple"
        />

        <article className="neo-brutal mb-6 bg-white p-8 text-left">
          {/* Featured Image */}
          {resource.frontmatter.image && (
            <div className="neo-brutal-sm mb-8">
              <Image
                src={resource.frontmatter.image}
                alt={resource.frontmatter.title}
                fill
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="neo-brutal mb-8 bg-purple-400 p-6">
            <div className="mb-4 flex items-center gap-4">
              <FileBox className="h-6 w-6" />
              <h1 className="font-heading text-3xl font-bold">{resource.frontmatter.title}</h1>
            </div>

            {resource.frontmatter.url && (
              <a
                href={resource.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-brutal-sm bg-neon-yellow inline-flex items-center px-4 py-2 font-bold transition-transform hover:translate-y-[-2px]"
              >
                Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
          </div>

          {resource.frontmatter.description && (
            <p className="neo-brutal-sm mx-auto mb-6 max-w-xl bg-purple-300 text-center text-xl font-bold">
              {resource.frontmatter.description}
            </p>
          )}

          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm text-black">
            {resource.content}
          </div>
        </article>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="neo-brutal mb-6 bg-white p-8">
            <h2 className="font-heading mb-6 text-2xl font-bold">Related Resources</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedResources.map(item => (
                <ContentCard
                  key={item.slug}
                  frontmatter={item.frontmatter}
                  basePath="/knowledge-base/resources"
                />
              ))}
            </div>
          </div>
        )}

        <KnowledgeBaseNavButtons
          previous={resource.frontmatter.previous}
          home="/knowledge-base/resources"
          next={resource.frontmatter.next}
          color="purple"
        />
      </Section>
    </>
  )
}
