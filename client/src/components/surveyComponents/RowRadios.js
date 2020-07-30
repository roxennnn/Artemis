import React, { useState } from "react";
import { Radio } from "@material-ui/core";

import "../../css/surveyComponents/Radiobuttons.css";

const RowRadios = (props) => {
  const [checked, setChecked] = useState(
    new Array(props.optionList.length).fill(false)
  );
  const checkHandler = (e) => {
    console.log(checked);
    const value = parseInt(e.target.value);
    console.log(value);
    let newChecked = new Array(props.optionList.length).fill(false);
    newChecked[value - 1] = true;
    setChecked(newChecked);
    console.log(checked);
    props.onChange(e);
  };

  return (
    <div id="container" style={props.style}>
      <div>{props.title}</div>
      <div id="row" style={{ display: "flex", flexDirection: "row" }}>
        <span style={{ display: "flex", alignItems: "center", width: "30%" }}>
          {props.label}
        </span>
        <div
          id="buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.optionList.map((value, index) => {
            return (
              <div
                style={{
                  width: `${(1 / props.optionList.length) * 100}%`,
                  marginLeft: "5%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {props.index === 0 ? (
                  <span>{value}</span>
                ) : (
                  <Radio
                    color="primary"
                    value={value}
                    id={props.index}
                    onChange={checkHandler}
                    checked={checked[index]}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RowRadios;
