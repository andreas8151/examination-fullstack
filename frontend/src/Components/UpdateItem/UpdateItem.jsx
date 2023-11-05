import React from "react";
import "./updateItem.css";
import { ProductInputs } from "../ProductInputs/ProductInputs";
import { updateProductHandler } from "./updateProductHandler";
import { useState } from "react";
import { deleteProduct } from "./deleteProduct";

export const UpdateItem = (props) => {
  const [name, setName] = useState(props.product.name);
  const [price, setPrice] = useState(props.product.price);
  const [category, setCategory] = useState(props.product.category);
  const [image, setImage] = useState(props.product.image);
  const [description, setDescription] = useState(props.product.description);
  const [message, setMessage] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();

    const response = await updateProductHandler(
      name,
      price,
      category,
      image,
      description,
      props.product.id
    );

    setMessage(response);
  }

  async function deleteHandler(e) {
    e.preventDefault();

    const response = await deleteProduct(props.product.id);

    setMessage(response);
  }

  const { product } = props;

  return (
    <div className="productDisplay">
      <div className="productDisplay-img">
        <img src={product.image} alt="" className="productDisplay-main-image" />
      </div>
      <div className="productDisplay-info">
        <h1>{product.name}</h1>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
      </div>
      <div>
        {" "}
        <ProductInputs
          setName={setName}
          setPrice={setPrice}
          setCategory={setCategory}
          setImage={setImage}
          setDescription={setDescription}
          submitHandler={submitHandler}
        />
        <button onClick={deleteHandler} className="delete-btn">
          Delete
        </button>
        {message && <div className="productDisplay-message">{message}</div>}
      </div>
    </div>
  );
};
