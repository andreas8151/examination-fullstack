import React from "react";
import "./hero.css";
import hero from "../Assets/hero.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} className="hero-img"></img>
      <div className="hero-latest-btn">
        <button> latest Collection</button>
      </div>
    </div>
  );
};
