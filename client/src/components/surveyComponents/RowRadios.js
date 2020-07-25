import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

import "../../css/surveyComponents/Radiobuttons.css";

const styles = {
  sideLabels: { alignItems: "center", display: "flex" },
};

const RowRadios = (props) => {
  return (
    <div
      id="container"
      style={{
        ...props.style.container,
      }}
      class="to-hover"
    >
      <div>{props.title}</div>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup row value={props.value} onChange={props.onChange}>
          <span style={styles.sideLabels}>{props.left}</span>
          {props.optionList.map((value) => (
            <div>
              <FormControlLabel
                value={value}
                label={value}
                labelPlacement="top"
                control={<Radio color="primary" />}
                color="primary"
              />
            </div>
          ))}
          <span style={styles.sideLabels}>{props.right}</span>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RowRadios;
