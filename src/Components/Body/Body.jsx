import React from "react";
import "./Body.css";
import Images from "../mini-components/Images/Images";
import Stocks from "../mini-components/Stocks/Stocks";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="stock-container">
          <Stocks />
        </div>
        <div className="image-section">
          <Images />
        </div>
      </div>
    </>
  );
};

export default Body;
