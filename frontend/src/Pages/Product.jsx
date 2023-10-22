import React from "react";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export const Product = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_data.find((item) => item.id == productId);

  return (
    <div>
      <ProductDisplay product={product} />
      <RelatedProducts category={product} />
    </div>
  );
};
