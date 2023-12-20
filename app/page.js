import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import NavLink from './components/NavLink'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
