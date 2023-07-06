import React from 'react'
import {Button} from "react-bootstrap"
import CartContext from '../../Context/CartContext'

function Login() {

    const cartctx = React.useContext(CartContext);
   
  console.log(cartctx)
   
    function login()
    {
      cartctx.login()
    }
    function logout()
    {
      cartctx.logout();
    }

  return (
    <>
    { !cartctx.isLoggedin? <Button onClick={login}>
        Login
     </Button>:
     <Button onClick={logout}>Logout</Button>}
    </>
  )
}

export default Login