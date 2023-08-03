import React,{ useRef } from 'react'
import classes from './Checkout.module.css'

const Checkout = (props) => {

  const isEmpty = value => value.trim() === '';
  const isValidPostal = value => value.trim().length > 5;

  const nameInput = useRef();
  const streetInput = useRef();
  const cityInput = useRef();
  const postalCodeInput = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredNameIsValid = !isEmpty(nameInput.current.value);
    const enteredStreetIsValid = !isEmpty(streetInput.current.value);
    const enteredPostalIsValid = !isValidPostal(postalCodeInput.current.value);
    const enteredCityIsValid = !isEmpty(cityInput.current.value);
    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
    //submition
    if(!formIsValid){
      return;
    } 
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInput}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout