import React from 'react'
import classes from './CartBtn.module.css'
import CartIcon from './CartIcon'

const CartBtn = props => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  )
}

export default CartBtn