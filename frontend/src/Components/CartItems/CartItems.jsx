import React from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

export const CartItems = () => {
  const { all_data, cart, removeFromCart, addToCart, emptyCart } =
    useContext(ShopContext);

  let total = 0;

  for (let i = 0; i < all_data.length; i++) {
    total += cart[all_data[i].id] * all_data[i].price;
  }

  return (
    <div className="cartItems-container">
      <div className="cartItems-header">
        <h3>Cart Items</h3>
        <p>Products</p>
        <p>Price</p>
        <p>Total</p>
        <p>Quantity</p>
      </div>

      {all_data.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div className="cartItems">
              {" "}
              <div className="cartItems-info">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>${(cart[product.id] * product.price).toFixed(2)}</p>

                <div className="cartItems-quantity">
                  <button
                    className="add-item"
                    onClick={() => {
                      addToCart(product.id);
                    }}
                  >
                    +
                  </button>
                  <p>{cart[product.id]}</p>

                  <button
                    className="remove-item"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="card-checkout">
        <h3>Checkout</h3>

        <p className="total-price">Total: ${total.toFixed(2)}</p>
        <button className="checkout-button">Checkout</button>
      </div>
      <div className="double-btn">
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="continue-shopping"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => {
            emptyCart();
          }}
          className="empty-cart"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};
