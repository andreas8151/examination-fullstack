import React from "react";
import "./offers.css";
import sale from "../Assets/sale.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div>
        <img src={sale} alt="" />
      </div>
      <div>
        {" "}
        <h3>OFFERS</h3>
        <h1>50% OFF</h1>
      </div>

      <div>
        <h2>On all products</h2>
        <p> Hurry up! Limited time offer</p>
      </div>

      <div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
