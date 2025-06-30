import Link from "next/link"
import { ArrowRight, Brain, Zap, Target, BookOpen, Map, FileIcon as FileTemplate, PenTool } from "lucide-react"

export default function KnowledgeHubPage() {
  return (
    <div className="font-body min-h-screen bg-white bg-dots" >
      {/* Hero Section */}
      <section className="bg-neon-green border-b-4 border-black ">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="text-center">
          <div className="inline-block transform -rotate-2 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">🧠 KNOWLEDGE HUB</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 transform rotate-1">
            MASTER THE
            <span className="block text-7xl bg-neon-pink px-4 py-2 transform -rotate-1 inline-block mt-2">HUNT</span>
          </h1>
          <p className="mx-auto font-bold text-xl md:text-2xl mb-8 max-w-2xl">
            Your central command center for job hunting domination. Everything you need to go from frustrated applicant
            to offer-collecting PREDATOR.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 mx-auto">
            <Link href="/knowledge/guides/job-tracking-101" className="btn-neo">
              <Zap className="mr-2 h-5 w-5" />
              START WITH BASICS
            </Link>
            <Link href="/knowledge/guides" className="btn-neo-secondary">
              <Target className="mr-2 h-5 w-5" />
              BROWSE ALL GUIDES
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">GET STARTED IN MINUTES</h2>
          <p className="text-lg font-bold text-gray-600">Choose your path to job hunting mastery</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Guides */}
          <Link href="/knowledge/guides" className="group">
            <div className="neo-brutal bg-neon-blue p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center mb-4">
                <div className="bg-black text-white p-2 mr-3">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">GUIDES</h3>
              </div>
              <p className="font-bold text-gray-700 mb-4">
                Step-by-step tutorials to master every aspect of job hunting.
              </p>
              <div className="flex items-center font-bold text-black group-hover:translate-x-1 transition-transform">
                <span>Explore Guides</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Templates */}
          <Link href="/knowledge/templates" className="group">
            <div className="neo-brutal bg-neon-green p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center mb-4">
                <div className="bg-black text-white p-2 mr-3">
                  <FileTemplate className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">TEMPLATES</h3>
              </div>
              <p className="font-bold text-gray-700 mb-4">
                Ready-to-use templates for cover letters, emails, and more.
              </p>
              <div className="flex items-center font-bold text-black group-hover:translate-x-1 transition-transform">
                <span>Get Templates</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Blog */}
          <Link href="/knowledge/blog" className="group">
            <div className="neo-brutal bg-neon-pink p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center mb-4">
                <div className="bg-black text-white p-2 mr-3">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">BLOG</h3>
              </div>
              <p className="font-bold text-gray-700 mb-4">
                Latest insights, market trends, and brutal job hunting advice.
              </p>
              <div className="flex items-center font-bold text-black group-hover:translate-x-1 transition-transform">
                <span>Read Blog</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>

          {/* Resources */}
          <Link href="/knowledge/resources" className="group">
            <div className="neo-brutal bg-neon-purple p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center mb-4">
                <div className="bg-black text-white p-2 mr-3">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">RESOURCES</h3>
              </div>
              <p className="font-bold text-gray-700 mb-4">
                Curated lists of job boards, salary tools, and research sites.
              </p>
              <div className="flex items-center font-bold text-black group-hover:translate-x-1 transition-transform">
                <span>View Resources</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Popular Content */}
      <div className="bg-gray-50 border-t-4 border-black -m-8 p-8 mt-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform rotate-1">MOST POPULAR</h2>
          <p className="text-lg font-bold text-gray-600">What other job hunters are reading right now</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white neo-brutal-sm p-6">
            <h3 className="font-heading text-lg font-bold mb-2">📊 Job Tracking 101</h3>
            <p className="font-bold text-gray-600 mb-3">
              Master the art of tracking 100+ applications without losing your mind.
            </p>
            <Link href="/knowledge/guides/job-tracking-101" className="font-bold text-black hover:underline">
              Read Guide →
            </Link>
          </div>

          <div className="bg-white neo-brutal-sm p-6">
            <h3 className="font-heading text-lg font-bold mb-2">💰 Salary Negotiation</h3>
            <p className="font-bold text-gray-600 mb-3">
              Stop leaving money on the table. Learn to negotiate like a pro.
            </p>
            <Link href="/knowledge/guides/salary-negotiation" className="font-bold text-black hover:underline">
              Read Guide →
            </Link>
          </div>

          <div className="bg-white neo-brutal-sm p-6">
            <h3 className="font-heading text-lg font-bold mb-2">📝 Cover Letter Templates</h3>
            <p className="font-bold text-gray-600 mb-3">Stop staring at blank pages. Use these proven templates.</p>
            <Link href="/knowledge/templates/cover-letters" className="font-bold text-black hover:underline">
              Get Templates →
            </Link>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mt-16 text-center">
        <h2 className="font-heading text-4xl font-bold mb-8 transform -rotate-1">NEW TO JOBRAPTOR?</h2>
        <div className="bg-neon-yellow neo-brutal p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4">START HERE</h3>
          <p className="font-bold text-gray-700 mb-6">
            Never tracked a job application before? No problem. We'll get you from zero to hero in 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge/hub/quick-start" className="btn-neo">
              <BookOpen className="mr-2 h-5 w-5" />
              QUICK START GUIDE
            </Link>
            <Link href="/knowledge/hub/faq" className="btn-neo-secondary">
              <Brain className="mr-2 h-5 w-5" />
              READ FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
