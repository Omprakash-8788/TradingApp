import React, { useState } from "react";
import { questions } from "./Api";
import MyAccordian from "./MyAccordian";
import "./Accordian.css";

const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <div className="accordian-container">
      <section>
        <h1>Frequently Asked Questions</h1>
        <section className="accordian">
          {data.map((ele) => {
            const { id } = ele;
            return <MyAccordian key={id} {...ele} />;
          })}
        </section>
      </section>
    </div>
  );
};

export default Accordian;
