import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { SectionContact } from '@/components/section-contact'

export default function TermsPage() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="none" pattern="dots" padding="xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="neo-heading">TERMS OF SERVICE</h1>
          <p className="neo-subtitle">The boring legal stuff, but in plain English.</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-black" />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Last Updated */}
          <div className="neo-brutal bg-neon-yellow p-6">
            <p className="font-heading text-center font-bold">Last updated: June 2025</p>
          </div>

          {/* The Deal */}
          <section className="neo-brutal bg-white p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              THE DEAL
            </h2>
            <p className="mb-4 text-lg font-bold">
              By using JobRaptor, you agree to these terms. We built this to help you land jobs, not
              to screw you over with legal nonsense.
            </p>
            <p className="text-lg font-bold">
              Use the app responsibly, don&apos;t break it, and we&apos;ll keep improving it for
              you.
            </p>
          </section>

          {/* What You Can Do */}
          <section className="neo-brutal bg-neon-green p-8 text-black">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              WHAT YOU CAN DO
            </h2>
            <div className="space-y-3">
              <p className="text-lg font-bold">✅ Track your job applications</p>
              <p className="text-lg font-bold">✅ Use our tools to land jobs</p>
              <p className="text-lg font-bold">✅ Share feedback to make it better</p>
              <p className="text-lg font-bold">✅ Cancel anytime (no hard feelings)</p>
            </div>
          </section>

          {/* What You Can't Do */}
          <section className="neo-brutal bg-black p-8 text-white">
            <h2 className="font-heading mb-4 border-b-2 border-white pb-2 text-2xl font-bold">
              WHAT YOU CAN&apos;T DO
            </h2>
            <div className="space-y-3">
              <p className="text-lg font-bold">❌ Try to hack or break the app</p>
              <p className="text-lg font-bold">❌ Use it for spam or illegal stuff</p>
              <p className="text-lg font-bold">❌ Resell or redistribute our content</p>
              <p className="text-lg font-bold">❌ Pretend you built this (we did)</p>
              <p className="text-lg font-bold">❌ Be a jerk to other users</p>
            </div>
          </section>

          {/* Your Data */}
          <section className="neo-brutal bg-neon-teal p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              YOUR DATA
            </h2>
            <p className="mb-4 text-lg font-bold">
              Your job application data belongs to you. We just store it and help you organize it.
            </p>
            <p className="text-lg font-bold">
              You can export it or delete it anytime. We&apos;re not holding it hostage.
            </p>
          </section>

          {/* Our Stuff */}
          <section className="neo-brutal bg-neon-green p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              OUR STUFF
            </h2>
            <p className="mb-4 text-lg font-bold">
              JobRaptor, the code, the design, the name - that&apos;s all ours. We built it at 2 AM
              fueled by coffee and frustration.
            </p>
            <p className="text-lg font-bold">Don&apos;t steal it. Build your own thing instead.</p>
          </section>

          {/* Service Availability */}
          <section className="neo-brutal bg-neon-pink p-8 text-black">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              SERVICE AVAILABILITY
            </h2>
            <p className="mb-4 text-lg font-bold">
              We try to keep JobRaptor running 24/7, but sometimes stuff breaks. We&apos;re a small
              team doing our best.
            </p>
            <p className="text-lg font-bold">
              We&apos;ll fix issues as fast as we can, but we can&apos;t guarantee 100% uptime.
            </p>
          </section>

          {/* Liability */}
          <section className="neo-brutal bg-neon-purple p-8 text-black">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              LIABILITY
            </h2>
            <p className="mb-4 text-lg font-bold">
              JobRaptor is a tool to help you organize your job hunt. We can&apos;t guarantee
              you&apos;ll get hired (that&apos;s on you, champ).
            </p>
            <p className="text-lg font-bold">
              Use the app wisely, double-check your applications, and don&apos;t blame us if you
              mess up.
            </p>
          </section>

          {/* Changes */}
          <section className="neo-brutal bg-neon-blue p-8 text-black">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              CHANGES TO THESE TERMS
            </h2>
            <p className="mb-4 text-lg font-bold">
              We might update these terms occasionally. When we do, we&apos;ll let you know.
            </p>
            <p className="text-lg font-bold">
              Keep using the app = you&apos;re cool with the new terms.
            </p>
          </section>
        </div>
      </Section>
      <SectionContact />
    </PageContainer>
  )
}
