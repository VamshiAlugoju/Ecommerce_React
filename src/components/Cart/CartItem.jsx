import React from 'react'
import "./cartitem.css"
function CartItem(props) {

  function handleClick()
  {
  
  }
  return (
    <>
      <div className='OrderModalItem'>
        <div className='Img_Price_Name'>
        <div>
          <img src={props.Img} style={{width:"80px"}} alt="" />
        </div>
        <div>
          <div className="ModalItem_details">
            <h2>{props.Name} </h2>
            <div className="Price_Quantity">
                <p className='price' >$ {props.price} </p>
                <p className='quantity'>&#10005; {props.Quantity}9</p>
            </div>
          </div>
        </div>
        </div>
          <div className="Increase_Decrease_btns">
            <button name='decrease' onClick={handleClick} className='decrease'>Remove</button>
          </div>
     </div>
    </>
  )
}

export default CartItem