import React from "react";
import MainLogin from "../MainLogin/MainLogin";
import './Service.css'

const UsStocks = () => {
  return (
    <div className="usstocks-container">
      <section>
        <img
          className="usstock-image-container"
          height="350px"
          width="600px"
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/us.3b09c905.png"
          alt=""
        />
      </section>
      <section>
        <strong className="stock-free-text">
          Free
        </strong>
        <span style={{ fontSize: "30px" }}> Account Opening</span>
        <section className="stock-maintenance">
          <h5>
            Invest in Apple, Google. Netflix and many more US companies that you
            love without any brokerage fee.
          </h5>
        </section>
        <section className="stock-maintenance-button">
          <button className="stock-button">
            <span>
            <MainLogin  value= {'Create Account for Free'}/>
            </span>
          </button>
        </section>
      </section>
    </div>
  );
};

export default UsStocks;
