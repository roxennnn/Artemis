import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";

import Colors from "../../constants/Colors";

const styles = {
  redBox: {
    borderWidth: 4,
    borderColor: "red",
    // borderStyle: "solid",
  },
};

const SurveysCompleted = (props) => {
  return (
    <div style={{ ...styles.redBox, ...props.style }}>
      <div id="survey-progressbar">
        <h3>Surveys completed:</h3>
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "2%" }}>
          <ProgressBar
            text={`${props.surveysDone}/3`}
            percentage={`${(props.surveysDone / 3) * 100}%`}
            color={Colors.primary}
            gradient={Colors.gradient}
            textStyle={{ color: Colors.accent }}
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
      </div>
    </div>
  );
};

export default SurveysCompleted;