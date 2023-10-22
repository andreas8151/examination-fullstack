import React, { useContext } from "react";
import "./productDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productDisplay">
      <div className="productDisplay-img">
        <img src={product.image} alt="" className="productDisplay-main-image" />
      </div>
      <div className="productDisplay-info">
        <h1>{product.name}</h1>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
        <button
          className="productDisplay-button"
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
