import React from "react";

import Colors from "../constants/Colors";

import home1 from "../images/en/Home1.png";
import homeCitizen from "../images/en/HomeCitizen.png";
import homeOrganisation from "../images/en/HomeOrganisation.png";

const LandingPage = (props) => {
  return (
    <div style={{backgroundColor: Colors.infographics}}>
      <img
        style={{
          width: "100%",
        }}
        alt=""
        src={home1}
      />
      <div>
      <img
        style={{
          width: "40%",
          margin: "5%"
        }}
        alt=""
        src={homeCitizen}
      />
      <img
        style={{
          width: "40%",
          margin: "5%"
        }}
        alt=""
        src={homeOrganisation}
      />
      </div>
    </div>
  );
};

export default LandingPage;
