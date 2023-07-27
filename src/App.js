import React from 'react'
import { Components } from './components'
import Lenis from '@studio-freight/lenis'

import './App.scss'

function App() {
  React.useEffect(() => {
    localStorage.setItem('activeSlide', JSON.stringify(1))
  }, [])

  const lenis = new Lenis()
  const [footerState, setFooterState] = React.useState(false)
 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  raf(100000)
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Components.Banner />
        <Components.Activity />
        <Components.Collections />
        <Components.Price />
        <Components.Contacts />
      </main>
      <footer>
        <Components.Footer />
      </footer>
    </div>
  )
}

export default App