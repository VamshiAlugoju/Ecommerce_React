import React from "react";
import CartContext from "./CartContext";

const initialData = {
    cartItems : [],
    totalPrice:0
}

function Reducer(state,action)
{  
    if(action.type === "ADDTOCART")
    {
       const updatedCartItems =[...state.cartItems];
       const updatedPrice = state.totalPrice + action.item.Price
       updatedCartItems.push(action.item);
       return{
        cartItems:updatedCartItems,
        totalPrice:updatedPrice
       }
    }
  
    return initialData;
}
 

function CartProvider(props)
{
    const [state,dispatchaction] = React.useReducer(Reducer,initialData)
     
    function AddToCart(item)
    {
        dispatchaction({type:"ADDTOCART" , item})
       console.log(state)
    }
    const cartContext = {
        Items:state.cartItems,
        TotalPrice:state.totalPrice,
        AddToCart:AddToCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;