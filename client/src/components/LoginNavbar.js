import React from "react";

import LoginComponent from "./LoginComponent";
import Colors from "../constants/Colors";

const LoginNavbar = (props) => {
  return (
    <div>
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="nav-text">Already have an account?</span> Login
        </a>
        <ul id="login-dp" className="dropdown-menu dropdown-menu-right">
          <li>
            <div className="row">
              <div className="col-xl">
                <LoginComponent />
                <div className="bottom-login text-center">
                  New here ?{" "}
                  <a href="/signup">
                    <b style={{ color: Colors.primary }}>Join Us</b>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default LoginNavbar;
