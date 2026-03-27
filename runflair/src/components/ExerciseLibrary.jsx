const exercises = [
  {
    name: 'Goblet squat',
    count: '3 EXERCISES',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'KB deadlift',
    count: '21 EXERCISES',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'DB press',
    count: '9 EXERCISES',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'DB row',
    count: '14 EXERCISES',
    img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'KB swing',
    count: '14 EXERCISES',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
]

function ExerciseCard({ name, count, img }) {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 cursor-pointer group h-[140px]">
      <div className="w-2/5 relative">
        <img
          src={img}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-3/5 p-6 flex justify-between items-center bg-white z-10">
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">{name}</h4>
          <p className="text-[10px] font-bold text-gray-400 tracking-wider">{count}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function ExerciseLibrary() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-4">• EXERCISE BASE</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Massive library of guided workouts.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((ex) => (
            <ExerciseCard key={ex.name} {...ex} />
          ))}

          {/* Explore All */}
          <div className="bg-primary-50 rounded-[2rem] border border-primary-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex items-center justify-center hover:bg-primary-100 transition-all duration-300 cursor-pointer group h-[140px]">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-sm text-primary-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-primary-900">Explore All</h4>
              <p className="text-[10px] font-bold text-primary-600 tracking-wider">200+ EXERCISES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
