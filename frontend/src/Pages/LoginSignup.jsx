import React from "react";
import "./CSS/loginSignup.css";
import store from "../Components/Assets/store.png";

export const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="signIn-container">
        <img src={store} alt="login" />
        <div className="loginSignup-container">
          <h1>Sing up</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Continue</button>
            <p className="login"></p>

            <div className="loginSignup-agree">
              <p>
                Already have an account? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
