import React from "react";

import SurveyCard from "./SurveyCard";

// showValue = 0
const ProfileInfo = (props) => {
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
          done={props.currentUser.demographics_done}
          timestamp={props.currentUser.demographics_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "1.5%" }}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.title
          }
          active={
            props.currentUser.demographics_done ||
            props.currentUser.experience_done
          }
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.SkillsSurvey.description
          }
          href="skills-survey"
          done={props.currentUser.skills_done}
          timestamp={props.currentUser.skills_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "3%", marginRight: "3%" }}
        />
        <SurveyCard
          strings={props.strings}
          title={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.ExperienceSurvey.title
          }
          active={
            (props.currentUser.demographics_done &&
              props.currentUser.skills_done) ||
            props.currentUser.experience_done
          }
          description={
            props.strings.Profile &&
            props.strings.Profile.ProfileSurveys.ExperienceSurvey.description
          }
          href="experience-survey"
          done={props.currentUser.experience_done}
          timestamp={props.currentUser.experience_timestamp}
          history={props.history}
          cardStyle={{ marginRight: "1.5%" }}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
