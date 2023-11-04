import React from "react";
import { UpdateItem } from "../Components/UpdateItem/UpdateItem";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

export const AdminUpdateItem = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_data.find((item) => item.id == productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <UpdateItem product={product} />
    </div>
  );
};
