import React, { useEffect, useState } from "react";
// import LoginnRegis from "./LoginnRegis";
import MainLogin from "../MainLogin/MainLogin";
import './Service.css'

const Stocks = () => {
  const [logins, setLogins] = useState(false);
  
  return (
    <div className="serive-stock-container" style={{ display: "flex" }}>
      <section>
        <img
          className="stock-container-image"
          height="350px"
          width="600px"
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocks.f5b79aca.png"
          alt=""
        />
      </section>
      <section>
        <strong className="stock-free-text">
          Free
        </strong>
        <span className="account-openingss"> Account Opening</span>
        <section className="stock-maintenance">
          <h5>
            You don't have to pay a single rupee for opening a stocks account or
            account maintenance.
          </h5>
        </section>
        <section className="stock-maintenance-button">
          <button 
            className="stock-button">
            <span>
            <MainLogin value= {'Create Account for Free'}/>
            </span>
          </button>
        </section>
      </section>
      {/* {logins && <LoginnRegis />} */}
    </div>
  );
};

export default Stocks;