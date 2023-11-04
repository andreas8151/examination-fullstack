import React from "react";
import "./cartItems.css";

export const CartItems = ({
  all_data,
  cart,
  removeFromCart,
  addToCart,
  emptyCart,
}) => {
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
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                  <p>{cart[product.id]}</p>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(product.id)}
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

      <div className="cartItems-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="empty-cart" onClick={emptyCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
