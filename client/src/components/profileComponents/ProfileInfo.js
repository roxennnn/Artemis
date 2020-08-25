import React, { useState } from "react";

import SurveyCard from "./SurveyCard";

// showValue = 0
const ProfileInfo = (props) => {
  const [demographicDone, setDemographicDone] = useState(
    props.currentUser.demographics_done
  );
  const [domesticDone, setDomesticDone] = useState(
    props.currentUser.experience_done
  );
  const [skillsDone, setSkillsDone] = useState(props.currentUser.skills_done);

  const setDoneFalse = (href) => {
    const survey = href.split("-survey")[0];
    if (survey === "demographic") {
      setDemographicDone(false);
    } else if (survey === "domestic") {
      setDomesticDone(false);
    } else if (survey === "skills") {
      setSkillsDone(false);
    } else {
      console.log("INVALID SURVEY");
    }
  };

  return (
    <div>
      <img
        alt=""
        src={require(`../../images/${props.language}/Profile/profileBanner.png`)}
        style={{
          width: "100%",
          borderRadius: 10,
          marginBottom: "5%",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DemographicsSurvey.title
          }
          active={true}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.DemographicsSurvey.description
          }
          href="demographic-survey"
          done={demographicDone}
          timestamp={props.currentUser.demographics_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "1.5%" }}
          setDoneFalse={setDoneFalse}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.title
          }
          active={demographicDone || domesticDone}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.description
          }
          href="skills-survey"
          done={skillsDone}
          timestamp={props.currentUser.skills_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "3%", marginRight: "3%" }}
          setDoneFalse={setDoneFalse}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.ExperienceSurvey.title
          }
          active={(demographicDone && skillsDone) || domesticDone}
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.ExperienceSurvey.description
          }
          href="domestic-survey"
          done={domesticDone}
          timestamp={props.currentUser.experience_timestamp}
          history={props.history}
          cardStyle={{ marginRight: "1.5%" }}
          setDoneFalse={setDoneFalse}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
