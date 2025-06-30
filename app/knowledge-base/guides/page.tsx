import { ContentCard } from '@/components/mdx/content-card'
import { getAllMdxContent } from '@/lib/mdx'
import { Map, Search, Compass } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export default async function GuidesPage() {
  const guidesContent = await getAllMdxContent('content/guides')
  
  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-blue" padding="lg">
        <div className="max-w-4xl">
          <Badge className="inline-block transform -rotate-1 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">📍 TUTORIALS & WALKTHROUGHS</span>
          </Badge>
          <div className="flex items-center gap-4 mb-4">
            <div className="neo-brutal-sm bg-white p-3">
              <Map className="h-8 w-8 text-black" />
            </div>
            <h1 className="font-heading text-5xl font-bold transform rotate-1">GUIDES</h1>
          </div>
          <p className="text-xl font-bold mb-6 max-w-2xl">
            Step-by-step tutorials to help you <span className="bg-black text-white px-2">dominate</span> the job hunt.
            No fluff, just actionable strategies that work.
          </p>
        </div>
      </Section>

      {/* Guides Content */}
      <Section layout="center" container="lg" pattern="dots" padding="lg">
        {guidesContent.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {guidesContent.map((item) => (
              <ContentCard 
                key={item.slug} 
                frontmatter={item.frontmatter} 
                basePath="/knowledge-base/guides"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Compass className="h-12 w-12 mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold mb-2">GUIDES COMING SOON</p>
            <p className="font-bold">Our job hunting experts are crafting detailed guides. Check back soon!</p>
          </div>
        )}
      </Section>
    </>
  )
}
