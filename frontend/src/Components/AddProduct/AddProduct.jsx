import React from "react";
import { useState } from "react";
import { addProductHandler } from "./addProductHandler";
import "./addProducts.css";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();

    const response = await addProductHandler(
      name,
      price,
      category,
      image,
      description
    );

    setMessage(response);
  }

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
      {message && <div className="productDisplay-message">{message}</div>}
    </div>
  );
};
