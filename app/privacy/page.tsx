export default function PrivacyPage() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">PRIVACY POLICY</h1>
            <p className="text-lg font-bold text-gray-600">We're not here to sell your data. Promise.</p>
            <div className="w-24 h-1 bg-neon-pink mx-auto mt-4"></div>
          </div>
  
          {/* Content */}
          <div className="space-y-8">
            {/* Last Updated */}
            <div className="neo-brutal bg-neon-yellow p-6">
              <p className="font-heading font-bold text-center">Last updated: June 2025</p>
            </div>
  
            {/* The Real Talk */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">THE REAL TALK</h2>
              <p className="text-lg font-bold mb-4">
                JobRaptor was built by a frustrated job hunter who hates corporate BS. We're not here to harvest your data
                and sell it to the highest bidder.
              </p>
              <p className="text-lg font-bold">
                We collect the bare minimum to make the app work, and we protect it like our own.
              </p>
            </section>
  
            {/* What We Collect */}
            <section className="neo-brutal bg-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">WHAT WE COLLECT</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-neon-blue mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg">Your Job Applications</h3>
                    <p className="font-bold text-gray-600">
                      Company names, positions, dates, notes - the stuff you put in to track your hunt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-neon-green mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg">Account Info</h3>
                    <p className="font-bold text-gray-600">Email, name, basic profile stuff. Nothing weird.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-neon-pink mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg">Usage Data</h3>
                    <p className="font-bold text-gray-600">
                      How you use the app so we can make it better. Anonymous stuff.
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
            {/* What We Don't Do */}
            <section className="neo-brutal bg-black text-white p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-white pb-2">WHAT WE DON'T DO</h2>
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
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">
                HOW WE PROTECT YOUR STUFF
              </h2>
              <p className="text-lg font-bold mb-4">
                We use industry-standard encryption and security practices. Your data is stored securely and only
                accessible by you and our small team when absolutely necessary for support.
              </p>
              <p className="text-lg font-bold">
                We're not perfect, but we're trying our best to keep your job hunt data safe.
              </p>
            </section>
  
            {/* Your Rights */}
            <section className="neo-brutal bg-neon-blue text-black p-8">
              <h2 className="font-heading text-2xl font-bold mb-4 border-b-2 border-black pb-2">YOUR RIGHTS</h2>
              <div className="space-y-3">
                <p className="text-lg font-bold">✅ Delete your account anytime</p>
                <p className="text-lg font-bold">✅ Export your data</p>
                <p className="text-lg font-bold">✅ Ask us what data we have</p>
                <p className="text-lg font-bold">✅ Tell us to stop processing your data</p>
              </div>
            </section>
  
            {/* Contact */}
            <section className="neo-brutal bg-white p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">QUESTIONS?</h2>
              <p className="text-lg font-bold mb-4">Email the human who built this thing:</p>
              <a
                href="mailto:privacy@jobraptor.com"
                className="inline-block bg-neon-yellow px-6 py-3 font-heading font-bold text-black hover:bg-black hover:text-white transition-all duration-200 neo-brutal-sm"
              >
                PRIVACY@JOBRAPTOR.COM
              </a>
            </section>
          </div>
        </div>
      </div>
    )
  }
  