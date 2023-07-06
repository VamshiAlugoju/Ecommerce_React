import React from "react";
import CartContext from "./CartContext";

const initialData = {
    cartItems : [],
    totalPrice:0,
    isLoggedin:false
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
        totalPrice:updatedPrice,
        isLoggedin:state.isLoggedin
       }
    }

    if(action.type === "LOGIN")
    {
        return{
            cartItems:state.cartItems,
            totalPrice:state.totalPrice,
            isLoggedin:true
        }
    }
    if(action.type === "LOGOUT")
    {
        return{
            cartItems:state.cartItems,
            totalPrice:state.totalPrice,
            isLoggedin:false
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
      
    }

    function login()
    { 
         dispatchaction({type:"LOGIN"})
    }
    function logout()
    {  
        dispatchaction({type:"LOGOUT"})
    }
  
    console.log(state)

    const cartContext = {
        Items:state.cartItems,
        TotalPrice:state.totalPrice,
        isLoggedin:state.isLoggedin,
        AddToCart:AddToCart,
        login:login,
        logout:logout
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;