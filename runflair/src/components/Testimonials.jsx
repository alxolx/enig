const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    quote: '"They brought clarity to complex movement patterns, breaking down barriers and delivering innovative tracking solutions."',
    author: '- Sarah Jenkins, Trainer',
    gradientClass: 'from-black/90',
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    quote: '"Their automation strategy completely reshaped how we work. It\'s efficient, intelligent, and completely seamless."',
    author: '- Mike Ross, Athlete',
    gradientClass: 'from-[#6655FF]/90',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    quote: '"RunFlair gave us the tools to finally understand our performance data and make meaningful improvements every day."',
    author: '- Elena Davis, Coach',
    gradientClass: 'from-black/90',
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    quote: '"The real-time feedback completely transformed my deadlift. No more guessing, just perfect form and consistent gains."',
    author: '- David Chen, Powerlifter',
    gradientClass: 'from-black/90',
  },
]

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-white mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
)

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-xl">
          <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• TESTIMONIALS</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">What they say about us?</h3>
          <p className="text-gray-500">Here's what they shared about their experience working with our team.</p>
        </div>
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x">
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[360px] aspect-[4/5] rounded-[2rem] relative overflow-hidden snap-start shrink-0 group">
            <img
              src={t.img}
              alt="Testimonial"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${t.gradientClass} via-black/40 to-transparent flex flex-col justify-between p-8 text-white`}>
              <span className="font-bold tracking-widest uppercase text-xs opacity-80">IPSUM</span>
              <div>
                <QuoteIcon />
                <p className="text-lg font-medium leading-relaxed mb-6">{t.quote}</p>
                <p className="text-sm font-bold text-gray-300">{t.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
