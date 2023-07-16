import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountisValid, setAmountIsValid] = useState(true);
  const amountInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +(amountInput.current.value);
    if (enteredAmount <= 0 || enteredAmount > 10) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmount)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountisValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
