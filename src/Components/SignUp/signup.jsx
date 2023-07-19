import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:9000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    localStorage.setItem("userName", name);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-sec-container">
        <h2>Register</h2>
        <div className="signup-name">
          <section>
            <label className="signUp-label">Name</label>
          </section>
          <section>
            <input
              className="signup-label-input"
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>
        </div>
        <div className="signup-email">
          <section>
            <label className="signUp-label">Email</label>
          </section>
          <section>
            <input
              className="signup-label-input"
              type="text"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
        </div>
        <div className="signup-pass">
          <section>
            <label className="signUp-label">Password</label>
          </section>
          <section>
            <input
              className="signup-label-input"
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
        </div>
        <div className="signup-button-container">
          <button className="signup-button" onClick={collectData} type="button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
