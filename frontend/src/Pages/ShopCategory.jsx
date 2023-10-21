import React from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

export const ShopCategory = (props) => {
  const { all_data } = useContext(ShopContext);
  return (
    <div>
      <div className="shop-category">
        <h1>{props.category}</h1>
        <img src={props.banner} alt="banner" />
      </div>
      <div className="shop-category-products">
        {all_data.map((product) => {
          if (product.category === props.category) {
            console.log(product);
            return (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt="product" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
