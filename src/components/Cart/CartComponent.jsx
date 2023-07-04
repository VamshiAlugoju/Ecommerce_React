import React from 'react'
import { Container,Button } from 'react-bootstrap'
import "./cart.css"
import  ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartComponentData from './CartComponentData';

function CartComponent(props) {

    function CloseModal()
    {
        props.closeModal()
    }
  return ReactDOM.createPortal(
    <>
    <div onClick={CloseModal} className='bg_for_modal'></div>
    <Container className='Cart_div'>
       <header className='cart_header'>
        <h1>Cart</h1>
        <button onClick={CloseModal}> &#10005;</button>
       </header>
       <CartComponentData />

       <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
       Purchase
      </Button>
    </div>
    </Container>
    </>
   , document.getElementById("Cart_modal"))
}

export default CartComponent