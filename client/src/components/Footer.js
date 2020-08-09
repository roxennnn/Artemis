import React from "react";
import { useHistory } from "react-router-dom";

import Colors from "../constants/Colors";

const Footer = (props) => {
  const history = useHistory();

  return (
    <div
      class="footer"
      style={{
        flexShrink: 0,
      }}
    >
      <hr />
      <div class="container text-center">
        <small>Copyright &copy; WorkUrFreedom</small>
      </div>
      <br />
    </div>
  );
};

export default Footer;
