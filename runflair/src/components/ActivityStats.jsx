export default function ActivityStats() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#6B5AFA] to-[#4A3BDB] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Background image overlay */}
          <div
            className="absolute inset-0 w-full h-full mix-blend-overlay opacity-10 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
          ></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
              <div>
                <p className="text-primary-200 font-bold uppercase tracking-widest text-xs mb-2">My activity in</p>
                <h4 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">June 2023</h4>
              </div>
              <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center transform rotate-3 shadow-xl shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#6655FF" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M8 9V15M12 7V17M16 9V15" stroke="#6655FF" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-white/20 pt-10">
              <div>
                <div className="flex items-center gap-2 mb-3 text-primary-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Workouts</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white">30</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-primary-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Total Time</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  1:30<span className="text-2xl font-bold text-primary-200">:21</span>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-primary-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Tonnage</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  2000 <span className="text-2xl font-bold text-primary-200">kg</span>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-primary-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Burned</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-white">
                  12.5 <span className="text-2xl font-bold text-primary-200">kcal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
