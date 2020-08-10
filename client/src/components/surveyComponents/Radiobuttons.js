import React from "react";
import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

import "../../css/surveyComponents/Radiobuttons.css";

/***************************************************************************
 * PROPS:
 * - title: text displayed for the question
 * - optionList: list of values to use to make the checkboxes list (made of 2 properties: { value | label })
 * - onChange: onChange handler to be used when a checkbox is checked (or unchecked)
 * - value: corresponds to the answer
 * - style: to add some custom style { container }
 ***************************************************************************/

const Radiobuttons = (props) => {
  return (
    <div
      id="container"
      // class="to-hover"
      class={props.error ? "error-box" : "to-hover"}
      style={{
        ...props.style.container,
      }}
    >
      <div>{props.title}</div>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">{props.title}</FormLabel> */}
        <RadioGroup value={props.value} onChange={props.onChange}>
          {props.optionList.map((option) => (
            <FormControlLabel
              value={option.value}
              label={option.label}
              control={<Radio color="primary" />}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {props.error && (
        <div
          style={{
            color: "red",
            fontSize: 16,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default Radiobuttons;
