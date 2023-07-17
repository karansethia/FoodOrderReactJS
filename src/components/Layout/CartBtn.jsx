import React, { useContext, useEffect, useState } from 'react'
import classes from './CartBtn.module.css'
import CartIcon from './CartIcon'
import CartContext from '../../store/cart-context'

const CartBtn = props => {

  const [addAnimation, setAddAnimation] = useState(false);

  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const cartNum = cartContext.items.reduce((current, item) => {
    return current + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${addAnimation ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAddAnimation(true);

    const timer = setTimeout(() => {
      setAddAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
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