import React from "react";
import { NavLink } from "react-router-dom";
import "./InvestAnywhere.css";

const Getintouch = () => {
  return (
    <div className="getintouch-container">
      <div className="getintouch-container-2">
        <section>
          <section className="getintouch-text">
            <h1>We're with you, at every step.</h1>
            <p>
              For any query you have, find the answer quickly on our help and
              support
            </p>
            <p>
              Need a little more help? We're happy to talk via call or chat.
            </p>
          </section>
          <section>
            <button to="/getintouch" className="getintouch-button">
              <span>
                <NavLink to="getintouch">Get in touch</NavLink>
              </span>
            </button>
          </section>
        </section>
        <section className="getintouch-image">
          <img
            height="350px"
            width="350px"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/hns-support-img.d72e930b.png"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Getintouch;
