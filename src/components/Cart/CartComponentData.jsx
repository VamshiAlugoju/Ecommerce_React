import React from 'react'
import CartItem from './CartItem'
import CartContext from '../../Context/CartContext'
function CartComponentData() {
 
  const cartctx = React.useContext(CartContext);
   console.log(cartctx, "int cart comoponent")
  return (
     <div>
      <div className='Cart_Items_data'>

        {cartctx.Items.map(item=>{
          return <CartItem Name={item.Name} Img={item.Img} price={item.Price}  />
        })}
    </div>
       <div className="Cart_total_price d-flex justify-content-end">
         <p className="fs-3   ">Total $0</p> 
      </div>
</div>
  )
}

export default CartComponentData