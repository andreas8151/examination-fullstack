import React from "react";
import "./CSS/loginSignup.css";
import store from "../Components/Assets/store.png";

export const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="signIn-container">
        <img src={store} alt="login" />
        <div className="loginSignup-container">
          <h1>Admin-login</h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Continue</button>
            <p className="login"></p>
          </form>
        </div>
      </div>
    </div>
  );
};
