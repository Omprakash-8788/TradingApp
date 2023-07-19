import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router";
import "./loginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const submitHandler = async () => {
    let result = await fetch("http://localhost:9000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      localStorage.setItem("id", JSON.stringify(result.user._id));
      localStorage.setItem("name", JSON.stringify(result.user.name));

      navigate("/");
    } else {
      alert("Please enter connect details");
    }
  };

  return (
    <form className="login-container" onSubmit={submitHandler}>
      <div className="login-sec-container">
        <h2>Login</h2>
        <div className="email-cotainer">
          <section>
            {" "}
            <label className="login-label">Email</label>
          </section>
          <section>
            {" "}
            <input
              className="login-label-input"
              placeholder="Enter your email..."
              onChange={emailHandler}
              value={email}
            />
          </section>
        </div>
        <div className="email-cotainer">
          <section>
            {" "}
            <label className="login-label">Password</label>
          </section>
          <section>
            <input
              className="login-label-input"
              placeholder="Enter your password... "
              onChange={passwordHandler}
              value={password}
            />
          </section>
        </div>
        <div className="login-button-container ">
          <button className="login-button" type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
