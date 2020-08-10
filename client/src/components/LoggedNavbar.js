import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import AuthService from "../services/auth.service";
import SurveyService from "../services/survey.service";

import CenterView from "../components/CenterView";

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
  const [currentUser, setCurrentUser] = useState(); // data of logged user
  const [loading, setLoading] = useState(false);

  const asyncQueryProfileData = async () => {
    const user = await SurveyService.queryProfileData();
    if (user) {
      setCurrentUser(user.user);
    }
  };
  useEffect(() => {
    setLoading(true);
    asyncQueryProfileData();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
    }
  }, [currentUser]);

  return (
    <div>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div>
          {currentUser && (
            <div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link profile-nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 18 }}>{currentUser.username}</span>
                  <img // No percentages... @TOFIX for a responsive design
                    style={{
                      width: "15%",
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
                            {props.strings.ProfileListings &&
                              props.strings.ProfileListings.profile}
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
                            {props.strings.ProfileListings &&
                              props.strings.ProfileListings.surveys}
                          </span>
                          {currentUser.skills_done && (
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
                              {props.strings.ProfileListings &&
                              props.strings.ProfileListings.jobMatchings}
                            </span>
                          )}
                          {currentUser.skills_done && (
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
                              {props.strings.ProfileListings &&
                              props.strings.ProfileListings.mySkills}
                            </span>
                          )}

                          <div className="dropdown-divider"></div>
                          <span
                            className="dropdown-item profile-dropdown-item"
                            style={styles.dropdownItem}
                            onClick={() => {
                              history.push("/todo");
                            }}
                          >
                            {props.strings.ProfileListings &&
                              props.strings.ProfileListings.settings}
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
          )}
        </div>
      )}
    </div>
  );
};

export default LoggedNavbar;
