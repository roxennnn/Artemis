import React, { useState } from "react";

import ProfileOne from "../components/ProfileOne";
import ProfileTwo from "../components/ProfileTwo";
import ProfileThree from "../components/ProfileThree";

import CenterView from "../components/CenterView";

import "../css/ProfilePage.css";
import laura from "../images/laura.png";
import avatar from "../images/avatar.png";

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

const ActionListItem = (props) => {
  return (
    <div
      className="action-list-item"
      style={{ ...styles.actionListItem, ...props.style }}
    >
      <span style={styles.actionListText}>{props.title}</span>
    </div>
  );
};

const ProfilePage = (props) => {
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
              style={{ width: "38%", marginBottom: "5%", marginTop: "3%" }}
              class="rounded-pill"
              src={avatar}
            />
            <div
              style={{
                color: Colors.accent,
                fontSize: 28,
                // fontWeight: "bold",
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
            {/* <div className="action-list-item" style={{...styles.actionListItem, borderTopWidth: 3, borderTopStyle: "solid"}}><span style={styles.actionListText}>Surveys</span></div>
            <div className="action-list-item" style={styles.actionListItem}><span style={styles.actionListText}>Next Steps</span></div> */}
            <ActionListItem title="Surveys" style={styles.firstListItem} />
            <ActionListItem title="Forum" />
            <ActionListItem title="Next Steps" />
          </div>
        </div>

        <div
          id="right-box"
          className="some-info"
          style={{ ...styles.redBox, ...styles.someInfo }}
        >
          <div style={styles.rowBox}>
            <div>
              <div>Gain your independence by finding a job!</div>
              <div>
                This platform will analyse your skills and match your profile
                with the best fitting jobs
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
          <div style={styles.redBox}>
            <div id="survey-progressbar">
              <h2>Surveys completed:</h2>
              <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
                <ProgressBar
                  text="2/3"
                  percentage="66%"
                  color={Colors.primary}
                  gradient={Colors.gradient}
                  textStyle={{ color: Colors.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// return (
//   <div>
//     <button class="btn btn-warning"
//       onClick={() => {
//         setWhich((which+1)%3);
//       }}
//     >
//       Change Profile Layout
//     </button>
//     <hr />
//     {which === 0 && <ProfileOne />}
//     {which === 1 && <ProfileTwo />}
//     {which === 2 && <ProfileThree />}
//   </div>
// );
