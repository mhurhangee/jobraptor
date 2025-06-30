import React from 'react'
import Link from 'next/link'
import { Book, Home, FileQuestion, Map, PenTool, Target } from 'lucide-react'

export default function KnowledgeBaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Knowledge Base Navigation */}
      <div className="border-b-4 border-black bg-neon-yellow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/knowledge-base" className="flex items-center gap-2">
              <div className="bg-black p-2">
                <Book className="h-6 w-6 text-white" />
              </div>
              <h1 className="font-heading text-2xl font-bold">KNOWLEDGE BASE</h1>
            </Link>
            
            <nav className="flex flex-wrap gap-2">
              <Link
                href="/knowledge-base"
                className="neo-brutal-sm bg-white px-4 py-2 font-heading font-bold text-sm flex items-center gap-1 hover:translate-y-[-2px] transition-transform"
              >
                <Home className="h-4 w-4" />
                HOME
              </Link>
              <Link
                href="/knowledge-base/faq"
                className="neo-brutal-sm bg-neon-green px-4 py-2 font-heading font-bold text-sm flex items-center gap-1 hover:translate-y-[-2px] transition-transform"
              >
                <FileQuestion className="h-4 w-4" />
                FAQ
              </Link>
              <Link
                href="/knowledge-base/guides"
                className="neo-brutal-sm bg-neon-blue px-4 py-2 font-heading font-bold text-sm flex items-center gap-1 hover:translate-y-[-2px] transition-transform"
              >
                <Map className="h-4 w-4" />
                GUIDES
              </Link>
              <Link
                href="/knowledge-base/blog"
                className="neo-brutal-sm bg-neon-pink px-4 py-2 font-heading font-bold text-sm flex items-center gap-1 hover:translate-y-[-2px] transition-transform"
              >
                <PenTool className="h-4 w-4" />
                BLOG
              </Link>
              <Link
                href="/knowledge-base/resources"
                className="neo-brutal-sm bg-neon-purple px-4 py-2 font-heading font-bold text-sm flex items-center gap-1 hover:translate-y-[-2px] transition-transform"
              >
                <Target className="h-4 w-4" />
                RESOURCES
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-bold prose-p:text-gray-700 prose-a:text-black prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:neo-brutal-sm">
          {children}
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t-4 border-black bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-bold text-sm"> {new Date().getFullYear()} JobRaptor - All Rights Reserved</p>
            <div className="flex gap-4">
              <Link href="/" className="font-bold text-sm hover:underline">Home</Link>
              <Link href="/contact" className="font-bold text-sm hover:underline">Contact</Link>
              <Link href="/privacy" className="font-bold text-sm hover:underline">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
