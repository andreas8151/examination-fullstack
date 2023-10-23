import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import { GrCart } from "react-icons/gr";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  const { getTotalItemsCount } = useContext(ShopContext);

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <img src={logo} alt="logo" />
        </li>
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
          <GrCart />
        </Link>
        <div className="nav-cart-count">{getTotalItemsCount()}</div>
      </div>
    </div>
  );
};
