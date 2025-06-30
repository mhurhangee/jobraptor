import { ContentCard } from '@/components/mdx/content-card'
import { getAllMdxContent } from '@/lib/mdx'
import { FileQuestion, Search } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export default async function FaqPage() {
  const faqContent = await getAllMdxContent('content/faq')
  
  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-green" padding="lg">
        <div className="max-w-4xl">
          <Badge className="inline-block transform rotate-1 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">🤔 QUESTIONS & ANSWERS</span>
          </Badge>
          <div className="flex items-center gap-4 mb-4">
            <div className="neo-brutal-sm bg-white p-3">
              <FileQuestion className="h-8 w-8 text-black" />
            </div>
            <h1 className="font-heading text-5xl font-bold transform -rotate-1">FAQ</h1>
          </div>
          <p className="text-xl font-bold mb-6 max-w-2xl">
            Get straight answers to your most pressing questions. 
            We believe in <span className="bg-black text-white px-2">brutal honesty</span> and clarity.
          </p>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section layout="center" container="lg" padding="lg">
        {faqContent.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {faqContent.map((item) => (
              <ContentCard 
                key={item.slug} 
                frontmatter={item.frontmatter} 
                basePath="/knowledge-base/faq"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Search className="h-12 w-12 mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold mb-2">NO FAQ CONTENT YET</p>
            <p className="font-bold">Our team of raptors is hunting for answers. Check back soon!</p>
          </div>
        )}
      </Section>
    </>
  )
}
