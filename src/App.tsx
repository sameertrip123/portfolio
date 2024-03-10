import React from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experiences } from './components/Experiences'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}

export default App
