import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
document.body.className = 'bg-zinc-800 text-white'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
    </>
  )
}

export default App