import PromoBanner from "./components/PromoBanner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import Hero from "./components/Hero"
import Features from "./components/Features"


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileMenu />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App

