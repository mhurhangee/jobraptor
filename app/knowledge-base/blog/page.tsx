import { ContentCard } from '@/components/mdx/content-card'
import { getAllMdxContent } from '@/lib/mdx'
import { PenTool, TrendingUp, Newspaper } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export default async function BlogPage() {
  const blogContent = await getAllMdxContent('content/blog')
  
  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" background="neon-pink" padding="lg">
        <div className="max-w-4xl">
          <Badge className="inline-block transform rotate-1 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">📝 INSIGHTS & TRENDS</span>
          </Badge>
          <div className="flex items-center gap-4 mb-4">
            <div className="neo-brutal-sm bg-white p-3">
              <PenTool className="h-8 w-8 text-black" />
            </div>
            <h1 className="font-heading text-5xl font-bold transform -rotate-1">BLOG</h1>
          </div>
          <p className="text-xl font-bold mb-6 max-w-2xl">
            Brutally honest insights and analysis from our job hunting experts. 
            <span className="bg-black text-white px-2">No sugar-coating</span>, just real talk.
          </p>
        </div>
      </Section>

      {/* Blog Content */}
      <Section layout="center" container="lg" pattern="hatch" padding="lg">
        {blogContent.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {blogContent.map((item) => (
              <ContentCard 
                key={item.slug} 
                frontmatter={item.frontmatter} 
                basePath="/knowledge-base/blog"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Newspaper className="h-12 w-12 mx-auto mb-4" />
            <p className="font-heading text-2xl font-bold mb-2">BLOG POSTS COMING SOON</p>
            <p className="font-bold">Our writers are crafting brutally honest job market insights. Check back soon!</p>
          </div>
        )}
      </Section>
    </>
  )
}
