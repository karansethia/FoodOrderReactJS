import React from "react";
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCartRemove}></div>;
};

const ModalCard = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCartRemove={props.onCartRemove} />,
        document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalCard>{props.children}</ModalCard>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
