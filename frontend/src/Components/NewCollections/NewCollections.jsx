import React from "react";
import "./newCollections.css";
import { data_products } from "../Assets/data.js";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="new-collections-items">
        {data_products.map((product) => {
          return (
            <div className="new-collections-item">
              <img src={product.image} alt="" className="collection-img" />
              <p>{product.name}</p>
              <p>$ {product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
