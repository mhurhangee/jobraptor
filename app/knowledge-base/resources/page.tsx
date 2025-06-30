import { ContentCard } from '@/components/mdx/content-card'
import { getAllMdxContent } from '@/lib/mdx'
import { Target, Briefcase, Link } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export default async function ResourcesPage() {
  const resourcesContent = await getAllMdxContent('content/resources')
  
  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-purple" padding="lg">
        <div className="max-w-4xl">
          <Badge className="inline-block transform -rotate-2 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">💼 TOOLS & LINKS</span>
          </Badge>
          <div className="flex items-center gap-4 mb-4">
            <div className="neo-brutal-sm bg-white p-3">
              <Target className="h-8 w-8 text-black" />
            </div>
            <h1 className="font-heading text-5xl font-bold transform rotate-1">RESOURCES</h1>
          </div>
          <p className="text-xl font-bold mb-6 max-w-2xl">
            Curated collection of <span className="bg-black text-white px-2">premium tools</span>, links, and resources to 
            give you an unfair advantage in your job hunt.
          </p>
        </div>
      </Section>

      {/* Resources Content */}
      <Section layout="center" container="lg" pattern="dots" padding="lg">
        {resourcesContent.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {resourcesContent.map((item) => (
              <ContentCard 
                key={item.slug} 
                frontmatter={item.frontmatter} 
                basePath="/knowledge-base/resources"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Link className="h-12 w-12 mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold mb-2">RESOURCES COMING SOON</p>
            <p className="font-bold">We're curating the best job hunting resources on the planet. Check back soon!</p>
          </div>
        )}
      </Section>
    </>
  )
}
