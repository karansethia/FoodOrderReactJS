import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {

  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + ((action.item.price) * (action.item.amount));
    return { items: updatedItems, totalAmount: updateTotalAmount }
  }

  return defaultCart;
}

const CartProvider = (props) => {

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart)

  const addItemToCartHandler = (item) => {
    dispatchCart({
      type: 'ADD',
      item: item
    })
  };
  const removeItemToCartHandler = (id) => {
    dispatchCart({
      type: 'REMOVE',
      id: id
    })
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
