import React, { Component } from "react";
// import "./Stocks.css";
import Text from "./LoginText";

const textArray = [
  "Stocks",
  "Mutual Funds",
  "SIP",
  "US Stocks",
  "IPO",
  "Future and Options",
];

class LoginStocks extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section>
        <section className="invest">
         {" "}
          <span
            className="spans"
            style={{
              color:
                textThatChanges === "IPO"
                  ? "red"
                  : "none" && textThatChanges === "Stocks"
                  ? "green"
                  : "none" && textThatChanges === "Future and Options"
                  ? "blue"
                  : "none" && textThatChanges === "US Stocks"
                  ? "orange"
                  : "none" && textThatChanges === "Mutual Funds"
                  ? "pink"
                  : "none" && textThatChanges === "SIP"
                  ? "gray"
                  : "none",
            }}
          >
            <Text name={textThatChanges}/>
          </span>
        </section>
      </section>
    );
  }
}

export default LoginStocks;
