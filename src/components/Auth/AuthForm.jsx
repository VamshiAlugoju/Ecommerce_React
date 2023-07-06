import React from 'react'
import axios from 'axios';
import CartContext from '../../Context/CartContext';
import Cart from '../Cart/Cart';

function AuthForm() {

    const ApiKey = "AIzaSyCMH3ZKXarQH7bKgP9EDUYn1NhEQZMRz44"

    const [login , setlogin] = React.useState(true)
    const email = React.useRef();
    const password = React.useRef();
    const cartctx = React.useContext(CartContext);

    function handleclick(e)
    { 
        setlogin(prev=>!prev);
    }

    async function handleSubmit(e)
    {
       e.preventDefault();
       const obj ={
        email:email.current.value,
        password:password.current.value,
        returnSecureToken:false
    }
       if(login)
       {
          try{
             
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ApiKey}`,
            {
              "email":obj.email,
              "password":obj.password,
              "returnSecureToken":false
           }
           );
           cartctx.login();
           console.log(res);
          }
          catch(err)
          {
            console.log(err);
          }
       }
       else{
     
        try{
            
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${ApiKey}`,
             {"email":obj.email,
               "password":obj.password,
               "returnSecureToken":false
            }
            );

             setlogin(true)

        }
        catch(err)
        {
            console.log(err);
        }
       }
    }

  return (
    <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit} style={{width:"30rem"}} className='mt-5 Auth_Form'>
            <h4 className='text-center'>{ login ? "Login" : "SignUp"}</h4>
  <div className="mb-3">
    <label  for="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={email}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label  for="exampleInputPassword1" className="form-label">Password</label>
    <input  ref={password} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className='text-center'>

 { login ? <button   type="submit" className="btn btn-primary">Login</button> :
  <button type="submit" className="btn btn-primary">SignUp</button>}

  </div >
  { !login ? <p onClick={handleclick} style={{color:"blue" ,cursor:"pointer" }}  className="text-center mt-3 " >Already have an account </p> :
   <p  onClick={handleclick} style={{color:"blue" , cursor:"pointer" }}  className="text-center mt-3" >Create an account </p>}
</form>
    </div>
  )
}

export default AuthForm