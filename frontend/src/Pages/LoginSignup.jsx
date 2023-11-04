import React from "react";
import store from "../Components/Assets/store.png";
import { useState } from "react";
import "./CSS/loginSignup.css";

export const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5050/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      console.log("Login successful");
      window.location.href = "/admin";
    } else {
      const errorMessage = await response.text();
      setMessage(errorMessage);
    }
  };

  return (
    <div className="loginSignup">
      <div className="signIn-container">
        <img src={store} alt="login" />
        <div className="loginSignup-container">
          <h1>Admin-login</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Continue</button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
