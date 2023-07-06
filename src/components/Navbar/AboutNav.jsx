import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import { useState,useContext } from 'react';
 import {Link} from "react-router-dom"
 import CartContext from '../../Context/CartContext';
import React from 'react';
import "./Navigation.css"

function AboutNav(props) {
  const cartctx = React.useContext(CartContext);
  return (
    <>  
    <Container fluid bg={'black'} style={{color:"white"}} className={'bg-dark color-success  sticky-top'} >
        <Row>
        <Container className='fs-1'>
             <ul className='Nav_UL'>
              <li> <Link to="/Home" >Home </Link> </li>
              <li> <Link to="/" >Store </Link> </li>
              <li> <Link to="/About" >About </Link> </li>
              <li> <Link to="/Contact" >Contact Us </Link> </li>
              { !cartctx.isLoggedin && <li> <Link to="/Login" >Login</Link> </li>}
             </ul>
        </Container>
        </Row>
        </Container>
    <Container   fluid style={{color:"white",height:"200px" }} className={'bg-secondary text-center'} >
       <h1 className='generic_logo'>The Generics</h1>
        </Container>
  
    </>
  );
}

export default AboutNav;