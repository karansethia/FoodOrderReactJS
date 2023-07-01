import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Zwiggy</h1>
        <button>Cart</button>
      </header>
      <div className={classes.mainImage}>
        <img src={meals} alt="mealsImage" />
      </div>
    </React.Fragment>
  );
};

export default Header;
