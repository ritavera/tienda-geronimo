//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./components/ItemListContainer/ItemListContainer.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter basename='/tienda-geronimo'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a la tienda'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
