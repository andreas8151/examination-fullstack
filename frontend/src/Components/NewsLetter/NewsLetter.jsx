import React from "react";
import "./newsLetter.css";
import news from "../Assets/news.png";

export const NewsLetter = () => {
  return (
    <div id="news-container">
      <img src={news} alt="news" id="news-img" />
      <div id="news-letter">
        <hr />{" "}
        <div>
          <h1>News Letter</h1>
          <p>Get timely updates from your favorite products</p>{" "}
        </div>
        <div id="news-letter-input">
          <input type="text" placeholder="Your Email" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
