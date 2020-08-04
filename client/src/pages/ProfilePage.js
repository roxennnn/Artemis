import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ProgressBar from "../components/ProgressBar";
import Unauthorised from "../components/Unauthorised";

import Colors from "../constants/Colors";
import SurveyService from "../services/survey.service";

import "../css/ProfilePage.css";

// images
import laura from "../images/laura.png";
import avatar from "../images/avatar.png";
import survey from "../images/survey.png";
import survey_done from "../images/survey_done.png";

// Fontawesome
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CenterView from "../components/CenterView";

const styles = {
  redBox: {
    borderWidth: 4,
    borderColor: "red",
    // borderStyle: "solid",
  },
  userBox: {
    background: Colors.gradient,
    backgroundColor: Colors.primary,
  },
  someInfo: {
    width: "70%",
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

// Utility components

const ActionListItem = (props) => {
  return (
    <div
      className="action-list-item"
      style={{ ...styles.actionListItem, ...props.style }}
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      <span style={styles.actionListText}>{props.title}</span>
    </div>
  );
};

const SurveysCompleted = (props) => {
  return (
    <div style={{ ...styles.redBox, ...props.style }}>
      <div id="survey-progressbar">
        <h2>Surveys completed:</h2>
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
          <ProgressBar
            text={`${props.surveysDone}/3`}
            percentage={`${(props.surveysDone / 3) * 100}%`}
            color={Colors.primary}
            gradient={Colors.gradient}
            textStyle={{ color: Colors.accent }}
            insideStyle={
              props.surveysDone === 0
                ? {
                    width: "100%",
                    background: "white",
                    backgroundColor: "white",
                  }
                : {}
            }
            textStyle={
              props.surveysDone === 0
                ? {
                    color: Colors.primary,
                  }
                : {
                    color: "white",
                  }
            }
          />
        </div>
      </div>
    </div>
  );
};

const DoSurveyItem = (props) => {
  return (
    <div className="container" style={{ margin: 30 }}>
      <div
        className="row margin-children  delete-a-style"
        style={{ display: "flex", alignItems: "center", padding: "1%" }}
      >
        <a
          className={props.done ? "" : "hover-border"}
          href={props.done ? undefined : `profile/${props.href}`}
          style={props.done ? { width: "30%", padding: 13 } : { width: "30%" }}
        >
          <span>
            <img
              style={{
                width: "25%",
              }}
              alt=""
              src={props.done ? survey_done : survey}
            />
            <span style={{ marginLeft: "5%" }}>{props.title}</span>
          </span>
        </a>
        {/* <i className="far fa-redo-alt"></i> */}
        {props.done && (
          <a
            href={`profile/${props.href}`}
            style={{ width: "3%" }}
            title="Redo the survey"
          >
            <FontAwesomeIcon icon={faRedoAlt} color="#3b5998" />
          </a>
        )}
        {props.done && (
          <div style={{ marginLeft: "5%" }}>Taken at: {props.timestamp}</div>
        )}
      </div>
    </div>
  );
};

// *********************
// showValue components
// *********************

// showValue = 0
const ProfileIntro = (props) => {
  const [surveysDone, setSurveysDone] = useState(0);
  useEffect(() => {
    let counter = 0;
    if (props.currentUser) {
      if (props.currentUser.demographics_done) {
        counter++;
      }
      if (props.currentUser.experience_done) {
        counter++;
      }
      if (props.currentUser.skills_done) {
        counter++;
      }
    }
    setSurveysDone(counter);
  }, [props.currentUser]);

  return (
    <div>
      <div style={styles.rowBox}>
        <div>
          <div>Gain your independence by finding a job!</div>
          <div>
            This platform will analyse your skills and match your profile with
            the best fitting jobs
          </div>
          <div>Just follow these steps:</div>
          <div id="steps-list" style={{ overflow: "visible" }}>
            <ol>
              <li>Fill in all the 3 surveys,</li>
              <li>Go to the section "Next Steps", and</li>
              <li>Start applying!</li>
            </ol>
          </div>
        </div>
        <div id="laura-img" style={{ width: "40%" }}>
          <img src={laura} alt="" />
        </div>
      </div>
      <SurveysCompleted surveysDone={surveysDone} />
      <div
        className="col"
        style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}
      >
        <a
          className="btn-radius2 btn"
          style={{
            background: Colors.gradient,
            backgroundColor: Colors.primary,
            color: Colors.accent,
            marginRight: "4%",
          }}
          role="button"
          onClick={props.onClick}
        >
          Go to surveys -{">"}
        </a>
      </div>
      <h2>Matchings:</h2>
    </div>
  );
};

//showValue = 1
const ProfileSurveys = (props) => {
  const [surveysDone, setSurveysDone] = useState(0);
  useEffect(() => {
    let counter = 0;
    if (props.currentUser.demographics_done) {
      counter++;
    }
    if (props.currentUser.experience_done) {
      counter++;
    }
    if (props.currentUser.skills_done) {
      counter++;
    }
    setSurveysDone(counter);
  }, [props.currentUser]);

  return (
    <div>
      <h1>Fill the surveys!</h1>
      <div>
        Here, you can find the three surveys that will help us create a match
        with your ideal job. Fill all of them in and then see discover what your
        next steps are.
      </div>
      <div id="surveys">
        <DoSurveyItem
          title="Demographics"
          href="demographic-survey"
          done={props.currentUser.demographics_done}
          timestamp={props.currentUser.demographics_timestamp}
        />
        <DoSurveyItem
          title="Your Skills"
          href="skills-survey"
          done={props.currentUser.skills_done}
          timestamp={props.currentUser.skills_timestamp}
        />
        <DoSurveyItem
          title="Your experience"
          href="experience-survey"
          done={props.currentUser.experience_done}
          timestamp={props.currentUser.experience_timestamp}
        />
      </div>
      <SurveysCompleted
        surveysDone={surveysDone}
        style={{ marginBottom: "5%" }}
      />
    </div>
  );
};

const ProfilePage = (props) => {
  const [authorisationTimer, setAuthorisationTimer] = useState(true);

  useEffect(() => {
    // After 5 seconds, remove the spinner and say 'Unauthorised'
    const timer = setTimeout(() => {
      setAuthorisationTimer(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [currentUser, setCurrentUser] = useState(); // data of logged user

  const asyncQueryProfileData = async () => {
    const user = await SurveyService.queryProfileData();
    if (user) {
      setCurrentUser(user.user);
    }
  };

  useEffect(() => {
    asyncQueryProfileData();
  }, []);

  // For debugging
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  const [showValue, setShowValue] = useState(0);
  // 0: ProfileIntro
  // 1: ProfileSurveys
  // 2: ProfileMatches

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

  return (
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
                  onClick={onClickActionListHandler}
                />
                <ActionListItem
                  title="Surveys"
                  value={1}
                  onClick={onClickActionListHandler}
                />
                {/* <ActionListItem title="Forum" /> */}
                <ActionListItem
                  title="Job matchings"
                  value={2}
                  onClick={onClickActionListHandler}
                />
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
                  onClick={onGoToSurveys}
                />
              )}
              {showValue === 1 && <ProfileSurveys currentUser={currentUser} />}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {authorisationTimer ? (
            <CenterView middle={8} sides={2}>
              <div style={{ textAlign: "center" }}>
                <Spinner animation="border" variant="primary" />
              </div>
            </CenterView>
          ) : (
            <Unauthorised />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
