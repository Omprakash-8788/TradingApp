import React from "react";
import "./Touch.css";
import MainSearch from "../Search bars/MainSearchBar";
import Accordian from "../Accordians/Accordian";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Touch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="touch-container">
        <div>
          <h1>Struck Somewhere?</h1>
          <section className="touch">
            <MainSearch />
          </section>
        </div>
        <div style={{ display: "flex" }}>
          <section className="touch-grid">
            <section className="touch-grid-section">
              <section>
                <img
                  src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreyscaleIcons/Stocks.png"
                  alt=""
                />
              </section>
              <section className="touch-text">
                <h3  onClick={() => navigate('stocklist')}>Stocks</h3>
                <Link to='trialjs'>trial</Link>
                <h6>Orders-Holding-Demat-Charges</h6>
              </section>
            </section>
            <section className="touch-grid">
              <section className="touch-grid-section">
                <section>
                  <img
                    src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreenIcons/Payments.png"
                    alt=""
                  />
                </section>
                <section className="touch-text">
                  <h3>Payments</h3>
                  <h6>Orders-Holding-Demat-Charges</h6>
                </section>
              </section>
            </section>
       
            <section className="touch-grid">
              <section className="touch-grid-section">
                <section>
                  <img
                    src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreyscaleIcons/FD.png"
                    alt=""
                  />
                </section>
                <section className="touch-text">
                  <h3>FDs</h3>
                  <h6>Orders-Holding-Demat-Charges</h6>
                </section>
              </section>
            </section>
          </section>
          <section>
            <section className="touch-grid-2">
              <section className="touch-grid-section">
                <section>
                  <img
                    src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreyscaleIcons/MF.png"
                    alt=""
                  />
                </section>
                <section className="touch-text">
                  <h3> Mutual Funds</h3>
                  <h6>Orders-Holding-Demat-Charges</h6>
                </section>
              </section>
            </section>

            <section className="touch-grid-2">
              <section className="touch-grid-section">
                <section>
                  <img
                    src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreyscaleIcons/MyAccount.png"
                    alt=""
                  />
                </section>
                <section className="touch-text">
                  <h3>My Account</h3>
                  <h6>Orders-Holding-Demat-Charges</h6>
                </section>
              </section>
            </section>

            <section className="touch-grid-2">
              <section className="touch-grid-section">
                <section>
                  <img
                    src="https://storage.googleapis.com/groww-static-content/img/helpsupport/GreyscaleIcons/USStocks.png"
                    alt=""
                  />
                </section>
                <section className="touch-text">
                  <h3> US Stocks</h3>
                  <h6>Orders-Holding-Demat-Charges</h6>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
      <Accordian />
    <Outlet/>
    </>
    
  );
};

export default Touch;
