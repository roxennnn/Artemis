import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import Colors from "../constants/Colors";

import {
  faBriefcase,
  faCog,
  faTools,
  faUtensils,
  faUser,
  faDice,
  faHammer,
  faGraduationCap,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "../services/auth.service";
import SurveyService from "../services/survey.service";

import CenterView from "../components/CenterView";

import avatar2 from "../images/avatar2.png";

const styles = {
  dropdownItem: {
    color: "black",
    textAlign: "left",
    fontSize: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-evenly",
    width: "100%",
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
                      width: "8%",
                      marginLeft: 20,
                      borderStyle: "solid",
                      borderColor: "white",
                      borderWidth: 1,
                    }}
                    className="rounded-pill nav-avatar"
                    alt=""
                    src={avatar2}
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-right"
                  style={{ backgroundColor: Colors.primary, opacity: 0.9 }}
                >
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
                            <div style={{ width: "25%" }}>
                              <FontAwesomeIcon
                                className="profile-dropdown-icon"
                                icon={faUser}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: "70%", marginRight: "5%" }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.profile}
                            </div>
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
                            <div style={{ width: "25%" }}>
                              <FontAwesomeIcon
                                className="profile-dropdown-icon"
                                icon={faComment}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: "70%", marginRight: "5%" }}>
                            {props.strings.ProfileListings &&
                                props.strings.ProfileListings.messages}
                            </div>
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
                              <div style={{ width: "25%" }}>
                                <FontAwesomeIcon
                                  className="profile-dropdown-icon"
                                  icon={faBriefcase}
                                  style={{ fontSize: 25 }}
                                />
                              </div>
                              <div style={{ width: "70%", marginRight: "5%" }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.occupations}
                              </div>
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
                              <div style={{ width: "25%" }}>
                                <FontAwesomeIcon
                                  className="profile-dropdown-icon"
                                  icon={faGraduationCap}
                                  style={{ fontSize: 25 }}
                                />
                              </div>
                              <div style={{ width: "70%", marginRight: "5%" }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.skills}
                              </div>
                            </span>
                          )}

                          <div className="dropdown-divider"></div>
                          <span
                            className="dropdown-item profile-dropdown-item"
                            style={styles.dropdownItem}
                            onClick={() => {
                              history.push({
                                pathname: "/profile",
                                state: {
                                  from: true,
                                  to: 4,
                                },
                              });
                            }}
                          >
                            <div style={{ width: "25%" }}>
                              <FontAwesomeIcon
                                className="profile-dropdown-icon"
                                icon={faCog}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: "70%", marginRight: "5%" }}>
                              {props.strings.ProfileListings &&
                                props.strings.ProfileListings.settings}
                            </div>
                          </span>
                          <span
                            className="dropdown-item logout-dropdown-item"
                            style={{ ...styles.dropdownItem, color: "#dc3545" }}
                            onClick={() => {
                              AuthService.logout();
                              localStorage.setItem("language", props.language);
                              history.push("/");
                              window.location.reload();
                            }}
                          >
                            <div style={{ width: "25%" }}>
                              <FontAwesomeIcon
                                icon={faSignOutAlt}
                                style={{ fontSize: 25 }}
                              />
                            </div>
                            <div style={{ width: "70%", marginRight: "5%" }}>
                              Logout
                            </div>
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
