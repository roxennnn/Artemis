import React from "react";

import SurveyCard from "./SurveyCard";
import profileBanner from "../../images/en/profileBanner.png";

// showValue = 0
const ProfileInfo = (props) => {
  return (
    <div>
      <img
        alt=""
        src={profileBanner}
        style={{
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
          // textAlign: "center",
          // borderStyle: "dotted",
          // borderColor: "red",
        }}
      >
        <SurveyCard
          title="Demographic Survey"
          active={true}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href="demographic-survey"
          done={props.currentUser.demographics_done}
          timestamp={props.currentUser.demographics_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "1.5%" }}
        />
        <SurveyCard
          title="Skills Survey"
          active={
            props.currentUser.demographics_done ||
            props.currentUser.experience_done
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          href="skills-survey"
          done={props.currentUser.skills_done}
          timestamp={props.currentUser.skills_timestamp}
          history={props.history}
          cardStyle={{ marginLeft: "3%", marginRight: "3%" }}
        />
        <SurveyCard
          title="Your Experience Survey"
          active={
            (props.currentUser.demographics_done &&
              props.currentUser.skills_done) ||
            props.currentUser.experience_done
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
