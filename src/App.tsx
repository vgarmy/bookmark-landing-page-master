import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Download from './components/Download'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {



  return (
    <div role="main" className='max-w-[1440px] mx-auto'>
      <Navbar />
      <Hero />
      <Carousel />
      <Download />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App
