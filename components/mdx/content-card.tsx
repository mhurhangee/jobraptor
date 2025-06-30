import Link from 'next/link'

import { type Frontmatter } from '@/lib/mdx'

import { ArrowRight, Calendar } from 'lucide-react'

interface ContentCardProps {
  frontmatter: Frontmatter
  basePath: string
}

export function ContentCard({ frontmatter, basePath }: ContentCardProps) {
  const { title, description, date, slug } = frontmatter

  // Generate a random rotation between -2 and 2 degrees for a playful effect
  const rotation = Math.floor(Math.random() * 5) - 2

  // Choose a random background color from the neobrutalist palette
  const bgColors = ['bg-white', 'bg-neon-yellow', 'bg-neon-green', 'bg-neon-blue', 'bg-neon-pink']
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)]

  return (
    <div
      className={`neo-brutal mb-8 ${bgColor} transform transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_#000]`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Link href={`${basePath}/${slug}`} className="block p-6">
        <h3 className="font-heading mb-3 text-xl font-bold">{title}</h3>
        {date && (
          <div className="mb-3 flex items-center text-sm font-bold">
            <Calendar className="mr-2 h-4 w-4" />
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        )}
        <p className="mb-4 font-bold text-gray-700">{description}</p>
        <div className="flex items-center font-bold text-black transition-transform hover:translate-x-1">
          <span>Read More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  )
}
