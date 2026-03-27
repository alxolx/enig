export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• SERVICES</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Comprehensive tracking and <br />intelligent innovation
        </h3>
        <p className="text-gray-500 text-lg">Whether you're optimizing today or building for tomorrow we help you move faster with confidence.</p>
        <div className="mt-8">
          <a href="#" className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-gray-800 transition">
            Get Started
            <span className="w-6 h-6 bg-accent text-dark rounded-full flex items-center justify-center ml-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* AI Form Correction */}
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-10 hover:shadow-xl hover:border-gray-200 transition duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">AI Form Correction</h4>
          <p className="text-gray-500 leading-relaxed">We help you identify flaws in your posture and implement the right adjustments in real-time to avoid injury and maximize gains.</p>
        </div>

        {/* Personalized Routines */}
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-10 hover:shadow-xl hover:border-gray-200 transition duration-300 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark relative z-10 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Personalized Routines</h4>
          <p className="text-gray-500 leading-relaxed relative z-10">Dynamic workout generation based on your goals, ensuring you get the most out of every training session.</p>
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Gym"
            className="absolute -bottom-16 -right-16 w-56 h-56 object-cover rounded-full opacity-10"
          />
        </div>

        {/* Performance Analytics */}
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-10 hover:shadow-xl hover:border-gray-200 transition duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Performance Analytics</h4>
          <p className="text-gray-500 leading-relaxed">Detailed breakdowns of every rep and set, turning raw physical data into strategic insight for consistent growth.</p>
        </div>
      </div>
    </section>
  )
}
