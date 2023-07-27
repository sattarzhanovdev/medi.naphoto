import React from 'react'
import { Components } from './components'

import './App.scss'

function App() {
  React.useEffect(() => {
    localStorage.setItem('activeSlide', JSON.stringify(1))
  }, [])

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