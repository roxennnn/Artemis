import React from "react";

import CenterView from "./CenterView";

const Unauthorised = (props) => {
  return (
    <CenterView middle={8} sides={2}>
      <h1 style={{textAlign: "center"}}>401 Unauthorised Access!</h1>
    </CenterView>
  );
};

export default Unauthorised;
