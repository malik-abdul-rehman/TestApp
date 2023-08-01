import React from "react";
import HumanBody from "./assets/humanBody.jpg";

const APP = () => {
  return (
    <div>
      <img width={800} src={HumanBody} alt="Human Body" useMap="#bodyMap" />
    </div>
  );
};

export default APP;
