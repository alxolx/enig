function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-dark text-white flex items-center justify-center shrink-0">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• PRICING</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Flexible Plans Built <br />for Every Stage of Growth
        </h3>
        <p className="text-gray-500 text-lg">Whether you're just starting your journey or scaling enterprise-wide innovation, we offer tailored solutions.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Starter Plan</h4>
          <p className="text-gray-500 text-sm mb-8 h-10">Perfect for individuals beginning to explore AI training.</p>
          <div className="mb-8 flex items-end gap-1 border-b border-gray-100 pb-8">
            <span className="text-5xl font-extrabold text-gray-900 leading-none">Free</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />50+ basic exercises</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Basic AI form tracking</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Monthly activity summary</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Email support</li>
          </ul>
          <button className="w-full bg-dark text-white font-bold py-4 rounded-full text-sm uppercase tracking-wide hover:bg-gray-800 transition">Get Started</button>
        </div>

        {/* Growth (featured) */}
        <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-accent text-dark text-[10px] font-bold px-4 py-2 rounded-bl-xl rounded-tr-[2.5rem] uppercase tracking-widest">Most Popular</div>
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Growth Plan</h4>
          <p className="text-gray-500 text-sm mb-8 h-10">Everything you need to optimize your lifting routine.</p>
          <div className="mb-8 flex items-end gap-1 border-b border-gray-100 pb-8">
            <span className="text-5xl font-extrabold text-gray-900 leading-none">$9.99</span>
            <span className="text-gray-500 font-medium mb-1">/month</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Full library (200+ exercises)</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Advanced AI form correction</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Personalized workout generation</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Detailed analytics dashboard</li>
          </ul>
          <button className="w-full bg-primary-600 text-white font-bold py-4 rounded-full text-sm uppercase tracking-wide hover:bg-primary-700 transition">Get Started</button>
        </div>

        {/* Elite */}
        <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8 text-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Elite Plan</h4>
          <p className="text-gray-500 text-sm mb-8 h-10">Custom-built for professionals seeking full-scale transformation.</p>
          <div className="mb-8 flex items-end gap-1 border-b border-gray-100 pb-8">
            <span className="text-5xl font-extrabold text-gray-900 leading-none">$24.99</span>
            <span className="text-gray-500 font-medium mb-1">/month</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Tailored AI implementation</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Custom routine architecture</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />Advanced data API access</li>
            <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><CheckIcon />24/7 premium coaching</li>
          </ul>
          <button className="w-full bg-dark text-white font-bold py-4 rounded-full text-sm uppercase tracking-wide hover:bg-gray-800 transition">Contact Us</button>
        </div>
      </div>
    </section>
  )
}
