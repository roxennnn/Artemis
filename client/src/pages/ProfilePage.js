import React, { useState } from "react";

import ProfileOne from "../components/ProfileOne";
import ProfileTwo from "../components/ProfileTwo";
import ProfileThree from "../components/ProfileThree";

import "../css/ProfilePage.css";
import Colors from "../constants/Colors";

const styles = {
  redBox: {
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    // margin:
  },
  userBox: {
    backgroundColor: Colors.primary,
    padding: 5,
    width: "35%",
  },
  someInfo: {
    width: "60%",
  },
  rowBox: {
    display: "flex",
    flexDirection: "row",
  },
};

const ProfilePage = (props) => {
  return (
    <div className="my-container" style={{ width: "100%", height: "100%" }}>
      <div className="my-row" style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="user-box"
          style={{ ...styles.redBox, ...styles.userBox }}
        >
          {/* place user box here*/}
        </div>
        <div
          className="some-info"
          style={{ ...styles.redBox, ...styles.someInfo }}
        >
          <div>Gain your independence by finding a job!</div>
          <div>
            This platform will analyse your skills and match your profile with
            the best fitting jobs
          </div>
          <div>Just follow these steps:</div>
          <div style={styles.rowBox}>
            <div id="steps-list" style={{width: "50%"}}>
              <ol>
                <li>Fill in all the 3 surveys,</li>
                <li>Go to the section "Next Steps", and</li>
                <li>Start applying!</li>
              </ol>
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
