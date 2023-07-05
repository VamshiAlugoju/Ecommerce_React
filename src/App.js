 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation';
import Music from './components/Music/Music';
import CartProvider from './Context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Navigation />
      <Music />
    </CartProvider>
    
  );
}

export default App;
