import React, { useState, useEffect, useContext } from "react";
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

// Multilingual
import { LanguageContext } from "../languages/LanguageProvider";

// images
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";

const styles = {
  redBox: {
    borderWidth: 4,
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

const ProfilePage = (props) => {
  const { strings, language, updateLanguage } = useContext(LanguageContext);

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

  const fetchLanguage = async () => {
    const lang = await localStorage.getItem("language");
    updateLanguage(lang);
  };

  useEffect(() => {
    fetchLanguage();
  }, []);

  const [showValue, setShowValue] = useState(0);
  // 0: ProfileIntro
  // 1: ProfileSurveys
  // 2: ProfileMatchings
  // 3: ProfileSkills

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
                      src={avatar2}
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
                      {strings.Profile && strings.Profile.manageProfile}
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
                      title={
                        strings.ProfileListings &&
                        strings.ProfileListings.summary
                      }
                      style={styles.firstListItem}
                      value={0}
                      current={showValue === 0}
                      onClick={onClickActionListHandler}
                    />
                    <ActionListItem
                      title={
                        strings.ProfileListings &&
                        strings.ProfileListings.surveys
                      }
                      value={1}
                      current={showValue === 1}
                      onClick={onClickActionListHandler}
                    />
                    {currentUser.skills_done && (
                      <ActionListItem
                        title={
                          strings.ProfileListings &&
                          strings.ProfileListings.jobMatchings
                        }
                        value={2}
                        current={showValue === 2}
                        onClick={onClickActionListHandler}
                      />
                    )}
                    {currentUser.skills_done && (
                      <ActionListItem
                        title={
                          strings.ProfileListings &&
                          strings.ProfileListings.mySkills
                        }
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
                      strings={strings}
                    />
                  )}
                  {showValue === 1 && (
                    <ProfileSurveys
                      currentUser={currentUser}
                      strings={strings}
                    />
                  )}
                  {showValue === 2 && (
                    <ProfileMatchings language={language} strings={strings} />
                  )}
                  {showValue === 3 && <ProfileSkills language={language} />}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
