import React from "react";
import ProgressBar from "../ProgressBar";

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Colors from "../../constants/Colors";

const styles = {
  redBox: {
    // borderWidth: 4,
    // borderColor: "red",
    // borderStyle: "solid",rStyle: "solid",
  },
};

const SurveysCompleted = (props) => {
  return (
    <div style={{ ...styles.redBox, ...props.style }}>
      <div
        id="survey-progressbar"
        style={{ display: "flex", flexDirection: "row", alignItems: "center"}}
      >
        <h4 style={{ width: "20%" }}>Surveys completed:</h4>
        <div
          style={{
            marginLeft: "2%",
            marginRight: "2%",
            // marginTop: "2%",
            width: "50%",
            ...styles.redBox
          }}
        >
          <ProgressBar
            text={`${props.surveysDone}/3`}
            percentage={`${(props.surveysDone / 3) * 100}%`}
            color={Colors.primary}
            gradient={Colors.gradient}
            // outsideStyle={styles.redBox}
            insideStyle={
              props.surveysDone === 0
                ? {
                    width: "100%",
                    background: "white",
                    backgroundColor: "white",
                  }
                : {}
            }
            textStyle={
              props.surveysDone === 0
                ? {
                    color: Colors.primary,
                  }
                : {
                    color: "white",
                  }
            }
          />
        </div>
        {props.rightButton && (
          <div onClick={props.rightButton}>
            <FontAwesomeIcon className="surveys-arrow" icon={faArrowCircleRight} color="#3b5998" title="Go to surveys" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveysCompleted;
