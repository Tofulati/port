import { useState } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import Research from "./components/Research"
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Research />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2025 Albert Ho. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
