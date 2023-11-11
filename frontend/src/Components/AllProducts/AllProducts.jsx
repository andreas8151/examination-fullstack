import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import "./allProducts.css";

export const AllProducts = () => {
  const { all_data } = useContext(ShopContext);

  return (
    <div id="item-list">
      {" "}
      <h1>All Products</h1>
      <div id="card-container">
        {all_data.map((item) => (
          <Link to={`/admin/${item.id}`}>
            <div key={item.id} id="item-card">
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Id: {item.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
