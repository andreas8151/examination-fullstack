import React from "react";
import "./item.css";

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" className="item-img" />
      <p>{props.name}</p>
      <p>Rs. {props.price}</p>
    </div>
  );
};
