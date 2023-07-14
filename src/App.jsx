import { useState } from 'react'

import './App.css'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartRender, setCartRender] = useState(false);

  const renderCartHandler = () => {
    setCartRender(true);
  }
  const removeCartHandler = () => {
    setCartRender(false);
  }

  return (
    <CartProvider>
      {cartRender && <Cart onCartRemove={removeCartHandler} />}
      <Header onCartRender={renderCartHandler} onCartRemove={removeCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App
