export default function TermsPage() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">TERMS OF SERVICE</h1>
            <p className="text-lg font-bold text-gray-600">The boring legal stuff, but in plain English.</p>
            <div className="w-24 h-1 bg-neon-green mx-auto mt-4"></div>
          </div>
  
          {/* Content */}
          <div className="space-y-8">
            {/* Last Updated */}
            <div className="neo-brutal bg-neon-yellow p-6">
              <p className="font-heading font-bold text-center">Last updated: June 2025</p>
            </div>
  
            {/* The Deal */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">THE DEAL</h2>
              <p className="text-lg font-bold mb-4">
                By using JobRaptor, you agree to these terms. We built this to help you land jobs, not to screw you over
                with legal nonsense.
              </p>
              <p className="text-lg font-bold">
                Use the app responsibly, don't break it, and we'll keep improving it for you.
              </p>
            </section>
  
            {/* What You Can Do */}
            <section className="neo-brutal bg-neon-green text-black p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">WHAT YOU CAN DO</h2>
              <div className="space-y-3">
                <p className="text-lg font-bold">✅ Track your job applications</p>
                <p className="text-lg font-bold">✅ Use our tools to land jobs</p>
                <p className="text-lg font-bold">✅ Share feedback to make it better</p>
                <p className="text-lg font-bold">✅ Cancel anytime (no hard feelings)</p>
              </div>
            </section>
  
            {/* What You Can't Do */}
            <section className="neo-brutal bg-black text-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-white pb-2">WHAT YOU CAN'T DO</h2>
              <div className="space-y-3">
                <p className="text-lg font-bold">❌ Try to hack or break the app</p>
                <p className="text-lg font-bold">❌ Use it for spam or illegal stuff</p>
                <p className="text-lg font-bold">❌ Resell or redistribute our content</p>
                <p className="text-lg font-bold">❌ Pretend you built this (we did)</p>
                <p className="text-lg font-bold">❌ Be a jerk to other users</p>
              </div>
            </section>
  
            {/* Your Data */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">YOUR DATA</h2>
              <p className="text-lg font-bold mb-4">
                Your job application data belongs to you. We just store it and help you organize it.
              </p>
              <p className="text-lg font-bold">You can export it or delete it anytime. We're not holding it hostage.</p>
            </section>
  
            {/* Our Stuff */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">OUR STUFF</h2>
              <p className="text-lg font-bold mb-4">
                JobRaptor, the code, the design, the name - that's all ours. We built it at 2 AM fueled by coffee and
                frustration.
              </p>
              <p className="text-lg font-bold">Don't steal it. Build your own thing instead.</p>
            </section>
  
            {/* Service Availability */}
            <section className="neo-brutal bg-neon-pink text-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-white pb-2">SERVICE AVAILABILITY</h2>
              <p className="text-lg font-bold mb-4">
                We try to keep JobRaptor running 24/7, but sometimes stuff breaks. We're a small team doing our best.
              </p>
              <p className="text-lg font-bold">We'll fix issues as fast as we can, but we can't guarantee 100% uptime.</p>
            </section>
  
            {/* Liability */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">LIABILITY</h2>
              <p className="text-lg font-bold mb-4">
                JobRaptor is a tool to help you organize your job hunt. We can't guarantee you'll get hired (that's on
                you, champ).
              </p>
              <p className="text-lg font-bold">
                Use the app wisely, double-check your applications, and don't blame us if you mess up.
              </p>
            </section>
  
            {/* Changes */}
            <section className="neo-brutal bg-neon-blue text-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-white pb-2">
                CHANGES TO THESE TERMS
              </h2>
              <p className="text-lg font-bold mb-4">
                We might update these terms occasionally. When we do, we'll let you know.
              </p>
              <p className="text-lg font-bold">Keep using the app = you're cool with the new terms.</p>
            </section>
  
            {/* Contact */}
            <section className="neo-brutal bg-white p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">QUESTIONS?</h2>
              <p className="text-lg font-bold mb-4">Hit up the human who built this:</p>
              <a
                href="mailto:legal@jobraptor.com"
                className="inline-block bg-neon-yellow px-6 py-3 font-heading font-bold text-black hover:bg-black hover:text-white transition-all duration-200 neo-brutal-sm"
              >
                LEGAL@JOBRAPTOR.COM
              </a>
            </section>
          </div>
        </div>
      </div>
    )
  }
  