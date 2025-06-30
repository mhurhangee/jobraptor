import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'
import { Textarea } from '@/components/ui/textarea'

import { appConfig } from '@/lib/config/app'

import { Coffee, Mail, MessageSquare, Zap } from 'lucide-react'

export default function ContactPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section layout="center" container="md" border="bottom" background="neon-blue" padding="xl">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="neo-brutal-sm bg-yellow-300 p-3">
              <Mail className="h-8 w-8 text-black" />
            </div>
            <h1 className="neo-heading mt-4">CONTACT</h1>
          </div>
          <p className="neo-subtitle">
            Got questions? Complaints? Ideas? <br /> Just want to vent about the job market?
            <br />
          </p>
          <p className="mt-6 text-lg font-bold">Hit me up - I actually read these!</p>
        </div>
      </Section>

      <Section layout="center" container="lg" pattern="hatch" background="white" padding="xl">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="neo-brutal bg-white">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-3 text-2xl font-black text-black">
                <MessageSquare className="h-6 w-6" />
                SEND A MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-heading text-sm font-bold text-black uppercase"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="What should I call you?"
                    className="neo-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-heading text-sm font-bold text-black uppercase"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="neo-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="font-heading text-sm font-bold text-black uppercase"
                  >
                    What&apos;s This About?
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Bug report? Feature idea? Just saying hi?"
                    className="neo-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-heading text-sm font-bold text-black uppercase"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Spill it all here... I've got time and coffee ☕"
                    className="neo-input h-64"
                    required
                  />
                </div>

                <Button type="submit" className="btn-neo w-full">
                  <Zap className="mr-2 h-5 w-5" />
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Personality */}
          <div className="space-y-8">
            {/* Response Times */}
            <Card className="neo-brutal bg-green-300">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-3 text-2xl font-black text-black">
                  <Coffee className="h-6 w-6" />
                  RESPONSE TIMES
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-black">Bug Reports:</span>
                    <span className="font-body border-2 border-black bg-white px-2 py-1 text-sm font-bold text-black">
                      ASAP
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-black">Feature Requests:</span>
                    <span className="font-body border-2 border-black bg-white px-2 py-1 text-sm font-bold text-black">
                      1-2 Days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-black">General Questions:</span>
                    <span className="font-body border-2 border-black bg-white px-2 py-1 text-sm font-bold text-black">
                      24 Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-black">Job Market Rants:</span>
                    <span className="font-body border-2 border-black bg-white px-2 py-1 text-sm font-bold text-black">
                      Immediately
                    </span>
                  </div>
                </div>
                <div className="mt-6 border-2 border-black bg-white p-4">
                  <p className="font-body text-sm font-semibold text-black">
                    💡 <strong>Pro tip:</strong> I usually respond within 24 hours. If it&apos;s
                    been longer, check your spam folder or send another one - sometimes the internet
                    eats emails.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="neo-brutal bg-purple-300">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-3 text-2xl font-black text-black">
                  <Coffee className="h-6 w-6" />
                  WHAT TO EXPECT
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="font-body space-y-3 font-semibold text-black">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🤖</span>
                    <p>No automated responses - you&apos;re talking to a real human</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">💬</span>
                    <p>Honest, straightforward answers (sometimes brutally so)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🚀</span>
                    <p>If it&apos;s a good idea, I&apos;ll probably build it</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☕</span>
                    <p>Responses powered by coffee and genuine care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="neo-brutal inline-block bg-black p-8 text-white">
            <h3 className="font-heading mb-4 text-2xl font-black">PREFER TO SKIP THE FORM?</h3>
            <p className="font-body mb-6 font-bold">
              Just shoot me an email directly. I promise I read every single one.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={`mailto:${appConfig.author}`} className="btn-neo-secondary">
                <Mail className="mr-2 h-5 w-5" />
                EMAIL ME DIRECTLY
              </a>
              <Link href="/my-story" className="btn-neo-accent">
                READ MY STORY
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
