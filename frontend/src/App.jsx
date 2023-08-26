import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Body from './Components/Body/Body'
import Questions from './Components/Questions/Questions'
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Body />
      <Products />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
