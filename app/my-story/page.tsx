import { Target, Zap, Shield, Users } from "lucide-react"
import { ButtonsCTA } from "@/components/buttons-cta"
import { Section } from "@/components/ui/section"
import { PageContainer } from "@/components/ui/page-container"

export default function AboutPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section id="my-story-hero" layout="center" border="bottom" background="neon-green" padding="xl">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="neo-brutal bg-black text-white p-4 inline-block mb-8">
              <span className="text-6xl">🦖</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 neo-brutal bg-neon-orange rotate-2">
              BORN FROM
              <br />
              <span className="text-neon-pink">FRUSTRATION</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
              JobRaptor wasn't built in some fancy Silicon Valley office. It was born at 2 AM in a cramped apartment by
              someone who was absolutely SICK of the broken job search process.
            </p>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section id="my-story-story" layout="center" pattern="dots" background="neon-blue" padding="xl">
        <div className="container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto">
            <section className="neo-brutal bg-neon-blue p-8 mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">THE ORIGIN STORY</h2>
              <div className="space-y-6 text-lg font-bold leading-relaxed">
                <p>
                  Picture this: You're 6 months into your job search. You've applied to 200+ positions. Your spreadsheet
                  is a mess. You can't remember which company asked for a cover letter, which one wanted salary
                  expectations, or when that "promising" interview was supposed to happen.
                </p>
                <p>
                  Sound familiar? That was me. A frustrated developer who realized that while we have apps for ordering
                  food, finding dates, and tracking our steps, job hunting - one of the most important activities in our
                  lives - was stuck in the stone age.
                </p>
                <p>
                  So I did what any reasonable person would do: I rage-built JobRaptor in a caffeine-fueled weekend
                  marathon. No fancy investors. No corporate BS. Just pure, unfiltered frustration channeled into code.
                </p>
              </div>
            </section>

            {/* Mission Section */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="neo-brutal bg-neon-pink p-8">
                <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
                  <Target className="mr-3 h-6 w-6" />
                  OUR MISSION
                </h3>
                <p className="font-bold text-lg leading-relaxed">
                  To turn job hunting from a soul-crushing nightmare into a systematic, trackable process that actually
                  works. No fluff, no corporate speak - just tools that help you land the job you deserve.
                </p>
              </div>

              <div className="neo-brutal bg-neon-green p-8">
                <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  WHY JOBRAPTOR?
                </h3>
                <p className="font-bold text-lg leading-relaxed">
                  Because job hunting shouldn't feel like throwing resumes into a black hole. You need visibility,
                  control, and a system that works as hard as you do. That's exactly what JobRaptor delivers.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="neo-brutal bg-white border-4 border-black p-8 mb-12">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">WHAT WE BELIEVE</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-yellow p-4 inline-block mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">NO BS APPROACH</h3>
                  <p className="font-bold">
                    We don't sugarcoat the job search. It's tough, but with the right tools, you can dominate it.
                  </p>
                </div>

                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-blue p-4 inline-block mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">BUILT BY JOB HUNTERS</h3>
                  <p className="font-bold">
                    Every feature comes from real pain points experienced by actual job seekers, not boardroom
                    assumptions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="neo-brutal-sm bg-neon-pink p-4 inline-block mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">RESULTS FOCUSED</h3>
                  <p className="font-bold">
                    Pretty interfaces are nice, but landing interviews and job offers? That's what actually matters.
                  </p>
                </div>
              </div>
            </section>


          </div>
        </div>
      </Section>


      {/* Footer Quote */}
      <Section id="my-story-footer" layout="center" border="top" background="neon-yellow" padding="xl">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-heading font-bold mb-4">
              "The job market is a jungle. Time to unleash your inner raptor."
            </p>
            <footer className="text-lg font-bold">— The Frustrated Developer Who Built This Thing</footer>
          </blockquote>
        </div>
      </Section>
      {/* CTA Section */}
      <Section id="my-story-cta" layout="center" border="top" pattern="dots" padding="xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">READY TO DOMINATE YOUR JOB SEARCH?</h2>
        <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
          Stop letting the job market push you around. Take control with JobRaptor and turn your job search into a
          systematic hunt for success.
        </p>
        <ButtonsCTA />
      </Section>
    </PageContainer>

  )
}
