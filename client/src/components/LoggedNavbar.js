import React from "react";
import { useHistory } from "react-router-dom";

import AuthService from "../services/auth.service";

import avatar from "../images/avatar.png";

const styles = {
  dropdownItem: {
    color: "black",
    textAlign: "left",
    fontSize: 20,
  },
};

const LoggedNavbar = (props) => {
  const history = useHistory();

  return (
    <div>
      <li className="nav-item dropdown">
        <a
          className="nav-link profile-nav-link"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          // style={{ borderStyle: "solid", borderWidth: 1 }}
        >
          <span style={{ fontSize: 20 }}>{props.username}</span>
          <img // No percentages... @TOFIX for a responsive design
            style={{
              width: 65,
              marginLeft: 20,
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: 1,
            }}
            className="rounded-pill nav-avatar"
            alt=""
            src={avatar}
          />
        </a>
        <ul className="dropdown-menu dropdown-menu-right">
          <li>
            <div className="row">
              <div className="col-xl">
                <div className="bottom-login text-center">
                  <span
                    className="dropdown-item profile-dropdown-item"
                    style={styles.dropdownItem}
                    onClick={() => {
                      history.push({
                        pathname: "/profile",
                        state: {
                          from: true,
                          to: 0,
                        },
                      });
                      // window.location.reload();
                    }}
                  >
                    Profile
                  </span>
                  <span
                    className="dropdown-item profile-dropdown-item"
                    style={styles.dropdownItem}
                    onClick={() => {
                      history.push({
                        pathname: "/profile",
                        state: {
                          from: true,
                          to: 1,
                        },
                      });
                    }}
                  >
                    Surveys
                  </span>
                  <span
                    className="dropdown-item profile-dropdown-item"
                    style={styles.dropdownItem}
                    onClick={() => {
                      history.push({
                        pathname: "/profile",
                        state: {
                          from: true,
                          to: 2,
                        },
                      });
                    }}
                  >
                    Job matchings
                  </span>
                  <span
                    className="dropdown-item profile-dropdown-item"
                    style={styles.dropdownItem}
                    onClick={() => {
                      history.push({
                        pathname: "/profile",
                        state: {
                          from: true,
                          to: 3,
                        },
                      });
                    }}
                  >
                    My skills
                  </span>

                  <div className="dropdown-divider"></div>
                  <span
                    className="dropdown-item profile-dropdown-item"
                    style={styles.dropdownItem}
                    onClick={() => {
                      history.push("/todo");
                    }}
                  >
                    Settings
                  </span>
                  <span
                    className="dropdown-item logout-dropdown-item"
                    style={{ ...styles.dropdownItem, color: "#dc3545" }}
                    onClick={() => {
                      AuthService.logout();
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    Logout
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

export default LoggedNavbar;
