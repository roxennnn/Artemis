import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Unauthorised from "../components/Unauthorised";

import Colors from "../constants/Colors";
import CenterView from "../components/CenterView";

import SurveyService from "../services/survey.service";

// Profile components
import ActionListItem from "../components/profileComponents/ActionListItem";
import ProfileIntro from "../components/profileComponents/ProfileIntro";
import ProfileSurveys from "../components/profileComponents/ProfileSurveys";
import ProfileMatchings from "../components/profileComponents/ProfileMatchings";
import ProfileSkills from "../components/profileComponents/ProfileSkills";

import "../css/ProfilePage.css";

// images
import avatar from "../images/avatar.png";


const styles = {
  redBox: {
    borderWidth: 4,
    borderColor: "red",
    // borderStyle: "solid",
  },
  userBox: {
    background: Colors.gradient,
    backgroundColor: Colors.primary,
    borderRadius: 20
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

const ProfilePage = (props) => {
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

  // For debugging
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  const [showValue, setShowValue] = useState(0);
  // 0: ProfileIntro
  // 1: ProfileSurveys
  // 2: ProfileMatchings

  useEffect(() => {
    if (props.location.state && props.location.state.from) {
      setShowValue(props.location.state.to);
    }
  }, [props.location.state]); // remove the dependecy??

  const onClickActionListHandler = (value) => {
    setShowValue(value);
  };

  const onGoToSurveys = () => {
    setShowValue(1);
  };

  const onGoToMatchings = () => {
    setShowValue(2);
  };

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
          {currentUser ? (
            <div
              className="my-container"
              style={{ width: "100%", height: "100%", ...styles.redBox }}
            >
              <div
                className="my-row"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  id="left-box"
                  style={{ width: "25%", height: "100%", ...styles.redBox }}
                >
                  <div
                    className="user-box"
                    style={{
                      ...styles.userBox,
                      ...styles.redBox,
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      padding: "3%",
                      margin: "2%",
                      width: "95%",
                      height: "20%",
                    }}
                  >
                    <img
                      style={{
                        width: "38%",
                        marginBottom: "5%",
                        marginTop: "3%",
                        borderStyle: "solid",
                        borderColor: "white",
                      }}
                      className="rounded-pill profile-page-avatar"
                      alt=""
                      src={avatar}
                      // src="https://bootdey.com/img/Content/avatar/avatar9.png"
                    />
                    <div
                      style={{
                        color: Colors.accent,
                        fontSize: 28,
                        marginBottom: "3%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {currentUser ? currentUser.username : ""}
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => {
                        props.history.push("/todo");
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10%",
                        marginBottom: "2%",
                        fontSize: 22,
                      }}
                    >
                      Manage Profile
                    </button>
                  </div>

                  <div
                    id="actions-list"
                    style={{
                      width: "95%",
                      ...styles.redBox,
                      fontSize: 22,
                      margin: "2%",
                      marginTop: "15%",
                    }}
                  >
                    <ActionListItem
                      title="Summary"
                      style={styles.firstListItem}
                      value={0}
                      current={showValue === 0}
                      onClick={onClickActionListHandler}
                    />
                    <ActionListItem
                      title="Surveys"
                      value={1}
                      current={showValue === 1}
                      onClick={onClickActionListHandler}
                    />
                    {currentUser.skills_done && (
                      <ActionListItem
                        title="Job matchings"
                        value={2}
                        current={showValue === 2}
                        onClick={onClickActionListHandler}
                      />
                    )}
                    {currentUser.skills_done && (
                      <ActionListItem
                        title="My skills"
                        value={3}
                        current={showValue === 3}
                        onClick={onClickActionListHandler}
                      />
                    )}
                  </div>
                </div>

                <div
                  id="right-box"
                  className="some-info"
                  style={{ ...styles.redBox, ...styles.someInfo }}
                >
                  {showValue === 0 && (
                    <ProfileIntro
                      currentUser={currentUser}
                      onGoToSurveys={onGoToSurveys}
                    />
                  )}
                  {showValue === 1 && (
                    <ProfileSurveys currentUser={currentUser} />
                  )}
                  {showValue === 2 && (
                    <ProfileMatchings />
                  )}
                  {showValue === 3 && (
                    <ProfileSkills />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Unauthorised />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
