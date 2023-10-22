import React from "react";
import "./popular.css";
import { data_products } from "../Assets/data.js";
import popular from "../Assets/popular.jpg";
import { Item } from "../Item/Item.jsx";

export const Popular = () => {
  return (
    <div className="popular">
      <img src={popular} alt="" className="popular-img" />

      <div className="popular-items">
        {data_products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
