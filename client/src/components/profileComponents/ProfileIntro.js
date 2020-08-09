import React, { useState, useEffect } from "react";

import Colors from "../../constants/Colors";

// Profile components
import SurveysCompleted from "./SurveysCompleted";

// images
import laura from "../../images/laura.png";


const styles = {
  rowBox: {
    display: "flex",
    flexDirection: "row",
  },
};

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
    <div style={{width: "100%"}}>
      <div style={styles.rowBox}>
        <div>
          <h3>Gain your independence by finding a job!</h3>
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
      <br />
      <SurveysCompleted surveysDone={surveysDone} rightButton={props.onGoToSurveys} />
      <br/>
      <h4>Top matching:</h4>
    </div>
  );
};

export default ProfileIntro;