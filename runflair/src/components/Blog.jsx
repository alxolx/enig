const posts = [
  {
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Turning Data into Strategy: The Power of Predictive Analytics',
  },
  {
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: '5 Ways AI Can Streamline Your Daily Training Operations',
  },
  {
    img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Human + Machine: Finding the Perfect Balance in Coaching',
  },
]

export default function Blog() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-xl">
          <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">• BLOG AND ARTICLES</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Latest insights and trends</h3>
          <p className="text-gray-500 text-lg">Whether you're optimizing today or building for tomorrow we help you move faster with confidence.</p>
        </div>
        <button className="bg-dark text-white text-sm font-bold uppercase tracking-wide px-8 py-4 rounded-full hover:bg-gray-800 transition shrink-0">
          View All
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="rounded-[2.5rem] overflow-hidden relative aspect-[4/3] group cursor-pointer shadow-md">
            <img
              src={post.img}
              alt="Blog Image"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h4 className="text-2xl font-bold leading-snug group-hover:text-accent transition-colors">{post.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
