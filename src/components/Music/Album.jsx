import React from 'react'
import {Card , Button, Container} from "react-bootstrap"
import CartContext from '../../Context/CartContext'

function Album(props) {

  const cartctx = React.useContext(CartContext);
  function AddToCart()
  {
    const obj = {
      Name:props.title,
      Img:props.Imgurl,
      Price:props.price
    }
    
    cartctx.AddToCart(obj);
     
  }
  return (

     <div className="col d-flex justify-content-center">
    <Card className='' style={{ width: '18rem',marginBottom:"3rem" }}>
    <Card.Img className='Card_img' variant="top" src={props.Imgurl} />
    <Card.Body>
      <Card.Title className='fs-2'>{props.title}</Card.Title>
      <Container fluid className='d-flex justify-content-between mt-2 mb-2'>
       <p>{props.price}</p>
      <Button onClick={AddToCart} variant="primary">Add To Cart</Button>
      </Container>
    </Card.Body>
  </Card>
  </div>
   
  )
}

export default Album