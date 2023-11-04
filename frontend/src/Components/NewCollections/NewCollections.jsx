import React, { useContext } from "react";
import "./newCollections.css";
import { Item } from "../Item/Item.jsx";
import { ShopContext } from "../../Context/ShopContext";

export const NewCollections = () => {
  const { all_data } = useContext(ShopContext);

  return (
    <div className="new-collections" id="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="new-collections-items">
        {all_data.map((product) => {
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
