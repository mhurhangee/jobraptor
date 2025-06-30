import Link from "next/link"
import {
  Clock,
  Users,
  TrendingUp,
  Map,
  Target,
  Brain,
  MessageSquare,
  DollarSign,
  FileText,
  Linkedin,
} from "lucide-react"

const guides = [
  {
    title: "Job Tracking 101",
    description: "Master the art of tracking unlimited applications without losing your sanity.",
    difficulty: "Beginner",
    time: "15 min read",
    category: "FUNDAMENTALS",
    href: "/knowledge/guides/job-tracking-101",
    icon: Target,
    color: "bg-neon-yellow",
    featured: true,
  },
  {
    title: "Interview Preparation Mastery",
    description: "Turn interviews from anxiety-inducing nightmares into confident conversations.",
    difficulty: "Intermediate",
    time: "25 min read",
    category: "INTERVIEWS",
    href: "/knowledge/guides/interview-prep",
    icon: MessageSquare,
    color: "bg-neon-blue",
    featured: true,
  },
  {
    title: "Salary Negotiation Like a Pro",
    description: "Stop leaving money on the table. Learn to negotiate like you mean business.",
    difficulty: "Advanced",
    time: "30 min read",
    category: "NEGOTIATION",
    href: "/knowledge/guides/salary-negotiation",
    icon: DollarSign,
    color: "bg-neon-green",
    featured: true,
  },
  {
    title: "Resume Optimization",
    description: "Make your resume impossible to ignore with data-driven optimization.",
    difficulty: "Intermediate",
    time: "20 min read",
    category: "RESUME",
    href: "/knowledge/guides/resume-optimization",
    icon: FileText,
    color: "bg-neon-pink",
  },
  {
    title: "LinkedIn Strategy",
    description: "Game LinkedIn's algorithm and turn your profile into a job magnet.",
    difficulty: "Intermediate",
    time: "35 min read",
    category: "NETWORKING",
    href: "/knowledge/guides/linkedin-strategy",
    icon: Linkedin,
    color: "bg-neon-purple",
  },
  {
    title: "Remote Work Job Hunt",
    description: "Navigate the remote job market and land your dream work-from-home role.",
    difficulty: "Intermediate",
    time: "25 min read",
    category: "REMOTE WORK",
    href: "/knowledge/guides/remote-work-hunt",
    icon: Users,
    color: "bg-neon-orange",
  },
]

export default function GuidesPage() {
  const featuredGuides = guides.filter((guide) => guide.featured)
  const allGuides = guides.filter((guide) => !guide.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-neon-blue border-b-4 border-black mb-8 -m-8 p-8">
        <div className="max-w-4xl">
          <div className="inline-block transform -rotate-2 bg-black text-white px-6 py-2 mb-6">
            <span className="font-heading text-sm font-bold">📚 STEP-BY-STEP GUIDES</span>
          </div>
          <h1 className="font-heading text-6xl font-bold mb-6 transform rotate-1">
            MASTER THE
            <span className="block text-7xl bg-neon-yellow px-4 py-2 transform -rotate-1 inline-block mt-2">GAME</span>
          </h1>
          <p className="text-xl font-bold mb-8 max-w-2xl">
            Stop guessing. Start winning. These guides will transform you from confused applicant to job hunting
            PREDATOR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/knowledge/guides/job-tracking-101" className="btn-neo">
              <Map className="mr-2 h-5 w-5" />
              START WITH BASICS
            </Link>
            <Link href="/knowledge/hub" className="btn-neo-secondary">
              <Brain className="mr-2 h-5 w-5" />
              BACK TO HUB
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Guides */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">ESSENTIAL GUIDES</h2>
          <p className="text-lg font-bold text-gray-600">Start here for maximum impact</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <Link key={index} href={guide.href} className="group">
                <div
                  className={`neo-brutal ${guide.color} p-6 h-full transform transition-all duration-200 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_#000]`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white p-2 mr-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="bg-black text-white px-2 py-1 text-xs font-bold">{guide.category}</div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="font-bold text-gray-700 mb-4">{guide.description}</p>

                  <div className="flex items-center justify-between text-sm font-bold mb-4">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {guide.difficulty}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.time}
                    </div>
                  </div>

                  <div className="bg-black text-white p-3 font-bold text-center group-hover:bg-gray-800 transition-colors">
                    READ GUIDE →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* All Guides */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform rotate-1">ALL GUIDES</h2>
          <p className="text-lg font-bold text-gray-600">Deep dive into specific strategies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allGuides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <Link key={index} href={guide.href} className="group">
                <div className="bg-white neo-brutal-sm p-6 hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`${guide.color} p-3 flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-black text-white px-2 py-1 text-xs font-bold mr-2">{guide.category}</span>
                        <span className="text-xs font-bold text-gray-500">{guide.time}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-2">{guide.title}</h3>
                      <p className="font-bold text-gray-600 mb-3">{guide.description}</p>
                      <div className="flex items-center text-sm font-bold">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {guide.difficulty}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-gray-50 border-t-4 border-black -m-8 p-8 mt-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-4 transform -rotate-1">RECOMMENDED LEARNING PATH</h2>
          <p className="text-lg font-bold text-gray-600">Follow this sequence for maximum results</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Job Tracking 101",
                description: "Set up your foundation",
                href: "/knowledge/guides/job-tracking-101",
              },
              {
                step: 2,
                title: "Resume Optimization",
                description: "Make your resume impossible to ignore",
                href: "/knowledge/guides/resume-optimization",
              },
              {
                step: 3,
                title: "LinkedIn Strategy",
                description: "Build your professional presence",
                href: "/knowledge/guides/linkedin-strategy",
              },
              {
                step: 4,
                title: "Interview Preparation",
                description: "Master the conversation",
                href: "/knowledge/guides/interview-prep",
              },
              {
                step: 5,
                title: "Salary Negotiation",
                description: "Get what you're worth",
                href: "/knowledge/guides/salary-negotiation",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white neo-brutal-sm p-6 flex items-center space-x-6 hover:translate-x-2 transition-all duration-200">
                  <div className="bg-neon-yellow text-black font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-1">{item.title}</h3>
                    <p className="font-bold text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-black group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="font-heading text-4xl font-bold mb-8 transform rotate-1">READY TO START?</h2>
        <div className="bg-black text-white neo-brutal p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4 text-neon-yellow">PICK YOUR FIRST GUIDE</h3>
          <p className="font-bold mb-6">Every expert was once a beginner. Start your transformation today.</p>
          <Link href="/knowledge/guides/job-tracking-101" className="btn-neo">
            <Map className="mr-2 h-5 w-5" />
            START WITH JOB TRACKING 101
          </Link>
        </div>
      </div>
    </div>
  )
}
