import React from "react";
import "./hero.css";
import hero from "../Assets/hero.png";

export const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} className="hero-img"></img>
      <div className="hero-latest-btn">
        <button
          onClick={() => {
            const newCollection = document.getElementById("new-collections");
            newCollection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {" "}
          latest Collection
        </button>
      </div>
    </div>
  );
};
