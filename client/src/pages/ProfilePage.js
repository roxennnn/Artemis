import React, { useState, useEffect } from "react";

import "../css/ProfilePage.css";

// images
import laura from "../images/laura.png";
import avatar from "../images/avatar.png";
import survey from "../images/survey.png";
import survey_done from "../images/survey_done.png";

// Fontawesome
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Colors from "../constants/Colors";

import ProgressBar from "../components/ProgressBar";

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
    <div style={styles.redBox}>
      <div id="survey-progressbar">
        <h2>Surveys completed:</h2>
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
          <ProgressBar
            text="1/3"
            percentage="33%"
            color={Colors.primary}
            gradient={Colors.gradient}
            textStyle={{ color: Colors.accent }}
          />
        </div>
      </div>
    </div>
  );
};

const DoSurveyItem = (props) => {
  return (
    <div class="container" style={{ margin: 30 }}>
      <div
        class="row margin-children  delete-a-style"
        style={{ display: "flex", alignItems: "center", padding: "1%" }}
      >
        <a className="hover-border" href={`profile/${props.href}`} style={{ width: "30%" }}>
          <span>
            <img
              style={{
                width: "25%",
              }}
              src={props.done ? survey_done : survey}
            />
            <span style={{ marginLeft: "5%" }}>{props.title}</span>
          </span>
        </a>
        {/* <i class="far fa-redo-alt"></i> */}
        {props.done && (
          <a href="" style={{ width: "3%" }}>
            <FontAwesomeIcon icon={faRedoAlt} color="#3b5998" />
          </a>
        )}
        {props.done && (
          <div style={{ marginLeft: "5%" }}>
            Last time taken at {props.timestamp}
          </div>
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
      <SurveysCompleted />
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
    </div>
  );
};

//showValue = 1
const ProfileSurveys = (props) => {
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
          done={false}
          timestamp="06/09/19 18:12"
        />
        <DoSurveyItem
          title="Your Skills"
          href="-survey"
          done={false}
          timestamp="06/09/19 18:12"
        />
        <DoSurveyItem
          title="Your experience"
          href="experience-survey"
          done={false}
          timestamp="06/09/19 18:12"
        />
      </div>
      <SurveysCompleted />
    </div>
  );
};

const ProfilePage = (props) => {
  const [showValue, setShowValue] = useState(0);
  // 0: ProfileIntro
  // 1: ProfileSurveys
  // 2: ProfileMatches (?)

  useEffect(() => {
    if (props.location.state && props.location.state.from) {
      setShowValue(1);      
    }
  }, []);

  const onClickActionListHandler = (value) => {
    setShowValue(value);
  };

  const onGoToSurveys = () => {
    setShowValue(1);
  };

  return (
    <div
      className="my-container"
      style={{ width: "100%", height: "100%", ...styles.redBox }}
    >
      <div className="my-row" style={{ display: "flex", flexDirection: "row" }}>
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
              class="rounded-pill"
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
              Lauretta96
            </div>
            <button
              type="button"
              class="btn btn-outline-light"
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
              title="Next Steps"
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
          {showValue === 0 && <ProfileIntro onClick={onGoToSurveys} />}
          {showValue === 1 && <ProfileSurveys />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
