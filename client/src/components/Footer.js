import React from "react";
import { useHistory } from "react-router-dom";

import Colors from "../constants/Colors";

const Footer = (props) => {
  const history = useHistory();

  return (
    <footer
      class="page-footer font-small"
      style={{
        backgroundColor: "#ccc",
        borderTopColor: "gray",
        borderTopWidth: 1,
        borderStyle: "solid",
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    >
      <div class="container">
        <ul class="list-unstyled text-center py-2">
          <li class="list-inline-item">
            <div class="mb-1">Register for free</div>
          </li>
          <li class="list-inline-item">
            <div className="center-col col">
              <a
                className="btn-radius btn"
                style={{
                  background: Colors.gradient,
                  backgroundColor: Colors.primary,
                  color: Colors.accent,
                  margin: 10,
                }}
                role="button"
                // href="/home"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign up!
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <span
          className="footer-link"
          onClick={() => {
            history.push("/");
          }}
          style={{ color: "blue" }}
        >
          {" "}
          WorkUrFreedom
        </span>
      </div>
    </footer>
  );
};

export default Footer;
