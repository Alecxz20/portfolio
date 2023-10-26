import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Homepage() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Header setOpen={setOpen} />
      <Hero open={open} setOpen={setOpen} />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
