import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App">
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App
