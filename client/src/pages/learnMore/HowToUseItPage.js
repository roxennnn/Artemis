import React from "react";

import infographic1 from "../../images/en/howtouse_citizen.png";
import infographic2 from "../../images/en/howtouse_organisation.png";

const HowToUseItPage = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{
          width: "100%",
        }}
        alt=""
        src={infographic1}
      />
      <img
        style={{
          width: "100%",
        }}
        alt=""
        src={infographic2}
      />
    </div>
  );
};

export default HowToUseItPage;
