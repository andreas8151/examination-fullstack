import React from "react";
import "./newCollections.css";
import { data_products } from "../Assets/data.js";
import { Item } from "../Item/Item.jsx";

export const NewCollections = () => {
  return (
    <div className="new-collections" id="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="new-collections-items">
        {data_products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};
