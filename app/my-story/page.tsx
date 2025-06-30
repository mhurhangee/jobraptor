import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { ButtonsCTA } from '@/components/buttons-cta'

import { Shield, Target, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section
        id="my-story-hero"
        layout="center"
        border="bottom"
        background="neon-green"
        padding="xl"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="neo-brutal mb-8 inline-block bg-black p-4 text-white">
              <span className="text-6xl">🦖</span>
            </div>
            <h1 className="font-heading neo-brutal bg-neon-orange mb-6 rotate-2 text-5xl font-bold md:text-7xl">
              BORN FROM
              <br />
              <span className="text-neon-pink">FRUSTRATION</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-bold md:text-2xl">
              JobRaptor wasn&apos;t built in some fancy Silicon Valley office. It was born at 2 AM
              in a cramped apartment by someone who was absolutely SICK of the broken job search
              process.
            </p>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section
        id="my-story-story"
        layout="center"
        pattern="dots"
        background="neon-blue"
        padding="xl"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <section className="neo-brutal bg-neon-blue mb-12 p-8">
              <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl">THE ORIGIN STORY</h2>
              <div className="space-y-6 text-lg leading-relaxed font-bold">
                <p>
                  Picture this: You&apos;re 6 months into your job search. You&apos;ve applied to
                  200+ positions. Your spreadsheet is a mess. You can&apos;t remember which company
                  asked for a cover letter, which one wanted salary expectations, or when that
                  &quot;promising&quot; interview was supposed to happen.
                </p>
                <p>
                  Sound familiar? That was me. A frustrated developer who realized that while we
                  have apps for ordering food, finding dates, and tracking our steps, job hunting -
                  one of the most important activities in our lives - was stuck in the stone age.
                </p>
                <p>
                  So I did what any reasonable person would do: I rage-built JobRaptor in a
                  caffeine-fueled weekend marathon. No fancy investors. No corporate BS. Just pure,
                  unfiltered frustration channeled into code.
                </p>
              </div>
            </section>

            {/* Mission Section */}
            <section className="mb-12 grid gap-8 md:grid-cols-2">
              <div className="neo-brutal bg-neon-pink p-8">
                <h3 className="font-heading mb-4 flex items-center text-2xl font-bold">
                  <Target className="mr-3 h-6 w-6" />
                  OUR MISSION
                </h3>
                <p className="text-lg leading-relaxed font-bold">
                  To turn job hunting from a soul-crushing nightmare into a systematic, trackable
                  process that actually works. No fluff, no corporate speak - just tools that help
                  you land the job you deserve.
                </p>
              </div>

              <div className="neo-brutal bg-neon-green p-8">
                <h3 className="font-heading mb-4 flex items-center text-2xl font-bold">
                  <Zap className="mr-3 h-6 w-6" />
                  WHY JOBRAPTOR?
                </h3>
                <p className="text-lg leading-relaxed font-bold">
                  Because job hunting shouldn&apos;t feel like throwing resumes into a black hole.
                  You need visibility, control, and a system that works as hard as you do.
                  That&apos;s exactly what JobRaptor delivers.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="neo-brutal mb-12 border-4 border-black bg-white p-8">
              <h2 className="font-heading mb-8 text-center text-3xl font-bold">WHAT WE BELIEVE</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-yellow mb-4 inline-block p-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-bold">NO BS APPROACH</h3>
                  <p className="font-bold">
                    We don&apos;t sugarcoat the job search. It&apos;s tough, but with the right
                    tools, you can dominate it.
                  </p>
                </div>

                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-blue mb-4 inline-block p-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-bold">BUILT BY JOB HUNTERS</h3>
                  <p className="font-bold">
                    Every feature comes from real pain points experienced by actual job seekers, not
                    boardroom assumptions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-pink mb-4 inline-block p-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-bold">RESULTS FOCUSED</h3>
                  <p className="font-bold">
                    Pretty interfaces are nice, but landing interviews and job offers? That&apos;s
                    what actually matters.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Section>

      {/* Footer Quote */}
      <Section
        id="my-story-footer"
        layout="center"
        border="top"
        background="neon-yellow"
        padding="xl"
      >
        <div className="container mx-auto px-4 text-center">
          <blockquote className="mx-auto max-w-3xl">
            <p className="font-heading mb-4 text-2xl font-bold md:text-3xl">
              &quot;The job market is a jungle. Time to unleash your inner raptor.&quot;
            </p>
            <footer className="text-lg font-bold">
              — The Frustrated Developer Who Built This Thing
            </footer>
          </blockquote>
        </div>
      </Section>
      {/* CTA Section */}
      <Section id="my-story-cta" layout="center" border="top" pattern="dots" padding="xl">
        <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl">
          READY TO DOMINATE YOUR JOB SEARCH?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl font-bold">
          Stop letting the job market push you around. Take control with JobRaptor and turn your job
          search into a systematic hunt for success.
        </p>
        <ButtonsCTA />
      </Section>
    </PageContainer>
  )
}
