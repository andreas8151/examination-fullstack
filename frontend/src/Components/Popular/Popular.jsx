import React from "react";
import "./popular.css";
import { data_products } from "../Assets/data.js";
import popular from "../Assets/popular.jpg";

export const Popular = () => {
  return (
    <div className="popular">
      <img src={popular} alt="" className="popular-img" />

      <div className="popular-items">
        {data_products.map((product) => {
          return (
            <div className="popular-item">
              <img src={product.image} alt="" className="popular-item-img" />
              <p>{product.name}</p>

              <p>$ {product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
