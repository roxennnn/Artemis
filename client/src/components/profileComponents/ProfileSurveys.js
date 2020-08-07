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

export default ProfileSurveys;