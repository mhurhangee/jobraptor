import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

import { ContentCard } from '@/components/mdx/content-card'

import { getAllMdxContent } from '@/lib/mdx'

import { Compass, Map } from 'lucide-react'

export default async function GuidesPage() {
  const guidesContent = await getAllMdxContent('content/guides')

  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-blue" padding="lg">
        <Badge className="mb-6 inline-block -rotate-1 transform bg-black px-6 py-2 text-white">
          <span className="font-heading text-sm font-bold">📍 TUTORIALS & WALKTHROUGHS</span>
        </Badge>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-white p-3">
            <Map className="h-8 w-8 text-black" />
          </div>
          <h1 className="font-heading rotate-1 transform text-5xl font-bold">GUIDES</h1>
        </div>
        <p className="mx-auto mb-6 max-w-xl text-center text-xl font-bold">
          Step-by-step tutorials to help you{' '}
          <span className="bg-black px-2 text-white">dominate</span> the job hunt. No fluff, just
          actionable strategies that work.
        </p>
      </Section>

      {/* Guides Content */}
      <Section layout="center" container="lg" pattern="dots" padding="lg">
        {guidesContent.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {guidesContent.map(item => (
              <ContentCard
                key={item.slug}
                frontmatter={item.frontmatter}
                basePath="/knowledge-base/guides"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Compass className="mx-auto mb-4 h-12 w-12" />
            <p className="font-heading mb-2 text-2xl font-bold">GUIDES COMING SOON</p>
            <p className="font-bold">
              Our job hunting experts are crafting detailed guides. Check back soon!
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
