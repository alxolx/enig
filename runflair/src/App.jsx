import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import ExerciseLibrary from './components/ExerciseLibrary'
import ActivityStats from './components/ActivityStats'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white antialiased overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <ExerciseLibrary />
      <ActivityStats />
      <Pricing />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
