import React from 'react'
import CartItem from './CartItem'

function CartComponentData() {
  return (
     <div>
        <table className="table">
  <thead>
    <tr className='Table_header fs-2'>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
  </tbody>
</table>
<div className="Cart_total_price d-flex justify-content-end">
         <p className="fs-3   ">Total $0</p> 
      </div>
</div>
  )
}

export default CartComponentData