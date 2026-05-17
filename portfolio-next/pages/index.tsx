import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      {/* Próximas seções: About, Skills, Portfolio, Contact */}
    </div>
  )
}
