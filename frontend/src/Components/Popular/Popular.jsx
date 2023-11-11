import React, { useContext } from "react";
import "./popular.css";
import { ShopContext } from "../../Context/ShopContext";
import popular from "../Assets/popular.jpg";
import { Item } from "../Item/Item.jsx";

export const Popular = () => {
  const { all_data } = useContext(ShopContext);

  return (
    <div id="popular">
      <img src={popular} alt="" id="popular-img" />

      <div id="popular-items">
        {all_data.map((item) => (
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
