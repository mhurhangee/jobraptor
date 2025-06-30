import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ButtonsCTA } from '@/components/buttons-cta'
import { Shield, Star, Target, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Trophy, Sparkles, ArrowDown } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function LandingPage() {
  return (
    <div className="font-body min-h-screen bg-white bg-dots">

      {/* Hero Section */}
      <section className="from-neon-yellow via-neon-pink to-neon-blue bg-gradient-to-br py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="neo-brutal-color mb-8 bg-black px-4 py-2 text-lg text-white">
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
          <ButtonsCTA />
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
                  <feature.icon strokeWidth="2.5" strokeLinecap="butt" className="mb-4 h-12 w-12" />
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

      {/* Hero Section - Overlapping Elements */}
      <section className="relative py-20 bg-gradient-to-br from-neon-yellow via-white to-neon-pink overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-neon-blue border-4 border-black transform rotate-12 opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-neon-green border-4 border-black transform -rotate-12 opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-neon-purple border-4 border-black transform rotate-45 opacity-25"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="neo-brutal bg-black text-white text-lg px-6 py-3 transform -rotate-2 hover:rotate-0 transition-transform">
                  🦖 HUNT YOUR DREAM JOB
                </Badge>

                <h1 className="font-heading text-6xl md:text-7xl font-bold leading-tight">
                  STOP
                  <br />
                  <span className="bg-neon-green px-4 py-2 neo-brutal inline-block transform rotate-2 hover:-rotate-1 transition-transform cursor-pointer">
                    LOSING
                  </span>
                  <br />
                  TRACK OF JOBS
                </h1>

                <p className="text-xl md:text-2xl font-bold max-w-lg">
                  JobRaptor is the most <span className="bg-neon-orange px-2 py-1 border-2 border-black">BRUTAL</span>{" "}
                  job application tracker for ambitious professionals who refuse to settle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-neo text-2xl px-12 py-6 transform hover:scale-105 transition-transform">
                  <Link href="/dashboard">
                    START HUNTING <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="btn-neo-accent text-xl px-8 py-4 transform rotate-1 hover:rotate-0 transition-transform"
                >
                  <Link href="#demo">WATCH DEMO</Link>
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="neo-brutal bg-white p-8 transform rotate-3 hover:rotate-1 transition-transform">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold">APPLICATIONS</span>
                    <Badge className="bg-neon-green text-black border-2 border-black">24 ACTIVE</Badge>
                  </div>
                  <div className="space-y-2">
                    {["Google - SWE", "Netflix - Frontend", "Apple - iOS Dev"].map((job, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border-2 border-black bg-gray-50">
                        <span className="font-bold text-sm">{job}</span>
                        <Badge className="bg-neon-blue text-black text-xs">INTERVIEWING</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 neo-brutal-sm bg-neon-pink p-4 transform rotate-12 animate-bounce">
                <Trophy className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 neo-brutal-sm bg-neon-yellow p-4 transform -rotate-12">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8" />
        </div>
      </section>

      {/* Stats Bar - Overlapping */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "10K+", label: "JOBS TRACKED", color: "bg-neon-yellow", rotation: "rotate-2" },
              { number: "2.5K+", label: "USERS HIRED", color: "bg-neon-pink", rotation: "-rotate-1" },
              { number: "85%", label: "SUCCESS RATE", color: "bg-neon-green", rotation: "rotate-1" },
              { number: "30%", label: "SALARY BOOST", color: "bg-neon-blue", rotation: "-rotate-2" },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`neo-brutal ${stat.color} p-0 transform ${stat.rotation} hover:rotate-0 transition-transform cursor-pointer`}
              >
                <CardContent className="p-6 text-center">
                  <div className="font-heading text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="font-bold text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16 p-24 border-t-4 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-heading text-3xl font-bold mb-4">
              GET THE <span className="bg-neon-orange px-2 py-1 border-2 border-black">REAL</span> TALK
            </h3>
            <p className="font-bold text-gray-600">
              No BS job hunting tips, salary negotiation tactics, and the occasional rant about broken hiring
              processes. Straight from someone who's been there.
            </p>
          </div>
          <div className="flex gap-4">
            <Input type="email" placeholder="your.email@domain.com" className="neo-brutal-color neo-input flex-1" />
            <Button className="btn-neo-accent">JOIN THE HUNT</Button>
          </div>
        </div>
      </div>

      {/* Features Section - Asymmetrical Layout */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="font-heading text-6xl font-bold mb-6 relative inline-block">
              FEATURES THAT
              <div className="absolute -top-4 -right-8 neo-brutal-sm bg-neon-orange p-2 transform rotate-12">
                <Star className="h-6 w-6" />
              </div>
            </h2>
            <br />
            <span className="bg-neon-purple px-6 py-3 neo-brutal inline-block transform -rotate-2 text-6xl font-heading font-bold">
              DOMINATE
            </span>
          </div>

          {/* Asymmetrical Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature */}
            <Card className="neo-brutal bg-neon-yellow md:col-span-8 p-0 transform hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="neo-brutal-sm bg-black text-white p-4">
                    <Target className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold mb-4">PRECISION TRACKING</h3>
                    <p className="font-bold text-lg mb-6">
                      Track every application with military precision. Never lose sight of your targets again.
                    </p>
                    <div className="flex gap-2">
                      {["Real-time Updates", "Smart Notifications", "Progress Analytics"].map((feature, i) => (
                        <Badge key={i} className="neo-badge bg-white text-black">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Small Feature */}
            <Card className="neo-brutal bg-neon-pink md:col-span-4 p-0 transform rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">AI INSIGHTS</h3>
                <p className="font-bold">Get brutal feedback on your applications</p>
              </CardContent>
            </Card>

            {/* Medium Features */}
            <Card className="neo-brutal bg-neon-blue md:col-span-6 p-0 transform -rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-10 w-10" />
                  <h3 className="font-heading text-2xl font-bold">BULLETPROOF DATA</h3>
                </div>
                <p className="font-bold">Your data is locked down tighter than Fort Knox</p>
              </CardContent>
            </Card>

            <Card className="neo-brutal bg-neon-green md:col-span-6 p-0 transform rotate-2 hover:rotate-0 transition-transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="h-10 w-10" />
                  <h3 className="font-heading text-2xl font-bold">LIGHTNING FAST</h3>
                </div>
                <p className="font-bold">Add jobs in seconds. No time wasted on slow interfaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Collage Style */}
      <section className="py-20 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-6xl font-bold text-center mb-16">
            WHAT HUNTERS
            <br />
            <span className="bg-white text-black px-4 py-2 neo-brutal inline-block transform rotate-1">SAY</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JobRaptor helped me land my dream job at Google. The tracking system is INSANE!",
                author: "Sarah Chen",
                role: "Software Engineer @ Google",
                color: "bg-white",
                rotation: "rotate-2",
              },
              {
                quote: "Finally, a job tracker that doesn't suck. Increased my response rate by 300%!",
                author: "Marcus Johnson",
                role: "Product Manager @ Netflix",
                color: "bg-neon-yellow",
                rotation: "-rotate-1",
              },
              {
                quote: "The AI insights are brutal but effective. Got 3 offers in 2 weeks!",
                author: "Emily Rodriguez",
                role: "UX Designer @ Apple",
                color: "bg-neon-green",
                rotation: "rotate-1",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`neo-brutal ${testimonial.color} p-0 transform ${testimonial.rotation} hover:rotate-0 transition-transform`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="font-bold text-lg mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <div className="font-heading font-bold">{testimonial.author}</div>
                    <div className="font-bold text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Stacked Cards */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-6xl font-bold mb-6">
              CHOOSE YOUR
              <br />
              <span className="bg-neon-orange px-4 py-2 neo-brutal inline-block transform -rotate-2">WEAPON</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Free Plan - Background */}
              <Card className="neo-brutal bg-gray-200 w-80 h-96 absolute top-4 left-4 transform rotate-3">
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading text-2xl font-bold mb-4">FREE HUNTER</h3>
                  <div className="font-heading text-4xl font-bold mb-4">$0</div>
                  <p className="font-bold mb-6">For casual job seekers</p>
                  <ul className="space-y-2 text-left font-bold">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> 10 Job Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Basic Tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Email Support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pro Plan - Foreground */}
              <Card className="neo-brutal bg-neon-yellow w-80 h-96 relative z-10 transform hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <Badge className="neo-badge bg-black text-white mb-4">MOST POPULAR</Badge>
                  <h3 className="font-heading text-2xl font-bold mb-4">PRO PREDATOR</h3>
                  <div className="font-heading text-4xl font-bold mb-4">$19</div>
                  <p className="font-bold mb-6">For serious hunters</p>
                  <ul className="space-y-2 text-left font-bold mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Unlimited Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> AI Insights
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Priority Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Advanced Analytics
                    </li>
                  </ul>
                  <Button className="btn-neo w-full">START HUNTING</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA - Split Screen */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-6xl font-bold mb-8">
                READY TO
                <br />
                <span className="bg-neon-yellow text-black px-4 py-2 neo-brutal inline-block transform rotate-2">
                  DOMINATE?
                </span>
              </h2>
              <p className="text-2xl font-bold mb-8 max-w-lg">
                Stop letting opportunities slip through your fingers. Start tracking like a PREDATOR.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-neo text-2xl px-12 py-6">
                  <Link href="/dashboard">
                    UNLEASH THE RAPTOR <Zap className="ml-4 h-8 w-8" />
                  </Link>
                </Button>
                <Button asChild className="btn-neo-secondary text-xl px-8 py-4">
                  <Link href="#demo">WATCH DEMO</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="neo-brutal bg-neon-green p-8 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-black text-center">
                  <div className="font-heading text-4xl font-bold mb-4">JOIN 10,000+ HUNTERS</div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="font-bold">
                    Average salary increase: <span className="text-2xl">$25,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
