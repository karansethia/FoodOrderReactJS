import React, {useContext, useState} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderHandler = (event) => {
    event.preventDefault();
    setShowCheckout(true);
  };
  const submitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://zwiggybykaran-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setSuccess(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout onCancel={props.onCartRemove} onConfirm={submitHandler} />
      )}
      {!showCheckout && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCartRemove}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const isSubmittingContent = <p>Sending order data</p>
  const successContent = <p>Order placed</p>

  return <Modal onCartRemove={props.onCartRemove}>
    {!isSubmitting && !success && cartContent}
    {isSubmitting && !success && isSubmittingContent}
    {!isSubmitting && success && successContent}

  </Modal>;
};

export default Cart;
