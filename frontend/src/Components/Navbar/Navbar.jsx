import React from "react";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import { GrCart } from "react-icons/gr";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignOutButton,
} from "@clerk/clerk-react";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  const { getTotalItemsCount } = useContext(ShopContext);

  return (
    <div id="navbar">
      <ul id="nav-menu">
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
      <div id="nav-login">
        <SignedIn>
          <SignOutButton id="signOutBtn" />
        </SignedIn>
        <SignedOut>
          <Link to="/login" id="nav-login-link">
            <button id="nav-login-btn">Login</button>
          </Link>
        </SignedOut>

        <Link to="/cart" id="nav-cart">
          <GrCart />
        </Link>
        <div id="nav-cart-count">{getTotalItemsCount()}</div>
      </div>
    </div>
  );
};
