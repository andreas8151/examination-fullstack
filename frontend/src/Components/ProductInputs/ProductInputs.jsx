import React from "react";
import "./productInputs.css";

export const ProductInputs = (props) => {
  return (
    <div className="productInputs">
      <form onSubmit={props.submitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => props.setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => props.setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => props.setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => props.setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => props.setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
