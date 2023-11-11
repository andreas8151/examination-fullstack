import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div id="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt=""
          id="item-img"
          onClick={window.scrollTo(0, 0)}
        />
        <p>{props.name}</p>
        <p>$ {props.price}</p>
      </Link>
    </div>
  );
};
