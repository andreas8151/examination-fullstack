import React, { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div id="productDisplay">
      <div id="productDisplay-img">
        <img src={product.image} alt="" id="productDisplay-main-image" />
      </div>
      <div id="productDisplay-info">
        <h1>{product.name}</h1>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
        <button
          id="productDisplay-button"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
