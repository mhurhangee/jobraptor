import { notFound } from 'next/navigation'
import { getMdxBySlug } from '@/lib/mdx'
import { FileQuestion, ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'

interface FaqPageProps {
  params: {
    slug: string
  }
}

export default async function FaqItemPage({ params }: FaqPageProps) {
  const { slug } = params
  const faqItem = await getMdxBySlug('content/faq', slug)
  
  if (!faqItem) {
    notFound()
  }
  
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/knowledge-base/faq" 
          className="inline-flex items-center font-bold mb-6 neo-brutal-sm bg-white px-4 py-2 hover:translate-y-[-2px] transition-transform"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to FAQ
        </Link>
        
        <div className="neo-brutal bg-neon-green p-6 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <FileQuestion className="h-6 w-6" />
            <h1 className="font-heading text-3xl font-bold">{faqItem.frontmatter.title}</h1>
          </div>
          
          {faqItem.frontmatter.date && (
            <div className="flex items-center text-sm font-bold">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(faqItem.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <Section layout="center" container="md" pattern="dots" padding="lg">
        <article className="neo-brutal bg-white p-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm">
            {faqItem.content}
          </div>
        </article>
      </Section>
    </>
  )
}
