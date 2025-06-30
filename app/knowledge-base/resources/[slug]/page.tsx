import { notFound } from 'next/navigation'
import { getMdxBySlug } from '@/lib/mdx'
import { Target, ArrowLeft, Calendar, Link as LinkIcon, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'

interface ResourcePageProps {
  params: {
    slug: string
  }
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = params
  const resource = await getMdxBySlug('content/resources', slug)
  
  if (!resource) {
    notFound()
  }
  
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/knowledge-base/resources" 
          className="inline-flex items-center font-bold mb-6 neo-brutal-sm bg-white px-4 py-2 hover:translate-y-[-2px] transition-transform"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>
        
        <div className="neo-brutal bg-neon-purple p-6 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <Target className="h-6 w-6" />
            <h1 className="font-heading text-3xl font-bold">{resource.frontmatter.title}</h1>
          </div>
          
          {resource.frontmatter.date && (
            <div className="flex items-center text-sm font-bold">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(resource.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Resource Link */}
      {resource.frontmatter.resourceUrl && (
        <div className="mb-8">
          <a 
            href={resource.frontmatter.resourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-neo inline-flex items-center"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            VISIT RESOURCE
          </a>
        </div>
      )}
      
      {/* Content */}
      <Section layout="center" container="md" pattern="dots" padding="lg">
        <article className="neo-brutal bg-white p-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm">
            {resource.content}
          </div>
        </article>
      </Section>
      
      {/* Related Resources */}
      {resource.frontmatter.relatedResources && Array.isArray(resource.frontmatter.relatedResources) && resource.frontmatter.relatedResources.length > 0 && (
        <Section layout="center" container="md" border="top" padding="lg">
          <h2 className="font-heading text-2xl font-bold mb-6 transform -rotate-1">RELATED RESOURCES</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resource.frontmatter.relatedResources.map((related, index) => (
              <div key={index} className="neo-brutal-sm bg-neon-yellow p-4">
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  <span className="font-bold">{related}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
