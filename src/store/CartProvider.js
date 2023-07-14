import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

  const addItemToCartHandler = items => {

  }
  const removeItemToCartHandler = id => {

  }


  const cartContext = {
    items: [],
    totalAmoount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider