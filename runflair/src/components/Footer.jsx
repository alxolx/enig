export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* CTA Banner */}
        <div className="bg-primary-600 rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
            alt=""
          />
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-100">Trusted over 5,000+</span>
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-primary-600 object-cover" alt="" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-primary-600 object-cover" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-primary-600 object-cover" alt="" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              We combine human coaching with artificial intelligence
            </h3>
            <p className="text-primary-100 text-lg leading-relaxed max-w-xl">
              Our software bridges strategic thinking and advanced AI technologies to help athletes streamline processes, improve decision-making, and create intelligent digital experiences.
            </p>
          </div>
          <div className="relative z-10 shrink-0 mt-8 md:mt-0">
            <button className="bg-accent text-dark font-bold px-8 py-5 rounded-full text-sm uppercase tracking-wide flex items-center gap-3 hover:bg-[#c4f045] transition-colors shadow-lg shadow-accent/20">
              Get Started
              <span className="w-6 h-6 bg-dark text-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transform rotate-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#0B0F19" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M8 9V15M12 7V17M16 9V15" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">RUNFLAIR</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-10 leading-relaxed">
              Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your fitness growth.
            </p>
            <p className="font-bold text-sm mb-4 uppercase tracking-widest text-gray-300">Subscribe our newsletter</p>
            <div className="flex bg-white/5 border border-white/10 rounded-full p-1.5 max-w-md focus-within:border-primary-500 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white px-5 outline-none flex-1 text-sm placeholder-gray-500 w-full"
              />
              <button className="bg-accent text-dark font-bold text-xs uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#c4f045] transition flex items-center gap-2 shrink-0">
                Submit
                <span className="bg-dark text-white rounded-full w-4 h-4 flex items-center justify-center">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Home V.1', 'Home V.2', 'Home V.3', 'About us V.1', 'About us V.2'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Services', 'Case Study', 'Internal Case Study', 'Blogs', 'Help Center'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Contact V.1', 'Contact V.2', 'Contact V.3', 'Digital Product', 'Careers'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
          <p>© 2025 RunFlair Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
