import React from 'react'
import Navigation from '../components/Navbar/Navigation'
import Music from '../components/Music/Music'
import CartProvider from '../Context/CartProvider'
 

function Home(){
 
  
  return (
    <CartProvider>
    <Navigation   />
    <Music />
  </CartProvider>
  )
}

export default Home;