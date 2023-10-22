import React from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { Item } from "../Components/Item/Item";

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
            return (
              <Item
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
