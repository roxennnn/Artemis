import React from "react";
import { useHistory } from "react-router-dom";

import Colors from "../../constants/Colors";
import ProgressBar from "../ProgressBar";

import "../../css/MatchingRow.css";

const MatchingRow = (props) => {
  const history = useHistory();

  const onClickMatchingHandler = () => {
    history.push({
      pathname: "/profile/occupation-detail",
      state: {
        oid: props.occupation.OID,
      },
    });
  };
  return (
    <div
      className="occupation-row"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "2%",

        // borderStyle: "solid",
        // borderWidth: 2
      }}
      onClick={onClickMatchingHandler}
    >
      <div className="occupation-title" style={{ width: "30%", marginRight: "1%", padding: "2%" }}>{props.occupation.title}</div>
      <ProgressBar
        // text={`${props.occupation.score}`}
        percentage={`${props.occupation.score}%`}
        color={Colors.primary}
        gradient={Colors.gradient}
        outsideStyle={{ width: "50%", height: 30 }}
      />
      <div style={{ width: "20%", textAlign: "center" }}>{props.occupation.score} %</div>
    </div>
  );
};

export default MatchingRow;
