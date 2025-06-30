"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Map, FileIcon as FileTemplate, PenTool, Target, Users } from "lucide-react"

const knowledgeStructure = [
  {
    title: "KNOWLEDGE HUB",
    icon: Brain,
    color: "bg-neon-yellow",
    items: [
      { title: "Overview", href: "/knowledge/hub", badge: "START HERE" },
      { title: "Quick Start", href: "/knowledge/hub/quick-start" },
      { title: "Best Practices", href: "/knowledge/hub/best-practices" },
      { title: "FAQ", href: "/knowledge/hub/faq" },
    ],
  },
  {
    title: "GUIDES",
    icon: Map,
    color: "bg-neon-blue",
    items: [
      { title: "Job Tracking 101", href: "/knowledge/guides/job-tracking-101" },
      { title: "Interview Prep", href: "/knowledge/guides/interview-prep" },
      { title: "Salary Negotiation", href: "/knowledge/guides/salary-negotiation" },
      { title: "Resume Optimization", href: "/knowledge/guides/resume-optimization" },
      { title: "LinkedIn Strategy", href: "/knowledge/guides/linkedin-strategy" },
    ],
  },
  {
    title: "TEMPLATES",
    icon: FileTemplate,
    color: "bg-neon-green",
    items: [
      { title: "Cover Letters", href: "/knowledge/templates/cover-letters" },
      { title: "Email Templates", href: "/knowledge/templates/email-templates" },
      { title: "Interview Questions", href: "/knowledge/templates/interview-questions" },
      { title: "Follow-up Scripts", href: "/knowledge/templates/follow-up-scripts" },
      { title: "Resignation Letters", href: "/knowledge/templates/resignation-letters" },
    ],
  },
  {
    title: "BLOG",
    icon: PenTool,
    color: "bg-neon-pink",
    items: [
      { title: "Latest Posts", href: "/knowledge/blog" },
      { title: "Job Market Insights", href: "/knowledge/blog/category/market-insights" },
      { title: "Career Advice", href: "/knowledge/blog/category/career-advice" },
      { title: "Success Stories", href: "/knowledge/blog/category/success-stories" },
      { title: "Industry Trends", href: "/knowledge/blog/category/industry-trends" },
    ],
  },
  {
    title: "RESOURCES",
    icon: Target,
    color: "bg-neon-purple",
    items: [
      { title: "Job Boards List", href: "/knowledge/resources/job-boards" },
      { title: "Salary Research", href: "/knowledge/resources/salary-research" },
      { title: "Company Research", href: "/knowledge/resources/company-research" },
      { title: "Networking Tips", href: "/knowledge/resources/networking" },
      { title: "Remote Work Guide", href: "/knowledge/resources/remote-work" },
    ],
  },
  {
    title: "COMMUNITY",
    icon: Users,
    color: "bg-neon-orange",
    items: [
      { title: "Success Stories", href: "/knowledge/community/success-stories" },
      { title: "User Tips", href: "/knowledge/community/user-tips" },
      { title: "Q&A Forum", href: "/knowledge/community/forum" },
      { title: "Feature Requests", href: "/knowledge/community/feature-requests" },
    ],
  },
]

export function KnowledgeNavigation() {
  const pathname = usePathname()

  return (
    <div className="space-y-6">
      <Card className="neo-brutal bg-black text-white p-0">
        <CardHeader className="bg-neon-yellow text-black border-b-4 border-black">
          <CardTitle className="font-heading text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6" />
            KNOWLEDGE BASE
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="font-bold">Everything you need to dominate your job hunt like a PREDATOR</p>
        </CardContent>
      </Card>

      {knowledgeStructure.map((section, index) => {
        const Icon = section.icon
        return (
          <Card
            key={index}
            className={`neo-brutal ${section.color} p-0 transform hover:scale-105 transition-transform`}
          >
            <CardHeader className="border-b-4 border-black">
              <CardTitle className="font-heading text-lg font-bold flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between p-2 font-bold transition-all duration-200 hover:bg-black hover:text-white border-2 border-transparent hover:border-black ${
                        pathname === item.href ? "bg-black text-white border-black" : ""
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && <Badge className="neo-badge bg-white text-black text-xs">{item.badge}</Badge>}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
