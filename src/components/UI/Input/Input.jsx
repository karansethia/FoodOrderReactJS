import React from 'react'
import classes from './Input.module.css'


//!Adding ref functionality to a custom input component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input