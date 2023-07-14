import React, { useContext } from 'react'
import classes from './CartBtn.module.css'
import CartIcon from './CartIcon'
import CartContext from '../../store/cart-context'

const CartBtn = props => {

  const cartContext = useContext(CartContext);
  const cartNum = cartContext.items.reduce((current) => {
    return current + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>
        {cartNum}
      </span>
    </button>
  )
}

export default CartBtn