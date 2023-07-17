import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0

  const addItemHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  };
  const removeItemHandler = id => {
    cartCtx.removeItem(id)
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={removeItemHandler.bind(null, item.id)} onAdd={addItemHandler.bind(null, item)} />
      ))}
    </ul>
  );

  return (
    <Modal onCartRemove={props.onCartRemove}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCartRemove}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart