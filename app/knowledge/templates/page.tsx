import Link from "next/link"
import {
  Download,
  FileText,
  Mail,
  MessageSquare,
  UserCheck,
  FileIcon as FileTemplate,
  Clock,
  Users,
} from "lucide-react"

const templates = [
  {
    title: "Cover Letter Templates",
    description: "4 proven templates with 23% higher response rates than generic letters.",
    category: "APPLICATIONS",
    count: "4 templates",
    href: "/knowledge/templates/cover-letters",
    icon: FileText,
    color: "bg-neon-yellow",
    featured: true,
  },
  {
    title: "Email Templates",
    description: "Professional emails for every stage of your job hunt.",
    category: "COMMUNICATION",
    count: "8 templates",
    href: "/knowledge/templates/email-templates",
    icon: Mail,
    color: "bg-neon-blue",
    featured: true,
  },
  {
    title: "Interview Questions Bank",
    description: "200+ common questions with winning answers and frameworks.",
    category: "INTERVIEWS",
    count: "200+ questions",
    href: "/knowledge/templates/interview-questions",
    icon: MessageSquare,
    color: "bg-neon-green",
    featured: true,
  },
  {
    title: "Follow-up Scripts",
    description: "Persistent without being annoying. Scripts that get responses.",
    category: "FOLLOW-UP",
    count: "6 scripts",
    href: "/knowledge/templates/follow-up-scripts",
    icon: Clock,
    color: "bg-neon-pink",
  },
  {
    title: "Resignation Letters",
    description: "Leave professionally and maintain relationships.",
    category: "RESIGNATION",
    count: "3 templates",
    href: "/knowledge/templates/resignation-letters",
    icon: UserCheck,
    color: "bg-neon-purple",
  },
  {
    title: "LinkedIn Messages",
    description: "Connection requests and messages that actually work.",
    category: "NETWORKING",
    count: "10 templates",
    href: "/knowledge/templates/linkedin-messages",
    icon: Users,
    color: "bg-neon-orange",
  },
]

export default function TemplatesPage() {
  const featuredTemplates = templates.filter((template) => template.featured)
  const allTemplates = templates.filter((template) => !template.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-neon-green border-b-4 border-black mb-8 -m-8 p-8">
        <div className="max-w-4xl">
          <div className="inline-block transform -rotate-2 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">📄 READY-TO-USE TEMPLATES</span>
          </div>
          <h1 className="font-heading text-6xl font-bold mb-6 transform rotate-1">
            STOP STARTING
            <span className="block text-7xl bg-neon-pink px-4 py-2 transform -rotate-1 inline-block mt-2">
              FROM SCRATCH
            </span>
          </h1>
          <p className="text-xl font-bold mb-8 max-w-2xl">
            Why reinvent the wheel? These battle-tested templates have helped thousands of job hunters get hired.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/knowledge/templates/cover-letters" className="btn-neo">
              <Download className="mr-2 h-5 w-5" />
              GET COVER LETTERS
            </Link>
            <Link href="/knowledge/templates/email-templates" className="btn-neo-secondary">
              <Mail className="mr-2 h-5 w-5" />
              EMAIL TEMPLATES
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">MOST POPULAR</h2>
          <p className="text-lg font-bold text-gray-600">Templates that get results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredTemplates.map((template, index) => {
            const Icon = template.icon
            return (
              <Link key={index} href={template.href} className="group">
                <div
                  className={`neo-brutal ${template.color} p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white p-2 mr-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="bg-black text-white px-2 py-1 text-xs font-bold">{template.category}</div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3">{template.title}</h3>
                  <p className="font-bold text-gray-700 mb-4">{template.description}</p>

                  <div className="flex items-center justify-between text-sm font-bold mb-4">
                    <div className="flex items-center">
                      <FileTemplate className="h-4 w-4 mr-1" />
                      {template.count}
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      FREE
                    </div>
                  </div>

                  <div className="bg-black text-white p-3 font-bold text-center group-hover:bg-gray-800 transition-colors">
                    GET TEMPLATES →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* All Templates */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform rotate-1">ALL TEMPLATES</h2>
          <p className="text-lg font-bold text-gray-600">Complete your arsenal</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allTemplates.map((template, index) => {
            const Icon = template.icon
            return (
              <Link key={index} href={template.href} className="group">
                <div className="bg-white neo-brutal-sm p-6 hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${template.color} p-3 flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-black text-white px-2 py-1 text-xs font-bold mr-2">
                          {template.category}
                        </span>
                        <span className="text-xs font-bold text-gray-500">{template.count}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">{template.title}</h3>
                      <p className="font-bold text-gray-600 mb-3">{template.description}</p>
                      <div className="flex items-center text-sm font-bold text-green-600">
                        <Download className="h-4 w-4 mr-1" />
                        FREE DOWNLOAD
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Template Categories */}
      <div className="bg-gray-50 border-t-4 border-black -m-8 p-8 mt-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">BROWSE BY CATEGORY</h2>
          <p className="text-lg font-bold text-gray-600">Find exactly what you need</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Applications",
              count: "12 templates",
              color: "bg-neon-yellow",
              href: "/knowledge/templates?category=applications",
            },
            {
              name: "Communication",
              count: "18 templates",
              color: "bg-neon-blue",
              href: "/knowledge/templates?category=communication",
            },
            {
              name: "Interviews",
              count: "200+ questions",
              color: "bg-neon-green",
              href: "/knowledge/templates?category=interviews",
            },
            {
              name: "Networking",
              count: "15 templates",
              color: "bg-neon-pink",
              href: "/knowledge/templates?category=networking",
            },
          ].map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div
                className={`${category.color} neo-brutal-sm p-6 text-center hover:translate-x-1 hover:translate-y-1 transition-all duration-200`}
              >
                <h3 className="font-heading text-lg font-bold mb-2">{category.name}</h3>
                <p className="font-bold text-gray-700">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform rotate-1">PROVEN RESULTS</h2>
          <p className="text-lg font-bold text-gray-600">Real data from real users</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white neo-brutal-sm p-8 text-center">
            <div className="text-4xl font-heading font-bold mb-2">23%</div>
            <div className="font-bold text-gray-600">Higher response rate with our cover letter templates</div>
          </div>
          <div className="bg-white neo-brutal-sm p-8 text-center">
            <div className="text-4xl font-heading font-bold mb-2">50K+</div>
            <div className="font-bold text-gray-600">Templates downloaded by job hunters</div>
          </div>
          <div className="bg-white neo-brutal-sm p-8 text-center">
            <div className="text-4xl font-heading font-bold mb-2">4.8/5</div>
            <div className="font-bold text-gray-600">Average rating from users</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="font-heading text-4xl font-bold mb-8 transform -rotate-1">STOP WASTING TIME</h2>
        <div className="bg-black text-white neo-brutal p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4 text-neon-green">GET ALL TEMPLATES</h3>
          <p className="font-bold mb-6">
            Why download one at a time? Get the complete template library and never start from scratch again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge/templates/cover-letters" className="btn-neo">
              <Download className="mr-2 h-5 w-5" />
              START WITH COVER LETTERS
            </Link>
            <Link href="/knowledge/templates/email-templates" className="btn-neo-secondary">
              <Mail className="mr-2 h-5 w-5" />
              EMAIL TEMPLATES
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
