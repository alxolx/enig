import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center transform rotate-3 shadow-lg shadow-primary-500/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M8 9V15M12 7V17M16 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-gray-900">RUNFLAIR</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <a href="#" className="hover:text-primary-600 transition-colors">Home</a>
            <a href="#" className="hover:text-primary-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Services</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Blog</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a href="#" className="bg-accent text-dark text-sm font-bold px-7 py-3 rounded-full hover:bg-[#c4f045] transition-colors uppercase tracking-wide">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <a href="#" className="block hover:text-primary-600 transition-colors py-2">Home</a>
            <a href="#" className="block hover:text-primary-600 transition-colors py-2">About Us</a>
            <a href="#" className="block hover:text-primary-600 transition-colors py-2">Services</a>
            <a href="#" className="block hover:text-primary-600 transition-colors py-2">Blog</a>
            <a href="#" className="inline-block bg-accent text-dark font-bold px-7 py-3 rounded-full hover:bg-[#c4f045] transition-colors mt-2">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
