import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from '../MealItemForm/MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {

  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem