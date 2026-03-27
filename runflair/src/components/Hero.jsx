export default function Hero() {
  return (
    <header className="pt-32 pb-16 relative overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8">
        {/* Left Content */}
        <div className="max-w-2xl relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-bold mb-8 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            AI-Powered Virtual Trainer 2.0
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.05]">
            Master every move with <br /><span className="text-primary-600">precision.</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            Virtual trainer for stationary training with free weights based on real-time image analysis. We'll help you achieve your goals with personalized plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-primary-600 text-white text-center font-bold px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 text-sm uppercase tracking-wide flex items-center justify-center gap-2">
              View Demo
            </a>
            <a href="#" className="bg-accent text-dark text-center font-bold px-8 py-4 rounded-full hover:bg-[#c4f045] transition-all duration-300 text-sm uppercase tracking-wide flex items-center justify-center gap-3">
              Get Started
              <div className="w-6 h-6 rounded-full bg-dark text-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Right — Phone Mockup */}
        <div className="relative lg:h-[650px] flex justify-center items-center mt-10 lg:mt-0">
          {/* Blur blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>

          {/* Phone */}
          <div className="relative z-10 w-[300px] h-[600px] rounded-[3rem] bg-white border-[10px] border-gray-900 shadow-2xl overflow-hidden flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Workout"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

            {/* Status bar */}
            <div className="absolute top-0 w-full p-5 flex justify-between items-center text-white">
              <span className="text-xs font-bold">9:41</span>
              <div className="flex gap-1.5">
                <div className="w-4 h-3 bg-white rounded-sm"></div>
                <div className="w-5 h-3 border border-white rounded-sm p-[1px]">
                  <div className="w-3 h-full bg-white rounded-[1px]"></div>
                </div>
              </div>
            </div>

            {/* Skeleton overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
              <svg width="200" height="300" viewBox="0 0 200 300" fill="none" stroke="white" strokeWidth="2" className="opacity-80">
                <circle cx="100" cy="50" r="4" fill="white" />
                <line x1="100" y1="54" x2="100" y2="80" />
                <line x1="60" y1="90" x2="140" y2="90" />
                <circle cx="60" cy="90" r="4" fill="white" />
                <circle cx="140" cy="90" r="4" fill="white" />
                <line x1="100" y1="80" x2="100" y2="150" />
                <line x1="60" y1="90" x2="50" y2="140" />
                <circle cx="50" cy="140" r="4" fill="white" />
                <line x1="140" y1="90" x2="150" y2="140" />
                <circle cx="150" cy="140" r="4" fill="white" />
                <line x1="80" y1="150" x2="120" y2="150" />
                <circle cx="80" cy="150" r="4" fill="white" />
                <circle cx="120" cy="150" r="4" fill="white" />
              </svg>
            </div>

            {/* Exercise info card */}
            <div className="relative z-10 bg-white rounded-t-3xl p-6 w-full">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-primary-600 font-bold text-xl">KB swing</h3>
                  <p className="text-gray-500 text-sm font-medium">16 KG</p>
                </div>
                <span className="text-xs font-bold text-gray-400 tracking-wider">3/5 ROUNDS</span>
              </div>
              <div className="text-center my-4">
                <span className="text-6xl font-extrabold text-primary-600 leading-none tracking-tight">18</span>
              </div>
            </div>
          </div>

          {/* Form Perfect badge */}
          <div
            className="absolute top-24 -left-8 md:-left-16 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce"
            style={{ animationDuration: '4s' }}
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none mb-1">Form Perfect</p>
              <p className="text-xs text-gray-500">+12% improvement</p>
            </div>
          </div>

          {/* AI Training card */}
          <div className="absolute top-1/3 -right-6 md:-right-16 z-20 bg-gradient-to-br from-primary-500 to-primary-700 p-5 rounded-2xl shadow-xl text-white w-48 transform rotate-3 hidden sm:block">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm font-bold mb-1">AI Training</p>
            <p className="text-xs text-primary-100">Upload your form data</p>
          </div>

          {/* Expertise card */}
          <div className="absolute bottom-1/4 -right-10 md:-right-20 z-20 bg-dark p-6 rounded-2xl shadow-xl text-white w-56 transform -rotate-3 hidden sm:block">
            <p className="text-sm font-bold leading-snug">Expertise <span className="text-accent">that</span> Combines Tracking, Data, and Artificial Intelligence</p>
            <div className="mt-4 flex items-end gap-1 opacity-80">
              <div className="w-2 h-4 bg-white rounded-t-sm"></div>
              <div className="w-2 h-6 bg-white rounded-t-sm"></div>
              <div className="w-2 h-8 bg-accent rounded-t-sm"></div>
              <div className="w-2 h-10 bg-primary-400 rounded-t-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 pb-4">
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale">
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="w-6 h-6 bg-current rounded-full"></div>Logoipsum
          </div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
            FitLife
          </div>
          <div className="flex items-center gap-2 text-xl font-bold italic">
            <div className="w-6 h-6 border-4 border-current rounded-sm transform rotate-45"></div>IronWorks
          </div>
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <svg className="w-8 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M4 12h16M4 6h16M4 18h16" />
            </svg>
            STRONG
          </div>
          <div className="hidden md:flex items-center gap-2 text-xl font-bold">
            <div className="w-6 h-6 bg-current rounded-full"></div>Logoipsum
          </div>
        </div>
      </div>
    </header>
  )
}
