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
import { useEffect } from 'react';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

function App() {
  /* useEffect(() => {

    const database = getFirestore();

    const itemReference = doc(database, 'items', 'yADp0ha9MCDQcJsU6hya');

    getDoc(itemReference)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const item = {
            id: snapshot.id,
            ...snapshot.data()
          };
          console.log(item);
        }
      })
      .catch(error => console.warn(error))
  }, [])
 */

/*   useEffect(() => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    getDocs(collectionReference)
      .then((snapshot) => {
        const list = snapshot
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
        console.log(list);
      })
      .catch(error => console.warn(error))
  }, [])
 */
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
