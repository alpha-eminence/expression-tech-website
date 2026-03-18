import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
              AI Consulting
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Navigate AI with
            <span className="block text-primary-500">Confidence</span>
          </h1>

          <p className="text-xl md:text-2xl text-dark-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Expert guidance to help you understand, implement, and leverage AI effectively in your life and business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="#services"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-dark-950 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Explore Services
            </Link>
            <Link
              href="#book"
              className="px-8 py-4 border border-dark-700 hover:border-primary-500 text-dark-100 font-semibold rounded-lg transition-all hover:bg-dark-900"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-dark-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              Tailored AI guidance for where you are in your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Consultation */}
            <div className="group p-8 bg-dark-900 border border-dark-800 rounded-2xl hover:border-primary-500/50 transition-all hover:shadow-xl hover:shadow-primary-500/5">
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Individual Consultation</h3>
              <p className="text-dark-400 mb-6">
                One-on-one guidance to help you understand and use AI tools effectively in your personal and professional life.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary-500">$50</span>
                <span className="text-dark-400">/ hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI tool recommendations
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hands-on demonstrations
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized use cases
                </li>
              </ul>
              <Link
                href="#book"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all"
              >
                Book Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Business Consultation */}
            <div className="group p-8 bg-dark-900 border border-dark-800 rounded-2xl hover:border-primary-500/50 transition-all hover:shadow-xl hover:shadow-primary-500/5">
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Business Consultation</h3>
              <p className="text-dark-400 mb-6">
                Strategic AI integration for your business. Evaluate opportunities, plan implementation, and train your team.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary-500">$150</span>
                <span className="text-dark-400">/ hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI readiness assessment
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Implementation strategy
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team training sessions
                </li>
              </ul>
              <Link
                href="#book"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all"
              >
                Book Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-primary-500">Travis</span>
              </h2>
              <p className="text-lg text-dark-300 mb-6">
                I&apos;m passionate about making AI accessible to everyone. With hands-on experience building AI systems and a deep understanding of the technology landscape, I help people cut through the noise and find practical ways to use AI.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                Whether you&apos;re curious about ChatGPT, looking to automate your workflow, or exploring how AI can transform your business, I&apos;m here to guide you.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-dark-800 flex items-center justify-center">
                <span className="text-8xl">👨🏾‍💻</span>
              </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-primary-500 text-dark-950 font-semibold rounded-lg">
                AI Expert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-dark-400 mb-10">
            Book a consultation and let&apos;s explore how AI can work for you.
          </p>

          <div className="p-8 bg-dark-900 border border-dark-800 rounded-2xl">
            <p className="text-lg text-dark-300 mb-6">
              Select your consultation type and fill out a brief form to help me prepare for our session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/individual"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-dark-950 font-semibold rounded-lg transition-all hover:scale-105"
              >
                Individual ($50/hr)
              </Link>
              <Link
                href="/book/business"
                className="px-8 py-4 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-950 font-semibold rounded-lg transition-all"
              >
                Business ($150/hr)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-dark-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500">
            © 2026 Expression Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#services" className="text-dark-400 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-dark-400 hover:text-primary-500 transition-colors">
              About
            </Link>
            <Link href="#book" className="text-dark-400 hover:text-primary-500 transition-colors">
              Book
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
