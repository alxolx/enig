export default function About() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• ABOUT US</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          A global fitness partner <br />dedicated to building{' '}
          <span className="w-12 h-12 inline-flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mx-1 align-middle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>{' '}
          smarter <br />
          <span className="font-light italic text-gray-400">and</span>{' '}
          <span className="w-12 h-12 inline-flex items-center justify-center bg-accent text-dark rounded-full mx-1 align-middle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>{' '}
          more adaptive athletes
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* 120+ card */}
        <div className="bg-primary-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden min-h-[360px] flex flex-col justify-between shadow-xl">
          <div className="relative z-10 flex justify-between items-start">
            <span className="font-bold tracking-widest uppercase text-sm opacity-90">IPSUM<sup className="text-[10px]">®</sup></span>
            <span className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
          </div>
          <div className="relative z-10 mt-auto">
            <p className="text-7xl font-extrabold mb-4 tracking-tight">120+</p>
            <p className="text-primary-100 text-sm leading-relaxed max-w-[200px]">
              Collaborating with leading AI and fitness technology providers to perfect form.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Training"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>

        {/* 100% card */}
        <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-10 flex flex-col justify-center min-h-[360px]">
          <p className="text-sm font-bold text-gray-500 mb-2">Commitment to measurable results</p>
          <p className="text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">100%</p>
          <div className="flex -space-x-3 mb-6">
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
            <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
          </div>
          <p className="text-sm text-gray-600 font-medium leading-relaxed">
            "Their automation strategy completely reshaped how we train. It's efficient, intelligent, and seamless."
          </p>
        </div>

        {/* Stats cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-accent rounded-[2.5rem] p-10 flex-1 flex flex-col justify-center shadow-lg">
            <p className="text-sm font-bold text-dark/60 mb-2 uppercase tracking-wide">Data Points</p>
            <p className="text-6xl font-extrabold text-dark mb-4 tracking-tight">520k+</p>
            <p className="text-sm text-dark/80 font-medium leading-relaxed">Analyzed monthly to power smarter training strategies and routines.</p>
          </div>
          <div className="bg-dark rounded-full py-5 px-8 flex justify-between items-center text-white shadow-xl">
            <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Continents</span>
            <span className="text-2xl font-bold">20+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
