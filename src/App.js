 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './pages/Store';
import About from './pages/About';
import Home from './pages/Home';
import { Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Store/>} />
   
    <Route path='/About'  element={<About/>} />

    <Route path='/Home' element={<Home/>} /> 
   </Routes>
   </>
  );
}

export default App;
