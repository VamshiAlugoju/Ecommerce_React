import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';

 import {Link} from "react-router-dom"

import "./Navigation.css";

function ContactNav(props) {

  return (
    <>  
    <Container fluid bg={'black'} style={{color:"white"}} className={'bg-dark color-success  sticky-top'} >
        <Row>
        <Container className='fs-1'>
             <ul className='Nav_UL'>
              <li><Link to="/Home" >Home </Link> </li>
              <li> <Link to="/" >Store </Link> </li>
              <li> <Link to="/About" >About </Link> </li>
              <li> <Link to="/Contact" >Contact Us </Link> </li>
             </ul>
        </Container>
        </Row>
        </Container>
 
  
    </>
  );
}

export default ContactNav;