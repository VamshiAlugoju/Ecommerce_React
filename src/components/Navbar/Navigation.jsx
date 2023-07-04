import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import Cart from '../Cart/Cart';

import "./Navigation.css"
function Navigation() {
  return (
    <>  
    <Container fluid bg={'black'} style={{color:"white"}} className={'bg-dark color-success  sticky-top'} >
        <Row>
          <Col md={10}>
        <Container className='fs-1'>
             <ul className='Nav_UL'>
              <li> <a href="">Home</a> </li>
              <li> <a href="">Store</a> </li>
              <li> <a href="">About</a> </li>
             </ul>
        </Container>
        </Col>
        <Col className='d-flex align-items-center'>
        <Container>
          <Cart />
        </Container>
        </Col>
        </Row>
        </Container>
    <Container   fluid style={{color:"white",height:"200px" }} className={'bg-secondary text-center'} >
       <h1 className='generic_logo'>The Generics</h1>
        </Container>
  
    </>
  );
}

export default Navigation;