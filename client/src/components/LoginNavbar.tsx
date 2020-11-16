import React from "react";
import { useHistory } from "react-router-dom";

import LoginComponent from "./LoginComponent";
import Colors from "../constants/Colors";

const LoginNavbar = (props) => {
  const history = useHistory();
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
          <span className="nav-text">
            {props.strings.NavComponent &&
              props.strings.NavComponent.LoginNavbar.loginQuestion}
          </span>{" "}
          Login
        </a>
        <ul id="login-dp" className="dropdown-menu dropdown-menu-right">
          <li>
            <div className="row">
              <div className="col-xl">
                <LoginComponent
                  strings={props.strings}
                  language={props.language}
                  history={history}
                />
                <div className="bottom-login text-center">
                  {props.strings.NavComponent &&
                    props.strings.NavComponent.LoginNavbar.newHere}{" "}
                  <span
                    onClick={() => {
                      localStorage.setItem("language", props.language);
                      history.push("/signup");
                    }}
                  >
                    <b
                      style={{ color: Colors.primary }}
                      className="hover-underline"
                    >
                      {props.strings.NavComponent &&
                        props.strings.NavComponent.LoginNavbar.joinUs}
                    </b>
                  </span>
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
