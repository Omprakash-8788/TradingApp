import React from "react";
import "./keep.css";

const KeepLearning = () => {
  return (
    <div className="keep-container">
      <div>
        <h1 >Keep Learning. Keep Growing</h1>
      </div>
      <div className="keep-images-section">
        <section className="keep-images">
          <img
            className="keep-images-1"
            width="420px"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/blog1.262fd0cf.png"
            alt=""
          />
          <h1>How to Select/Pick Stocks for Intraday</h1>
        </section>

        <section className="keep-images">
          <img
             className="keep-images-1"
            width="420px"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/blog2.ee6e787e.png"
            alt=""
          />
          <h1>Beginners guide to mutual funds</h1>
        </section>

        <section className="keep-images">
          <img
             className="keep-images-1"
            width="420px"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/blog3.f297e96a.png"
            alt=""
          />
          <h1> How to Diversify in the time of Market Voltality</h1>
        </section>
      </div>
      <div className="press">
        <h1>In the Press</h1>
        <section className="press-section">
          <span className="innews">YOURSTORY</span>
          <br></br>
          <span className="innews">
            live
            <span style={{ fontFamily: "georgia", fontSize: "50px" }}>
              mint
            </span>
          </span>
          <span className="innews">
            {" "}
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/business.ec06a964.svg"
              alt=""
            />
          </span>
          <span
            className="ent"
            style={{ fontFamily: "sans-serif", fontSize: "20px" }}
          >
            {" "}
            <img className="enterpreneur-image" src="https://www.entrepreneurindia.com/assets/img/logonew.png" />
          </span>
        </section>
      </div>
    </div>
  );
};

export default KeepLearning;
