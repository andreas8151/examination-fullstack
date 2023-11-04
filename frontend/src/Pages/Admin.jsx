import React from "react";
import { AllProducts } from "../Components/AllProducts/AllProducts";
import { AllOrders } from "../Components/AllOrders/AllOrders";
import { AddProduct } from "../Components/AddProduct/AddProduct";
import "./CSS/admin.css";

export const Admin = () => {
  return (
    <div className="container">
      <AllProducts />
      <AddProduct />
      <AllOrders />
    </div>
  );
};
