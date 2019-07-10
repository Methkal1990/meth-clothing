import React from "react";
import { connect } from "react-redux";

import Custombutton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
    </div>
    <Custombutton>Go To Checkout</Custombutton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
