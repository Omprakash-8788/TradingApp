import React, { Component } from "react";
import "./Stocks.css";
import Text from "./Text";
import MainLogin from "../../MainLogin/MainLogin";
const textArray = [
  "Stocks",
  "Mutual",
  "SIP",
  "US Stocks",
  "IPO",
  "Future and Options",
];

class Stocks extends Component {
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
          Invest in
          <section
            className="spans"
            style={{
              color:
                textThatChanges === "IPO"
                  ? "red"
                  : "none" && textThatChanges === "Stocks"
                  ? "Purple"
                  : "none" && textThatChanges === "Future and Options"
                  ? "blue"
                  : "none" && textThatChanges === "US Stocks"
                  ? "orange"
                  : "none" && textThatChanges === "Mutual"
                  ? "pink"
                  : "none" && textThatChanges === "SIP"
                  ? "gray"
                  : "none",
            }}
          >
            <Text name={textThatChanges} />
          </section>
        </section>
        <section className="trust">
          <p>Trusted by Millions of Indians. Start investing today.</p>
          <section style={{ paddingTop: "20px" }}>
            <button className="stock-button">
              <span style={{ color: "white", fontSize: "18px" }}>
                <MainLogin value={"Get Started"} />
              </span>
            </button>
          </section>
        </section>
      </section>
    );
  }
}

export default Stocks;
