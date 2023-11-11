import React from "react";
import hero from "../Assets/hero.png";
import "./hero.css";


export const Hero = () => {
  return (
    <div id="hero">
      <img src={hero} id="hero-img"></img>
      <div id="hero-latest-btn">
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
