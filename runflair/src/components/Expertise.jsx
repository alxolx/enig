export default function Expertise() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• EXPERTISE</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Where human insight meets <br />intelligent technology
        </h3>
        <p className="text-gray-500 text-lg">
          We help athletes harness technology not to replace human effort, but to amplify it — enabling smarter training and faster results.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Tracking card */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-14 flex flex-col items-center border border-gray-200 shadow-sm relative">
          <div className="w-full max-w-[320px] bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 mb-12">
            <div className="flex justify-between items-center border-b border-gray-100 pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Monthly Progress</p>
                  <p className="text-2xl font-bold text-gray-900">+50%</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  <span className="text-sm font-bold text-gray-600">Squats</span>
                </div>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">120 kg</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-bold text-gray-600">Deadlift</span>
                </div>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">150 kg</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-bold text-gray-600">Bench Press</span>
                </div>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">90 kg</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Automation &amp; tracking</h4>
            <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">Streamline your training through intelligent automated tracking that saves time and boosts productivity.</p>
          </div>
        </div>

        {/* Analytics card */}
        <div className="bg-white rounded-[3rem] p-10 lg:p-14 flex flex-col items-center border border-gray-200 shadow-sm relative">
          <div className="w-full relative h-[280px] bg-dark rounded-[2rem] overflow-hidden shadow-2xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Squat Analysis"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" className="absolute inset-0">
              <circle cx="200" cy="80" r="5" fill="white" />
              <circle cx="150" cy="120" r="5" fill="white" />
              <circle cx="250" cy="120" r="5" fill="white" />
              <circle cx="160" cy="190" r="5" fill="#D4F870" />
              <circle cx="240" cy="190" r="5" fill="white" />
              <circle cx="140" cy="250" r="5" fill="white" />
              <circle cx="260" cy="250" r="5" fill="white" />
              <line x1="200" y1="80" x2="200" y2="110" />
              <line x1="150" y1="120" x2="250" y2="120" />
              <line x1="150" y1="120" x2="160" y2="190" />
              <line x1="250" y1="120" x2="240" y2="190" />
              <line x1="160" y1="190" x2="140" y2="250" stroke="#D4F870" />
              <line x1="240" y1="190" x2="260" y2="250" />
            </svg>
            <div className="absolute right-4 top-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg w-40">
              <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Intelligence in</p>
              <p className="text-sm font-bold text-gray-900 leading-tight">Every Movement</p>
              <div className="flex items-end gap-1 mt-3 h-8">
                <div className="w-full bg-gray-200 rounded-sm h-[30%]"></div>
                <div className="w-full bg-gray-200 rounded-sm h-[50%]"></div>
                <div className="w-full bg-gray-200 rounded-sm h-[70%]"></div>
                <div className="w-full bg-primary-600 rounded-sm h-full"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Data analytics &amp; insights</h4>
            <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">Transform raw video data into strategic insight using advanced computer vision models.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
