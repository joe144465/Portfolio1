import { useState, useEffect } from 'react'
import './App.css'
import Nav from './assets/nav.jsx'
import Home from './assets/Home.jsx'
import Preloader from './assets/Preloader.jsx' 
import Footer from './assets/footer.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />  
  }

  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  )
}

export default App
