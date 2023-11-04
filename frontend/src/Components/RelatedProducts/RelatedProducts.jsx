import React, { useContext } from "react";
import "./relatedProducts.css";
import { ShopContext } from "../../Context/ShopContext";
import { Item } from "../Item/Item";

export const RelatedProducts = (props) => {
  const { category } = props;
  const { all_data } = useContext(ShopContext);

  const filtered_products = all_data
    .filter((item) => item.category === category.category)
    .slice(0, 4);
  return (
    <div className="relatedProducts">
      <h1>RELATED PRODUCTS</h1>
      <hr />
      <div className="relatedProducts-items">
        {filtered_products.map((product) => {
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
