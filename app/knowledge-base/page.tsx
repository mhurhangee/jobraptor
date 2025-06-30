import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import {
  ArrowRight,
  BookOpen,
  Brain,
  FileIcon as FileTemplate,
  Map,
  PenTool,
  Target,
  Zap,
} from 'lucide-react'

export default function KnowledgeBasePage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section layout="center" border="bottom" background="neon-green" padding="xl">
        <Badge className="neo-brutal-color mb-6 inline-block -rotate-2 transform bg-black px-6 py-2 text-white">
          <span className="font-heading text-sm font-bold">🧠 KNOWLEDGE BASE</span>
        </Badge>
        <h1 className="font-heading mb-6 rotate-1 transform text-6xl font-bold">
          MASTER THE
          <span className="bg-neon-pink neo-brutal-sm mt-2 block inline-block -rotate-1 transform px-4 py-2 text-7xl">
            HUNT
          </span>
        </h1>
        <p className="mb-8 text-xl font-bold">
          Your central command center for job hunting domination. Everything you need to go from
          frustrated applicant to offer-collecting PREDATOR.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/knowledge-base/guides" className="btn-neo">
            <Zap className="mr-2 h-5 w-5" />
            START WITH BASICS
          </Link>
          <Link href="/knowledge-base/faq" className="btn-neo-secondary">
            <Target className="mr-2 h-5 w-5" />
            BROWSE FAQ
          </Link>
        </div>
      </Section>

      {/* Quick Start Cards */}
      <Section layout="center" container="lg" pattern="dots" padding="xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 -rotate-1 transform text-4xl font-bold">
            GET STARTED IN MINUTES
          </h2>
          <p className="text-lg font-bold text-gray-600">Choose your path to job hunting mastery</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Guides */}
          <Link href="/knowledge-base/guides" className="group">
            <div className="neo-brutal bg-neon-blue h-full transform p-6 transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="mb-4 flex items-center">
                <div className="mr-3 bg-black p-2 text-white">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">GUIDES</h3>
              </div>
              <p className="mb-4 font-bold text-gray-700">
                Step-by-step tutorials to master every aspect of job hunting.
              </p>
              <div className="flex items-center font-bold text-black transition-transform group-hover:translate-x-1">
                <span>Explore Guides</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* FAQ */}
          <Link href="/knowledge-base/faq" className="group">
            <div className="neo-brutal bg-neon-green h-full transform p-6 transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="mb-4 flex items-center">
                <div className="mr-3 bg-black p-2 text-white">
                  <FileTemplate className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">FAQ</h3>
              </div>
              <p className="mb-4 font-bold text-gray-700">
                Brutally honest answers to your most pressing job hunt questions.
              </p>
              <div className="flex items-center font-bold text-black transition-transform group-hover:translate-x-1">
                <span>Read FAQ</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Blog */}
          <Link href="/knowledge-base/blog" className="group">
            <div className="neo-brutal bg-neon-pink h-full transform p-6 transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="mb-4 flex items-center">
                <div className="mr-3 bg-black p-2 text-white">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">BLOG</h3>
              </div>
              <p className="mb-4 font-bold text-gray-700">
                Latest insights, market trends, and brutal job hunting advice.
              </p>
              <div className="flex items-center font-bold text-black transition-transform group-hover:translate-x-1">
                <span>Read Blog</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Resources */}
          <Link href="/knowledge-base/resources" className="group">
            <div className="neo-brutal bg-neon-purple h-full transform p-6 transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="mb-4 flex items-center">
                <div className="mr-3 bg-black p-2 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">RESOURCES</h3>
              </div>
              <p className="mb-4 font-bold text-gray-700">
                Curated lists of job boards, salary tools, and research sites.
              </p>
              <div className="flex items-center font-bold text-black transition-transform group-hover:translate-x-1">
                <span>View Resources</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* Popular Content */}
      <Section layout="center" container="lg" border="top" background="neon-red" padding="xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 rotate-1 transform text-4xl font-bold">MOST POPULAR</h2>
          <p className="text-lg font-bold text-gray-600">
            What other job hunters are reading right now
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="neo-brutal-sm bg-white p-6">
            <h3 className="font-heading mb-2 text-lg font-bold">📊 Job Tracking 101</h3>
            <p className="mb-3 font-bold text-gray-600">
              Master the art of tracking 100+ applications without losing your mind.
            </p>
            <Link href="/knowledge-base/guides" className="font-bold text-black hover:underline">
              Read Guide →
            </Link>
          </div>

          <div className="neo-brutal-sm bg-white p-6">
            <h3 className="font-heading mb-2 text-lg font-bold">💰 Salary Negotiation</h3>
            <p className="mb-3 font-bold text-gray-600">
              Stop leaving money on the table. Learn to negotiate like a pro.
            </p>
            <Link href="/knowledge-base/blog" className="font-bold text-black hover:underline">
              Read Article →
            </Link>
          </div>

          <div className="neo-brutal-sm bg-white p-6">
            <h3 className="font-heading mb-2 text-lg font-bold">📝 Resume Resources</h3>
            <p className="mb-3 font-bold text-gray-600">
              Stop staring at blank pages. Use these proven templates.
            </p>
            <Link href="/knowledge-base/resources" className="font-bold text-black hover:underline">
              Get Resources →
            </Link>
          </div>
        </div>
      </Section>

      {/* Getting Started */}
      <Section layout="center" container="md" border="top" padding="xl">
        <div className="text-center">
          <h2 className="font-heading mb-8 -rotate-1 transform text-4xl font-bold">
            NEW TO JOBRAPTOR?
          </h2>
          <div className="bg-neon-yellow neo-brutal mx-auto max-w-2xl p-8">
            <h3 className="font-heading mb-4 text-2xl font-bold">START HERE</h3>
            <p className="mb-6 font-bold text-gray-700">
              Never tracked a job application before? No problem. We&apos;ll get you from zero to
              hero in 10 minutes.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/knowledge-base/guides" className="btn-neo">
                <BookOpen className="mr-2 h-5 w-5" />
                QUICK START GUIDE
              </Link>
              <Link href="/knowledge-base/faq" className="btn-neo-secondary">
                <Brain className="mr-2 h-5 w-5" />
                READ FAQ
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
