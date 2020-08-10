import React, { useState, useEffect } from "react";

// Profile components
import DoSurveyItem from "./DoSurveyItem";
import SurveysCompleted from "./SurveysCompleted";

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
    <div style={{width: "100%"}}>
      <h3>Fill the surveys!</h3>
      <div style={{ fontSize: 22 }}>
        Here, you can find the three surveys that will help us create a match
        with your ideal job. Fill all of them in and then see discover what your
        next steps are.
      </div>
      <div id="surveys">
        <DoSurveyItem
          title={props.strings.Profile && props.strings.Profile.ProfileSurveys.demographics}
          href="demographic-survey"
          done={props.currentUser.demographics_done}
          timestamp={props.currentUser.demographics_timestamp}
        />
        <DoSurveyItem
          title={props.strings.Profile && props.strings.Profile.ProfileSurveys.yourSkills}
          href="skills-survey"
          done={props.currentUser.skills_done}
          timestamp={props.currentUser.skills_timestamp}
        />
        <DoSurveyItem
          title={props.strings.Profile && props.strings.Profile.ProfileSurveys.yourExperience}
          href="experience-survey"
          done={props.currentUser.experience_done}
          timestamp={props.currentUser.experience_timestamp}
        />
      </div>
      <SurveysCompleted surveysDone={surveysDone} strings={props.strings}/>
    </div>
  );
};

export default ProfileSurveys;
