import React, { useState } from "react";
import "./Header.css";
import "font-awesome/css/font-awesome.min.css";
import { AppBar } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import MainLogin from "../MainLogin/MainLogin";
import Footer from "../Footers/Footer";
import Index from "./HeaderSearch";
import { NavLink } from "react-router-dom";
import LoginHooks from "../Login/LoginHook";
import LoginUserName from "./loginUserName";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const { data, setData } = LoginUserName();
  let names = localStorage.getItem("userName");
  const [logout, setLogout] = useState(false);
  const [values, setValues] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  const Token = localStorage.getItem("token");
  console.log(localStorage.getItem("id"));
  console.log("hye");
  if (Token) {
    names = localStorage.getItem("userName");
  }
  console.log(data);

  return (
    <>
      <AppBar>
        <div className="top-header-container">
          <div className="header-container">
            <div className="logo-section">
              <NavLink to="/">
                <img
                  className="Groww-image"
                  src="https://storage.googleapis.com/groww-assets/web-assets/img/website-logo/logo-dark-groww.svg"
                  alt=""
                  height="90px"
                  width="200px"
                />
              </NavLink>
            </div>
            <div className="search-section">
              <form className="form-section">
                <i class="fa fa-search"></i>
                <input
                  autoComplete="off"
                  type="text"
                  id="inputID"
                  placeholder="What are you looking for today?"
                  onChange={(e) => setValues(e.target.value)}
                  onClick={() => setShow(true)}
                  onBlur={() => setShow(false)}
                />
              </form>
              <Index display={show} value={values} />
            </div>
            <div className="header-button-section">
              <section>
                <button className="header-button">
                  <span>
                    <MainLogin value={"Login/Register"} />
                  </span>
                </button>
              </section>

              {/* <section className="profileContent">
                  <h2>Trial</h2>
              </section> */}
              <div className="card second-card">
                <div className="card-contentss">
                  <h5 onClick={togglePopup}>User Name</h5>
                  <AccountCircleIcon  />
                  {isOpen && (
                    <ul onClick={() => setIsOpen(false)} className="popup-list">
                      <li onClick={() => navigate('/login')}>Login</li>
                      <li onClick={logoutHandler}>Log Out</li>
                      <li onClick={() =>navigate('/signUp')}>Sign Up</li>
                    </ul>
                  )}
                  
                </div>
              </div>
              {/* <button className="signup-button" onClick={() =>navigate('/signUp')}>SignUp</button>
             {Token && <button className="logout-button" onClick={logoutHandler}>LogOut</button>}
             {!Token &&  <button className="login-button" onClick={() => navigate('/login')}>Login</button>}
              <b>{names}</b>
              <b>{data}</b> */}
            </div>
          </div>
        </div>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
