import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

import { ContentCard } from '@/components/mdx/content-card'

import { getAllMdxContent } from '@/lib/mdx'

import { Newspaper, PenTool } from 'lucide-react'

export default async function BlogPage() {
  const blogContent = await getAllMdxContent('content/blog')

  return (
    <>
      {/* Header Section */}
      <Section layout="center" border="bottom" container="md" background="neon-pink" padding="lg">
        <Badge className="mb-6 inline-block rotate-1 transform bg-black px-6 py-2 text-white">
          <span className="font-heading text-sm font-bold">📝 NEWS & TRENDS</span>
        </Badge>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="neo-brutal-sm bg-white p-3">
            <PenTool className="h-8 w-8 text-black" />
          </div>
          <h1 className="font-heading -rotate-1 transform text-5xl font-bold">BLOG</h1>
        </div>
        <p className="mx-auto mb-6 max-w-xl text-center text-xl font-bold">
          Brutally honest insights and analysis from our job hunting experts.
          <span className="bg-black px-2 text-white">No sugar-coating</span>, just real talk.
        </p>
      </Section>

      {/* Blog Content */}
      <Section layout="center" container="lg" pattern="hatch" padding="lg">
        {blogContent.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {blogContent.map(item => (
              <ContentCard
                key={item.slug}
                frontmatter={item.frontmatter}
                basePath="/knowledge-base/blog"
              />
            ))}
          </div>
        ) : (
          <div className="neo-brutal bg-neon-yellow p-8 text-center">
            <Newspaper className="mx-auto mb-4 h-12 w-12" />
            <p className="font-heading mb-2 text-2xl font-bold">BLOG POSTS COMING SOON</p>
            <p className="font-bold">
              Our writers are crafting brutally honest job market insights. Check back soon!
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
