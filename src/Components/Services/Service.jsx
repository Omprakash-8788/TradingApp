import React, { useState } from "react";
import MutualFunds from "./MutualFunds";
import "./Service.css";
import Stocks from "./Stocks";
import UsStocks from "./USStcoks";
import styled from "styled-components";

const Service = () => {
  const [stock, setStock] = useState(true);
  const [mutualfunds, setMutualfunds] = useState(false);
  const [usstock, setUsstock] = useState(false);

  const stockHandler = () => {
    setMutualfunds(false);
    setUsstock(false);
    setStock(true);
  };
  const mutualfundsHandler = () => {
    setMutualfunds(true);
    setUsstock(false);
    setStock(false);
  };
  const usstockHandler = () => {
    setMutualfunds(false);
    setUsstock(true);
    setStock(false);
  };

 

  return (
    <div className="service-container">
      <div className="money">
        <h1>Your Money. Your Choice</h1>
      </div>
      <div className="list">
        <section>
          <button className="button" onClick={stockHandler}>
            <h2 className={stock ? "button-stocks" : "selected-buttons"}>Stocks</h2>
          </button>
        </section>
        <section>
          <button className="button" onClick={mutualfundsHandler}>
            <h2 className={mutualfunds ? "button-stocks" : "selected-buttons"}>Mutual Funds</h2>
          </button>
        </section>
        <section>
          <button className="button" onClick={usstockHandler}>
            <h2 className={usstock ? "button-stocks" : "selected-buttons"}>US Stocks</h2>
          </button>
        </section>
      </div>
      <div className="services-container">
        {stock &&  <Stocks/>}
        {mutualfunds && <MutualFunds/>}
        {usstock && <UsStocks/>}
      </div>
    </div>
  );
};

export default Service;
