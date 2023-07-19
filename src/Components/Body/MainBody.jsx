import React from "react";
import Service from "../Services/Service";
import Body from "./Body";
import KeepLearning from "./KeepLearning";
import Background from "../BackgroundImage/Background";
import Investor from "./Investor/Investor";
import Indexs from "../Invest Anywhere";
import Getintouch from "../Invest Anywhere/Getintouch";

const MainBody = () => {
  return (
    <div>
      <Body />
      <Service />
      <Background />
      <KeepLearning />
      <Investor />
      <Indexs />
      <Getintouch />
    </div>
  );
};

export default MainBody;
