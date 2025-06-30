import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { Navigation } from '@/components/navigation'

import { ArrowRight, Shield, Star, Target, TrendingUp, Users, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="font-body min-h-screen bg-white bg-dots">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="from-neon-yellow via-neon-pink to-neon-blue bg-gradient-to-br py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="neo-brutal-sm mb-8 bg-black px-4 py-2 text-lg text-white">
            🦖 HUNT YOUR DREAM JOB
          </Badge>
          <h1 className="font-heading mb-6 text-6xl leading-tight font-bold md:text-8xl">
            STOP LOSING
            <br />
            <span className="bg-neon-green neo-brutal inline-block -rotate-2 transform px-4 py-2">
              TRACK OF JOBS
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl font-bold md:text-2xl">
            JobRaptor is the most BRUTAL job application tracker for ambitious professionals who
            refuse to settle for mediocrity.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="btn-neo px-12 py-6 text-2xl">
              <Link href="/dashboard">
                START HUNTING <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild className="btn-neo-accent px-8 py-4 text-xl">
              <Link href="#demo">WATCH DEMO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 bg-dots">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-6 text-5xl font-bold md:text-6xl">
              FEATURES THAT
              <br />
              <span className="bg-neon-purple neo-brutal inline-block px-4 py-2">DOMINATE</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-bold">
              Every feature designed to give you the EDGE in your job hunt
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'PRECISION TRACKING',
                description:
                  'Track every application with military precision. Never lose sight of your targets.',
                color: 'bg-neon-yellow',
              },
              {
                icon: TrendingUp,
                title: 'AI-POWERED INSIGHTS',
                description:
                  "Get brutal feedback on your applications. AI tells you what's working and what's not.",
                color: 'bg-neon-pink',
              },
              {
                icon: Shield,
                title: 'BULLETPROOF DATA',
                description:
                  'Your data is locked down tighter than Fort Knox. Zero chance of losing your progress.',
                color: 'bg-neon-blue',
              },
              {
                icon: Users,
                title: 'COMPANY INTEL',
                description: 'Deep dive into company data. Know your enemy before you strike.',
                color: 'bg-neon-green',
              },
              {
                icon: Zap,
                title: 'LIGHTNING FAST',
                description:
                  'Add jobs in seconds. Update status instantly. No time wasted on slow interfaces.',
                color: 'bg-neon-purple',
              },
              {
                icon: Star,
                title: 'PRIORITY SYSTEM',
                description:
                  'Focus on what matters. Rank opportunities and attack the best ones first.',
                color: 'bg-neon-orange',
              },
            ].map((feature, index) => (
              <Card key={index} className={`neo-brutal ${feature.color} overflow-hidden p-0`}>
                <CardContent className="p-8">
                  <feature.icon className="mb-4 h-12 w-12" />
                  <h3 className="font-heading mb-4 text-2xl font-bold">{feature.title}</h3>
                  <p className="text-lg font-bold">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-6 text-5xl font-bold md:text-6xl">
              THE NUMBERS
              <br />
              <span className="bg-neon-yellow neo-brutal inline-block px-4 py-2 text-black">
                DON&apos;T LIE
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { number: '10,000+', label: 'JOBS TRACKED' },
              { number: '2,500+', label: 'USERS HIRED' },
              { number: '85%', label: 'SUCCESS RATE' },
              { number: '30%', label: 'SALARY INCREASE' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-neon-yellow mb-2 text-6xl font-bold md:text-7xl">
                  {stat.number}
                </div>
                <div className="text-xl font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-neon-pink via-neon-purple to-neon-blue bg-gradient-to-r py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading mb-8 text-5xl font-bold md:text-7xl">
            READY TO
            <br />
            <span className="bg-neon-yellow neo-brutal inline-block rotate-1 transform px-4 py-2 text-black">
              DOMINATE?
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-2xl font-bold">
            Stop letting opportunities slip through your fingers. Start tracking like a PREDATOR.
          </p>
          <Button asChild className="btn-neo px-16 py-8 text-3xl">
            <Link href="/dashboard">
              UNLEASH THE RAPTOR <Zap className="ml-4 h-8 w-8" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-2 md:mb-0">
              <div className="neo-brutal-sm bg-black p-2 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <span className="font-heading text-2xl font-bold">JOBRAPTOR</span>
            </div>
            <div className="flex space-x-8">
              <Link href="#" className="font-bold hover:underline">
                PRIVACY
              </Link>
              <Link href="#" className="font-bold hover:underline">
                TERMS
              </Link>
              <Link href="#" className="font-bold hover:underline">
                SUPPORT
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t-2 border-black pt-8 text-center">
            <p className="font-bold">© 2024 JOBRAPTOR. ALL RIGHTS RESERVED. HUNT RESPONSIBLY.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
