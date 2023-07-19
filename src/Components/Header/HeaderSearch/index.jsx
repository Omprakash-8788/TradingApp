import React from "react";
import { Stocks } from "./API";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import "./Index.css";


const Index = (props) => {
  return (
    <div>
      {Stocks.filter((item) =>
        item.name.toLowerCase().includes(props.value.toLowerCase())
      ).map((ele, key) => {
        return (
          <div key={ele.name} className="stock-index">
            <section className="stock-index-section">
              {props.display && <ShowChartIcon />}
              <section className="stock-name">
                {props.display && <h4>{ele.name}</h4>}
                {props.display && <h6>{ele.company}</h6>}
              </section>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
