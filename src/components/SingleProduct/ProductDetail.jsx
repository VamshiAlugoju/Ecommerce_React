import React from 'react'
import {Button} from "react-bootstrap"
import "./productDetail.css"
import {useLocation,useParams} from "react-router-dom"
import { productsArr } from '../../Assets/Albums'
import CartContext from '../../Context/CartContext'

function ProductDetail() {
   
   const cartctx = React.useContext(CartContext);

   const params = useParams();

   const loc = useLocation();
    console.log(params)
   const product = productsArr.find(item=>{
     return item.id == params.id
   })
  
   console.log(cartctx)
   function AddToCart()
   {
      const obj = {
         id:product.id,
         Name:product.title,
         Price:product.price
      }

      cartctx.AddToCart(obj);
   }
    
  return (
    <>
       <div className='Product_Detail_div'>
       <h1>{product.title}</h1>
        <div className='Product_img_div'>
           <img src={product.imageUrl} alt="" />
        </div>
        <div className='product_Detail_info'>
         
           <h4>$ {product.price}</h4>
           <Button onClick={AddToCart}> Add To Cart</Button> 
           
        </div>
        <div className='reviews_div'>
            <ol>
               {product.reviews.map(item=>{
                  return <li>{item}</li>
               })}
            </ol>
        </div>
        </div> 
    </>
  )
}

export default ProductDetail