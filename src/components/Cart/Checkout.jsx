import React, {useRef, useState} from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isValidPostal = (value) => value.trim().length == 6;

  const nameInput = useRef();
  const streetInput = useRef();
  const cityInput = useRef();
  const postalCodeInput = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredNameIsValid = !isEmpty(nameInput.current.value);
    const enteredStreetIsValid = !isEmpty(streetInput.current.value);
    const enteredPostalIsValid = isValidPostal(postalCodeInput.current.value);
    const enteredCityIsValid = !isEmpty(cityInput.current.value);
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: nameInput.current.value,
      street: streetInput.current.value,
      postal: postalCodeInput.current.value,
      city: cityInput.current.value
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <div className={classes.userInput}>
        <input type="text" id="name" ref={nameInput} />
        {!formValidity.name && <p>Name invalid</p>}
        </div>
      </div>
      <div
        className={`${classes.control} ${
          formValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <div className={classes.userInput}>
        <input type="text" id="street" ref={streetInput} />
        {!formValidity.street && <p>Street invalid</p>}
        </div>
      </div>
      <div
        className={`${classes.control} ${
          formValidity.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <div className={classes.userInput}>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formValidity.postal && <p>Postal Code invalid</p>}
        </div>
      </div>
      <div
        className={`${classes.control} ${
          formValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <div className={classes.userInput}>
        <input type="text" id="city" ref={cityInput} />
        {!formValidity.city && <p>City invalid</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
