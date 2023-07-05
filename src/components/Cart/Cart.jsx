import React from 'react'
import { Container } from 'react-bootstrap'
import "./cart.css"
import CartContext from '../../Context/CartContext'

function Cart(props) {
  
  const cartctx = React.useContext(CartContext);
   const NumOfItems = cartctx.Items.length;
  return (
    <>
    <Container>
    <div onClick={()=>{props.onClick()}} className='Cart'>
        <h2>Cart</h2>
        <p>{NumOfItems}</p>
    </div>
    </Container>
    </>
  )
}

export default Cart