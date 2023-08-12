import React, { createContext, useState } from "react";
import { PRODUCTS } from "./products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.lenght; i++) {
    cart[i] = 0;
  }
};

export const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState();
  return <ShopContext.Provider>shoop-context</ShopContext.Provider>;
};
