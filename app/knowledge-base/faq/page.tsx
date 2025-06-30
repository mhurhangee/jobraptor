import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

import { ContentCard } from '@/components/mdx/content-card'

import { getAllMdxContent } from '@/lib/mdx'

import { FileQuestion, Search } from 'lucide-react'

export default async function FaqPage() {
  const faqContent = await getAllMdxContent('content/faq')

  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" container="md" background="neon-green" padding="lg">
        <Badge className="mb-6 inline-block rotate-1 transform bg-black px-6 py-2 text-white">
          <span className="font-heading text-sm font-bold">🤔 QUESTIONS & ANSWERS</span>
        </Badge>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-white p-3">
            <FileQuestion className="h-8 w-8 text-black" />
          </div>
          <h1 className="font-heading -rotate-1 transform text-5xl font-bold">FAQ</h1>
        </div>
        <p className="mx-auto mb-6 max-w-xl text-center text-xl font-bold">
          Get straight answers to your most pressing questions. We believe in{' '}
          <span className="bg-black px-2 text-white">brutal honesty</span> and clarity.
        </p>
      </Section>

      {/* FAQ Content */}
      <Section layout="center" container="lg" padding="lg">
        {faqContent.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {faqContent.map(item => (
              <ContentCard
                key={item.slug}
                frontmatter={item.frontmatter}
                basePath="/knowledge-base/faq"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Search className="mx-auto mb-4 h-12 w-12" />
            <p className="font-heading mb-2 text-2xl font-bold">NO FAQ CONTENT YET</p>
            <p className="font-bold">
              Our team of raptors is hunting for answers. Check back soon!
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
