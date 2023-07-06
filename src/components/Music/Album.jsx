import React from 'react'
import {Card , Button, Container} from "react-bootstrap"
import CartContext from '../../Context/CartContext'
import {Link} from "react-router-dom";

function Album(props) {

  
  const cartctx = React.useContext(CartContext);
  function AddToCart()
  {
    const obj = {
      Name:props.title,
      Img:props.Imgurl,
      Price:props.price,
      Id:props.id
    }
    
    cartctx.AddToCart(obj);
     
  }

  function handleClick()
  {
    
  }
  return (

     <div onClick={handleClick} className="col d-flex justify-content-center">
    <Card className='' style={{ width: '18rem',marginBottom:"3rem" }}>
      <Link to={`/product/${props.id}`}> 
      <Card.Img className='Card_img' variant="top" src={props.Imgurl} />
      </Link>
   
    <Card.Body>
      <Link style={{textDecoration:"none" , color:"black"}} to={`/product/${props.id}`} >
      <Card.Title  className='fs-2'>{props.title}</Card.Title>
      </Link>
      <Container fluid className='d-flex align-items-center justify-content-between mt-2 mb-2'>
       <p className='mb-0'>$ {props.price}</p>
      <Button onClick={AddToCart} variant="primary">Add To Cart</Button>
      </Container>
    </Card.Body>
  </Card>
  </div>
   
  )
}

export default Album