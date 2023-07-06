import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import Cart from '../Cart/Cart';
import CartComponent from '../Cart/CartComponent';
import { useState,useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Login from '../Auth/Login';

import "./Navigation.css"
function Navigation(props) {

  const [showCart,setshowCart] = useState(false);
  const cartctx = useContext(CartContext);

  
    function handleCart()
   {
      setshowCart(prev=>!prev);
      console.log(cartctx)
   }

  return (
    <>  
    <Container fluid bg={'black'} style={{color:"white"}} className={'bg-dark color-success  sticky-top'} >
        <Row>
          <Col md={10}>
        <Container className='fs-1'>
             <ul className='Nav_UL'>
             <li> <Link to="/Home" >Home </Link> </li>
              <li> <Link to="/" >Store </Link> </li>
              <li> <Link to="/About" >About </Link> </li>
              <li> <Link to="/Contact" >Contact Us </Link> </li>
              { !cartctx.isLoggedin && <li> <Link to="/Login" >Login</Link> </li>}
             </ul>
        </Container>
        </Col>
        <Col className='d-flex align-items-center'>
        <Container className='d-flex justify-content-between'>
         {cartctx.isLoggedin && <Cart onClick={handleCart} />}
         {cartctx.isLoggedin && <Login  />}
        </Container>
        </Col>
        </Row>
        </Container>
    <Container   fluid style={{color:"white",height:"200px" }} className={'bg-secondary text-center'} >
       <h1 className='generic_logo'>The Generics</h1>
       {showCart && <CartComponent closeModal={handleCart}/>}
        
        </Container>
  
    </>
  );
}

export default Navigation;