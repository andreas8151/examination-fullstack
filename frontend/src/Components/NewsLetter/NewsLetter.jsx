import React from "react";
import "./newsLetter.css";
import news from "../Assets/news.png";

export const NewsLetter = () => {
  return (
    <div className="news-container">
      <img src={news} alt="news" className="news-img" />
      <div className="news-letter">
        <hr />{" "}
        <div>
          <h1>News Letter</h1>
          <p>Get timely updates from your favorite products</p>{" "}
        </div>
        <div className="news-letter-input">
          <input type="text" placeholder="Your Email" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
