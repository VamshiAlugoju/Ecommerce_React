import React from 'react'
import { Container } from 'react-bootstrap'
import "./cart.css"

function Cart(props) {
  return (
    <>
    <Container>
    <div className='Cart'>
        <h2>Cart</h2>
        <p>0</p>
    </div>
    </Container>
    </>
  )
}

export default Cart