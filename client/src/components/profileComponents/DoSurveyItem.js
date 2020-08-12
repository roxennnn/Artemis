import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// images
import survey from "../../images/survey.png";
import survey_done from "../../images/survey_done.png";

// Fontawesome
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LanguageContext } from "../../languages/LanguageProvider";

const DoSurveyItem = (props) => {
  const history = useHistory();
  const { strings } = useContext(LanguageContext);

  const onClickHandler = () => {
    history.push(`profile/${props.href}`);
  };

  return (
    <div className="container" style={{ margin: 30 }}>
      <div
        className="row margin-children  delete-a-style"
        style={{ display: "flex", alignItems: "center", padding: "1%" }}
      >
        <div
          className={props.done ? "" : "hover-border"}
          onClick={props.done ? undefined : onClickHandler}
          // href={props.done ? undefined : `profile/${props.href}`}
          style={props.done ? { width: "30%", padding: 13 } : { width: "30%", cursor: "pointer" }}
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
        </div>

        {props.done && (
          <div
            // href={`profile/${props.href}`}
            onClick={onClickHandler}
            style={{ width: "3%", cursor: "pointer" }}
            title="Redo the survey"
          >
            <FontAwesomeIcon icon={faRedoAlt} color="#3b5998" />
          </div>
        )}
        {props.done && (
          <div style={{ marginLeft: "5%" }}>
            {strings.Profile && strings.Profile.ProfileSurveys.takenAt}{" "}
            {props.timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoSurveyItem;
