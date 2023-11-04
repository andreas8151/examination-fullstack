import React from "react";
import { CartItems } from "../Components/CartItems/CartItems";
import { CheckoutForm } from "../Components/CheckoutForm/CheckoutForm";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

import "./CSS/cart.css";

export const Cart = () => {
  const { all_data, cart, removeFromCart, addToCart, emptyCart } =
    useContext(ShopContext);

  return (
    <div>
      <CartItems
        cart={cart}
        all_data={all_data}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        emptyCart={emptyCart}
      />
      <CheckoutForm cart={cart} all_data={all_data} />
    </div>
  );
};
