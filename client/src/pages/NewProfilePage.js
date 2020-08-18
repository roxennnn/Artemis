import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import CenterView from "../components/CenterView";
import Colors from "../constants/Colors";

import {
  faMapMarkerAlt,
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

import SurveyService from "../services/survey.service";

import avatar2 from "../images/avatar2.png";

const styles = {
  redBox: {
    borderWidth: 2,
    borderColor: "red",
    // borderStyle: "solid",
  },
  userBox: {
    background: Colors.gradient,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  someInfo: {
    width: "90%",
    paddingLeft: "3%",
  },
  rowBox: {
    display: "flex",
    flexDirection: "row",
  },
  actionListItem: {
    borderColor: Colors.primary,
    borderBottomoWidth: 1,
    borderBottomStyle: "solid",
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
  },
  firstListItem: {
    borderTopWidth: 3,
    borderTopStyle: "solid",
  },
  actionListText: {
    marginLeft: "3%",
  },
};

const IconBox = (props) => {
  return (
    <div
      // className="icon-box"
      className={props.active ? "icon-box icon-box-active" : "icon-box"}
      style={{
        // borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 10,
        padding: 30,
        margin: 5,
        // height: 100,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...props.style,
      }}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="icon-hover"
        style={{ fontSize: 28 }}
      />
      <div style={{ textAlign: "center" }}>{props.title}</div>
    </div>
  );
};

const NewProfilePage = (props) => {
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
    <div style={{ margin: "2%" }}>
      {loading ? (
        <CenterView middle={8} sides={2}>
          <div style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        </CenterView>
      ) : (
        <div>
          {currentUser && (
            <div
              className="my-container"
              style={{ width: "100%", ...styles.redBox }}
            >
              <div
                className="my-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  id="left-box"
                  style={{
                    width: "25%",
                    ...styles.redBox,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      height: 700,

                      borderStyle: "solid",
                      borderColor: "#ccc",
                      borderWidth: 1,
                      borderRadius: 10,
                    }}
                  >
                    <img
                      style={{
                        width: "38%",
                        marginTop: "10%",
                        borderStyle: "solid",
                        borderColor: `${Colors.primary} ${Colors.primary} white ${Colors.primary}`,
                        borderWidth: 10,
                        padding: 3,
                        cursor: "pointer",
                      }}
                      className="rounded-pill profile-page-avatar"
                      alt=""
                      title="Change avatar"
                      src={avatar2}
                      // src="https://bootdey.com/img/Content/avatar/avatar9.png"
                    />
                    <div style={{ fontSize: 24 }}>
                      <b>{currentUser ? currentUser.username : ""}</b>
                    </div>
                    <br />
                    <div>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        color="#3b5998"
                        size="md"
                      />
                      <span style={{ marginLeft: 5 }}>Colombia, Bogotà</span>
                      <br />
                    </div>
                    <hr
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    />
                    <br />
                    <div style={{ marginTop: 10}}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <IconBox
                          title="Profile"
                          icon={faUser}
                          active={true}
                          style={{ width: "42%" }}
                        />
                        <IconBox
                          title="Messages"
                          icon={faComment}
                          style={{ width: "42%" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <IconBox
                          title="Occupations"
                          icon={faBriefcase}
                          style={{ width: "42%" }}
                        />
                        <IconBox
                          title="Skills"
                          icon={faGraduationCap}
                          style={{ width: "42%" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <IconBox
                          title="Settings"
                          icon={faCog}
                          faW
                          style={{ width: "42%" }}
                        />
                        <IconBox
                          title="Logout"
                          icon={faSignOutAlt}
                          style={{ width: "42%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* left-box */}
                <div
                  id="right-box"
                  className="some-info"
                  style={{ ...styles.redBox, ...styles.someInfo }}
                >
                  ciao
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewProfilePage;
