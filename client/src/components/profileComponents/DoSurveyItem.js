import React from "react";

// images
import survey from "../../images/survey.png";
import survey_done from "../../images/survey_done.png";

// Fontawesome
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoSurveyItem = (props) => {
  return (
    <div className="container" style={{ margin: 30 }}>
      <div
        className="row margin-children  delete-a-style"
        style={{ display: "flex", alignItems: "center", padding: "1%" }}
      >
        <a
          className={props.done ? "" : "hover-border"}
          href={props.done ? undefined : `profile/${props.href}`}
          style={props.done ? { width: "30%", padding: 13 } : { width: "30%" }}
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
        </a>

        {props.done && (
          <a
            href={`profile/${props.href}`}
            style={{ width: "3%" }}
            title="Redo the survey"
          >
            <FontAwesomeIcon icon={faRedoAlt} color="#3b5998" />
          </a>
        )}
        {props.done && (
          <div style={{ marginLeft: "5%" }}>Taken at: {props.timestamp}</div>
        )}
      </div>
    </div>
  );
};

export default DoSurveyItem;