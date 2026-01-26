import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TRustedBy from './components/TRustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TRustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
    </div>
  )
}

export default App