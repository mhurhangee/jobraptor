import { PageContainer } from '@/components/ui/page-container'
import { Section } from '@/components/ui/section'

import { SectionContact } from '@/components/section-contact'

export default function PrivacyPage() {
  return (
    <PageContainer>
      <Section layout="center" container="md" border="none" pattern="dots" padding="xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="neo-heading">PRIVACY POLICY</h1>
          <p className="neo-subtitle">We&apos;re not here to sell your data. Promise.</p>
          <div className="mx-auto my-4 h-1 w-24 bg-black" />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Last Updated */}
          <div className="neo-brutal bg-neon-yellow p-6">
            <p className="font-heading text-center font-bold">Last updated: June 2025</p>
          </div>

          {/* The Real Talk */}
          <section className="neo-brutal bg-white p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              THE REAL TALK
            </h2>
            <p className="mb-4 text-lg font-bold">
              JobRaptor was built by a frustrated job hunter who hates corporate BS. We&apos;re not
              here to harvest your data and sell it to the highest bidder.
            </p>
            <p className="text-lg font-bold">
              We collect the bare minimum to make the app work, and we protect it like our own.
            </p>
          </section>

          {/* What We Collect */}
          <section className="neo-brutal bg-white p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              WHAT WE COLLECT
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-neon-blue mt-1 h-4 w-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold">Your Job Applications</h3>
                  <p className="text-md font-bold">
                    Company names, positions, dates, notes - the stuff you put in to track your
                    hunt.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-neon-green mt-1 h-4 w-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold">Account Info</h3>
                  <p className="text-md font-bold">
                    Email, name, basic profile stuff. Nothing weird.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-neon-pink mt-1 h-4 w-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold">Usage Data</h3>
                  <p className="text-md font-bold">
                    How you use the app so we can make it better. Anonymous stuff.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="neo-brutal-color bg-black p-8 text-white">
            <h2 className="font-heading mb-4 border-b-2 border-white pb-2 text-2xl font-bold">
              WHAT WE DON&apos;T DO
            </h2>
            <div className="space-y-3">
              <p className="text-lg font-bold">❌ Sell your data to recruiters</p>
              <p className="text-lg font-bold">❌ Spam you with garbage emails</p>
              <p className="text-lg font-bold">❌ Share your info with random companies</p>
              <p className="text-lg font-bold">❌ Track you across the internet</p>
              <p className="text-lg font-bold">❌ Any other shady corporate nonsense</p>
            </div>
          </section>

          {/* How We Protect Your Data */}
          <section className="neo-brutal bg-white p-8">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              HOW WE PROTECT YOUR STUFF
            </h2>
            <p className="mb-4 text-lg font-bold">
              We use industry-standard encryption and security practices. Your data is stored
              securely and only accessible by you and our small team when absolutely necessary for
              support.
            </p>
            <p className="text-lg font-bold">
              We&apos;re not perfect, but we&apos;re trying our best to keep your job hunt data
              safe.
            </p>
          </section>

          {/* Your Rights */}
          <section className="neo-brutal bg-neon-blue p-8 text-black">
            <h2 className="font-heading mb-4 border-b-2 border-black pb-2 text-2xl font-bold">
              YOUR RIGHTS
            </h2>
            <div className="space-y-3">
              <p className="text-lg font-bold">✅ Delete your account anytime</p>
              <p className="text-lg font-bold">✅ Export your data</p>
              <p className="text-lg font-bold">✅ Ask us what data we have</p>
              <p className="text-lg font-bold">✅ Tell us to stop processing your data</p>
            </div>
          </section>
        </div>
      </Section>
      {/* Contact */}
      <SectionContact />
    </PageContainer>
  )
}
