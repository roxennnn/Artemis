import React from "react";

import infographic1 from "../../images/en/howtouse_citizen.png";
import infographic2 from "../../images/en/howtouse_organisation.png";
import Colors from "../../constants/Colors";

const HowToUseItPage = (props) => {
  return (
    <div style={{ width: "100%", backgroundColor: Colors.infographics2 }}>
      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          paddingTop: "3%"
        }}
      >
        {/* <div style={{ height: 100 }}></div> */}
        <img
          style={{
            width: "100%",
            marginBottom: "8%",
          }}
          alt=""
          src={infographic1}
        />
        {/* <div style={{backgroundColor: Colors.infographics, height: 100}}></div> */}
        <img
          style={{
            width: "100%",
          }}
          alt=""
          src={infographic2}
        />
        <div style={{ height: 100 }}></div>
      </div>
    </div>
  );
};

export default HowToUseItPage;
