import React, { createContext } from "react";
import { all_data } from "../Components/Assets/all-data";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  all_data.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCart());

  const getTotalItemsCount = () => {
    let total = 0;
    for (let i = 0; i < all_data.length; i++) {
      total += cart[all_data[i].id];
    }
    return total;
  };

  const addToCart = (id) => {
    console.log(cart);
    setCart((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const emptyCart = () => {
    setCart(getDefaultCart());
  };

  const contextValue = {
    all_data,
    cart,
    removeFromCart,
    addToCart,
    emptyCart,
    getTotalItemsCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
