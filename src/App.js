 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './pages/Store';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import LoginPage from './pages/LoginPage';
import CartContext from './Context/CartContext';
import React from 'react';

import { Router, Routes,Route } from 'react-router-dom';

function App() {

  const cartctx = React.useContext(CartContext);

  return (
   <>
   <Routes>
    <Route path='/' element={<Store/>} />
   
    <Route path='/About'  element={<About/>} />

    <Route path='/Home' element={<Home/>} />

    <Route path='/Contact' element={<Contact />} /> 

    <Route path ="/product/:id" element={ <SingleProduct /> } />
    
   {!cartctx.isLoggedin && <Route path="/Login" element={ <LoginPage /> } />}
   
   <Route path='*' element={<Home/>} />
   </Routes>

   </>
  );
}

export default App;
