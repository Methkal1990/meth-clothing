import React from "react";

import Custombutton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <Custombutton>Go To Checkout</Custombutton>
  </div>
);

export default CartDropDown;
