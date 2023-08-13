import React from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} alt="ally" />
      <div className="description">
        <p>
          {" "}
          <b> {productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button> - </button>
          <input value={cartItems[id]} />
          <button> + </button>
        </div>
      </div>
    </div>
  );
};
