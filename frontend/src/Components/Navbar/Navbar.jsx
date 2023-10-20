import React from "react";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "Shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link to="mens">Mens</Link>
          {menu === "Mens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Womens");
          }}
        >
          <Link to="womens">Womens</Link>
          {menu === "Womens" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="kids">Kids</Link>
          {menu === "Kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>

        <Link to="/cart" className="nav-cart">
          <AiOutlineShoppingCart />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
