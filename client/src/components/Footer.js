import React from "react";
import { useHistory } from "react-router-dom";

import Colors from "../constants/Colors";

// Fontawesome
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          class="container"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <small>Copyright &copy; WorkUrFreedom</small>
        </div>
        <div
          class="container"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "10%",
          }}
        >
          <FontAwesomeIcon
            className="footer-icon"
            icon={faFacebookF}
            title="Facebook"
            style={{ cursor: "pointer" }}
            size="lg"
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faTwitter}
            title="Twitter"
            style={{ marginLeft: "5%", cursor: "pointer" }}
            size="lg"
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faInstagram}
            title="Instagram"
            style={{ marginLeft: "5%", cursor: "pointer" }}
            size="lg"
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;
