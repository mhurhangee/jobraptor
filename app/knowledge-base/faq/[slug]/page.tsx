import { notFound } from 'next/navigation'

import { Section } from '@/components/ui/section'

import { KnowledgeBaseNavButtons } from '@/components/knowledge-base-nav-buttons'

import { getMdxBySlug } from '@/lib/mdx'

import { Calendar, FileQuestion } from 'lucide-react'

interface FaqPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function FaqItemPage({ params }: FaqPageProps) {
  const { slug } = await params
  const faqItem = await getMdxBySlug('content/faq', slug)

  if (!faqItem) {
    notFound()
  }

  return (
    <>
      {/* Content */}
      <Section layout="center" container="md" border="bottom" pattern="dots" padding="sm">
        <KnowledgeBaseNavButtons
          previous={faqItem.frontmatter.previous}
          home="/knowledge-base/faq"
          next={faqItem.frontmatter.next}
          color="green"
        />

        <article className="neo-brutal mb-6 bg-white p-8 text-left">
          <div className="neo-brutal bg-neon-green mb-8 p-6">
            <div className="mb-2 flex items-center gap-4">
              <FileQuestion className="h-6 w-6" />
              <h1 className="font-heading text-3xl font-bold">{faqItem.frontmatter.title}</h1>
            </div>

            {faqItem.frontmatter.date && (
              <div className="flex items-center text-sm font-bold">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(faqItem.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
          </div>

          {faqItem.frontmatter.description && (
            <p className="neo-brutal-sm mx-auto mb-6 max-w-xl bg-green-300 text-center text-xl font-bold">
              {faqItem.frontmatter.description}
            </p>
          )}

          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm text-black">
            {faqItem.content}
          </div>
        </article>

        <KnowledgeBaseNavButtons
          previous={faqItem.frontmatter.previous}
          home="/knowledge-base/faq"
          next={faqItem.frontmatter.next}
          color="green"
        />
      </Section>
    </>
  )
}
