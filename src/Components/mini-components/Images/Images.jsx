import React from "react";
import "./images.css";

const Images = () => {
  return (
    <div>
      <div className="grid-box">
        <section className="mutual-funds">
          <img
            className="img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/mfHome.988a1c8f.svg"
            alt=""
          />
          <h2>Mutual Funds</h2>
        </section>
        <section className="mutual-funds">
          <img
            className="img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stockHome.3748c6a1.svg"
            alt=""
          />

          <h2>Stocks</h2>
        </section>
        <section className="mutual-funds">
          <img
            className="img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/optionHome.b321ed7e.svg"
            alt=""
          />

          <h2>Future and Options</h2>
        </section>
        <section className="mutual-funds">
          <img
            className="img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/ipoHome.6e9cfc6c.svg"
            alt=""
          />

          <h2>IPO</h2>
        </section>
        <section className="mutual-funds">
          <img
            className="img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/usHome.2920e54e.svg"
            alt=""
          />
          <h2>US Stocks</h2>
        </section>
      </div>
    </div>
  );
};

export default Images;
