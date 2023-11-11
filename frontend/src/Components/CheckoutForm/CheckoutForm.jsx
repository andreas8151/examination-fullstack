import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsHouse } from "react-icons/bs";

import "./checkoutForm.css";

export const CheckoutForm = ({ cart, all_data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let price = 0;

  for (let i = 0; i < all_data.length; i++) {
    price += cart[all_data[i].id] * all_data[i].price;
  }

  const status = 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const products = all_data
      .filter((product) => cart[product.id] > 0)
      .map((product) => `${cart[product.id]}x(id:${product.id})`)
      .join(",");

    const response = await fetch("http://localhost:5050/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        products,
        price,
        status,
      }),
    });

    if (response.ok) {
      setMessage(`Order placed successfully!`);
    } else {
      const errorMessage = await response.text();

      setMessage(errorMessage);
    }
  };

  return (
    <div id="card-checkout">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <AiOutlineMail />

        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <AiOutlinePhone />
        <input
          placeholder="Phone Number"
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <BsHouse />
        <input
          placeholder="Address"
          id="address"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        ></input>

        <label htmlFor="products">Products:</label>
        <ul>
          {all_data.map((product) => {
            if (cart[product.id] > 0) {
              return (
                <li key={product.id}>
                  {product.name} - ${product.price} x {cart[product.id]}
                </li>
              );
            }
            return null;
          })}
        </ul>

        <label htmlFor="price">Total Price:</label>
        <input type="text" id="price" name="price" value={price.toFixed(2)} />

        <button type="submit" id="checkout-button">
          Submit
        </button>
      </form>
      {message && <p id="message">{message}</p>}
    </div>
  );
};
