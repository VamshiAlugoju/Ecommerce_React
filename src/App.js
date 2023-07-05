 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './pages/Store';
import About from './pages/About';
import { Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Store/>} />
   
    <Route path='/About'  element={<About/>} />
   </Routes>
   </>
  );
}

export default App;
