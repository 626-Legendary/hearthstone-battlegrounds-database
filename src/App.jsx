import React from 'react'
import DisplayGrid from "./components/DisplayGrid"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      
      <NavBar />
      <div className='mainSection'>
        <DisplayGrid />
      </div>

      <Footer />
    </>
  )
}

export default App
