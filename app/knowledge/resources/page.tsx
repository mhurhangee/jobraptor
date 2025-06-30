import Link from "next/link"
import { ExternalLink, Search, DollarSign, Building, Users, Globe, TrendingUp } from "lucide-react"

const resourceCategories = [
  {
    title: "Job Boards",
    description: "The best places to find opportunities in your field",
    icon: Search,
    color: "bg-neon-yellow",
    href: "/knowledge/resources/job-boards",
    count: "50+ boards",
  },
  {
    title: "Salary Research",
    description: "Know your worth before you negotiate",
    icon: DollarSign,
    color: "bg-neon-green",
    href: "/knowledge/resources/salary-research",
    count: "15+ tools",
  },
  {
    title: "Company Research",
    description: "Deep dive into potential employers",
    icon: Building,
    color: "bg-neon-blue",
    href: "/knowledge/resources/company-research",
    count: "20+ sources",
  },
  {
    title: "Networking",
    description: "Build connections that lead to opportunities",
    icon: Users,
    color: "bg-neon-pink",
    href: "/knowledge/resources/networking",
    count: "25+ platforms",
  },
  {
    title: "Remote Work",
    description: "Find and land remote opportunities",
    icon: Globe,
    color: "bg-neon-purple",
    href: "/knowledge/resources/remote-work",
    count: "30+ resources",
  },
  {
    title: "Industry Insights",
    description: "Stay ahead of market trends",
    icon: TrendingUp,
    color: "bg-neon-orange",
    href: "/knowledge/resources/industry-insights",
    count: "40+ sources",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-neon-purple border-b-4 border-black mb-8 -m-8 p-8">
        <div className="max-w-4xl">
          <div className="inline-block transform -rotate-2 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">🎯 CURATED RESOURCES</span>
          </div>
          <h1 className="font-heading text-6xl font-bold mb-6 transform rotate-1">
            YOUR SECRET
            <span className="block text-7xl bg-neon-yellow px-4 py-2 transform -rotate-1 inline-block mt-2">
              WEAPONS
            </span>
          </h1>
          <p className="text-xl font-bold mb-8 max-w-2xl">
            Hand-picked tools, sites, and resources that give you an unfair advantage in your job hunt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/knowledge/resources/job-boards" className="btn-neo">
              <Search className="mr-2 h-5 w-5" />
              FIND JOB BOARDS
            </Link>
            <Link href="/knowledge/resources/salary-research" className="btn-neo-secondary">
              <DollarSign className="mr-2 h-5 w-5" />
              RESEARCH SALARIES
            </Link>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">RESOURCE ARSENAL</h2>
          <p className="text-lg font-bold text-gray-600">Everything you need to dominate your search</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href} className="group">
                <div
                  className={`neo-brutal ${category.color} p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white p-2 mr-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="bg-black text-white px-2 py-1 text-xs font-bold">{category.count}</div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3">{category.title}</h3>
                  <p className="font-bold text-gray-700 mb-6">{category.description}</p>

                  <div className="bg-black text-white p-3 font-bold text-center group-hover:bg-gray-800 transition-colors">
                    EXPLORE RESOURCES →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-gray-50 border-t-4 border-black -m-8 p-8 mt-8 mb-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform rotate-1">QUICK ACCESS</h2>
          <p className="text-lg font-bold text-gray-600">Most requested resources</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "LinkedIn", description: "Professional networking", href: "https://linkedin.com", external: true },
            {
              name: "Glassdoor",
              description: "Company reviews & salaries",
              href: "https://glassdoor.com",
              external: true,
            },
            { name: "Indeed", description: "Job search engine", href: "https://indeed.com", external: true },
            { name: "AngelList", description: "Startup jobs", href: "https://angel.co", external: true },
          ].map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="group bg-white neo-brutal-sm p-4 hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              {...(resource.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-lg font-bold">{resource.name}</h3>
                {resource.external && <ExternalLink className="h-4 w-4" />}
              </div>
              <p className="font-bold text-gray-600 text-sm">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Tools */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">POWER TOOLS</h2>
          <p className="text-lg font-bold text-gray-600">Advanced resources for serious job hunters</p>
        </div>

        <div className="space-y-6">
          {[
            {
              name: "Hunter.io",
              description: "Find email addresses for hiring managers and recruiters",
              category: "EMAIL FINDING",
              href: "https://hunter.io",
              why: "Stop sending applications into the void. Find the right person to contact.",
            },
            {
              name: "Levels.fyi",
              description: "Real salary data from tech companies",
              category: "SALARY DATA",
              href: "https://levels.fyi",
              why: "Know exactly what you should be asking for in negotiations.",
            },
            {
              name: "Crunchbase",
              description: "Company funding, growth, and leadership data",
              category: "COMPANY INTEL",
              href: "https://crunchbase.com",
              why: "Research companies like an investor. Know their financial health.",
            },
            {
              name: "Blind",
              description: "Anonymous employee reviews and salary discussions",
              category: "INSIDER INFO",
              href: "https://teamblind.com",
              why: "Get the real story about company culture and compensation.",
            },
          ].map((tool, index) => (
            <div key={index} className="bg-white neo-brutal-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="font-heading text-xl font-bold mr-3">{tool.name}</h3>
                    <span className="bg-black text-white px-2 py-1 text-xs font-bold">{tool.category}</span>
                  </div>
                  <p className="font-bold text-gray-600 mb-2">{tool.description}</p>
                  <p className="font-bold text-sm text-gray-500 mb-4">
                    <strong>Why it matters:</strong> {tool.why}
                  </p>
                </div>
                <Link href={tool.href} target="_blank" rel="noopener noreferrer" className="btn-neo-sm ml-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  VISIT
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-black text-white neo-brutal p-8 mb-16">
        <h2 className="font-heading text-3xl font-bold mb-6 text-neon-yellow">PRO TIPS FOR USING RESOURCES</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">🎯 Be Strategic</h3>
            <p className="font-bold mb-4">
              Don't just browse randomly. Have a specific goal for each resource you use.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">📊 Track Everything</h3>
            <p className="font-bold mb-4">
              Keep notes on what you find. Information is only valuable if you can find it again.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">⏰ Set Time Limits</h3>
            <p className="font-bold mb-4">
              Research can become procrastination. Set 30-minute limits for each session.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-3">🔄 Stay Updated</h3>
            <p className="font-bold mb-4">
              Job market changes fast. Check back regularly for new resources and updates.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-heading text-4xl font-bold mb-8 transform rotate-1">START RESEARCHING</h2>
        <div className="bg-neon-yellow neo-brutal p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4">KNOWLEDGE IS POWER</h3>
          <p className="font-bold mb-6">
            The more you know about companies, salaries, and opportunities, the better your results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge/resources/job-boards" className="btn-neo">
              <Search className="mr-2 h-5 w-5" />
              FIND JOB BOARDS
            </Link>
            <Link href="/knowledge/resources/salary-research" className="btn-neo-secondary">
              <DollarSign className="mr-2 h-5 w-5" />
              RESEARCH SALARIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
