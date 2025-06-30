import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

import { ContentCard } from '@/components/mdx/content-card'

import { getAllMdxContent } from '@/lib/mdx'

import { Link, Target } from 'lucide-react'

export default async function ResourcesPage() {
  const resourcesContent = await getAllMdxContent('content/resources')

  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-purple" padding="lg">
        <Badge className="mb-6 inline-block -rotate-2 transform bg-black px-6 py-2 text-white">
          <span className="font-heading text-sm font-bold">💼 TOOLS & LINKS</span>
        </Badge>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-white p-3">
            <Target className="h-8 w-8 text-black" />
          </div>
          <h1 className="font-heading rotate-1 transform text-5xl font-bold">RESOURCES</h1>
        </div>
        <p className="mx-auto mb-6 max-w-xl text-center text-xl font-bold">
          Curated collection of <span className="bg-black px-2 text-white">premium tools</span>,
          links, and resources to give you an unfair advantage in your job hunt.
        </p>
      </Section>

      {/* Resources Content */}
      <Section layout="center" container="lg" pattern="dots" padding="lg">
        {resourcesContent.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {resourcesContent.map(item => (
              <ContentCard
                key={item.slug}
                frontmatter={item.frontmatter}
                basePath="/knowledge-base/resources"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Link className="mx-auto mb-4 h-12 w-12" />
            <p className="font-heading mb-2 text-2xl font-bold">RESOURCES COMING SOON</p>
            <p className="font-bold">
              We&apos;re curating the best job hunting resources on the planet. Check back soon!
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
