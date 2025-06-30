import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Section } from '@/components/ui/section'

import { KnowledgeBaseNavButtons } from '@/components/knowledge-base-nav-buttons'

import { getMdxBySlug } from '@/lib/mdx'

import { Calendar, Map, User } from 'lucide-react'

interface GuidePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GuideItemPage({ params }: GuidePageProps) {
  const { slug } = await params
  const guideItem = await getMdxBySlug('content/guides', slug)

  if (!guideItem) {
    notFound()
  }

  return (
    <>
      {/* Content */}
      <Section layout="center" container="md" border="bottom" pattern="dots" padding="sm">
        <KnowledgeBaseNavButtons
          previous={guideItem.frontmatter.previous}
          home="/knowledge-base/guides"
          next={guideItem.frontmatter.next}
          color="blue"
        />

        <article className="neo-brutal mb-6 bg-white p-8 text-left">
          {/* Featured Image */}
          {guideItem.frontmatter.image && (
            <div className="neo-brutal-sm mb-8">
              <Image
                src={guideItem.frontmatter.image}
                alt={guideItem.frontmatter.title}
                fill
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="neo-brutal bg-neon-blue mb-8 p-6">
            <div className="mb-2 flex items-center gap-4">
              <Map className="h-6 w-6" />
              <h1 className="font-heading text-3xl font-bold">{guideItem.frontmatter.title}</h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {guideItem.frontmatter.date && (
                <div className="flex items-center text-sm font-bold">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(guideItem.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              )}

              {guideItem.frontmatter.author && (
                <div className="flex items-center text-sm font-bold">
                  <User className="mr-2 h-4 w-4" />
                  {guideItem.frontmatter.author}
                </div>
              )}
            </div>
          </div>

          {guideItem.frontmatter.description && (
            <p className="neo-brutal-sm mx-auto mb-6 max-w-xl bg-blue-300 text-center text-xl font-bold">
              {guideItem.frontmatter.description}
            </p>
          )}

          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm text-black">
            {guideItem.content}
          </div>
        </article>

        <KnowledgeBaseNavButtons
          previous={guideItem.frontmatter.previous}
          home="/knowledge-base/guides"
          next={guideItem.frontmatter.next}
          color="blue"
        />
      </Section>
    </>
  )
}
