import React from 'react'
import ContactNav from '../components/Navbar/ContavtNav'
import Music from '../components/Music/Music'
import CartProvider from '../Context/CartProvider'
import {useParams} from "react-router-dom"
import ProductDetail from '../components/SingleProduct/ProductDetail'

function SingleProduct(){
    
   const params = useParams()

  return (
    <>
    
    <ContactNav  />
    <ProductDetail />
    

    </>
 
  )
}

export default SingleProduct;